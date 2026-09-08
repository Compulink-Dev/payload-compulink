import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from './_components/navbar'
import Footer from '@/app/(front)/_components/bottom'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import ChatbotWidget from '@/components/chatbot-widget'
import JsonLd from '@/components/json-ld'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'IT solutions Zimbabwe',
    'cloud computing Zimbabwe',
    'cybersecurity Harare',
    'software development Zimbabwe',
    'networking services Zimbabwe',
    'hardware solutions Zimbabwe',
    'IT consulting Zimbabwe',
    'managed IT services',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    description: SITE_DESCRIPTION,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

function Layout({ children }: { children: React.ReactNode }) {
  const googleVerification = (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '').replace(
    /^google-site-verification=/,
    '',
  )
  return (
    <html lang="en">
      <head>
        {googleVerification ? (
          <meta
            name="google-site-verification"
            content={googleVerification}
          />
        ) : null}
      </head>
      <body>
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <ChatbotWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default Layout
