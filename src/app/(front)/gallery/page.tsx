'use client'
import React from 'react'
import VideoTab from './_components/video-tabs'
import GalleryCard from './_components/gallery-card'
import Hero from '../_components/hero'
import { motion } from 'framer-motion'

function Gallery() {
  return (
    <div>
      <Hero
        backImage="hardware.jpg"
        image=""
        title="Our Gallery"
        subtitle="Explore Our Work, Events, and Innovations"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Compulink <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our journey through photos and videos showcasing our projects, events, and
            technological innovations over the past 30 years.
          </p>
        </motion.div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch highlights from our major events and exhibitions
            </p>
          </div>
          <VideoTab />
        </div>

        {/* Photo Gallery */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of project photos and event moments
            </p>
          </div>
          <GalleryCard />
        </div>
      </div>
    </div>
  )
}

export default Gallery
