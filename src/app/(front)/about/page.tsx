import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Compulink Systems - a leading IT company in Zimbabwe with over 30 years of experience providing top-notch technology solutions.',
}

'use client'
import MainLayout from '@/components/mainLayout'
import GsapReveal from '@/components/ui/gsap-reveal'

export default function About() {
  return (
    <div>
      <div className="p-4">
        <GsapReveal duration={1} distance={0}>
          <h1>About Us.</h1>
          <p>We are a leading IT company providing top-notch solutions.</p>
        </GsapReveal>
      </div>
    </div>
  )
}
