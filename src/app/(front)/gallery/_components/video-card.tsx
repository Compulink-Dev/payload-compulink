import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, Calendar, Tag } from 'lucide-react'

function VideoCard({ title, desc, video, category }: any) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={video}
              controls={true}
              poster="/images/video-poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              <Play size={14} />
              <span>Now Playing</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <CardHeader className="p-0 pb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Tag size={14} />
              <span>{category}</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>Recent Event</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default VideoCard
