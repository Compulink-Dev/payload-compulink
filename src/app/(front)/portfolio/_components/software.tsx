import React from 'react'
import Projects from './projects'

function Software() {
  const softwareProjects = [
    {
      name: 'CoinSwap',
      description:
        'Revolutionary digital currency exchange platform addressing cash flow challenges and financial inclusion. Features real-time trading, secure wallet integration, and multi-currency support with advanced fraud detection systems.',
      link: '/services/software',
      image: '/images/coinswap.jpeg',
      technologies: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
      category: 'FinTech',
    },
    {
      name: 'E-Store Platform',
      description:
        'Comprehensive e-commerce solution supporting B2B, B2C, and C2C transactions. Includes inventory management, AI-powered recommendations, secure payment gateways, and omnichannel retail capabilities.',
      link: '/services/software',
      image: '/images/ecommerce.jpeg',
      technologies: ['Next.js', 'Stripe', 'Redis', 'AWS'],
      category: 'E-Commerce',
    },
    {
      name: 'E-Learning Suite',
      description:
        'Advanced learning management system with virtual classrooms, AI-driven content personalization, progress analytics, and collaborative tools for educational institutions and corporate training.',
      link: '/services/software',
      image: '/images/e-learn.jpeg',
      technologies: ['Vue.js', 'Python', 'WebRTC', 'PostgreSQL'],
      category: 'EdTech',
    },
    {
      name: 'HR Intelligence Platform',
      description:
        'Digital employee experience platform enhancing collaboration, communication, and performance management. Features include automated workflows, talent analytics, and integrated performance tracking.',
      link: '/services/software',
      image: '/images/crm.jpeg',
      technologies: ['Angular', 'Spring Boot', 'AI/ML', 'MySQL'],
      category: 'HR Tech',
    },
    {
      name: 'Healthcare Management',
      description:
        'Integrated healthcare platform for patient management, electronic health records, telemedicine, and medical billing. Ensures HIPAA compliance and seamless healthcare delivery.',
      link: '/services/software',
      image: '/images/healthcare.jpg',
      technologies: ['React Native', 'Django', 'HL7', 'Firebase'],
      category: 'HealthTech',
    },
    {
      name: 'Smart Agriculture',
      description:
        'IoT-based agricultural management system for precision farming, crop monitoring, automated irrigation, and supply chain optimization for modern farming enterprises.',
      link: '/services/software',
      image: '/images/agriculture.jpg',
      technologies: ['IoT', 'React', 'Python', 'Cloud'],
      category: 'AgriTech',
    },
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Software <span className="text-blue-600">Innovations</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cutting-edge software solutions transforming businesses across industries with modern
          technologies and user-centric design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {softwareProjects.map((project, index) => (
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

export default Software
