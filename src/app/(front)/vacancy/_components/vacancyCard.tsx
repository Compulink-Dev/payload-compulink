// app/vacancy/_components/vacancyCard.tsx
'use client'

import { Button } from '@/components/ui/button'
import { VacancyApplyModal } from './vacancyApplyModal'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react'

interface VacancyCardProps {
  vacancy: {
    _id: string
    position: string
    status: string
    duration: string
    imageUrl: string
    category?: string
    location?: string
    salary?: string
  }
  onClick: () => void
}

export function VacancyCard({ vacancy, onClick }: VacancyCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-red-100 text-red-800'
      case 'coming soon':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={vacancy.imageUrl || '/images/career-default.jpg'}
          alt={vacancy.position}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${getStatusColor(vacancy.status)} font-medium`}>
            {vacancy.status}
          </Badge>
        </div>
        {vacancy.category && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {vacancy.category}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              onClick={onClick}
              className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              size="sm"
            >
              Quick View
            </Button>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {vacancy.position}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{vacancy.duration}</span>
          </div>
          {vacancy.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{vacancy.location}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        {vacancy.salary && (
          <div className="mb-3">
            <span className="text-lg font-semibold text-green-600">{vacancy.salary}</span>
          </div>
        )}
        <p className="text-sm text-gray-600 line-clamp-2">
          Exciting opportunity for a talented professional to join our dynamic team...
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="outline" size="sm" onClick={onClick} className="group/details">
            View Details
            <ArrowRight className="ml-1 h-3 w-3 group-hover/details:translate-x-1 transition-transform" />
          </Button>
          <VacancyApplyModal />
        </div>
      </CardFooter>
    </Card>
  )
}
