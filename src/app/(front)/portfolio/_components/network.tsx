import React from 'react'
import Projects from './projects'

function Networking() {
  const networkingProjects = [
    {
      name: 'CABS Marondera Infrastructure',
      description:
        'Complete network infrastructure overhaul for CABS Marondera, featuring secure LAN/WAN setup, enterprise-grade firewalls, and seamless connectivity across multiple branches with 99.9% uptime guarantee.',
      link: '/services/networks',
      image: '/images/cabs.png',
      technologies: ['Cisco', 'Fortinet', 'SD-WAN', 'VoIP'],
      category: 'Banking & Finance',
    },
    {
      name: 'Old Mutual Network Modernization',
      description:
        'Enterprise network modernization project for Old Mutual Zimbabwe, implementing advanced security protocols, cloud connectivity, and robust disaster recovery solutions for financial data protection.',
      link: '/services/networks',
      image: '/images/oldMutual.jpeg',
      technologies: ['Juniper', 'Palo Alto', 'Azure', 'MPLS'],
      category: 'Financial Services',
    },
    {
      name: 'University of Zimbabwe Campus Network',
      description:
        'High-density campus network supporting 25,000+ concurrent users with seamless roaming, research network segregation, and high-speed internet access for academic excellence.',
      link: '/services/networks',
      image: '/images/uz.jpg',
      technologies: ['Aruba', 'HP', 'Fiber Optics', 'Wifi 6'],
      category: 'Education',
    },
    {
      name: 'Parirenyatwa Hospital Medical Network',
      description:
        'Critical healthcare network infrastructure ensuring reliable connectivity for medical devices, patient records systems, and telemedicine services with HIPAA compliance.',
      link: '/services/networks',
      image: '/images/hospital.jpg',
      technologies: ['Medical IoT', 'VLAN', 'QoS', 'Redundancy'],
      category: 'Healthcare',
    },
    {
      name: 'Industrial IoT Manufacturing Network',
      description:
        'Smart factory network implementation for manufacturing plant, enabling real-time equipment monitoring, predictive maintenance, and production optimization through industrial IoT.',
      link: '/services/networks',
      image: '/images/manufacturing.jpg',
      technologies: ['Industrial Ethernet', 'SCADA', 'PLC', '5G'],
      category: 'Manufacturing',
    },
    {
      name: 'Government Data Center',
      description:
        'Secure government data center network with multi-layer security, data sovereignty compliance, and high-availability architecture for critical national infrastructure.',
      link: '/services/networks',
      image: '/images/government.jpg',
      technologies: ['Cisco ACI', 'F5 Load Balancers', 'ISMS', 'Tier 3'],
      category: 'Government',
    },
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Network <span className="text-blue-600">Infrastructure</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Robust networking solutions powering enterprises with secure, scalable, and
          high-performance connectivity across diverse industries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {networkingProjects.map((project, index) => (
          <Projects
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
            image={project.image}
            technologies={project.technologies}
            category={project.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Networking
