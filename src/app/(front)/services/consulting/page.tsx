import React from 'react'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Target, BarChart3, Lightbulb, CheckCircle } from 'lucide-react'

function Consulting() {
  const consultingServices = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'IT Strategy',
      description: 'Strategic technology planning and roadmap development',
      features: ['Digital Transformation', 'Technology Assessment', 'Roadmap Planning'],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Process Optimization',
      description: 'Streamline operations with technology-driven solutions',
      features: ['Workflow Analysis', 'Automation Strategies', 'Efficiency Improvement'],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation Advisory',
      description: 'Leverage emerging technologies for competitive advantage',
      features: ['AI Integration', 'Cloud Strategy', 'Digital Innovation'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="net.jpg"
        image=""
        title="IT Consulting"
        subtitle="Strategic Technology Guidance for Business Growth"
      />

      <div className="container mx-auto px-4 py-16">
        <ServiceTop
          image="consulting-services.jpg"
          title="Expert IT Consulting Services"
          description="Strategic technology advisory services to help your business make informed decisions, optimize processes, and drive digital transformation."
          description2="Our experienced consultants work closely with you to understand your business objectives and develop technology strategies that align with your goals and drive measurable results."
        />

        {/* Consulting Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {consultingServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-indigo-100"
            >
              <CardHeader>
                <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                  <div className="text-indigo-600">{service.icon}</div>
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

        {/* Consulting Approach */}
        <div className="bg-gradient-to-r from-indigo-50 to-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Consulting Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">1</div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">Understand your business needs</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">2</div>
              <h3 className="font-semibold mb-2">Analysis</h3>
              <p className="text-sm text-gray-600">Assess current technology landscape</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">3</div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-sm text-gray-600">Develop tailored solutions</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">4</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Execute and optimize solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Transform Your Business with Expert Guidance</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Partner with our experienced consultants to develop technology strategies that drive
            growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-indigo-700"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consulting
