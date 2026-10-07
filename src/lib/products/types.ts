export interface ProductSpec {
  label: string
  value: string
}

export interface CatalogProduct {
  id: string
  title: string
  slug?: string
  price: number
  compareAtPrice?: number
  category: string
  categoryLabel: string
  brand?: string
  sku?: string
  imageUrl: string
  gallery: string[]
  shortDescription?: string
  description?: string
  features: string[]
  specs: ProductSpec[]
  inStock: boolean
  status: string
  createdAt: string
}
