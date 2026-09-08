import type { Metadata } from 'next'
import Contact from './page-client'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Compulink Systems. Contact us for IT solutions, support, and consultations in Zimbabwe.',
}

export default function ContactPage() {
  return <Contact />
}