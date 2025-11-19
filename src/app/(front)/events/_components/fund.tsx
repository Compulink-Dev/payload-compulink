import React from 'react'
import Image from 'next/image'
import LinkButton from '@/components/link-button'
import { LocateIcon, Timer } from 'lucide-react'

const getEvents = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/events`, {})
    if (!res.ok) {
      throw new Error('Failed to fetch events')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function EventCard() {
  const { events = [] } = (await getEvents()) || {}
  return (
    <>
      {events.map((event: any) => (
        <div key={event._id} className=" flex md:flex gap-4 w-[100%] h-96 border rounded mt-10">
          <Image
            src={event.imageUrl}
            height={400}
            width={300}
            alt=""
            className="h-72 w-72 rounded object-contain mx-3 my-10"
          />
          <div className="flex-col items-center justify-center p-8 ">
            <h1 className="text-lg font-semibold pb-8">{event.title}</h1>
            <p className="text-gray-500 pb-8 truncate  h-44 w-44">{event.description}</p>
            <div className="flex justify-center items-center gap-2 text-sm text-white">
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <LocateIcon />
                <p className="text-slate-700">{event.venue}</p>
              </div>
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <Timer />
                <p className="text-slate-800">{event.date}</p>
              </div>
            </div>
            <div className="w-28 py-4">
              <LinkButton name={'Read more'} link={'https://www.evolveictsummit.com/'} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard
