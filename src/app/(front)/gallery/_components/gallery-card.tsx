'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/AI.jpg',
    alt: 'AI Solutions',
    title: 'AI Development',
    category: 'Software',
    description: 'Our artificial intelligence solutions transforming business operations',
  },
  {
    id: 2,
    src: '/images/hardware.jpg',
    alt: 'Hardware Solutions',
    title: 'Hardware Infrastructure',
    category: 'Hardware',
    description: 'Enterprise-grade hardware setup for optimal performance',
  },
  {
    id: 3,
    src: '/images/software.webp',
    alt: 'Software Development',
    title: 'Custom Software',
    category: 'Software',
    description: 'Tailored software solutions for unique business needs',
  },
  {
    id: 4,
    src: '/images/web.webp',
    alt: 'Web Solutions',
    title: 'Web Development',
    category: 'Software',
    description: 'Modern web applications with cutting-edge technology',
  },
  {
    id: 5,
    src: '/images/support.webp',
    alt: 'IT Support',
    title: 'Technical Support',
    category: 'Services',
    description: '24/7 technical support and maintenance services',
  },
  {
    id: 6,
    src: '/images/comm2.jpg',
    alt: 'Communication',
    title: 'Communication Systems',
    category: 'Hardware',
    description: 'Advanced communication infrastructure solutions',
  },
  {
    id: 7,
    src: '/images/cloud-services.jpg',
    alt: 'Cloud Services',
    title: 'Cloud Infrastructure',
    category: 'Services',
    description: 'Scalable cloud solutions for modern businesses',
  },
  {
    id: 8,
    src: '/images/networking-services.jpg',
    alt: 'Networking',
    title: 'Network Solutions',
    category: 'Hardware',
    description: 'Enterprise networking and connectivity solutions',
  },
  {
    id: 9,
    src: '/images/cybersecurity-services.jpg',
    alt: 'Cyber Security',
    title: 'Security Solutions',
    category: 'Services',
    description: 'Comprehensive cybersecurity protection',
  },
]

function GalleryCard() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))]

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="mt-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`${
              selectedCategory === category
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'hover:bg-blue-50'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-blue-200 font-medium mb-1">{image.category}</p>
                      <p className="text-gray-200 text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden">
                <div className="relative aspect-square lg:aspect-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                    <Button variant="outline">View Similar</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default GalleryCard
