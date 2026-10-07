'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ArrowRight, Check, Package } from 'lucide-react'
import type { CatalogProduct } from '@/lib/products/types'
import { formatPrice } from '@/lib/products/constants'

interface ProductCardProps {
  product: CatalogProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const onSale =
    typeof product.compareAtPrice === 'number' &&
    product.compareAtPrice > product.price &&
    product.compareAtPrice > 0

  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border hover:border-blue-300 group overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
            <Package className="h-16 w-16 text-gray-400" />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white font-semibold border-0 hover:bg-blue-600">
            {product.categoryLabel}
          </Badge>
        </div>

        {/* Sale / Stock Badge */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          {onSale && (
            <Badge className="bg-red-500 text-white font-semibold border-0 hover:bg-red-500">
              Sale
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="bg-gray-700 text-white font-semibold border-0 hover:bg-gray-700">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="pb-2 pt-6">
        {product.brand && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
            {product.brand}
          </p>
        )}
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow pb-4">
        {product.shortDescription && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.shortDescription}</p>
        )}

        {product.features.length > 0 && (
          <ul className="space-y-1.5 mt-4 pt-4 border-t">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="pt-0 border-t mt-auto">
        <div className="flex justify-between items-center w-full pt-4">
          <div>
            <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
            {onSale && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>

          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 group/cta">
            <Link href={`/catalog/${product.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
