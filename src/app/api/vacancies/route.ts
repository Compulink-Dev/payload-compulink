import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import VacancyModel from '@/lib/models/VacancyModel'

export async function GET() {
  try {
    await dbConnect()
    const vacancies = await VacancyModel.find({}).sort({ createdAt: -1 }).lean()
    
    return NextResponse.json(vacancies)
  } catch (error) {
    console.error('Error fetching vacancies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vacancies' },
      { status: 500 }
    )
  }
}
