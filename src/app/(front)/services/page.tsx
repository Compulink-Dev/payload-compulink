import type { Metadata } from 'next'
import Services from './page-client'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive IT services from Compulink: cloud computing, cybersecurity, software development, networking, hardware solutions, and IT consulting in Zimbabwe.',
}

export default function ServicesPage() {
  return <Services />
}