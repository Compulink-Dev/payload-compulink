import React from 'react'
import { Header } from './_components/header'
import Footer from '@/app/(front)/_components/bottom'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  description: 'Compulink',
  title: 'Compulink',
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
