'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import VideoCard from './video-card'
import gsap from 'gsap'

function VideoTab() {
  const [video, setVideo] = useState('harare')
  const [loading, setLoading] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)

  const videos = [
    {
      id: 'harare',
      video: '/harare.mp4',
      title: 'Compulink 31st Annivewsary',
      desc: 'Compulink 31st Annivewsary.',
      category: 'Events',
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

  useLayoutEffect(() => {
    if (loading || !playerRef.current) return

    const el = playerRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power3.out' },
      )
    }, el)

    return () => ctx.revert()
  }, [video, loading])

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
      <div ref={playerRef}>
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
      </div>
    </div>
  )
}

export default VideoTab
