'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Service from '../_components/service'
import { motion } from 'framer-motion'
import Hero from '../_components/hero'
import {
  Cloud,
  Network,
  Code,
  Shield,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Smartphone,
  Users,
  BarChart3,
  Lock,
} from 'lucide-react'
import Link from 'next/link'

const mainServices = [
  {
    id: 'cloud',
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Computing',
    description: 'Secure, scalable cloud infrastructure and migration services',
    fullDescription:
      'Leverage our Tier 3 Data Centre infrastructure with private cloud platforms, ensuring 99.9% uptime and seamless scalability for your business growth.',
    features: [
      'Private Cloud Platform',
      'Hybrid Cloud Solutions',
      'Cloud Migration',
      'Disaster Recovery',
    ],
    image: '/images/cloud-services.jpg',
    link: '/services/cloud-computing',
  },
  {
    id: 'networking',
    icon: <Network className="h-8 w-8" />,
    title: 'Networking',
    description: 'Enterprise-grade network infrastructure and security',
    fullDescription:
      'Comprehensive networking solutions including LAN/WAN setup, wireless networks, and network security with 24/7 monitoring and support.',
    features: [
      'Network Design & Implementation',
      'Wireless Solutions',
      'Network Security',
      '24/7 Monitoring',
    ],
    image: '/images/networking-services.jpg',
    link: '/services/networks',
  },
  {
    id: 'software',
    icon: <Code className="h-8 w-8" />,
    title: 'Software Development',
    description: 'Custom applications and digital solutions',
    fullDescription:
      'End-to-end software development services including web applications, mobile apps, AI solutions, and enterprise software tailored to your needs.',
    features: [
      'Web & Mobile Development',
      'AI & Data Science',
      'API Integration',
      'Custom Solutions',
    ],
    image: '/images/software-dev.jpg',
    link: '/services/software',
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="h-8 w-8" />,
    title: 'Cyber Security',
    description: 'Comprehensive security and protection solutions',
    fullDescription:
      'Protect your business with advanced cybersecurity solutions including threat detection, vulnerability assessment, and security compliance.',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Compliance',
      'Incident Response',
    ],
    image: '/images/cybersecurity-services.jpg',
    link: '/services/cyber-security',
  },
  {
    id: 'hardware',
    icon: <Server className="h-8 w-8" />,
    title: 'Hardware Solutions',
    description: 'Enterprise hardware and infrastructure setup',
    fullDescription:
      'Complete hardware solutions including server setup, storage solutions, and IT infrastructure implementation for optimal performance.',
    features: ['Server Setup', 'Storage Solutions', 'IT Infrastructure', 'Hardware Maintenance'],
    image: '/images/hardware-services.jpg',
    link: '/services/hardware',
  },
  {
    id: 'consulting',
    icon: <Users className="h-8 w-8" />,
    title: 'IT Consulting',
    description: 'Strategic technology advisory services',
    fullDescription:
      'Expert IT consulting to help you make informed technology decisions, optimize processes, and drive digital transformation.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Process Optimization',
      'IT Audits',
    ],
    image: '/images/consulting-services.jpg',
    link: '/services/consulting',
  },
]

const additionalServices = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile Solutions',
    description: 'iOS and Android app development',
    link: '/services/mobile',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Data Analytics',
    description: 'Business intelligence and data insights',
    link: '/services/data-analytics',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Digital Marketing',
    description: 'Online presence and growth strategies',
    link: '/services/digital-marketing',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Managed IT',
    description: '24/7 IT support and management',
    link: '/services/managed-it',
  },
]

function Services() {
  const [selectedService, setSelectedService] = useState(mainServices[0])

  return (
    <div>
      <Hero backImage="software.webp" image="" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive <span className="text-blue-600">IT Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Offering a variety of services, Managed Services are provided by Compulink Systems
            through a Tier 3 Data Centre offering cloud services. The Data Centre hosts services on
            a secure Private Cloud Platform leveraging on leading ISPs to ensure availability at all
            times.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Link href="/contact?type=consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Main Services Navigation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of IT services designed to meet your business needs
            </p>
          </div>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedService.id === service.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    selectedService.id === service.id ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  {service.icon}
                </div>
                <span className="font-semibold">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">{selectedService.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800">{selectedService.title}</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedService.fullDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={selectedService.link}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact?service=quote">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={selectedService.image}
                height={400}
                width={500}
                alt={selectedService.title}
                className="rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Quick Access Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick access to all our specialized IT services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-blue-300 group cursor-pointer border-2">
                    <CardHeader className="pb-3">
                      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-3 group-hover:bg-blue-200 transition-colors">
                        <div className="text-blue-600">{service.icon}</div>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:underline">
                        View service details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional services to complement your technology stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-blue-300 group cursor-pointer">
                    <CardHeader>
                      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-3 group-hover:bg-blue-200 transition-colors">
                        <div className="text-blue-600">{service.icon}</div>
                      </div>
                      <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Explore service
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {`Let's discuss how our IT solutions can drive your business forward. Schedule a free consultation with our experts.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?type=project">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact?type=sales">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* All Services Grid Section */}
      <Service />
    </div>
  )
}

export default Services
