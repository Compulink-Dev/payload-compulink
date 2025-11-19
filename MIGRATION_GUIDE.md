# Migration Guide: Mongoose to Payload CMS

## Overview

This project has been migrated from using custom Mongoose models to Payload CMS for content management. This guide explains the changes and how to work with the new system.

## What Changed

### New Payload Collections Created

1. **BlogPosts** (`blog-posts`) - Blog posts with comments and likes
2. **Events** (`events`) - Event listings with venue and date info
3. **Vacancies** (`vacancies`) - Job vacancy postings
4. **Applications** (`applications`) - Job application submissions

### Key Changes

#### 1. Data Fetching

**Before (Mongoose):**
```typescript
import dbConnect from '../dbConnect'
import Event from '../models/(events)/events'

export default async function getEvents() {
  await dbConnect()
  const events = await Event.find()
  return events
}
```

**After (Payload):**
```typescript
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function getEvents() {
  const payload = await getPayload({
    config: configPromise,
  })
  
  const result = await payload.find({
    collection: 'events',
    limit: 100,
  })
  
  return result.docs
}
```

#### 2. Data Structure Changes

**ID Field:**
- Before: `_id` (Mongoose)
- After: `id` (Payload)

**Image Fields:**
- Before: `image: string` (URL string)
- After: `image: { url: string }` (Media relation object)

**Timestamps:**
- Payload automatically adds `createdAt` and `updatedAt` fields

#### 3. API Endpoints

All collections are now accessible via Payload's REST API:

- **BlogPosts**: `/api/blog-posts`
- **Events**: `/api/events`
- **Vacancies**: `/api/vacancies`
- **Applications**: `/api/applications`

Custom endpoints for blog interactions:
- Like a post: `POST /blog/[id]/like`
- Add comment: `POST /blog/[id]/comment`

## Accessing Payload Admin

1. Start the dev server: `pnpm dev` (or `npx next dev`)
2. Navigate to: `http://localhost:3000/admin`
3. Login with your admin credentials
4. Manage all content from the admin panel

## Working with Collections

### Creating Content

You can create content in two ways:

**1. Via Admin Panel:**
- Go to `/admin`
- Select the collection from the sidebar
- Click "Create New"

**2. Programmatically:**
```typescript
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config: configPromise })

await payload.create({
  collection: 'blog-posts',
  data: {
    title: 'My Blog Post',
    content: 'Post content here',
    likes: 0,
    comments: [],
  },
})
```

### Querying Data

**Find all documents:**
```typescript
const result = await payload.find({
  collection: 'events',
  limit: 100,
})
const events = result.docs
```

**Find by ID:**
```typescript
const event = await payload.findByID({
  collection: 'events',
  id: '123',
})
```

**With filters:**
```typescript
const result = await payload.find({
  collection: 'vacancies',
  where: {
    status: {
      equals: 'open',
    },
  },
})
```

### Updating Data

```typescript
await payload.update({
  collection: 'blog-posts',
  id: postId,
  data: {
    likes: newLikesCount,
  },
})
```

### Image Handling

When displaying images from Payload:

```typescript
// Check if imageUrl is a relation object
const imageUrl = typeof event.imageUrl === 'object' 
  ? event.imageUrl?.url 
  : event.imageUrl

<Image src={imageUrl || '/placeholder.jpg'} alt="Event" />
```

## Migration Steps for New Features

If you need to add a new collection:

1. **Create collection file** in `src/collections/`
2. **Import in payload.config.ts** and add to collections array
3. **Generate types**: `npx payload generate:types`
4. **Create helper functions** in `src/lib/` if needed
5. **Update components** to fetch from Payload

## Old Mongoose Models

The old Mongoose models are still present in:
- `src/lib/models/(blogs)/BlogPost.ts`
- `src/lib/models/(events)/events.ts`
- `src/lib/models/VacancyModel.ts`
- `src/lib/models/ApplicationModel.ts`

**These are no longer used** but kept for reference during migration. They can be safely removed once you've verified all functionality works with Payload.

## Environment Variables

Make sure your `.env` file includes:

```bash
DATABASE_URI=mongodb://127.0.0.1/your-database-name  # For Payload CMS
PAYLOAD_SECRET=your-secret-here                       # For Payload CMS
```

Note: `MONGODB_URI` is still used for NextAuth but content now comes from Payload.

## GraphQL API

Payload also provides a GraphQL API at `/api/graphql`. You can use this as an alternative to REST:

```typescript
const query = `
  query {
    BlogPosts {
      docs {
        id
        title
        content
        likes
      }
    }
  }
`

const response = await fetch('/api/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
})
```

## Testing

After migration, test these key areas:

- [ ] Blog posts display correctly
- [ ] Events listing works
- [ ] Likes and comments function properly
- [ ] Images load correctly
- [ ] Admin panel is accessible
- [ ] Creating new content works
- [ ] Updating existing content works

## Troubleshooting

### Images not displaying
- Check if image field is a relation: `typeof image === 'object'`
- Access URL via `image?.url`
- Provide fallback: `image?.url || '/placeholder.jpg'`

### 404 on API routes
- Ensure collections are registered in `payload.config.ts`
- Run `npx payload generate:types`
- Restart dev server

### Type errors
- Regenerate types: `npx payload generate:types`
- Import from generated types: `import type { BlogPost } from '@/payload-types'`

## Benefits of Payload CMS

✅ Built-in admin panel for content management  
✅ Type-safe with auto-generated TypeScript types  
✅ Automatic REST and GraphQL APIs  
✅ File uploads handled by Media collection  
✅ Built-in access control and authentication  
✅ Versioning and draft support (if configured)  
✅ Localization support (if configured)  

## Next Steps

1. Test all functionality in development
2. Migrate any existing Mongoose data to Payload collections
3. Remove old Mongoose model files once confirmed working
4. Consider adding Payload features like access control, hooks, or field validations
