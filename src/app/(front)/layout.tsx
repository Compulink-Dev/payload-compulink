import React from 'react'
import Navbar from './_components/navbar'
import Footer from '@/app/(front)/_components/bottom'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  description: 'Compulink - Building Digital Products & Brands',
  title: 'Compulink | IT Solutions & Services',
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
