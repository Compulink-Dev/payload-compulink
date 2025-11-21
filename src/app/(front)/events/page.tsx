import React from 'react'
import EventCards from './_components/eventCards'
import EventCard from './_components/eventCard'
import Hero from '../_components/hero'

async function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Hero backImage="class1.jpg" image="" />

      <EventCard />

      {/* All Events Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete calendar of upcoming events, workshops, and gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCards />
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:shadow-lg">
            Load More Events
          </button>
        </div>
      </section>
    </div>
  )
}

export default Events
