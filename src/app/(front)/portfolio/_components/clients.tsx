import React from 'react'
import Image from 'next/image'

function Clients() {
  const clients = [
    { name: 'CABS', logo: '/images/cabs.png' },
    { name: 'Old Mutual', logo: '/images/oldMutual.jpeg' },
    { name: 'University of Zimbabwe', logo: '/images/uz.jpg' },
    { name: 'Government', logo: '/images/government.jpg' },
    { name: 'Healthcare', logo: '/images/hospital.jpg' },
    { name: 'Manufacturing', logo: '/images/manufacturing.jpg' },
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600">
            {`We're proud to partner with leading organizations across various sectors`}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative h-16 w-32">
                <Image src={client.logo} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
