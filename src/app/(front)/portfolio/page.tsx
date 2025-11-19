import React from 'react'
import Services from './_components/services'
import Software from './_components/software'
import Networking from './_components/network'
import { AccordionTabs } from './_components/accordion'
import Hero from '../_components/hero'
import Service from '../_components/service'
import Stats from './_components/stats'
import Clients from './_components/clients'
import Testimonials from '../_components/testimonials'

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero backImage="web5.webp" image="" />

      {/* Stats Section */}
      <Stats />

      {/* About Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Who Are <span className="text-blue-600">We?</span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
              For three decades, Compulink Systems has been at the forefront of delivering
              high-standard products and services to various institutions. Our expertise spans
              networking services, cyber security, software solutions, and hardware supply, making
              us a trusted partner in digital transformation across multiple industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision & Strategy */}
      <div className="bg-slate-900 text-white py-16 lg:py-24">
        <AccordionTabs />
      </div>

      {/* Services Overview */}
      <Services />

      {/* Our Clients */}
      <Clients />

      {/* Service Cards */}
      <Service />

      {/* Projects Showcase */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-600">
              Discover our innovative solutions that have transformed businesses and delivered
              exceptional value to our clients across various industries.
            </p>
          </div>
          <Software />
          <Networking />
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Portfolio
