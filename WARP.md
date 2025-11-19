# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
pnpm dev              # Start development server on http://localhost:3000
pnpm devsafe          # Clean .next folder and start dev server
```

### Build & Production
```bash
pnpm build            # Build for production (uses 8GB memory allocation)
pnpm start            # Start production server
```

### Code Quality
```bash
pnpm lint             # Run ESLint
```

### Testing
```bash
pnpm test             # Run all tests (integration + e2e)
pnpm test:int         # Run integration tests only (Vitest)
pnpm test:e2e         # Run end-to-end tests (Playwright)
```

### Payload CMS
```bash
pnpm payload generate:types       # Generate TypeScript types from collections
pnpm payload generate:importmap   # Generate import map
pnpm payload                       # Access Payload CLI
```

### Docker
```bash
docker-compose up        # Start MongoDB and app (uses .env file)
docker-compose up -d     # Start in detached mode
```

## Architecture

### Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Backend CMS**: Payload CMS 3.63 with MongoDB adapter
- **Database**: MongoDB (via Mongoose)
- **Authentication**: NextAuth.js with credentials provider
- **UI Components**: Radix UI + shadcn/ui (New York style)
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest (integration) + Playwright (e2e)

### Project Structure

```
src/
├── app/
│   ├── (front)/           # Public-facing Next.js pages
│   │   ├── layout.tsx     # Main layout with Header/Footer
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages with dynamic routes
│   │   ├── events/        # Events pages
│   │   ├── contact/       # Contact page
│   │   ├── gallery/       # Gallery pages
│   │   ├── projects/      # Projects showcase
│   │   ├── sales/         # Sales pages
│   │   └── _components/   # Shared frontend components
│   │
│   ├── (payload)/         # Payload CMS admin routes (auto-generated)
│   │   ├── admin/         # Admin UI
│   │   └── api/           # Payload API endpoints
│   │       ├── [...slug]/ # Dynamic Payload REST API
│   │       └── graphql/   # GraphQL API endpoint
│   │
│   └── my-route/          # Custom API route example
│
├── collections/           # Payload CMS collections
│   ├── Users.ts           # Auth-enabled users collection
│   └── Media.ts           # Upload-enabled media collection
│
├── components/
│   └── ui/                # shadcn/ui components (Radix UI)
│
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── dbConnect.ts       # MongoDB connection utility
│   ├── models/            # Mongoose models (separate from Payload)
│   │   ├── UserModel.ts   # User model for NextAuth
│   │   ├── (blogs)/       # Blog-related models
│   │   ├── (events)/      # Event-related models
│   │   └── (gallery)/     # Gallery-related models
│   ├── services/          # Business logic services
│   └── constants/         # Shared constants
│
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── payload.config.ts      # Payload CMS configuration
└── payload-types.ts       # Auto-generated Payload types
```

### Dual Architecture Pattern

This project uses **two parallel data layers**:

1. **Payload CMS** (`src/collections/`, `@payloadcms/db-mongodb`)
   - Handles admin panel and content management
   - Uses Payload's MongoDB adapter
   - Collections: Users (auth), Media (uploads)
   - Accessed via `/admin` and REST/GraphQL APIs

2. **Custom Mongoose Models** (`src/lib/models/`)
   - Direct MongoDB access for custom app logic
   - Used with NextAuth for authentication
   - Models: UserModel, BlogPost, Events, Applications, etc.
   - Connected via `dbConnect()` utility

**Important**: When working with data:
- Use Payload collections for CMS-managed content
- Use Mongoose models for custom business logic and NextAuth
- Environment requires both `DATABASE_URI` (Payload) and `MONGODB_URI` (Mongoose)

### Key Configuration Files

- **`src/payload.config.ts`**: Main Payload CMS configuration
- **`src/lib/auth.ts`**: NextAuth credentials provider setup
- **`next.config.mjs`**: Next.js config with Payload integration
- **`tsconfig.json`**: TypeScript config with path aliases:
  - `@/*` → `./src/*`
  - `@payload-config` → `./src/payload.config.ts`

### Route Groups

- `(front)`: Public-facing website with Header/Footer layout
- `(payload)`: Payload CMS admin interface (do not modify manually)

### Environment Variables

Required in `.env`:
```bash
DATABASE_URI=mongodb://127.0.0.1/your-database-name  # For Payload CMS
MONGODB_URI=mongodb://127.0.0.1/your-database-name   # For custom models
PAYLOAD_SECRET=your-secret-here                       # For Payload CMS
NEXT_PUBLIC_SECRET=your-secret-here                   # For NextAuth
```

### Code Style

- **Formatter**: Prettier (single quotes, no semicolons, 100 char width)
- **Linter**: ESLint with Next.js TypeScript preset
- **Auto-format**: Enabled on save for TS/TSX/JS/JSON files
- **Package Manager**: pnpm (required, enforced in engines)

## Development Guidelines

### Adding Payload Collections

1. Create collection file in `src/collections/`
2. Import and add to `collections` array in `src/payload.config.ts`
3. Run `pnpm payload generate:types` to update TypeScript types

### Adding Mongoose Models

1. Create model in `src/lib/models/`
2. Use `dbConnect()` before database operations
3. Models auto-register via `mongoose.models` pattern

### Creating API Routes

- Custom routes go in `src/app/[route-name]/route.ts`
- Access Payload instance via `getPayload({ config: configPromise })`
- Use NextAuth session via `auth()` helper

### Working with Tests

- **Integration tests**: `tests/int/**/*.int.spec.ts`
- **E2E tests**: `tests/e2e/**/*.spec.ts`
- Playwright config uses Chromium and starts dev server automatically
- Test environment file: `test.env`

### Memory Considerations

Build and dev commands use `NODE_OPTIONS` for memory allocation and deprecation warnings. The build process requires up to 8GB (`--max-old-space-size=8000`).

### Docker Development

When using Docker:
1. Set `DATABASE_URI` and `MONGODB_URI` to `mongodb://mongo/<dbname>`
2. The docker-compose file automatically uses your `.env`
3. MongoDB runs on port 27017 with WiredTiger engine
