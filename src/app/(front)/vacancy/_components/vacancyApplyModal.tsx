// app/vacancy/_components/vacancyApplyModal.tsx
'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import { Upload, FileText, User, Mail, Phone } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  coverLetter: z.string().optional(),
  cv: z
    .any()
    .refine((files) => files?.length > 0, 'CV is required')
    .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, 'Max file size is 5MB')
    .refine(
      (files) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(files?.[0]?.type),
      'Only .pdf, .doc, and .docx formats are supported',
    ),
})

type FormData = z.infer<typeof formSchema>

export function VacancyApplyModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [fileName, setFileName] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const cvFile = watch('cv')

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('coverLetter', data.coverLetter || '')
      formData.append('cv', data.cv[0])

      // Replace with your actual API endpoint
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to submit application')

      toast.success('Your application has been submitted successfully!')
      setIsOpen(false)
      reset()
      setFileName('')
    } catch (error) {
      console.error('Failed to submit application:', error)
      toast.error('Failed to submit application. Please try again.')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
          <FileText size={16} />
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Apply for Position</DialogTitle>
          <DialogDescription>
            Fill in your details and upload your documents to apply for this position.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <User size={16} />
              Personal Information
            </h3>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" {...register('name')} placeholder="Enter your full name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" {...register('phone')} placeholder="+263 XXX XXX XXX" />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter" className="flex items-center gap-2 mb-2">
              <FileText size={16} />
              Cover Letter (Optional)
            </Label>
            <Textarea
              id="coverLetter"
              {...register('coverLetter')}
              placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* CV Upload */}
          <div>
            <Label htmlFor="cv" className="flex items-center gap-2 mb-2">
              <Upload size={16} />
              Upload CV *
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                {...register('cv')}
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="cv" className="cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600">
                  {fileName ? (
                    <span className="text-blue-600 font-medium">{fileName}</span>
                  ) : (
                    <>
                      Click to upload your CV
                      <br />
                      <span className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</span>
                    </>
                  )}
                </div>
              </Label>
            </div>
            {errors.cv && (
              <p className="text-red-500 text-sm mt-2">{errors.cv.message as string}</p>
            )}
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
