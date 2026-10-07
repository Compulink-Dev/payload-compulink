import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowLeft, CheckCircle2, Home, PackageX, Quote } from 'lucide-react'
import { getProduct } from '@/lib/products/getProduct'
import { formatPrice } from '@/lib/products/constants'
import { ProductGallery } from '../_components/product-gallery'

export const dynamic = 'force-dynamic'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.title,
    description:
      product.shortDescription ||
      product.description?.slice(0, 160) ||
      `${product.title} — available at Compulink. View pricing, specifications and stock availability.`,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  const onSale =
    typeof product.compareAtPrice === 'number' &&
    product.compareAtPrice > product.price &&
    product.compareAtPrice > 0
  const savePercent = onSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0

  const galleryImages = [
    product.imageUrl,
    ...product.gallery.filter((image) => image !== product.imageUrl),
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-1.5">
              <Home className="h-4 w-4" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog">Catalog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <ProductGallery images={galleryImages} alt={product.title} />

        {/* Info */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-blue-600 text-white font-semibold border-0 hover:bg-blue-600">
              {product.categoryLabel}
            </Badge>
            {product.brand && (
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {product.brand}
              </span>
            )}
            <Badge
              variant={product.inStock ? 'outline' : 'secondary'}
              className={
                product.inStock
                  ? 'border-green-500 text-green-700 bg-green-50'
                  : 'bg-gray-100 text-gray-600'
              }
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
            {onSale && (
              <Badge className="bg-red-500 text-white font-semibold border-0 hover:bg-red-500">
                Save {savePercent}%
              </Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>

          {product.sku && (
            <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-blue-600">{formatPrice(product.price)}</span>
            {onSale && (
              <span className="text-xl text-gray-400 line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>

          {product.shortDescription && (
            <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/contact">
                <Quote className="mr-2 h-5 w-5" />
                Request a Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/catalog">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Catalog
              </Link>
            </Button>
          </div>

          <Separator className="mb-8" />

          {/* Description */}
          {product.description && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          )}

          {/* Features */}
          {product.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs */}
          {product.specs.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Specifications</h2>
              <div className="rounded-2xl border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="w-1/3 font-semibold text-gray-700">Spec</TableHead>
                      <TableHead className="font-semibold text-gray-700">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.specs.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-gray-600">{spec.label}</TableCell>
                        <TableCell className="text-gray-800">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {!product.description && product.features.length === 0 && product.specs.length === 0 && (
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <PackageX className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">
                Detailed information for this product is not available yet. Contact us for more
                details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
