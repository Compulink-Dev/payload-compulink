import LinkButton from '@/components/linkButton'
import { Button } from '@/components/ui/button'
import getEvents from '@/lib/events/getEvents'
import { LocateIcon, Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

async function EventCards() {

    const events = await getEvents()

    return (
        <>
            {events.map((event: any) => (
                <div
                    key={event._id}
                    className=" flex flex-col md:flex gap-4 w-full full border rounded mt-10"
                >
                    <Image
                        src={event.imageUrl}
                        height={400}
                        width={300}
                        alt=""
                        className="h-full w-full rounded object-contain"
                    />
                    <div className="flex-col items-center justify-center p-8 ">
                        <h1 className="text-lg  font-semibold pb-4">{event.title}</h1>
                        <p className="text-gray-500 pb-4 truncate">
                            {event.description}
                        </p>
                        <div className="flex justify-start items-center gap-2 text-sm text-white">
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
                            {
                                event.link === null
                                    ?
                                    <Button>View more</Button>
                                    :
                                    <LinkButton name={"Read more"} link={`${event.link}`} />
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default EventCards