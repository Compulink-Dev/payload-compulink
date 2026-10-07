import { PRODUCT_CATEGORIES } from './constants'
import type { Product } from '@/payload-types'

export const TEMPLATE_HEADERS = [
  'Title',
  'Price',
  'CompareAtPrice',
  'Category',
  'Brand',
  'SKU',
  'ShortDescription',
  'Description',
  'Features',
  'Specs',
  'InStock',
  'Status',
] as const

export type HeaderKey =
  | 'title'
  | 'price'
  | 'compareAtPrice'
  | 'category'
  | 'brand'
  | 'sku'
  | 'shortDescription'
  | 'description'
  | 'features'
  | 'specs'
  | 'inStock'
  | 'status'

export const HEADER_ALIASES: Record<string, HeaderKey> = {
  title: 'title',
  name: 'title',
  productname: 'title',
  price: 'price',
  unitprice: 'price',
  compareatprice: 'compareAtPrice',
  oldprice: 'compareAtPrice',
  rrp: 'compareAtPrice',
  category: 'category',
  brand: 'brand',
  manufacturer: 'brand',
  sku: 'sku',
  shortdescription: 'shortDescription',
  summary: 'shortDescription',
  description: 'description',
  features: 'features',
  keyfeatures: 'features',
  specs: 'specs',
  specifications: 'specs',
  instock: 'inStock',
  stock: 'inStock',
  status: 'status',
}

export type CreateProductData = Pick<Product, 'title' | 'price' | 'category' | 'status'> &
  Omit<Partial<Product>, 'title' | 'price' | 'category' | 'status'>

export interface RawRow {
  title: string
  priceText: string
  price: number | null
  compareAtPriceText: string
  compareAtPrice: number | null
  category: string
  brand: string
  sku: string
  shortDescription: string
  description: string
  features: string
  specs: string
  inStock: string
  status: string
}

export type RowParseResult =
  | { ok: true; data: CreateProductData }
  | { ok: false; errors: string[] }

export function normalizeHeader(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
}

export function cellToString(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (value instanceof Date) return value.toISOString()
  if (typeof value === 'object') {
    const v = value as Record<string, any>
    if ('result' in v) return cellToString(v.result)
    if ('richText' in v && Array.isArray(v.richText))
      return v.richText.map((t: any) => t.text ?? '').join('')
    if ('text' in v) return String(v.text)
    if ('hyperlink' in v) return String(v.hyperlink)
  }
  return ''
}

export function cellToNumber(value: unknown): number | null {
  const text = cellToString(value).replace(/[$,\s]/g, '')
  if (!text) return null
  const parsed = Number(text)
  return Number.isFinite(parsed) ? parsed : null
}

export function parseBoolean(value: string, fallback: boolean): boolean | { error: string } {
  if (!value) return fallback
  const normalized = value.toLowerCase()
  if (['yes', 'true', '1', 'y', 'in stock', 'available'].includes(normalized)) return true
  if (['no', 'false', '0', 'n', 'out of stock', 'unavailable'].includes(normalized)) return false
  return { error: `Invalid InStock value "${value}" (use Yes/No)` }
}

export function resolveCategory(value: string): string | null {
  if (!value) return null
  const normalized = value.toLowerCase().trim()
  const match = PRODUCT_CATEGORIES.find(
    (category) => category.value === normalized || category.label.toLowerCase() === normalized,
  )
  return match ? match.value : null
}

export function parseFeatures(value: string): { feature: string }[] {
  return value
    .split(/[,\n]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((feature) => ({ feature }))
}

export function parseSpecs(value: string): { label: string; value: string }[] {
  return value
    .split(/[;\n]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((pair) => {
      const separatorIndex = pair.indexOf('=')
      if (separatorIndex === -1) return null
      const label = pair.slice(0, separatorIndex).trim()
      const specValue = pair.slice(separatorIndex + 1).trim()
      if (!label || !specValue) return null
      return { label, value: specValue }
    })
    .filter((spec): spec is { label: string; value: string } => !!spec)
}

export function isRowEmpty(raw: RawRow): boolean {
  return (
    !raw.title && !raw.priceText && !raw.category && !raw.sku && !raw.description && !raw.brand
  )
}

export function parseProductRow(raw: RawRow): RowParseResult {
  const errors: string[] = []

  if (!raw.title) errors.push('Title is required')

  if (raw.price === null || raw.price < 0) errors.push('Price must be a number ≥ 0')

  if (!raw.category) {
    errors.push('Category is required')
  }
  const category = raw.category ? resolveCategory(raw.category) : null
  if (raw.category && !category) {
    errors.push(
      `Unknown category "${raw.category}" (valid: ${PRODUCT_CATEGORIES.map((c) => c.label).join(', ')})`,
    )
  }

  if (raw.compareAtPriceText && (raw.compareAtPrice === null || raw.compareAtPrice < 0)) {
    errors.push('CompareAtPrice must be a number ≥ 0')
  }

  const inStock = parseBoolean(raw.inStock, true)
  if (typeof inStock === 'object') errors.push(inStock.error)

  const status = raw.status.toLowerCase()
  if (status && status !== 'published' && status !== 'draft') {
    errors.push('Status must be "published" or "draft"')
  }

  if (errors.length > 0) {
    return { ok: false, errors }
  }

  const data: CreateProductData = {
    title: raw.title,
    price: raw.price!,
    category: category! as Product['category'],
    inStock: typeof inStock === 'boolean' ? inStock : true,
    status: status === 'draft' ? 'draft' : 'published',
  }

  if (raw.compareAtPrice !== null && raw.compareAtPrice > 0) {
    data.compareAtPrice = raw.compareAtPrice
  }
  if (raw.sku) data.sku = raw.sku
  if (raw.brand) data.brand = raw.brand
  if (raw.shortDescription) data.shortDescription = raw.shortDescription
  if (raw.description) data.description = raw.description

  const features = parseFeatures(raw.features)
  if (features.length > 0) data.features = features

  const specs = parseSpecs(raw.specs)
  if (specs.length > 0) data.specs = specs

  return { ok: true, data }
}
