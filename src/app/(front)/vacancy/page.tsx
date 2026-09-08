import type { Metadata } from 'next'
import VacancyPage from './page-client'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Compulink team. Explore career opportunities in IT, software development, networking, and cybersecurity in Zimbabwe.',
}

export default function CareersPage() {
  return <VacancyPage />
}