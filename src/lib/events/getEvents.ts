import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function getEvents() {
  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'events',
    limit: 100,
  })

  return result.docs
}
