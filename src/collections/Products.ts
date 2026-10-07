import type { CollectionConfig } from 'payload'
import { PRODUCT_CATEGORIES } from '../lib/products/constants'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'status', 'inStock', 'createdAt'],
    components: {
      views: {
        list: {
          actions: ['@/components/admin/import-excel-button'],
        },
      },
    },
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Original price shown as a strikethrough when on sale',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: PRODUCT_CATEGORIES.map((category) => ({
        label: category.label,
        value: category.value,
      })),
      defaultValue: 'hardware',
    },
    {
      name: 'brand',
      type: 'text',
    },
    {
      name: 'sku',
      type: 'text',
      unique: true,
      admin: {
        description: 'Used as the upsert key for Excel imports',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'shortDescription',
      type: 'text',
      admin: {
        description: 'Short snippet shown on catalog cards',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'specs',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'inStock',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'published',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
