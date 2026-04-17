'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send, Minimize2, Maximize2, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  type: 'user' | 'bot'
  text: string
  timestamp: Date
}

interface ConversationState {
  stage: 'greeting' | 'question' | 'need_agent' | 'collecting_info' | 'lead_captured'
  collectedInfo: {
    name?: string
    email?: string
    phone?: string
  }
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hi! 👋 Welcome to Compulink. How can I help you today? I can assist with:\n• Our IT services\n• Job opportunities\n• Meeting booking\n• General inquiries',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<ConversationState>({
    stage: 'greeting',
    collectedInfo: {},
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      // Handle lead capture stage
      if (state.stage === 'collecting_info') {
        if (!state.collectedInfo.name) {
          setState((prev) => ({
            ...prev,
            collectedInfo: { ...prev.collectedInfo, name: input },
          }))
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: `Nice to meet you, ${input}! 👋\n\nCould you please share your email address?`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMsg])
          setLoading(false)
          return
        } else if (!state.collectedInfo.email) {
          setState((prev) => ({
            ...prev,
            collectedInfo: { ...prev.collectedInfo, email: input },
          }))
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: `Great! And your phone number (optional)?`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMsg])
          setLoading(false)
          return
        } else if (!state.collectedInfo.phone) {
          setState((prev) => ({
            ...prev,
            collectedInfo: { ...prev.collectedInfo, phone: input || 'Not provided' },
            stage: 'lead_captured',
          }))

          // Save lead
          const leadResponse = await fetch('/api/chatbot-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: state.collectedInfo.name,
              email: state.collectedInfo.email,
              phone: input || 'Not provided',
              message: 'User requested to speak with an agent',
              type: 'support',
            }),
          })

          if (!leadResponse.ok) throw new Error('Failed to save lead')

          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: `✅ Perfect! Thanks ${state.collectedInfo.name}!\n\nWe've captured your information:\n📧 ${state.collectedInfo.email}\n📱 ${input || 'Not provided'}\n\nOne of our agents will reach out to you shortly. 🚀`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMsg])
          setLoading(false)
          return
        }
      }

      // Check if user wants to speak to an agent
      const wantsAgent =
        input.toLowerCase().includes('agent') ||
        input.toLowerCase().includes('speak') ||
        input.toLowerCase().includes('talk') ||
        input.toLowerCase().includes('yes') ||
        input.toLowerCase().includes('connect') ||
        input.toLowerCase().includes('contact me')

      if (
        wantsAgent &&
        (state.stage === 'question' || state.stage === 'need_agent' || state.stage === 'greeting')
      ) {
        setState((prev) => ({
          ...prev,
          stage: 'collecting_info',
        }))

        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Absolutely! I'd love to connect you with one of our agents. 🤝\n\nTo get started, could you please share your name?`,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMsg])
        setLoading(false)
        return
      }

      // Regular query handling via API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: data.reply,
        timestamp: new Date(),
      }

      setState((prev) => ({
        ...prev,
        stage: 'question',
      }))

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: 'Sorry, I encountered an error. Please try again or contact our team directly at contact@compulink.co.zw',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 right-4 w-full max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50"
            style={{ height: isMinimized ? '50px' : '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-t-lg flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Compulink Support</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-blue-500 p-1 rounded transition-colors"
                  title={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-red-500 p-1 rounded transition-colors"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-900 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                            style={{ animationDelay: '0.1s' }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                {state.stage !== 'lead_captured' ? (
                  <form
                    onSubmit={handleSendMessage}
                    className="border-t border-gray-200 p-3 bg-white rounded-b-lg flex gap-2"
                  >
                    <Input
                      type="text"
                      placeholder={
                        state.stage === 'collecting_info'
                          ? state.collectedInfo.name
                            ? state.collectedInfo.email
                              ? 'Enter phone (optional)'
                              : 'Enter your email'
                            : 'Enter your name'
                          : 'Type your message...'
                      }
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={loading}
                      className="flex-1 text-sm border-gray-300"
                    />
                    <Button
                      type="submit"
                      disabled={loading || !input.trim()}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send size={16} />
                    </Button>
                  </form>
                ) : (
                  <div className="border-t border-gray-200 p-3 bg-green-50 rounded-b-lg flex items-center justify-between">
                    <span className="text-sm font-medium text-green-700">Agent will contact you soon!</span>
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen)
          setIsMinimized(false)
        }}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 transition-colors ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
        title="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  )
}
