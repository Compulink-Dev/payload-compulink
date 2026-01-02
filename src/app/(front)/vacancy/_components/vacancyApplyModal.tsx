'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Upload, Send, Loader2, CheckCircle } from 'lucide-react'

interface VacancyApplyModalProps {
  vacancy: {
    _id: string
    position: string
  }
  isOpen: boolean
  onClose: () => void
}

export function VacancyApplyModal({ vacancy, isOpen, onClose }: VacancyApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required'
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('vacancyId', vacancy._id)
      formDataToSend.append('position', vacancy.position)
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('coverLetter', formData.coverLetter)
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      // Replace with your API endpoint
      const response = await fetch('/api/vacancies/apply', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          onClose()
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            resume: null,
          })
        }, 2000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setErrors({ submit: 'Failed to submit application. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, resume: 'File size must be less than 5MB' })
        return
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ]
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, resume: 'Only PDF and DOC files are allowed' })
        return
      }

      setFormData({ ...formData, resume: file })
      setErrors({ ...errors, resume: '' })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <DialogTitle className="text-2xl mb-2">Application Submitted!</DialogTitle>
            <DialogDescription>
              Thank you for applying for the {vacancy.position} position. We will review your
              application and contact you soon.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Apply for {vacancy.position}</DialogTitle>
              <DialogDescription>
                Please fill in your details and upload your resume.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value })
                    setErrors({ ...errors, fullName: '' })
                  }}
                  placeholder="John Doe"
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      setErrors({ ...errors, email: '' })
                    }}
                    placeholder="john@example.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      setErrors({ ...errors, phone: '' })
                    }}
                    placeholder="+1234567890"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF/DOC) *</Label>
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="resume-upload"
                    className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <Upload className="h-4 w-4" />
                    {formData.resume ? formData.resume.name : 'Choose file'}
                  </Label>
                  <Input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {errors.resume && <p className="text-sm text-red-500">{errors.resume}</p>}
                <p className="text-xs text-gray-500">Max file size: 5MB</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => {
                    setFormData({ ...formData, coverLetter: e.target.value })
                    setErrors({ ...errors, coverLetter: '' })
                  }}
                  placeholder="Tell us why you're the perfect candidate..."
                  rows={4}
                  className={errors.coverLetter ? 'border-red-500' : ''}
                />
                {errors.coverLetter && <p className="text-sm text-red-500">{errors.coverLetter}</p>}
              </div>

              {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

              <DialogFooter className="gap-2 sm:gap-0">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
