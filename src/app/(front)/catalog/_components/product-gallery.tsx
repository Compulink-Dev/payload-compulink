'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Package } from 'lucide-react'

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const mainImage = images[activeIndex]

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-gray-50 group">
        {!imageError && mainImage ? (
          <Image
            key={mainImage}
            src={mainImage}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="h-20 w-20 text-gray-300" />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => {
                setActiveIndex(index)
                setImageError(false)
              }}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                index === activeIndex ? 'border-blue-600' : 'border-transparent hover:border-blue-300'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${alt} ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
