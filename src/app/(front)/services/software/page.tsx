import MainLayout from '@/components/mainLayout'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'
import { Label } from '@/components/ui/label'
import ServiceTop from '../../_components/serviceTop'
import { SoftwareTabs } from './_components/softwareTabs'
import Hero from '../../_components/hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Smartphone, Globe, Database, CheckCircle } from 'lucide-react'

function Software() {
  const softwareServices = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Modern web applications and platforms',
      features: ['React/Next.js', 'Responsive Design', 'Progressive Web Apps'],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
      features: ['iOS & Android', 'React Native', 'Flutter'],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Enterprise Software',
      description: 'Custom business applications and systems',
      features: ['CRM/ERP Systems', 'Workflow Automation', 'Integration APIs'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="web5.jpg"
        image=""
        title="Software Development"
        subtitle="Custom Solutions for Digital Transformation"
      />

      <div className="container mx-auto px-4 py-16">
        <ServiceTop
          image="web5.jpg"
          title="Innovative Software Solutions"
          description="We offer comprehensive software development services including AI solutions, data science, API integration, web and mobile applications, chatbots, and pipeline development."
          description2="Our custom software solutions automate organizational tasks, improve reporting capabilities, and enhance overall business efficiency and effectiveness through digital transformation."
        />

        {/* Software Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {softwareServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-orange-100"
            >
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                  <div className="text-orange-600">{service.icon}</div>
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

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              'React/Next.js',
              'Node.js',
              'Python',
              'Java',
              'AWS',
              'Docker',
              'MongoDB',
              'PostgreSQL',
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-orange-600">{tech}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Tabs Section */}
        <div className="mb-16">
          <SoftwareTabs />
        </div>

        {/* CTA Section */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Bring Your Software Ideas to Life</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            {`Let's collaborate to create software solutions that drive your business forward and deliver exceptional user experiences.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-700"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Software
