import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { mapProduct } from './mapProduct'
import type { CatalogProduct } from './types'

export default async function getProducts(): Promise<CatalogProduct[]> {
  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'products',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-createdAt',
    limit: 100,
    depth: 2, // Populate the image relation
  })

  return result.docs.map(mapProduct)
}
