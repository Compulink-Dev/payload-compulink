'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Hero from '../_components/hero'
import { ProductCard } from './_components/product-card'
import { ProductRow } from './_components/product-row'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GsapReveal from '@/components/ui/gsap-reveal'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group'
import { ArrowUpDown, Filter, LayoutGrid, List, PackageSearch, Search } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PRODUCT_CATEGORIES } from '@/lib/products/constants'
import type { CatalogProduct } from '@/lib/products/types'

gsap.registerPlugin(ScrollTrigger)

type SortOption = 'newest' | 'price-asc' | 'price-desc'
type ViewMode = 'grid' | 'list'

const PAGE_SIZE = 12

function getPageItems(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  const pages = [
    1,
    total,
    current - 1,
    current,
    current + 1,
  ].filter((page) => page >= 1 && page <= total)
  const unique = [...new Set(pages)].sort((a, b) => a - b)

  const items: (number | 'ellipsis')[] = []
  let previous = 0
  for (const page of unique) {
    if (previous && page - previous > 1) items.push('ellipsis')
    items.push(page)
    previous = page
  }
  return items
}

interface CatalogPageClientProps {
  products: CatalogProduct[]
  error?: string | null
}

export default function CatalogPageClient({ products, error }: CatalogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [page, setPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)

  const categories = useMemo(() => {
    const present = new Set(products.map((p) => p.category))
    return ['All', ...PRODUCT_CATEGORIES.filter((c) => present.has(c.value)).map((c) => c.label)]
  }, [products])

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()

    const filtered = products.filter((product) => {
      const matchesSearch =
        !term ||
        product.title.toLowerCase().includes(term) ||
        product.brand?.toLowerCase().includes(term) ||
        product.sku?.toLowerCase().includes(term) ||
        product.shortDescription?.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term) ||
        product.categoryLabel.toLowerCase().includes(term)

      const matchesCategory = selectedCategory === 'All' || product.categoryLabel === selectedCategory

      return matchesSearch && matchesCategory
    })

    const sorted = [...filtered]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      default:
        sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return sorted
  }, [products, searchTerm, selectedCategory, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )
  const rangeStart = filteredProducts.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, filteredProducts.length)

  const hasFilters = !!searchTerm || selectedCategory !== 'All'

  // Any filter/sort change starts the results back at page 1
  useEffect(() => {
    setPage(1)
  }, [searchTerm, selectedCategory, sortBy])

  const changePage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return
    setPage(nextPage)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useLayoutEffect(() => {
    const container = gridRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const els = container.querySelectorAll('[data-reveal]')
      if (!els.length) return

      gsap.fromTo(
        els,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          },
        },
      )
    })

    return () => ctx.revert()
  }, [paginatedProducts, viewMode])

  return (
    <div>
      <Hero
        backImage="banner.jpg"
        image=""
        title="Product Catalog"
        subtitle="Compulink Products"
        description="Browse our complete range of hardware, software, networking and security solutions — find the right product for your business."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        showStats={false}
        badgeText="Quality Technology Products"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <GsapReveal className="text-center mb-12">
          <h1 className="text-lg md:text-4xl font-bold text-gray-800 mb-6">
            Browse Our <span className="text-blue-600">Catalog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our products in card or list view, search by name, filter by category and sort
            by price to find exactly what you need.
          </p>
        </GsapReveal>

        {error && (
          <div className="mb-12 bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Products</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Toolbar */}
        <GsapReveal delay={0.2} className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              {/* Search */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category chips */}
              <div className="flex flex-wrap gap-2 items-center flex-1">
                <Filter className="h-4 w-4 text-gray-400 shrink-0" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                    className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Sort + view toggle */}
              <div className="flex items-center gap-3 shrink-0">
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value as SortOption)}
                >
                  <SelectTrigger className="w-[190px]">
                    <ArrowUpDown className="h-4 w-4 mr-2 text-gray-500" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                <ToggleGroup
                  type="single"
                  variant="outline"
                  value={viewMode}
                  onValueChange={(value) => {
                    if (value) setViewMode(value as ViewMode)
                  }}
                  aria-label="View mode"
                >
                  <ToggleGroupItem value="grid" aria-label="Card view">
                    <LayoutGrid className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="List view">
                    <List className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {/* Result count */}
            <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-gray-600">
              <span>
                {filteredProducts.length === 0 ? (
                  'No products found'
                ) : (
                  <>
                    Showing {rangeStart}–{rangeEnd} of {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? 's' : ''}
                  </>
                )}
              </span>
              {hasFilters && (
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                  }}
                  variant="ghost"
                  size="sm"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </GsapReveal>

        {/* Product results */}
        {filteredProducts.length === 0 ? (
          <GsapReveal className="text-center py-16 bg-gray-50 rounded-2xl">
            <PackageSearch className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {hasFilters
                ? 'No products match your current filters. Try adjusting your search criteria.'
                : 'No products have been published yet. Please check back soon.'}
            </p>
            {hasFilters && (
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            )}
          </GsapReveal>
        ) : (
          <div ref={gridRef}>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProducts.map((product) => (
                  <div key={product.id} data-reveal style={{ opacity: 0 }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {paginatedProducts.map((product) => (
                  <div key={product.id} data-reveal style={{ opacity: 0 }}>
                    <ProductRow product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      changePage(currentPage - 1)
                    }}
                    aria-disabled={currentPage === 1}
                    className={
                      currentPage === 1 ? 'pointer-events-none opacity-50' : undefined
                    }
                  />
                </PaginationItem>

                {getPageItems(currentPage, totalPages).map((item, index) =>
                  item === 'ellipsis' ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={item}>
                      <PaginationLink
                        href="#"
                        isActive={item === currentPage}
                        onClick={(e) => {
                          e.preventDefault()
                          changePage(item)
                        }}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      changePage(currentPage + 1)
                    }}
                    aria-disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages ? 'pointer-events-none opacity-50' : undefined
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* CTA */}
        {products.length > 0 && (
          <GsapReveal delay={0.4} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Configuration?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                {`Can't find exactly what you're looking for? Our team can tailor any product to your
                business requirements and provide competitive pricing.`}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a href="/contact">Request a Quote</a>
              </Button>
            </div>
          </GsapReveal>
        )}
      </div>
    </div>
  )
}
