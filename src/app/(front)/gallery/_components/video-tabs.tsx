'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import VideoCard from './video-card'
import { motion, AnimatePresence } from 'framer-motion'

function VideoTab() {
  const [video, setVideo] = useState('harare') // Default to first video
  const [loading, setLoading] = useState(false)

  const videos = [
    {
      id: 'harare',
      video: '/harare.mp4',
      title: 'Harare Agricultural Show',
      desc: 'Highlights from our exhibition at the Harare Agricultural Show showcasing our latest technology solutions for the agricultural sector.',
      category: 'Events',
    },
    {
      id: 'bulawayo',
      video: '/bulawayo.mp4',
      title: 'Bulawayo Business Expo',
      desc: "Compulink's participation in the Bulawayo Business Expo featuring networking solutions and digital transformation services.",
      category: 'Events',
    },
    {
      id: 'evolve',
      video: '/evolve.mp4',
      title: 'Evolve ICT Summit',
      desc: 'Our showcase at the Evolve ICT Summit demonstrating cutting-edge software development and cybersecurity solutions.',
      category: 'Conferences',
    },
    {
      id: 'zitf',
      video: 'https://nuop3dj38j.ufs.sh/f/AQUC7xhOxFC857sXzoOmH93y8UYIRutLVKnElqPwrpMhadTk',
      title: 'ZITF Compulink Mobile Finale',
      desc: 'The grand finale of our mobile technology showcase at the Zimbabwe International Trade Fair featuring innovative mobile solutions.',
      category: 'Trade Shows',
    },
  ]

  const categories = [...new Set(videos.map((v) => v.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredVideos =
    selectedCategory === 'All' ? videos : videos.filter((v) => v.category === selectedCategory)

  const handleVideoChange = (newVideoId: string) => {
    setLoading(true)
    setTimeout(() => {
      setVideo(newVideoId)
      setLoading(false)
    }, 300)
  }

  const selectedVideo = videos.find((v) => v.id === video)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedCategory === 'All' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('All')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          All Videos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Video Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filteredVideos.map((v) => (
          <Button
            key={v.id}
            variant={video === v.id ? 'default' : 'outline'}
            onClick={() => handleVideoChange(v.id)}
            className={`${
              video === v.id ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'hover:bg-blue-50'
            }`}
          >
            {v.title}
          </Button>
        ))}
      </div>

      {/* Video Player */}
      <AnimatePresence mode="wait">
        <motion.div
          key={video}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading video...</p>
              </div>
            </div>
          ) : selectedVideo ? (
            <VideoCard
              video={selectedVideo.video}
              title={selectedVideo.title}
              desc={selectedVideo.desc}
              category={selectedVideo.category}
            />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Please select a video to watch.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default VideoTab
