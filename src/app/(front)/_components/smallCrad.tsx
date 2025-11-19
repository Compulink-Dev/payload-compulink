import LinkButton from '@/components/link-button'
import React from 'react'

interface SmallCardProps {
  icon: React.ReactNode
  name: string
  link: string
  description: string
}

function SmallCard({ icon, name, link, description }: SmallCardProps) {
  return (
    <div className=" flex flex-col items-center  w-64 h-72 border-4 border-blue-700 bg-blue-950 rounded-lg">
      <div className="py-6 text-white">{icon}</div>
      <h1 className="text-white font-semibold text-center text-xl">{name}</h1>
      <p className="px-4 text-gray-300 py-2">{description}</p>
      <LinkButton link={`/services/${link}`} name={name} />
    </div>
  )
}

export default SmallCard
