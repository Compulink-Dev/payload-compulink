'use client'
import React, { useState } from 'react'
import ContactMap from './_components/contactMap'
import emailjs from 'emailjs-com'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../_components/hero'
import { toast } from 'sonner'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Ticket,
  MessageSquare,
  User,
  Building,
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: '',
    subject: '',
  })

  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        (result: any) => {
          toast.success('Message sent successfully!', {
            description: 'We will get back to you within 24 hours.',
          })
          setFormData({ name: '', email: '', message: '', phone: '', company: '', subject: '' })
          setLoading(false)
        },
        (error: any) => {
          toast.error('Failed to send message', {
            description: 'Please try again or contact us directly.',
          })
          console.log('Error sending message ', error)
          setLoading(false)
        },
      )
  }

  return (
    <div>
      <Hero
        backImage="comm2.jpg"
        image=""
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            variant={activeTab === 'general' ? 'default' : 'outline'}
            onClick={() => setActiveTab('general')}
            className="gap-2"
          >
            <MessageSquare size={16} />
            General Inquiry
          </Button>
          <Link href="/ticket" className="inline-flex">
            <Button
              variant={activeTab === 'support' ? 'default' : 'outline'}
              className="gap-2 bg-orange-600 hover:bg-orange-700"
            >
              <Ticket size={16} />
              Technical Support
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-2">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  <div>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription className="text-blue-100">
                      {`Have questions? We'd love to hear from you.`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User size={16} />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-gray-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building size={16} />
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail size={16} />
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-gray-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone size={16} />
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+263 XXX XXX XXX"
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="bg-gray-50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 gap-2"
                    disabled={loading}
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Support Card */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Ticket size={20} />
                  Need Technical Support?
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Experiencing technical issues? Create a support ticket for faster assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-orange-700">
                  Our technical team specializes in resolving hardware, software, and network issues
                  quickly and efficiently.
                </p>
                <Link href="/ticket">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 gap-2">
                    <Ticket size={16} />
                    Create Support Ticket
                  </Button>
                </Link>
                <div className="text-xs text-orange-600 text-center">
                  Average response time:{' '}
                  <Badge variant="outline" className="ml-1">
                    2 hours
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg border-2">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
                    <p className="text-sm text-gray-600 mb-1">info@compulink.co.zw</p>
                    <p className="text-sm text-gray-600">support@compulink.co.zw</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
                    <p className="text-sm text-gray-600 mb-1">+263 4 251 575</p>
                    <p className="text-sm text-gray-600">+263 4 251 576</p>
                    <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">
                      Emergency: +263 78 800 9000
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Address</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Compulink House, 13 Stirling Road
                      <br />
                      Workington, Harare, Zimbabwe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock size={20} />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium text-gray-800">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium text-gray-800">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-800">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700 text-center">
                    <strong>24/7 Emergency Support</strong> available for critical issues
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/ticket">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Ticket size={16} />
                    Technical Support Ticket
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Phone size={16} />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail size={16} />
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-blue-600" />
                Visit Our Office
              </CardTitle>
              <CardDescription>Come see us in person for a consultation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border-2">
                <ContactMap />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Main Office</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Compulink House
                    <br />
                    13 Stirling Road, Workington
                    <br />
                    Harare, Zimbabwe
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Visiting Hours</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Mon - Fri: 8AM - 5PM
                    <br />
                    Saturday: 9AM - 1PM
                    <br />
                    By Appointment
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Before Visiting</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    We recommend calling ahead
                    <br />
                    to schedule an appointment
                    <br />
                    for better service
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
