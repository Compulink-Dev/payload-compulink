import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import ExcelJS from 'exceljs'
import {
  HEADER_ALIASES,
  TEMPLATE_HEADERS,
  cellToNumber,
  cellToString,
  isRowEmpty,
  normalizeHeader,
  parseProductRow,
  type HeaderKey,
  type RawRow,
} from '@/lib/products/excelImport'

export const runtime = 'nodejs'

interface RowResult {
  row: number
  status: 'created' | 'updated' | 'error'
  message: string
}

function buildTemplate(): Promise<ArrayBuffer> {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Products')

  worksheet.columns = TEMPLATE_HEADERS.map((header) => ({
    header,
    key: header,
    width: header === 'Description' || header === 'Features' || header === 'Specs' ? 40 : 18,
  }))

  worksheet.addRow({
    Title: 'Example Product',
    Price: 199.99,
    CompareAtPrice: 249.99,
    Category: 'Hardware',
    Brand: 'Example Brand',
    SKU: 'EX-001',
    ShortDescription: 'A short one-line summary shown on catalog cards.',
    Description: 'Full product description shown on the product detail page.',
    Features: 'Feature one, Feature two, Feature three',
    Specs: 'Weight=1.5kg;Warranty=1 year',
    InStock: 'Yes',
    Status: 'published',
  })

  const headerRow = worksheet.getRow(1)
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
  headerRow.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF2563EB' },
    }
  })

  return workbook.xlsx.writeBuffer() as Promise<ArrayBuffer>
}

export async function GET() {
  try {
    const buffer = await buildTemplate()
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="products-template.xlsx"',
      },
    })
  } catch (error: any) {
    console.error('Template generation failed:', error)
    return NextResponse.json({ error: 'Failed to generate template' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })

    const { user } = await payload.auth({ headers: request.headers })
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file')
    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: 'Please upload a non-empty .xlsx file' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.load(buffer)
    const worksheet = workbook.worksheets[0]
    if (!worksheet || worksheet.rowCount < 2) {
      return NextResponse.json(
        { error: 'The workbook is empty — it needs a header row and at least one data row' },
        { status: 400 },
      )
    }

    // Map header row → column indexes
    const columns = new Map<HeaderKey, number>()
    worksheet.getRow(1).eachCell((cell, columnNumber) => {
      const key = HEADER_ALIASES[normalizeHeader(cellToString(cell.value))]
      if (key && !columns.has(key)) columns.set(key, columnNumber)
    })

    if (!columns.has('title') || !columns.has('price')) {
      return NextResponse.json(
        { error: 'Missing required columns. The sheet must have "Title" and "Price" headers.' },
        { status: 400 },
      )
    }

    const results: RowResult[] = []

    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber)
      const text = (key: HeaderKey): string => {
        const column = columns.get(key)
        return column ? cellToString(row.getCell(column).value) : ''
      }
      const number = (key: HeaderKey): number | null => {
        const column = columns.get(key)
        return column ? cellToNumber(row.getCell(column).value) : null
      }

      const raw: RawRow = {
        title: text('title'),
        priceText: text('price'),
        price: number('price'),
        compareAtPriceText: text('compareAtPrice'),
        compareAtPrice: number('compareAtPrice'),
        category: text('category'),
        brand: text('brand'),
        sku: text('sku'),
        shortDescription: text('shortDescription'),
        description: text('description'),
        features: text('features'),
        specs: text('specs'),
        inStock: text('inStock'),
        status: text('status'),
      }

      if (isRowEmpty(raw)) continue

      try {
        const parsed = parseProductRow(raw)

        if (!parsed.ok) {
          results.push({ row: rowNumber, status: 'error', message: parsed.errors.join('; ') })
          continue
        }

        const sku = raw.sku || undefined
        let action: 'created' | 'updated' = 'created'

        if (sku) {
          const existing = await payload.find({
            collection: 'products',
            where: { sku: { equals: sku } },
            limit: 1,
            depth: 0,
          })

          if (existing.docs.length > 0) {
            await payload.update({
              collection: 'products',
              id: existing.docs[0].id,
              data: parsed.data,
            })
            action = 'updated'
          }
        }

        if (action === 'created') {
          await payload.create({
            collection: 'products',
            data: parsed.data,
          })
        }

        results.push({
          row: rowNumber,
          status: action,
          message:
            action === 'created'
              ? `Created "${raw.title}"`
              : `Updated "${raw.title}" (SKU: ${sku})`,
        })
      } catch (error: any) {
        const message =
          error?.data?.errors?.map((e: any) => e.message).join('; ') ||
          error?.message ||
          'Import failed'
        results.push({ row: rowNumber, status: 'error', message })
      }
    }

    const summary = {
      created: results.filter((r) => r.status === 'created').length,
      updated: results.filter((r) => r.status === 'updated').length,
      errors: results.filter((r) => r.status === 'error').length,
      total: results.length,
    }

    return NextResponse.json({ summary, results })
  } catch (error: any) {
    console.error('Product import failed:', error)
    return NextResponse.json(
      { error: 'Failed to import products', details: error?.message || String(error) },
      { status: 500 },
    )
  }
}
