import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import React from 'react'
import LinkButton from '@/components/link-button'

function Services() {
  const features = [
    'Innovative Software Development & AI Solutions',
    'Advanced Hardware Infrastructure Setup',
    'Comprehensive Network Architecture & Security',
    'Enterprise Cyber Security Frameworks',
    'Cloud Migration & Optimization',
    'Digital Transformation Consulting',
    'IT Support & Managed Services',
    'Custom Business Process Automation',
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={'/images/ab.gif'}
                alt="Compulink Systems - Comprehensive IT Services"
                height={600}
                width={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm font-medium">Years in IT</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col order-1 lg:order-2">
            <h1 className="text-blue-600 uppercase font-semibold tracking-wider text-lg mb-4">
              Welcome to Compulink Systems
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Three Decades of Digital Excellence & Innovation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For over 30 years, Compulink Systems has been delivering cutting-edge IT solutions to
              institutions across various sectors. Our comprehensive service portfolio spans
              networking, cybersecurity, software development, and hardware solutions, making us
              your trusted partner in digital transformation.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton link="/about" name="Our Story" />
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg font-medium text-lg">
                Download Capability Statement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
