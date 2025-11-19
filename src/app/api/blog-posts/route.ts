import { NextResponse } from 'next/server'

// Dummy blog posts data
const dummyBlogPosts = {
  docs: [
    {
      id: '1',
      title: 'Embracing Digital Transformation in 2025',
      content: 'Digital transformation is no longer optional for businesses looking to stay competitive. In this comprehensive guide, we explore the key technologies and strategies that organizations need to adopt to thrive in the digital age. From cloud computing to artificial intelligence, learn how to leverage these innovations to drive growth and efficiency.',
      createdAt: new Date('2025-01-15').toISOString(),
      image: {
        url: '/images/AI.jpg'
      },
      likes: 42,
      comments: [
        {
          author: 'John Doe',
          text: 'Great insights! This really helped clarify our digital strategy.',
          createdAt: new Date('2025-01-16').toISOString()
        },
        {
          author: 'Jane Smith',
          text: 'Very informative article. Looking forward to more content like this.',
          createdAt: new Date('2025-01-17').toISOString()
        }
      ]
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      content: 'With cyber threats becoming increasingly sophisticated, businesses must prioritize security. This article outlines essential cybersecurity practices including multi-factor authentication, regular security audits, employee training, and incident response planning. Protect your organization from data breaches and cyber attacks.',
      createdAt: new Date('2025-01-10').toISOString(),
      image: {
        url: '/images/software.webp'
      },
      likes: 38,
      comments: [
        {
          author: 'Michael Brown',
          text: 'Excellent overview of security best practices.',
          createdAt: new Date('2025-01-11').toISOString()
        }
      ]
    },
    {
      id: '3',
      title: 'The Future of Cloud Computing',
      content: 'Cloud computing continues to evolve with new services and capabilities emerging regularly. We examine the latest trends including serverless computing, edge computing, and hybrid cloud solutions. Discover how these innovations can help your business scale efficiently while reducing infrastructure costs.',
      createdAt: new Date('2025-01-05').toISOString(),
      image: {
        url: '/images/hardware.jpg'
      },
      likes: 56,
      comments: []
    },
    {
      id: '4',
      title: 'AI and Machine Learning: Practical Applications',
      content: 'Artificial intelligence and machine learning are transforming industries across the board. From predictive analytics to automated customer service, learn about real-world applications of AI that are delivering tangible business results. This guide helps demystify AI and shows how your organization can benefit.',
      createdAt: new Date('2024-12-28').toISOString(),
      image: {
        url: '/images/web.webp'
      },
      likes: 64,
      comments: [
        {
          author: 'Sarah Johnson',
          text: 'This article perfectly explains AI applications in simple terms.',
          createdAt: new Date('2024-12-29').toISOString()
        }
      ]
    }
  ]
}

export async function GET() {
  try {
    // In a real application, you would fetch from your database
    return NextResponse.json(dummyBlogPosts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
