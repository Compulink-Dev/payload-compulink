import Image from 'next/image'
import React from 'react'
import LinkButton from '@/components/link-button'
import { Dot, CheckCircle } from 'lucide-react'

function About() {
  const features = [
    'Innovative Software Development',
    'Software & System Integration',
    'Network Infrastructure',
    'Server Setup & Configuration',
    '30 Years of IT Excellence',
    'Industry-Leading Expertise',
  ]

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={'/images/ab.gif'}
                alt="Compulink Systems - 30 Years of IT Excellence"
                height={600}
                width={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col">
            <h1 className="text-blue-600 uppercase font-semibold tracking-wider text-lg mb-4">
              Our Story
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Three Decades of IT Excellence & Innovation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For over 30 years, Compulink Systems has been at the forefront of the IT ecosystem,
              delivering high-standard products and services to various institutions. Our expertise
              spans networking services, cyber security, software solutions, and hardware supply,
              making us a trusted partner in digital transformation.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-lg italic mb-8 border-l-4 border-blue-500 pl-4">
              {`Building a brighter future with technology, ensuring every entity is polished with innovation!`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton link="/portfolio" name="Our Portfolio" />
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg font-medium">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
