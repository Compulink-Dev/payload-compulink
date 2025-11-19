import React from 'react'

import VideoTab from './_components/video-tabs'
import GalleryCard from './_components/gallery-card'
import Hero from '../_components/hero'

function Gallery() {
  return (
    <div>
      <Hero backImage="hardware.jpg" image="" />
      <div className="">
        <div className="p-8">
          <div className="">
            <VideoTab />
          </div>
          <div className="">
            <GalleryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
