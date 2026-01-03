//@ts-nocheck
import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import VacancyModel from '@/lib/models/VacancyModel'

export async function GET() {
  try {
    console.log('🔍 API: Connecting to database...')
    await dbConnect()

    console.log('🔍 API: Fetching vacancies...')
    const vacancies = await VacancyModel.find({}).sort({ createdAt: -1 }).lean()

    console.log('🔍 API: Found vacancies:', vacancies.length)
    console.log('🔍 API: First vacancy:', vacancies[0])

    // Convert _id to string
    const formattedVacancies = vacancies.map((vacancy) => ({
      ...vacancy,
      _id: vacancy._id.toString(),
      // Ensure all required fields exist
      imageUrl: vacancy.imageUrl || '/images/default-vacancy.jpg',
      description: vacancy.description || '',
      qualifications: vacancy.qualifications || [],
      skills: vacancy.skills || [],
      experience: vacancy.experience || '',
      category: vacancy.category || 'Uncategorized',
      location: vacancy.location || 'Remote',
      salary: vacancy.salary || 'Competitive',
      createdAt: vacancy.createdAt
        ? new Date(vacancy.createdAt).toISOString()
        : new Date().toISOString(),
    }))

    console.log('🔍 API: Sending response with', formattedVacancies.length, 'vacancies')

    return NextResponse.json(formattedVacancies)
  } catch (error) {
    console.error('❌ API Error :', error)
    return NextResponse.json(
      { error: 'Failed to fetch vacancies', details: error.message },
      { status: 500 },
    )
  }
}
