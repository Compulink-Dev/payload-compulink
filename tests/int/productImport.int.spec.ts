import { describe, expect, it } from 'vitest'
import {
  cellToNumber,
  cellToString,
  isRowEmpty,
  normalizeHeader,
  parseBoolean,
  parseFeatures,
  parseProductRow,
  parseSpecs,
  resolveCategory,
  type RawRow,
} from '@/lib/products/excelImport'

function makeRow(overrides: Partial<RawRow> = {}): RawRow {
  return {
    title: 'Dell OptiPlex Desktop',
    priceText: '849.99',
    price: 849.99,
    compareAtPriceText: '',
    compareAtPrice: null,
    category: 'Hardware',
    brand: 'Dell',
    sku: 'HW-DEL-001',
    shortDescription: 'Business desktop',
    description: 'A reliable business desktop.',
    features: 'Fast SSD, 16GB RAM',
    specs: 'Weight=5kg;Warranty=3 years',
    inStock: 'Yes',
    status: 'published',
    ...overrides,
  }
}

describe('normalizeHeader', () => {
  it('lowercases and strips non-alphanumerics', () => {
    expect(normalizeHeader(' Compare At Price ')).toBe('compareatprice')
    expect(normalizeHeader('Short Description')).toBe('shortdescription')
  })
})

describe('cellToString', () => {
  it('handles strings, numbers, booleans and dates', () => {
    expect(cellToString(' hello ')).toBe('hello')
    expect(cellToString(42)).toBe('42')
    expect(cellToString(true)).toBe('true')
    expect(cellToString(null)).toBe('')
    expect(cellToString(undefined)).toBe('')
  })

  it('unwraps formula results and rich text', () => {
    expect(cellToString({ formula: 'A1+1', result: 10 })).toBe('10')
    expect(cellToString({ richText: [{ text: 'Hello ' }, { text: 'World' }] })).toBe('Hello World')
    expect(cellToString({ hyperlink: 'https://example.com', text: 'Example' })).toBe('Example')
  })
})

describe('cellToNumber', () => {
  it('parses currency-formatted values', () => {
    expect(cellToNumber('$1,299.50')).toBe(1299.5)
    expect(cellToNumber(99)).toBe(99)
    expect(cellToNumber(' 250 ')).toBe(250)
  })

  it('returns null for empty or invalid values', () => {
    expect(cellToNumber('')).toBeNull()
    expect(cellToNumber('not a number')).toBeNull()
    expect(cellToNumber(null)).toBeNull()
  })
})

describe('resolveCategory', () => {
  it('matches labels case-insensitively', () => {
    expect(resolveCategory('hardware')).toBe('hardware')
    expect(resolveCategory('Hardware')).toBe('hardware')
    expect(resolveCategory('Cloud & Servers')).toBe('cloud-servers')
    expect(resolveCategory('CLOUD-SERVERS')).toBe('cloud-servers')
  })

  it('returns null for unknown categories', () => {
    expect(resolveCategory('Petrified Wood')).toBeNull()
    expect(resolveCategory('')).toBeNull()
  })
})

describe('parseBoolean', () => {
  it('accepts common truthy/falsy spellings', () => {
    expect(parseBoolean('Yes', false)).toBe(true)
    expect(parseBoolean('NO', true)).toBe(false)
    expect(parseBoolean('1', false)).toBe(true)
    expect(parseBoolean('0', true)).toBe(false)
    expect(parseBoolean('', true)).toBe(true)
  })

  it('rejects unknown values', () => {
    const result = parseBoolean('maybe', true)
    expect(typeof result).toBe('object')
    expect((result as { error: string }).error).toContain('Invalid InStock')
  })
})

describe('parseFeatures / parseSpecs', () => {
  it('splits features on commas and newlines', () => {
    expect(parseFeatures('Fast SSD, 16GB RAM\nWi-Fi')).toEqual([
      { feature: 'Fast SSD' },
      { feature: '16GB RAM' },
      { feature: 'Wi-Fi' },
    ])
    expect(parseFeatures('')).toEqual([])
  })

  it('splits specs on semicolons using the first equals sign', () => {
    expect(parseSpecs('Weight=5kg;Warranty=3 years')).toEqual([
      { label: 'Weight', value: '5kg' },
      { label: 'Warranty', value: '3 years' },
    ])
    expect(parseSpecs('Bad pair without separator;Height=30cm')).toEqual([
      { label: 'Height', value: '30cm' },
    ])
    expect(parseSpecs('')).toEqual([])
  })
})

describe('isRowEmpty', () => {
  it('detects fully empty rows', () => {
    expect(isRowEmpty(makeRow({ title: '', priceText: '', category: '', sku: '', description: '', brand: '' }))).toBe(true)
    expect(isRowEmpty(makeRow())).toBe(false)
  })
})

describe('parseProductRow', () => {
  it('builds product data from a valid row', () => {
    const result = parseProductRow(makeRow())
    expect(result.ok).toBe(true)
    if (!result.ok) return

    expect(result.data.title).toBe('Dell OptiPlex Desktop')
    expect(result.data.price).toBe(849.99)
    expect(result.data.category).toBe('hardware')
    expect(result.data.brand).toBe('Dell')
    expect(result.data.sku).toBe('HW-DEL-001')
    expect(result.data.status).toBe('published')
    expect(result.data.inStock).toBe(true)
    expect(result.data.compareAtPrice).toBeUndefined()
    expect(result.data.features).toEqual([{ feature: 'Fast SSD' }, { feature: '16GB RAM' }])
    expect(result.data.specs).toEqual([
      { label: 'Weight', value: '5kg' },
      { label: 'Warranty', value: '3 years' },
    ])
  })

  it('includes compareAtPrice only when positive', () => {
    const result = parseProductRow(makeRow({ compareAtPriceText: '999', compareAtPrice: 999 }))
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.data.compareAtPrice).toBe(999)
  })

  it('defaults status to published and honours draft', () => {
    const published = parseProductRow(makeRow({ status: '' }))
    expect(published.ok && published.data.status).toBe('published')

    const draft = parseProductRow(makeRow({ status: 'DRAFT' }))
    expect(draft.ok && draft.data.status).toBe('draft')
  })

  it('collects every validation error in a bad row', () => {
    const result = parseProductRow(
      makeRow({
        title: '',
        priceText: 'free',
        price: null,
        category: 'Pet Supplies',
        status: 'archived',
        inStock: 'maybe',
      }),
    )

    expect(result.ok).toBe(false)
    if (result.ok) return
    expect(result.errors).toHaveLength(5)
    expect(result.errors[0]).toContain('Title is required')
    expect(result.errors.some((e) => e.includes('Price must be a number'))).toBe(true)
    expect(result.errors.some((e) => e.includes('Unknown category "Pet Supplies"'))).toBe(true)
    expect(result.errors.some((e) => e.includes('Invalid InStock'))).toBe(true)
    expect(result.errors.some((e) => e.includes('Status must be'))).toBe(true)
  })

  it('requires a category', () => {
    const result = parseProductRow(makeRow({ category: '' }))
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.errors).toEqual(['Category is required'])
  })

  it('makes sku and brand optional', () => {
    const result = parseProductRow(makeRow({ sku: '', brand: '' }))
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.sku).toBeUndefined()
      expect(result.data.brand).toBeUndefined()
    }
  })
})
