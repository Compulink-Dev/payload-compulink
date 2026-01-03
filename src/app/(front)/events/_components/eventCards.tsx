import LinkButton from '@/components/link-button'
import { Button } from '@/components/ui/button'
import getEvents from '@/lib/events/getEvents'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

async function EventCards() {
  const events = await getEvents()

  // Handle no events case
  if (!events || events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="bg-gray-50 rounded-2xl p-8 max-w-md w-full">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Available</h3>
          <p className="text-gray-600 mb-4">
            There are currently no upcoming events. Check back soon for updates!
          </p>
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            Notify Me
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      {events.map((event: any) => (
        <div
          key={event.id}
          className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
        >
          <div className="relative overflow-hidden">
            <Image
              src={
                typeof event.imageUrl === 'object'
                  ? event.imageUrl?.url || '/placeholder.jpg'
                  : event.imageUrl
              }
              height={280}
              width={400}
              alt={event.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm text-gray-800 font-medium"
              >
                {event.category || 'Event'}
              </Badge>
            </div>
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{event.description}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{event.venue}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{event.date}</span>
              </div>
              {event.time && (
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{event.time}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-100">
              {event.link === null ? (
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <LinkButton
                  name="View Details"
                  link={`${event.link}`}
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 group/btn"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </LinkButton>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCards
