import React from 'react'
import ServiceTop from '../../_components/serviceTop'
import Hero from '../../_components/hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wifi, Server, Shield, CheckCircle } from 'lucide-react'

function Networks() {
  const networkServices = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Wireless Networks',
      description: 'High-performance wireless infrastructure',
      features: ['Wi-Fi 6/6E', 'Mesh Networks', 'Guest Access'],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Network Infrastructure',
      description: 'Robust wired network solutions',
      features: ['Structured Cabling', 'Switching', 'Routing'],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Network Security',
      description: 'Comprehensive network protection',
      features: ['Firewalls', 'VPN', 'Access Control'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="net.jpg"
        image=""
        title="Network Solutions"
        subtitle="Enterprise-Grade Networking for Seamless Connectivity"
      />

      <div className="container mx-auto px-4 py-16">
        <ServiceTop
          image="net.webp"
          title="Advanced Network Solutions"
          description="Comprehensive networking services that ensure reliable, secure, and high-performance connectivity for your organization."
          description2="From network design and implementation to ongoing management and security, we provide end-to-end solutions that keep your business connected and protected."
        />

        {/* Network Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {networkServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-purple-100"
            >
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                  <div className="text-purple-600">{service.icon}</div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Network Performance */}
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Network Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
              <p className="text-gray-600">Network Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Monitoring & Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1Gbps+</div>
              <p className="text-gray-600">Connection Speed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">LMS</div>
              <p className="text-gray-600">Latency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Network Infrastructure</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            {` Ensure your network can handle today's demands and tomorrow's growth with our expert solutions.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Network Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-700"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Networks
