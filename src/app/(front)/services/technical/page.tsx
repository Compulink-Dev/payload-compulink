'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Headphones, Clock, Users, Wrench, Monitor, Server } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Hero from '../../_components/hero'
import { ServiceCard } from '../../_components/service'

function Technical() {
  const supportServices = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Help Desk Support',
      description: '24/7 technical assistance for your users and staff',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Response',
      description: 'Rapid incident response and problem resolution',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'User Training',
      description: 'Comprehensive training for your team on new systems',
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Hardware Maintenance',
      description: 'Regular maintenance and repair of IT equipment',
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Software Support',
      description: 'Installation, configuration, and troubleshooting',
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'System Monitoring',
      description: 'Proactive monitoring and preventive maintenance',
    },
  ]

  return (
    <div>
      <Hero
        backImage="support.webp"
        image=""
        title="Technical Support"
        subtitle="24/7 IT Support for Uninterrupted Business Operations"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Technical <span className="text-blue-600">Support</span> Services
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ICT support technicians provide technical support and assistance for users of computer
              infrastructure and web technologies. They undertake diagnosis and resolution of
              technical problems to ensure smooth business operations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our support team answers queries via telephone, email, chat, or instant message,
              identifies technical problems and solutions, compiles reports, and works with
              colleagues to rectify common issues across various industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?service=support-contract">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Support Plan
                </Button>
              </Link>
              <Link href="tel:+2634251575">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Emergency Support: +263 4 251 575
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/support.webp"
              alt="Technical Support Team"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </motion.div>

        {/* Support Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Support Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical support solutions to keep your business running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-orange-300 border-2">
                  <CardHeader>
                    <div className="p-3 bg-orange-100 rounded-lg w-fit mb-3">
                      <div className="text-orange-600">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-16">
          <ServiceCard
            image={'oldMutual.jpeg'}
            title="Old Mutual Database Backup Solution"
            link="technical/old-mutual"
            description="Implemented a comprehensive database backup and recovery solution for Old Mutual, ensuring business continuity and data protection. The solution includes automated backups, off-site storage, and rapid recovery capabilities to minimize downtime and data loss."
          />
        </div>

        {/* Emergency Support CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support Available</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
            Our technical support team is available around the clock to resolve critical issues and
            keep your business operational.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="tel:+2634251575">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Call Emergency Support
              </Button>
            </Link>
            <Link href="/contact?emergency=technical">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-500"
              >
                Submit Emergency Ticket
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technical
