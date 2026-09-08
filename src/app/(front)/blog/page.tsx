import type { Metadata } from 'next'
import BlogPage from './page-client'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, news, and technology updates from Compulink Systems. Stay informed about cloud computing, cybersecurity, and IT trends in Zimbabwe.',
}

export default function Blog() {
  return <BlogPage />
}