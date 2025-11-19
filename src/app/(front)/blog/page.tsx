'use client'
import {
  Archive,
  ChevronRight,
  Heart,
  MessagesSquare,
  Timer,
  User,
  Calendar,
  Eye,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { BlogModal } from './_components/BlogModal'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Hero from '../_components/hero'
import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  content: string
  createdAt: string
  image?: {
    url?: string
  }
  likes: number
  views: number
  category: string
  readTime: string
  comments?: { author: string; text: string; createdAt: string }[]
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [commentText, setCommentText] = useState('')
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'The Future of Cloud Computing in Zimbabwe',
        content:
          'Exploring how cloud technology is transforming businesses across Zimbabwe and the opportunities it presents for digital transformation in various sectors including banking, healthcare, and education.',
        createdAt: new Date().toISOString(),
        image: { url: '/images/cloud-services.jpg' },
        likes: 24,
        views: 156,
        category: 'Technology',
        readTime: '5 min read',
        comments: [
          { author: 'John Doe', text: 'Great insights!', createdAt: new Date().toISOString() },
          {
            author: 'Jane Smith',
            text: 'Looking forward to more articles like this.',
            createdAt: new Date().toISOString(),
          },
        ],
      },
      {
        id: '2',
        title: 'Cybersecurity Trends for 2024',
        content:
          'An in-depth look at the emerging cybersecurity threats and the latest protection strategies that businesses should implement to safeguard their digital assets.',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        image: { url: '/images/cybersecurity-services.jpg' },
        likes: 18,
        views: 203,
        category: 'Security',
        readTime: '7 min read',
      },
      {
        id: '3',
        title: 'Digital Transformation Success Stories',
        content:
          'Case studies of successful digital transformation projects we have implemented for clients across different industries in Zimbabwe.',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        image: { url: '/images/software-dev.jpg' },
        likes: 32,
        views: 189,
        category: 'Business',
        readTime: '6 min read',
      },
    ]

    setPosts(mockPosts)
    setLoading(false)
  }, [])

  const handleLike = async (id: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)),
    )
  }

  const handleCommentSubmit = async (id: string) => {
    if (!commentText.trim()) return

    const newComment = {
      author: 'You',
      text: commentText,
      createdAt: new Date().toISOString(),
    }

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, comments: [...(post.comments || []), newComment] } : post,
      ),
    )

    setCommentText('')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const [featuredPost, ...latestPosts] = posts

  return (
    <div>
      <Hero
        backImage="comm2.jpg"
        image=""
        title="Compulink Blog"
        subtitle="Insights, News, and Technology Updates"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Latest <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay updated with the latest technology trends, company news, and industry insights
              from Compulink Systems.
            </p>
          </div>
          <BlogModal />
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image?.url || '/images/blog-placeholder.jpg'}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Timer size={14} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.content}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-500">
                      <button
                        onClick={() => handleLike(featuredPost.id)}
                        className="flex items-center gap-2 hover:text-red-600 transition-colors"
                      >
                        <Heart size={18} />
                        <span>{featuredPost.likes}</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <Eye size={18} />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessagesSquare size={18} />
                        <span>{featuredPost.comments?.length || 0}</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 group">
                      Read More
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Latest Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
          </div>

          {latestPosts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No articles available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image?.url || '/images/blog-placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>Compulink Team</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Timer size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.content}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <button
                            onClick={() => handleLike(post.id)}
                            className="flex items-center gap-1 hover:text-red-600 transition-colors"
                          >
                            <Heart size={16} />
                            <span>{post.likes}</span>
                          </button>
                          <div className="flex items-center gap-1">
                            <MessagesSquare size={16} />
                            <span>{post.comments?.length || 0}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Read More
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
