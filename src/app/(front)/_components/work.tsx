import React from 'react'
import SmallCard from './smallCard'
import LinkButton from '@/components/link-button'
import { Download, LockIcon, Network, Shield, Cloud, Code } from 'lucide-react'

function Work() {
  const features = [
    {
      icon: <Shield className="text-blue-600" />,
      name: 'Cyber Security',
      description:
        'Ransomware Prevention Kit - Prevent, detect and restore with advanced security measures.',
      link: 'cyber-security',
    },
    {
      icon: <Network className="text-blue-600" />,
      name: 'Networking',
      description:
        'Computer networking enables employees to share ideas more easily and work more efficiently.',
      link: 'networks',
    },
    {
      icon: <Cloud className="text-blue-600" />,
      name: 'Cloud Computing',
      description:
        'Allows organizations to scale, maintain flexibility, and focus their efforts on business operations.',
      link: 'cloud-computing',
    },
    {
      icon: <Code className="text-blue-600" />,
      name: 'Software Development',
      description:
        'Offering custom software services and solutions tailored to every business scale.',
      link: 'software',
    },
  ]

  return (
    <div className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center bg-fixed">
      <div className="bg-blue-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <h1 className="text-blue-400 uppercase font-semibold tracking-wider text-lg mb-4">
                Why Choose Us
              </h1>
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Technical Features From <span className="text-blue-400">COMPU</span>
                <span className="text-red-500">LINK</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                A world-class Information System Integration House, offering solid solutions backed
                by service excellence that exceeds customer expectations.
              </p>
              <div className="flex gap-4">
                <LinkButton link="/about" name="Read More" />
                <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 rounded-lg font-medium">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <SmallCard
                  key={index}
                  icon={feature.icon}
                  name={feature.name}
                  description={feature.description}
                  link={feature.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
