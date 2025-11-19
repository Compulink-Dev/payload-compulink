import MainLayout from '@/components/mainLayout'
import React from 'react'
import ServiceCard from '../../_components/serviceCard'
import ServiceTop from '../../_components/serviceTop'
import Hero from '../../_components/hero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react'

function CyberSecurity() {
  const securityServices = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems',
      features: ['Real-time Monitoring', 'Malware Protection', 'Intrusion Detection'],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for sensitive data protection',
      features: ['SSL/TLS Certificates', 'Database Encryption', 'File-level Security'],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Security Monitoring',
      description: '24/7 security operations center monitoring',
      features: ['SIEM Solutions', 'Log Analysis', 'Incident Response'],
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="cyber2.jpg"
        image=""
        title="Cyber Security Solutions"
        subtitle="Protect Your Business from Modern Cyber Threats"
      />

      <div className="container mx-auto px-4 py-16">
        <ServiceTop
          image="cyber.webp"
          title="Advanced Cyber Security"
          description="Comprehensive security solutions that protect organizations against cyber attacks, preventing application downtime, theft of sensitive data, and reputational damage."
          description2="With over 30 years of experience helping thousands of businesses withstand cyber threats and protect valuable data, we're confident in our ability to enhance your network security posture."
        />

        {/* Security Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityServices.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-red-100"
            >
              <CardHeader>
                <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                  <div className="text-red-600">{service.icon}</div>
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

        {/* Compliance & Standards */}
        <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Security Compliance & Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-red-600">GDPR</h3>
                <p className="text-sm text-gray-600 mt-1">Data Protection</p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-red-600">ISO 27001</h3>
                <p className="text-sm text-gray-600 mt-1">Security Management</p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-red-600">PCI DSS</h3>
                <p className="text-sm text-gray-600 mt-1">Payment Security</p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-red-600">HIPAA</h3>
                <p className="text-sm text-gray-600 mt-1">Healthcare Data</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Secure Your Digital Assets Today</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            {`Don't wait for a security breach to take action. Protect your business with our comprehensive cybersecurity solutions.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Security Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-red-700"
            >
              Emergency Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity
