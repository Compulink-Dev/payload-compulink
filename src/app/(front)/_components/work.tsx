import React from 'react'
import SmallCard from './smallCrad'
import LinkButton from '@/components/link-button'
import { Download, LockIcon, Network } from 'lucide-react'

function Work() {
  return (
    <div className="bg-scroll bg-[url('/images/banner.jpg')] sticky h-full  object-cover ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-start pl-10 pt-20">
          <h1 className="text-lg md:text-xl text-blue-400 uppercase font-semibold ">
            Why choose us
          </h1>
          <h2 className="py-4 text-white text-4xl font-bold">
            Technical Features <br></br>From COMPU
            <span className="text-red-600 uppercase">link</span>
          </h2>
          <p className="text-white pr-4">
            A world class Information System Integration House, offering solid solutions backed by
            service excellence that exceeds customer expectations.
          </p>
          <div className="pt-6">
            <LinkButton link="/" name="Read more" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 py-10">
          <SmallCard
            icon={<LockIcon size={'2.5rem'} color="gray" />}
            name={'Cyber Security'}
            description={'Ransomware Prevention Kit - Prevent, detect and restore.'}
            link="cyber-security"
          />
          <SmallCard
            icon={<Network size={'2.5rem'} color="gray" />}
            name={'Networking'}
            description={
              'Computer networking enables employees to share ideas more easily and work more efficiently. '
            }
            link="networks"
          />
          <SmallCard
            icon={<Download size={'2.5rem'} color="gray" />}
            name={'Cloud Computing'}
            description={
              'It allows organizations to scale, maintain flexibility, and focus their efforts on business operations.'
            }
            link="cloud-computing"
          />
          <SmallCard
            icon={<Download size={'2.5rem'} color="gray" />}
            name={'Software Development'}
            description={
              'Offering  custom based software services and solutions to every business scale.'
            }
            link="software"
          />
        </div>
      </div>
    </div>
  )
}

export default Work
