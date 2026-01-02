'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { VacancyApplyModal } from './vacancyApplyModal'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Clock, DollarSign, ArrowRight, Briefcase } from 'lucide-react'

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
    experience?: string
    description?: string
  }
  onClick: () => void
}

export function VacancyCard({ vacancy, onClick }: VacancyCardProps) {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return {
          bg: 'bg-green-500',
          text: 'text-green-800',
          border: 'border-green-200',
          variant: 'default' as const,
        }
      case 'closed':
        return {
          bg: 'bg-red-500',
          text: 'text-red-800',
          border: 'border-red-200',
          variant: 'destructive' as const,
        }
      case 'draft':
        return {
          bg: 'bg-yellow-500',
          text: 'text-yellow-800',
          border: 'border-yellow-200',
          variant: 'outline' as const,
        }
      default:
        return {
          bg: 'bg-gray-500',
          text: 'text-gray-800',
          border: 'border-gray-200',
          variant: 'secondary' as const,
        }
    }
  }

  const truncateText = (text: string | undefined, maxLength: number = 100) => {
    if (!text) return 'No description available'
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const statusColors = getStatusColor(vacancy.status)

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border hover:border-blue-300 group overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          {!imageError ? (
            <Image
              src={vacancy.imageUrl || '/images/default-vacancy.jpg'}
              alt={vacancy.position}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
              <Briefcase className="h-16 w-16 text-gray-400" />
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              className={`${statusColors.bg} text-white font-semibold border-0`}
              variant={statusColors.variant}
            >
              {vacancy.status === 'open' ? 'Hiring Now' : vacancy.status}
            </Badge>
          </div>

          {/* Category Badge */}
          {vacancy.category && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-800">
                {vacancy.category}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-2 pt-6">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
            {vacancy.position}
          </h3>
        </CardHeader>

        <CardContent className="flex-grow pb-4">
          {/* Details Row */}
          <div className="space-y-3 mb-4">
            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{vacancy.duration}</span>
            </div>

            {/* Location */}
            {vacancy.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{vacancy.location}</span>
              </div>
            )}

            {/* Salary */}
            {vacancy.salary && (
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-green-700">{vacancy.salary}</span>
              </div>
            )}

            {/* Experience */}
            {vacancy.experience && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{vacancy.experience}</span>
              </div>
            )}
          </div>

          {/* Description Preview */}
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600 line-clamp-3">
              {truncateText(vacancy.description, 120)}
            </p>
          </div>
        </CardContent>

        <CardFooter className="pt-0 border-t mt-auto">
          <div className="flex justify-between items-center w-full pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onClick}
              className="group/details hover:bg-blue-50"
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/details:translate-x-1 transition-transform" />
            </Button>

            {vacancy.status === 'open' ? (
              <Button
                size="sm"
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Apply Now
              </Button>
            ) : (
              <Button size="sm" variant="outline" disabled>
                Position Closed
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Apply Modal */}
      <VacancyApplyModal
        vacancy={vacancy}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  )
}
