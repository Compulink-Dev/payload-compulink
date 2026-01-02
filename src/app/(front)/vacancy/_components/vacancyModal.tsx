'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { VacancyApplyModal } from './vacancyApplyModal'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Download, MapPin, DollarSign, Award, Briefcase } from 'lucide-react'
import { format } from 'date-fns'

interface VacancyModalProps {
  vacancy: {
    _id: string
    position: string
    status: string
    duration: string
    imageUrl: string
    description?: string
    qualifications?: string[]
    skills?: string[]
    experience?: string
    category?: string
    location?: string
    salary?: string
    createdAt?: string
  }
  onClose: () => void
}

export function VacancyModal({ vacancy, onClose }: VacancyModalProps) {
  const [imageError, setImageError] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A'
    try {
      return format(new Date(dateString), 'PPP')
    } catch {
      return 'N/A'
    }
  }

  const handleDownload = () => {
    // Create a text content for download
    const content = `
Position: ${vacancy.position}
Status: ${vacancy.status}
Duration: ${vacancy.duration}
Posted: ${formatDate(vacancy.createdAt)}
Location: ${vacancy.location || 'Not specified'}
Salary: ${vacancy.salary || 'Competitive'}

Description:
${vacancy.description || 'No description provided'}

Experience Required:
${vacancy.experience || 'Not specified'}

Qualifications:
${vacancy.qualifications?.map((q) => `• ${q}`).join('\n') || 'None specified'}

Skills Required:
${vacancy.skills?.map((s) => `• ${s}`).join('\n') || 'None specified'}
    `.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${vacancy.position.replace(/\s+/g, '-').toLowerCase()}-details.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Dialog open={!!vacancy} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl">{vacancy.position}</DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant={vacancy.status === 'open' ? 'default' : 'secondary'}>
                    {vacancy.status.charAt(0).toUpperCase() + vacancy.status.slice(1)}
                  </Badge>
                  <span className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {vacancy.duration}
                  </span>
                  {vacancy.location && (
                    <span className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      {vacancy.location}
                    </span>
                  )}
                  {vacancy.salary && (
                    <span className="flex items-center text-sm">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {vacancy.salary}
                    </span>
                  )}
                </DialogDescription>
              </div>
              {vacancy.createdAt && (
                <div className="text-xs text-gray-500">Posted: {formatDate(vacancy.createdAt)}</div>
              )}
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Image Section */}
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-gray-100">
              {!imageError ? (
                <Image
                  src={vacancy.imageUrl || '/images/default-vacancy.jpg'}
                  alt={vacancy.position}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Position Image</p>
                  </div>
                </div>
              )}
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                {/* Description */}
                {vacancy.description && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="mr-2">📝</span>
                      Job Description
                    </h3>
                    <div className="text-gray-700 bg-gray-50 p-4 rounded-lg whitespace-pre-line">
                      {vacancy.description}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {vacancy.experience && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Experience Required
                    </h3>
                    <div className="text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      {vacancy.experience}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Qualifications */}
                {vacancy.qualifications?.length ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Qualifications
                    </h3>
                    <ul className="space-y-2">
                      {vacancy.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Skills */}
                {vacancy.skills?.length ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Skills Required
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {vacancy.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gray-50 hover:bg-gray-100"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t">
              <div className="flex gap-3">
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Details
                </Button>
                <Button onClick={() => window.print()} variant="outline">
                  Print
                </Button>
              </div>

              <div className="flex gap-3">
                {vacancy.status === 'open' ? (
                  <Button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Apply Now
                  </Button>
                ) : (
                  <Button disabled variant="outline">
                    Position Closed
                  </Button>
                )}
                <Button onClick={onClose} variant="ghost">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Apply Modal */}
      <VacancyApplyModal
        vacancy={vacancy}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  )
}
