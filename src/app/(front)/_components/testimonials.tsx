'use client'
import React from 'react'
import 'swiper/css'
import { Button } from '@/components/ui/button'
import Testimonies from './testimonies'
import Link from 'next/link'

function Testimonials() {
  return (
    <div className="relative bg-[url('/images/support.webp')] bg-cover bg-center bg-fixed">
      <div className="bg-blue-950/85 backdrop-blur-sm py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Testimonies />
            <div className="flex flex-col items-start justify-center">
              <div className="mb-6">
                <h1 className="text-blue-400 uppercase text-lg font-semibold tracking-wider mb-2">
                  Testimonials
                </h1>
                <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
                  What Our Clients Say
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Working with Compulink has been a game-changer for our business. Their deep
                  expertise in hardware, software, and networking solutions ensured that we received
                  a comprehensive and tailored approach to our tech needs.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From upgrading our infrastructure to optimizing our software stack and
                  streamlining our network, their team demonstrated exceptional knowledge and
                  support at every step.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Their commitment to excellence and innovation has significantly enhanced our
                  operational efficiency and performance. I highly recommend{' '}
                  <Link
                    href="https://compulink.co.zw/"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    Compulink
                  </Link>{' '}
                  to anyone seeking reliable and cutting-edge tech solutions.
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-lg transition-all duration-300">
                  Read More
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg transition-all duration-300"
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
