import type { CollectionConfig } from 'payload'

export const Vacancies: CollectionConfig = {
  slug: 'vacancies',
  admin: {
    useAsTitle: 'position',
    defaultColumns: ['position', 'status', 'duration', 'createdAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Open', value: 'open' },
        { label: 'Closed', value: 'closed' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'open',
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'qualifications',
      type: 'array',
      fields: [
        {
          name: 'qualification',
          type: 'text',
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'text',
        },
      ],
    },
    {
      name: 'experience',
      type: 'text',
    },
  ],
  timestamps: true,
}
