export const PRODUCT_CATEGORIES = [
  { label: 'Hardware', value: 'hardware' },
  { label: 'Software', value: 'software' },
  { label: 'Networking', value: 'networking' },
  { label: 'Cloud & Servers', value: 'cloud-servers' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Security', value: 'security' },
] as const

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  hardware: '/images/hardware.jpg',
  software: '/images/software.webp',
  networking: '/images/network.webp',
  'cloud-servers': '/images/cloud.webp',
  accessories: '/images/computer.jpg',
  security: '/images/cyber.webp',
}

export const DEFAULT_PRODUCT_IMAGE = '/images/hero.webp'

export function categoryLabel(value: string): string {
  return PRODUCT_CATEGORIES.find((c) => c.value === value)?.label ?? 'Uncategorized'
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value)
}
