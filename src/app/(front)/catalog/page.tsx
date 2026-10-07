import type { Metadata } from 'next'
import getProducts from '@/lib/products/getProducts'
import CatalogPageClient from './page-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Product Catalog',
  description:
    'Browse the Compulink product catalog — hardware, software, networking, cloud and security products with pricing, specs and stock availability.',
}

export default async function CatalogPage() {
  let products: Awaited<ReturnType<typeof getProducts>> = []
  let error: string | null = null

  try {
    products = await getProducts()
  } catch (err) {
    console.error('Failed to load catalog products:', err)
    error = err instanceof Error ? err.message : 'Failed to load products. Please try again later.'
  }

  return <CatalogPageClient products={products} error={error} />
}
