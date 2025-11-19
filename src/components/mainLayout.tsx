import Footer from '@/app/(front)/_components/bottom'
import Hero from '@/app/(front)/_components/hero'

import Navbar from '@/app/(front)/_components/navbar'
import React from 'react'

function MainLayout({
  children,
  backImage,
  image,
}: {
  children: React.ReactNode
  backImage: any
  image: any
}) {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero backImage={backImage} image={image} />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
