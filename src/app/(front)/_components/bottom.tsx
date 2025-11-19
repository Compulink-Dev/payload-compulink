import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Updates & News', href: '/blog' },
  ]

  const services = [
    { name: 'Software Services', href: '/services/software' },
    { name: 'Networking Services', href: '/services/networks' },
    { name: 'Cloud Computing', href: '/services/cloud-computing' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
  ]

  const company = [
    { name: 'Log Ticket', href: '/ticket' },
    { name: 'Book Meeting', href: '/booking-meeting' },
    { name: 'Careers', href: '/vacancy' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/search/top/?q=compulink%20holdings',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Twitter,
      href: 'https://x.com/compulinkzw',
      color: 'hover:bg-blue-400',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/compulink_zw/',
      color: 'hover:bg-pink-600',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Compulink Systems"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Technology is about building solutions in partnership with the society. We deliver
              innovative IT solutions that drive business growth and digital transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+263 4 251 575</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@compulink.co.zw</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Harare, Zimbabwe</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © 2024 Compulink Systems. All Rights Reserved
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
