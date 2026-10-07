'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Check, Package } from 'lucide-react'
import type { CatalogProduct } from '@/lib/products/types'
import { formatPrice } from '@/lib/products/constants'

interface ProductRowProps {
  product: CatalogProduct
}

export function ProductRow({ product }: ProductRowProps) {
  const [imageError, setImageError] = useState(false)
  const onSale =
    typeof product.compareAtPrice === 'number' &&
    product.compareAtPrice > product.price &&
    product.compareAtPrice > 0

  return (
    <Card className="flex flex-col sm:flex-row overflow-hidden hover:shadow-xl transition-all duration-300 border hover:border-blue-300 group">
      {/* Image */}
      <div className="relative w-full sm:w-56 h-48 sm:h-auto sm:min-h-[180px] shrink-0 overflow-hidden">
        {!imageError ? (
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 224px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
            <Package className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge className="bg-blue-600 text-white font-semibold border-0 hover:bg-blue-600">
            {product.categoryLabel}
          </Badge>
          {product.brand && <span className="text-xs font-semibold uppercase text-gray-500">{product.brand}</span>}
          {!product.inStock && (
            <Badge className="bg-gray-700 text-white font-semibold border-0 hover:bg-gray-700">
              Out of Stock
            </Badge>
          )}
        </div>

        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.title}
        </h3>

        {product.shortDescription && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.shortDescription}</p>
        )}

        {product.features.length > 0 && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-1.5 text-xs text-gray-600">
                <Check className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price + CTA */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 sm:w-52 shrink-0 p-5 sm:border-l border-t sm:border-t-0 bg-gray-50/50">
        <div className="sm:text-right">
          <div className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</div>
          {onSale && (
            <div className="text-sm text-gray-400 line-through">
              {formatPrice(product.compareAtPrice!)}
            </div>
          )}
        </div>

        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 group/cta whitespace-nowrap">
          <Link href={`/catalog/${product.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}
