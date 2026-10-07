import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { mapProduct } from './mapProduct'
import type { CatalogProduct } from './types'

export async function getProduct(id: string): Promise<CatalogProduct | null> {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const doc = await payload.findByID({
      collection: 'products',
      id,
      depth: 2,
    })

    if (!doc || doc.status !== 'published') return null
    return mapProduct(doc)
  } catch {
    // findByID only accepts valid IDs — fall back to a slug lookup
  }

  try {
    const result = await payload.find({
      collection: 'products',
      where: {
        slug: {
          equals: id,
        },
      },
      depth: 2,
      limit: 1,
    })

    const doc = result.docs[0]
    if (!doc || doc.status !== 'published') return null
    return mapProduct(doc)
  } catch {
    return null
  }
}
