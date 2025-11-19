'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'

// Dummy gallery images - replace with actual data from your backend
const galleryImages = [
  {
    id: 1,
    src: '/images/AI.jpg',
    alt: 'AI Solutions',
    title: 'AI Development',
    category: 'Software'
  },
  {
    id: 2,
    src: '/images/hardware.jpg',
    alt: 'Hardware Solutions',
    title: 'Hardware Infrastructure',
    category: 'Hardware'
  },
  {
    id: 3,
    src: '/images/software.webp',
    alt: 'Software Development',
    title: 'Custom Software',
    category: 'Software'
  },
  {
    id: 4,
    src: '/images/web.webp',
    alt: 'Web Solutions',
    title: 'Web Development',
    category: 'Software'
  },
  {
    id: 5,
    src: '/images/support.webp',
    alt: 'IT Support',
    title: 'Technical Support',
    category: 'Services'
  },
  {
    id: 6,
    src: '/images/comm2.jpg',
    alt: 'Communication',
    title: 'Communication Systems',
    category: 'Hardware'
  },
]

function GalleryCard() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))]
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className='mt-8'>
      {/* Category Filter */}
      <div className='flex flex-wrap gap-2 mb-8 justify-center'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredImages.map((image, index) => (
          <Card
            key={image.id}
            className='group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300'
            onClick={() => setSelectedImage(image)}
          >
            <div className='relative aspect-square overflow-hidden'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-300'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                  <h3 className='font-semibold text-lg'>{image.title}</h3>
                  <p className='text-sm text-gray-200'>{image.category}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className='max-w-4xl'>
          {selectedImage && (
            <div className='space-y-4'>
              <div className='relative aspect-video w-full'>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className='object-contain'
                  sizes='(max-width: 1200px) 100vw, 1200px'
                />
              </div>
              <div>
                <h2 className='text-2xl font-bold'>{selectedImage.title}</h2>
                <p className='text-gray-600'>{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GalleryCard
