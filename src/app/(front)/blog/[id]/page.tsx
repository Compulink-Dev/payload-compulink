import type { Metadata } from 'next'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Blog Post ${id}`,
    description: 'Read the latest technology insights and news from Compulink Systems.',
  }
}

function BlogSinglePost() {
    return (
        <div>BlogSinglePost</div>
    )
}

export default BlogSinglePost
