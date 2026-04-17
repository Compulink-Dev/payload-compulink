import { NextRequest, NextResponse } from 'next/server'

export interface ChatbotLead {
  name: string
  email: string
  phone?: string
  message: string
  source?: string
  type?: 'general' | 'sales' | 'support' | 'job-inquiry'
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatbotLead

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    // Log the lead (in production, you'd save this to your database)
    console.log('New chatbot lead received:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      type: body.type || 'general',
      timestamp: new Date().toISOString(),
    })

    // Send confirmation email or trigger webhook here if needed
    // For now, we'll just confirm the lead was captured

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! Our team will reach out to you soon.',
        leadId: `lead_${Date.now()}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Chatbot lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to capture your information. Please try again.' },
      { status: 500 }
    )
  }
}
