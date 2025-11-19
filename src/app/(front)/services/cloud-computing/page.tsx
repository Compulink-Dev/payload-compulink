import MainLayout from '@/components/mainLayout'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'
import ServiceTop from '../../_components/serviceTop'
import Hero from '../../_components/hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Cloud, Server, Database, Shield, Zap } from 'lucide-react'

function CloudComputing() {
  const cloudServices = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization'],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Private Cloud',
      description: 'Dedicated cloud infrastructure for enhanced security and control',
      features: ['Tier 3 Data Centre', 'Dedicated Resources', 'Custom Configuration'],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Cloud Storage',
      description: 'Scalable and secure data storage solutions',
      features: ['Auto-scaling', 'Data Redundancy', 'Backup & Recovery'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="net.jpg"
        image=""
        title="Cloud Computing Solutions"
        subtitle="Scalable, Secure, and Reliable Cloud Infrastructure"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Service Overview */}
        <ServiceTop
          image="host.webp"
          title="Cloud Computing Services"
          description="Transform your business with our comprehensive cloud computing solutions. Leverage our Tier 3 Data Centre infrastructure to centralize data capture, storage, and interpretation processes."
          description2="Reduce operational costs while generating richer, more precise data-led insights that drive performance and business growth."
        />

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cloudServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-blue-100"
            >
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <div className="text-blue-600">{service.icon}</div>
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

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Cloud Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">99.9% Uptime</h3>
              <p className="text-sm text-gray-600">
                Guaranteed reliability for your business operations
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-600">
                Multi-layered security protocols and compliance
              </p>
            </div>
            <div className="text-center">
              <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-sm text-gray-600">
                Grow your infrastructure as your business expands
              </p>
            </div>
            <div className="text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cost Efficient</h3>
              <p className="text-sm text-gray-600">
                Reduce capital expenditure with flexible pricing
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through a seamless cloud migration journey tailored to your
            business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudComputing
