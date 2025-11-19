import LinkButton from '@/components/link-button'
import React from 'react'

function Promotion() {
  return (
    <div className="relative bg-fixed bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <div className="bg-black/70 backdrop-blur-sm w-full h-full">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-xl lg:text-2xl uppercase text-blue-400 font-semibold tracking-wider mb-4">
              COMPU<span className="text-red-500">LINK</span> PROMOTION
            </h1>
            <h2 className="text-white font-bold text-3xl lg:text-5xl leading-tight mb-6">
              Check Out These Resources to Help You With{' '}
              <span className="text-blue-400">Security Solutions</span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-3xl">
              Cyber security solutions are technological tools and services that help protect
              organizations against cyber attacks, which can result in application downtime, theft
              of sensitive data, damage to reputation, compliance fines, and other adverse
              consequences.
            </p>
            <div className="flex gap-4">
              <div className="w-40">
                <LinkButton link="/" name="Get Started" />
              </div>
              <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
