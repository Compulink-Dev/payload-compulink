import React from 'react'

function Stats() {
  const stats = [
    { number: '30+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Experts' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Client Retention' },
  ]

  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
