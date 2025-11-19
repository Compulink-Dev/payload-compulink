import React from 'react'
import LinkButton from '@/components/link-button'
import { ChartArea, Download, DownloadCloud, Lock, Network, ArrowRight } from 'lucide-react'

export function ServiceCard({ icon, name, description, link }: any) {
  return (
    <div className="group bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow mb-4">{description}</p>
      <div className="mt-auto">
        <LinkButton link={link} name={'Explore'} />
      </div>
    </div>
  )
}

function Service() {
  const services = [
    {
      icon: <DownloadCloud />,
      name: 'Cloud Computing',
      description:
        'Cloud technology centralizes data capture, storage, and interpretation processes while reducing costs and generating faster, more precise data-led insights to drive performance.',
      link: '/services/cloud-computing',
    },
    {
      icon: <Network />,
      name: 'Networking',
      description:
        'Comprehensive computer networking solutions that transport and exchange data efficiently, including design, construction, maintenance, and operation of network infrastructure.',
      link: '/services/networks',
    },
    {
      icon: <Download />,
      name: 'Software Development',
      description:
        'End-to-end solutions including AI, data science, API integration, web & mobile solutions, chatbots, and pipeline development for organizational automation and reporting.',
      link: '/services/software',
    },
    {
      icon: <Lock />,
      name: 'Cyber Security',
      description:
        'Advanced security solutions protecting organizations against cyber attacks, preventing downtime, data theft, reputation damage, and compliance fines.',
      link: '/services/cyber-security',
    },
    {
      icon: <ChartArea />,
      name: 'Sales Solutions',
      description:
        'Strategic sales solutions tailored to different regions, products, and target customers to drive business growth and market expansion.',
      link: '/sales',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-blue-600 uppercase font-semibold tracking-wider text-lg mb-4">
            Our Services
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Bringing Technology from the Horizon
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Delivering unmatched service is what we live for. We create a culture of care and
            service where our customer comes first, ensuring excellence in every solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              name={service.name}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
