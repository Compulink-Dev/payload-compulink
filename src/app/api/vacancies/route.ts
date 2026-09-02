import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('🔍 API: Connecting to database via Payload...')
    const payload = await getPayload({
      config: configPromise,
    })

    console.log('🔍 API: Fetching vacancies...')
    const result = await payload.find({
      collection: 'vacancies',
      sort: '-createdAt',
      limit: 100,
      depth: 1,
    })

    const vacancies = result.docs

    console.log('🔍 API: Found vacancies:', vacancies.length)
    console.log('🔍 API: First vacancy:', vacancies[0])

    const formattedVacancies = vacancies.map((vacancy: any) => {
      const media = (vacancy.imageUrl as any) || null
      const imageUrl =
        media && typeof media === 'object' && media.url ? media.url : '/images/default-vacancy.jpg'

      return {
        _id: vacancy.id,
        position: vacancy.position || 'Unknown Position',
        status: vacancy.status || 'open',
        duration: vacancy.duration || 'Full-time',
        imageUrl,
        description: vacancy.description || '',
        qualifications: Array.isArray(vacancy.qualifications)
          ? vacancy.qualifications.map((q: any) => (typeof q === 'string' ? q : q?.qualification)).filter(Boolean)
          : [],
        skills: Array.isArray(vacancy.skills)
          ? vacancy.skills.map((s: any) => (typeof s === 'string' ? s : s?.skill)).filter(Boolean)
          : [],
        experience: vacancy.experience || '',
        location: vacancy.location || 'Remote',
        salary: vacancy.salary || 'Competitive',
        createdAt: vacancy.createdAt ? new Date(vacancy.createdAt).toISOString() : new Date().toISOString(),
      }
    })

    console.log('🔍 API: Sending response with', formattedVacancies.length, 'vacancies')

    return NextResponse.json(formattedVacancies)
  } catch (error: any) {
    console.error('❌ API Error :', error)
    return NextResponse.json(
      { error: 'Failed to fetch vacancies', details: error?.message || String(error) },
      { status: 500 },
    )
  }
}
