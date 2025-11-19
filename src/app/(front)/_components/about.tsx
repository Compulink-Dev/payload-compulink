import Image from 'next/image'
import React from 'react'
import LinkButton from '@/components/link-button'
import { Dot } from 'lucide-react'

function About() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2">
      <div className="flex flex-col items-center justify-center pt-12">
        <Image
          src={'/images/ab.gif'}
          alt="compulink gif"
          height={500}
          width={500}
          className=" p-6 h-[450px]  w-[600px] object-cover  rounded-2xl"
        />
      </div>
      <div className="flex flex-col px-10 py-8">
        <h1 className="font-semibold text-blue-500 text-lg uppercase">Our Story</h1>
        <p className="text-start text-2xl  font-bold">
          Compulink Systems has been in the IT Ecosystem for 30 Years.
        </p>
        <p className="py-2">
          In these years Compulink Systems has managed to deliver high standard products and
          services to various institutions in the service scope of networking services, cyber
          security, software services and hardware supply.
        </p>
        <div className="px-20">
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <Dot className="text-blue-500" />
            <h1 className="">Innovative Software Development</h1>
          </div>
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <Dot className="text-blue-500" />
            <h1 className="">Software & System Integrationt</h1>
          </div>{' '}
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <Dot className="text-blue-500" />
            <h1 className="">Network Infrastructure</h1>
          </div>{' '}
          <div className="flex gap-2 py-2 pl-14 items-center -translate-x-[132px]">
            <Dot className="text-blue-500" />
            <h1 className="">Server Setup</h1>
          </div>
        </div>
        <p className="text-slate-400">
          Building a brighter future with technology, ensuring every entity is polished with
          technology!
        </p>
        <div className="mt-4">
          <LinkButton link="/portfolio" name="Read more" />
        </div>
      </div>
    </div>
  )
}

export default About
