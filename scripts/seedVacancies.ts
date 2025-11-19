import mongoose from 'mongoose'
import VacancyModel from '../src/lib/models/VacancyModel'

const dummyVacancies = [
  {
    position: 'Senior Software Engineer',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/software.webp',
    description: 'We are seeking an experienced Senior Software Engineer to join our development team. You will be responsible for designing and implementing scalable software solutions, mentoring junior developers, and contributing to architectural decisions.',
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      '5+ years of professional software development experience',
      'Strong knowledge of modern web technologies',
      'Experience with cloud platforms (AWS, Azure, or GCP)'
    ],
    skills: [
      'JavaScript/TypeScript',
      'React/Next.js',
      'Node.js',
      'MongoDB/PostgreSQL',
      'Git',
      'CI/CD'
    ],
    experience: '5+ years'
  },
  {
    position: 'Network Administrator',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/hardware.jpg',
    description: 'Join our IT infrastructure team as a Network Administrator. You will manage and maintain our enterprise network infrastructure, ensure optimal performance, and implement security best practices.',
    qualifications: [
      "Bachelor's degree in Information Technology or related field",
      '3+ years of network administration experience',
      'Industry certifications (CCNA, CompTIA Network+)',
      'Strong troubleshooting and problem-solving skills'
    ],
    skills: [
      'Cisco networking',
      'Network security',
      'VPN configuration',
      'Firewall management',
      'Linux/Windows server',
      'TCP/IP'
    ],
    experience: '3-5 years'
  },
  {
    position: 'Cybersecurity Analyst',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/AI.jpg',
    description: 'We are looking for a Cybersecurity Analyst to protect our systems and data from cyber threats. You will monitor security systems, conduct vulnerability assessments, and respond to security incidents.',
    qualifications: [
      "Bachelor's degree in Cybersecurity or related field",
      '2+ years of experience in cybersecurity',
      'Professional certifications (Security+, CEH, CISSP)',
      'Understanding of security frameworks and compliance'
    ],
    skills: [
      'SIEM tools',
      'Penetration testing',
      'Incident response',
      'Risk assessment',
      'Security compliance',
      'Ethical hacking'
    ],
    experience: '2-4 years'
  },
  {
    position: 'Cloud Solutions Architect',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/web.webp',
    description: 'As a Cloud Solutions Architect, you will design and implement cloud infrastructure solutions for our clients. You will work with various cloud platforms and ensure scalability, security, and cost-effectiveness.',
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      '4+ years of cloud architecture experience',
      'Cloud certifications (AWS Solutions Architect, Azure Architect)',
      'Experience with infrastructure as code'
    ],
    skills: [
      'AWS/Azure/GCP',
      'Terraform',
      'Kubernetes',
      'Docker',
      'DevOps practices',
      'Microservices'
    ],
    experience: '4-6 years'
  },
  {
    position: 'IT Support Technician',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/support.webp',
    description: 'Join our support team as an IT Support Technician. You will provide technical assistance to end-users, troubleshoot hardware and software issues, and maintain IT equipment.',
    qualifications: [
      'Diploma or degree in IT or related field',
      '1-2 years of IT support experience',
      'Strong customer service skills',
      'Basic networking knowledge'
    ],
    skills: [
      'Windows/Mac OS',
      'Hardware troubleshooting',
      'Active Directory',
      'Office 365',
      'Remote support tools',
      'Ticketing systems'
    ],
    experience: '1-2 years'
  },
  {
    position: 'Junior Web Developer',
    status: 'Open',
    duration: 'Full-time',
    imageUrl: '/images/comm2.jpg',
    description: 'We are seeking a motivated Junior Web Developer to join our web development team. This is an excellent opportunity for a recent graduate or someone early in their career to grow their skills.',
    qualifications: [
      "Bachelor's degree in Computer Science or related field, or equivalent experience",
      'Portfolio of web development projects',
      'Basic understanding of web technologies',
      'Eagerness to learn and grow'
    ],
    skills: [
      'HTML/CSS',
      'JavaScript',
      'React basics',
      'Git',
      'Responsive design',
      'RESTful APIs'
    ],
    experience: '0-1 year'
  }
]

async function seedVacancies() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/payload-compulink'
    await mongoose.connect(mongoUri)
    
    console.log('Connected to MongoDB')
    
    // Clear existing vacancies (optional)
    await VacancyModel.deleteMany({})
    console.log('Cleared existing vacancies')
    
    // Insert dummy vacancies
    const result = await VacancyModel.insertMany(dummyVacancies)
    console.log(`Successfully seeded ${result.length} vacancies`)
    
    // Display seeded vacancies
    result.forEach(vacancy => {
      console.log(`- ${vacancy.position} (${vacancy.status})`)
    })
    
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.error('Error seeding vacancies:', error)
    process.exit(1)
  }
}

// Run the seed function
seedVacancies()
