import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BringToFront, Globe, ScanEye, Target, Users, Lightbulb } from 'lucide-react'

export function AccordionTabs() {
  const items = [
    {
      value: 'item-1',
      icon: <Target className="text-blue-400" />,
      title: 'Our Mission',
      content:
        'To innovate cutting-edge technologies that meet evolving needs and transform experiences through digital excellence. We are committed to values such as excellence, integrity, sustainability, and advancing the IT industry while embracing diversity and fostering innovation.',
    },
    {
      value: 'item-2',
      icon: <ScanEye className="text-green-400" />,
      title: 'Our Vision',
      content:
        "To lead Zimbabwe's technology landscape by pioneering innovative solutions in software development, networking, and cybersecurity. We aspire to create a digital-first world where technology enhances human potential, fosters sustainable growth, and connects communities for a better tomorrow.",
    },
    {
      value: 'item-3',
      icon: <BringToFront className="text-purple-400" />,
      title: 'Our Strategy',
      content:
        'Achieving technological leadership through strategic partnerships, continuous R&D, and market expansion. We optimize our offerings through digital transformation initiatives, cloud adoption, and cybersecurity frameworks. By embracing AI and emerging technologies, we aim to sustain long-term growth while delivering exceptional value to our clients.',
    },
    {
      value: 'item-4',
      icon: <Users className="text-orange-400" />,
      title: 'Our Values',
      content:
        'Excellence in delivery, integrity in partnerships, innovation in solutions, and sustainability in growth. We believe in collaborative success, continuous learning, and making a positive impact on the communities we serve through technology empowerment and digital inclusion.',
    },
    {
      value: 'item-5',
      icon: <Lightbulb className="text-yellow-400" />,
      title: 'Our Innovation',
      content:
        "Driving digital transformation through research-driven solutions, agile methodologies, and future-ready technologies. We invest in emerging trends like AI, IoT, and blockchain to create solutions that not only solve today's challenges but also anticipate tomorrow's opportunities.",
    },
  ]

  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Philosophy</h2>
          <p className="text-xl text-gray-300">
            Driving innovation through purpose, vision, and strategic excellence
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-4 border border-gray-700 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="py-6 px-6 hover:bg-gray-800 transition-colors">
                <div className="flex gap-4 text-xl items-center">
                  <div className="p-2 bg-gray-800 rounded-lg">{item.icon}</div>
                  <p className="font-bold text-left">{item.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-8 pb-6 text-lg text-gray-300 leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
