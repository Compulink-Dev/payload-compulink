'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import { Mail, Home, Phone, MapPin, Clock, Building } from 'lucide-react'
import { useLoadScript } from '@react-google-maps/api'
import Maps from './maps'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const Info = ({ icon, title, info1, info2, badge }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex gap-4 items-start p-4 rounded-lg hover:bg-blue-800/50 transition-all duration-300 group"
    >
      <div className="p-3 bg-blue-700 rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-white text-lg">{title}</h3>
          {badge && (
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-300 border-green-500/30 text-xs"
            >
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-blue-100 text-sm leading-relaxed mb-1">{info1}</p>
        {info2 && <p className="text-blue-100 text-sm leading-relaxed">{info2}</p>}
      </div>
    </motion.div>
  )
}

function ContactMap() {
  const { isLoaded } = useLoadScript({
    //@ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded)
    return (
      <div className="h-[600px] w-full bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )

  return (
    <div className="relative h-[600px] w-full my-8 rounded-2xl overflow-hidden shadow-2xl">
      {/* Map Background */}
      <div className="absolute inset-0">
        <Maps />
      </div>

      {/* Contact Information Overlay */}
      <div className="absolute left-6 top-6 bottom-6 w-full max-w-md">
        <Card className="h-full bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-sm border-blue-600/30 shadow-2xl">
          <CardContent className="p-6 h-full flex flex-col">
            {/* Header */}
            <div className="text-center mb-6 pb-6 border-b border-blue-700/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Locations</h2>
              </div>
              <p className="text-blue-200 text-sm">
                Visit us at any of our offices across Zimbabwe
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 flex-1 overflow-y-auto">
              {/* Harare Office */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-2">
                  <Building className="h-4 w-4 text-blue-300" />
                  <h3 className="font-semibold text-blue-300 text-sm uppercase tracking-wide">
                    Harare Office
                  </h3>
                </div>
                <Info
                  icon={<Home className="h-5 w-5 text-white" />}
                  title="Main Office"
                  info1="313 Samora Machel Ave, Eastlea"
                  info2="Harare, Zimbabwe"
                  badge="Headquarters"
                />
                <Info
                  icon={<Phone className="h-5 w-5 text-white" />}
                  title="Harare Phone"
                  info1="+(263) 24 249 4407"
                  info2="+(263) 4 251 575"
                />
                <Info
                  icon={<Clock className="h-5 w-5 text-white" />}
                  title="Business Hours"
                  info1="Mon - Fri: 8:00 AM - 5:00 PM"
                  info2="Sat: 9:00 AM - 1:00 PM"
                />
              </div>

              {/* Bulawayo Office */}
              <div className="space-y-3 pt-4 border-t border-blue-700/50">
                <div className="flex items-center gap-2 px-2">
                  <Building className="h-4 w-4 text-blue-300" />
                  <h3 className="font-semibold text-blue-300 text-sm uppercase tracking-wide">
                    Bulawayo Office
                  </h3>
                </div>
                <Info
                  icon={<Home className="h-5 w-5 text-white" />}
                  title="Bulawayo Branch"
                  info1="22 Princess Park Mansions"
                  info2="Samuel Parirenyatwa Street, Bulawayo"
                />
                <Info
                  icon={<Phone className="h-5 w-5 text-white" />}
                  title="Bulawayo Phone"
                  info1="+(263) 29 277 794"
                  info2="+(263) 29 276 543"
                />
                <Info
                  icon={<Clock className="h-5 w-5 text-white" />}
                  title="Business Hours"
                  info1="Mon - Fri: 8:00 AM - 5:00 PM"
                  info2="Sat: 9:00 AM - 1:00 PM"
                />
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 pt-4 border-t border-blue-700/50">
                <div className="flex items-center gap-2 px-2">
                  <Mail className="h-4 w-4 text-blue-300" />
                  <h3 className="font-semibold text-blue-300 text-sm uppercase tracking-wide">
                    Contact Methods
                  </h3>
                </div>
                <Info
                  icon={<Mail className="h-5 w-5 text-white" />}
                  title="Email Address"
                  info1="info@compulink.co.zw"
                  info2="sales@compulink.co.zw"
                />
                <Info
                  icon={<Phone className="h-5 w-5 text-white" />}
                  title="Emergency Support"
                  info1="+(263) 78 800 9000"
                  info2="24/7 Available"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 mt-4 border-t border-blue-700/50">
              <div className="text-center">
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30 mb-2"
                >
                  Open Now
                </Badge>
                <p className="text-blue-200 text-xs">
                  Both offices are currently open for business
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Controls Overlay */}
      <div className="absolute right-6 top-6">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Harare Office</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Bulawayo Office</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <Card className="bg-black/80 backdrop-blur-sm border-0">
          <CardContent className="p-3">
            <p className="text-white text-sm text-center">
              💡 <strong>Tip:</strong> Click on the map markers for directions
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactMap
