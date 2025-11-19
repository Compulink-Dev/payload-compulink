'use client'
import React from 'react'
import Hero from '../../_components/hero'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Server,
  Cpu,
  HardDrive,
  Monitor,
  Printer,
  Network,
  Laptop,
  Smartphone,
  Tablet,
  Camera,
  Cog,
} from 'lucide-react'
import Link from 'next/link'

function Hardware() {
  const hardwareCategories = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Servers & Storage',
      description: 'Enterprise servers, NAS, SAN, and storage solutions',
      features: ['Rack Servers', 'Tower Servers', 'Storage Arrays', 'Backup Systems'],
      image: '/images/servers.jpg',
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Workstations & PCs',
      description: 'High-performance computers for professionals and businesses',
      features: ['Desktop Computers', 'All-in-One PCs', 'Thin Clients', 'Gaming Rigs'],
      image: '/images/workstations.jpg',
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: 'Storage Solutions',
      description: 'Internal and external storage devices for all needs',
      features: ['SSD/HDD', 'External Drives', 'RAID Systems', 'Cloud Storage'],
      image: '/images/storage.jpg',
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Displays & Monitors',
      description: 'Professional displays for various applications',
      features: ['4K Monitors', 'UltraWide Screens', 'Digital Signage', 'Video Walls'],
      image: '/images/displays.jpg',
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: 'Printing Solutions',
      description: 'Network printers and multifunction devices',
      features: ['Laser Printers', 'Inkjet Printers', 'Multifunction', 'Plotters'],
      image: '/images/printers.jpg',
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Networking Equipment',
      description: 'Routers, switches, and wireless infrastructure',
      features: ['Enterprise Routers', 'Switches', 'Access Points', 'Firewalls'],
      image: '/images/networking-equipment.jpg',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Devices',
      description: 'Smartphones, tablets, and mobile accessories',
      features: ['Business Phones', 'Tablets', 'Mobile Accessories', 'Rugged Devices'],
      image: '/images/mobile-devices.jpg',
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Components & Upgrades',
      description: 'Internal components and upgrade solutions',
      features: ['Processors', 'Memory', 'Graphics Cards', 'Motherboards'],
      image: '/images/components.jpg',
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Peripherals & Accessories',
      description: 'Essential accessories for complete setups',
      features: ['Keyboards & Mice', 'Webcams', 'Headsets', 'Docking Stations'],
      image: '/images/peripherals.jpg',
    },
  ]

  const brands = [
    'Dell',
    'HP',
    'Lenovo',
    'Cisco',
    'IBM',
    'Apple',
    'Samsung',
    'Epson',
    'Canon',
    'APC',
    'Intel',
    'AMD',
  ]

  return (
    <div>
      <Hero
        backImage="hardware.jpg"
        image=""
        title="Hardware Solutions"
        subtitle="Reliable IT Infrastructure from Leading Manufacturers"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Main Hardware Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Enterprise <span className="text-blue-600">Hardware</span> Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hardware refers to the external and internal devices and equipment that enable you to
              perform major functions such as input, output, storage, communication, processing, and
              more. We provide comprehensive hardware solutions from leading manufacturers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              External hardware devices include monitors, keyboards, printers, and scanners, while
              internal hardware devices include motherboards, hard drives, RAM, and processors. Our
              solutions ensure reliability, performance, and compatibility for your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact?service=hardware-consultation">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Hardware Consultation
                </Button>
              </Link>
              <Link href="/contact?service=hardware-quote">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/hardware.jpeg"
              alt="Enterprise Hardware Solutions"
              className="rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </motion.div>

        {/* Hardware Categories Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hardware Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of hardware solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-blue-300 border-2 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                        <div className="text-blue-600">{category.icon}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{category.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/contact?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Button
                        variant="ghost"
                        className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        Inquire About {category.title}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trusted Brands Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted Hardware Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with leading hardware manufacturers to provide you with reliable,
              high-performance solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300 font-semibold text-lg"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hardware Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end hardware solutions from procurement to maintenance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Procurement & Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Source the right hardware from trusted manufacturers at competitive prices
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Installation & Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional installation and configuration of all hardware components
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Cog className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Maintenance & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ongoing maintenance, repairs, and technical support for your hardware
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Hardware?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let our hardware specialists help you choose, procure, and implement the right hardware
            solutions for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=hardware-assessment">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Free Hardware Assessment
              </Button>
            </Link>
            <Link href="/contact?type=consultation">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-500"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hardware
