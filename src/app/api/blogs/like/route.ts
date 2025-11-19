import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, context: any) {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const { id } = context.params

    // Get current post
    const post = await payload.findByID({
      collection: 'blog-posts',
      id,
      req: request,
    })

    // Increment likes
    const updatedPost = await payload.update({
      collection: 'blog-posts',
      id,
      data: {
        likes: (post.likes || 0) + 1,
      },
      req: request,
    })

    return NextResponse.json({
      success: true,
      likes: updatedPost.likes,
    })
  } catch (error) {
    console.error('Error liking post:', error)
    return NextResponse.json({ success: false, error: 'Failed to like post' }, { status: 500 })
  }
}
