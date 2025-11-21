import LinkButton from '@/components/link-button'
import getEvents from '@/lib/events/getEvents'
import { MapPin, Calendar, Clock, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { EventModal } from './eventModal'

async function EventCard() {
  const events = await getEvents()

  return (
    <>
      {events?.slice(0, 1).map((event: any, index: any) => (
        <div key={index} className="bg-gradient-to-br from-gray-50 to-white -translate-y-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 font-semibold">
                Featured Event
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {` Don't miss out on our latest gatherings and experiences`}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="relative h-full min-h-[500px] flex items-center justify-center p-8">
                    <Image
                      className="rounded-2xl shadow-lg"
                      src="/images/event.png"
                      width={600}
                      height={600}
                      alt={event.title}
                      priority
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {event.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="bg-blue-500 text-white">
                          Limited Seats
                        </Badge>
                        <span className="text-sm text-gray-500">• Register Now</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {event.title}
                      </h1>
                      <p className="text-gray-600 text-lg leading-relaxed mt-4">
                        {event.description}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-4">Event Details</h3>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <MapPin className="w-5 h-5 text-blue-500" />
                            <div>
                              <p className="font-semibold text-gray-900">Location</p>
                              <p className="text-gray-600">{event.venue}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <Calendar className="w-5 h-5 text-blue-500" />
                            <div>
                              <p className="font-semibold text-gray-900">Date</p>
                              <p className="text-gray-600">{event.date}</p>
                            </div>
                          </div>
                        </div>

                        {event.time && (
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 flex-1">
                              <Clock className="w-5 h-5 text-blue-500" />
                              <div>
                                <p className="font-semibold text-gray-900">Time</p>
                                <p className="text-gray-600">{event.time}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <EventModal />
                      <LinkButton
                        name="View Full Details"
                        link="/"
                        className="flex-1 justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 group/btn"
                      >
                        View Full Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard

export const dynamic = 'force-dynamic'
