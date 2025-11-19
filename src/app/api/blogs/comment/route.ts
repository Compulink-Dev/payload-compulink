import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, context: any) {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const { id } = context.params
    const body = await request.json()
    const { comment } = body

    const post = await payload.findByID({
      collection: 'blog-posts',
      id,
      req: request,
    })

    const comments = post.comments || []

    const newComment = {
      ...comment,
      createdAt: comment.createdAt || new Date().toISOString(),
    }

    const updatedPost = await payload.update({
      collection: 'blog-posts',
      id,
      data: { comments: [...comments, newComment] },
      req: request,
    })

    return NextResponse.json({
      success: true,
      comments: updatedPost.comments,
    })
  } catch (error) {
    console.error('Error adding comment:', error)
    return NextResponse.json({ success: false, error: 'Failed to add comment' }, { status: 500 })
  }
}
