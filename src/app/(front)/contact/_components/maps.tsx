'use client'
import React from 'react'

function Maps() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.410949020753!2d31.088634275007035!3d-17.82435713330818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb255ddd6075%3A0x39ffae6e040af2f5!2s313%20Samora%20Machel%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Compulink Systems Location"
      />
    </div>
  )
}

export default Maps
