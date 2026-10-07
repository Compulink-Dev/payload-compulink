import { CATEGORY_FALLBACK_IMAGES, DEFAULT_PRODUCT_IMAGE, categoryLabel } from './constants'
import type { CatalogProduct, ProductSpec } from './types'

function resolveImageUrl(media: unknown, category: string): string {
  if (media && typeof media === 'object' && 'url' in media) {
    const url = (media as { url?: string }).url
    if (url) return url
  }
  if (typeof media === 'string' && media.startsWith('/')) return media
  return CATEGORY_FALLBACK_IMAGES[category] ?? DEFAULT_PRODUCT_IMAGE
}

function resolveGallery(gallery: unknown): string[] {
  if (!Array.isArray(gallery)) return []
  return gallery
    .map((entry) => {
      const media = entry && typeof entry === 'object' && 'image' in entry ? (entry as { image?: unknown }).image : entry
      if (media && typeof media === 'object' && 'url' in media) {
        return (media as { url?: string }).url ?? null
      }
      return typeof media === 'string' && media.startsWith('/') ? media : null
    })
    .filter((url): url is string => !!url)
}

function resolveArray(items: unknown, key: string): string[] {
  if (!Array.isArray(items)) return []
  return items
    .map((item) => {
      if (typeof item === 'string') return item
      if (item && typeof item === 'object' && key in item) {
        const value = (item as Record<string, unknown>)[key]
        return typeof value === 'string' ? value : null
      }
      return null
    })
    .filter((value): value is string => !!value)
}

function resolveSpecs(specs: unknown): ProductSpec[] {
  if (!Array.isArray(specs)) return []
  return specs
    .map((spec) => {
      if (!spec || typeof spec !== 'object') return null
      const { label, value } = spec as { label?: unknown; value?: unknown }
      if (typeof label === 'string' && typeof value === 'string' && label && value) {
        return { label, value }
      }
      return null
    })
    .filter((spec): spec is ProductSpec => !!spec)
}

export function mapProduct(doc: any): CatalogProduct {
  const category = typeof doc.category === 'string' ? doc.category : 'hardware'

  return {
    id: String(doc.id ?? doc._id ?? ''),
    title: doc.title ?? 'Untitled Product',
    slug: typeof doc.slug === 'string' ? doc.slug : undefined,
    price: typeof doc.price === 'number' ? doc.price : 0,
    compareAtPrice: typeof doc.compareAtPrice === 'number' ? doc.compareAtPrice : undefined,
    category,
    categoryLabel: categoryLabel(category),
    brand: typeof doc.brand === 'string' ? doc.brand : undefined,
    sku: typeof doc.sku === 'string' ? doc.sku : undefined,
    imageUrl: resolveImageUrl(doc.image, category),
    gallery: resolveGallery(doc.gallery),
    shortDescription: typeof doc.shortDescription === 'string' ? doc.shortDescription : undefined,
    description: typeof doc.description === 'string' ? doc.description : undefined,
    features: resolveArray(doc.features, 'feature'),
    specs: resolveSpecs(doc.specs),
    inStock: doc.inStock !== false,
    status: typeof doc.status === 'string' ? doc.status : 'published',
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : new Date().toISOString(),
  }
}
