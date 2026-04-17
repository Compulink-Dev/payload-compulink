import { NextRequest, NextResponse } from 'next/server'

interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

interface ChatRequest {
  message: string
  conversationHistory: ChatMessage[]
}

// Knowledge base for the chatbot
const KNOWLEDGE_BASE = {
  services: [
    { keyword: ['service', 'services', 'offer', 'what do you'], answer: 'We offer comprehensive IT solutions including:\n• Web & Mobile Development\n• Cloud Solutions\n• IT Consulting\n• Digital Transformation\n• Software Maintenance\n\nWould you like to know more about any specific service?' },
    { keyword: ['web', 'development', 'website'], answer: 'Our web development services include building responsive, scalable web applications using modern technologies. We specialize in both frontend and backend development.\n\nWould you like to schedule a consultation?' },
    { keyword: ['mobile', 'app'], answer: 'We develop native and cross-platform mobile applications for iOS and Android. Our team uses the latest technologies to create engaging user experiences.\n\nInterested in learning more?' },
    { keyword: ['cloud', 'aws', 'azure'], answer: 'We provide cloud infrastructure, migration, and management services. We can help you move to and optimize cloud platforms.\n\nWant to discuss your cloud needs?' },
    { keyword: ['consult', 'consultation', 'advice'], answer: 'Our IT consultants can help you with technology strategy, architecture design, and digital transformation planning.\n\nWould you like to book a free consultation?' },
  ],
  jobs: [
    { keyword: ['job', 'jobs', 'career', 'career', 'hire', 'hiring', 'position', 'vacancy'], answer: 'We\re always looking for talented professionals! We have open positions in:\n• Full Stack Developers\n• Cloud Architects\n• UI/UX Designers\n• Project Managers\n• QA Engineers\n\nWould you like to see all current openings?' },
    { keyword: ['apply', 'application', 'apply for'], answer: 'To apply for a position, visit our Careers page or reply with the job title you\re interested in, and I\ll guide you through the process.' },
  ],
  booking: [
    { keyword: ['book', 'meeting', 'appointment', 'schedule', 'call'], answer: 'I can help you schedule a meeting with our team!\n\nWhat type of meeting are you interested in?\n• Sales Discussion\n• Technical Consultation\n• Project Planning\n• Other' },
  ],
  general: [
    { keyword: ['hello', 'hi', 'hey', 'greet'], answer: 'Hello! 👋 How can I assist you today?' },
    { keyword: ['thank', 'thanks', 'thank you'], answer: 'You\re welcome! 😊 Is there anything else I can help you with?' },
    { keyword: ['help', 'assist', 'support'], answer: 'I\m here to help! I can assist you with:\n• Information about our services\n• Job opportunities\n• Scheduling meetings\n• General questions\n\nWhat would you like to know?' },
    { keyword: ['contact', 'phone', 'email', 'address'], answer: 'You can reach us at:\n📧 Email: contact@compulink.co.zw\n📞 Phone: +263 contact support\n🏢 Visit our Contact page for more details\n\nCould I help connect you with an agent directly?' },
    { keyword: ['price', 'cost', 'pricing'], answer: 'Our pricing depends on your specific project requirements. We offer competitive rates and flexible engagement models.\n\nWould you like to discuss your project with our sales team?' },
  ],
}

// Function to find matching response from knowledge base
function findMatchingResponse(message: string): string | null {
  const lowerMessage = message.toLowerCase()

  // Check all knowledge bases for keyword matches
  for (const category of Object.values(KNOWLEDGE_BASE)) {
    for (const entry of category) {
      const keywords = Array.isArray(entry.keyword) ? entry.keyword : [entry.keyword]
      if (keywords.some((kw) => lowerMessage.includes(kw))) {
        return entry.answer
      }
    }
  }

  return null
}

// Generate a contextual response based on conversation history
function generateContextualResponse(
  userMessage: string,
  conversationHistory: ChatMessage[]
): string {
  // First try to match against knowledge base
  const knowledgeBasedResponse = findMatchingResponse(userMessage)
  if (knowledgeBasedResponse) {
    return knowledgeBasedResponse
  }

  // If no direct match, check context from recent messages
  const recentContext = conversationHistory.slice(-6).join(' ').toLowerCase()

  if (recentContext.includes('job') || recentContext.includes('career')) {
    return 'For more information about job opportunities, please visit our Careers page or would you like me to connect you with our HR team?'
  }

  if (
    recentContext.includes('service') ||
    recentContext.includes('develop') ||
    recentContext.includes('project')
  ) {
    return 'For detailed project discussions, our consultants would be better equipped to help you. Would you like me to schedule a consultation with our team?'
  }

  if (recentContext.includes('contact') || recentContext.includes('agent')) {
    return 'I\d be happy to connect you with one of our agents! Would you like me to take your contact information and have someone reach out to you?'
  }

  // Default fallback response
  return 'I appreciate your question! For more personalized assistance, would you like me to connect you with one of our team members? Just let me know your preferred contact method and what you\re interested in discussing.'
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequest

    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json({ reply: 'Please provide a valid message.' }, { status: 400 })
    }

    const response = generateContextualResponse(body.message, body.conversationHistory || [])

    return NextResponse.json({ reply: response })
  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { reply: 'Sorry, I encountered an error processing your message. Please try again.' },
      { status: 500 }
    )
  }
}
