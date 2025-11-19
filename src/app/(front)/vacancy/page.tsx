// app/vacancy/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { VacancyCard } from './_components/vacancyCard'
import { VacancyModal } from './_components/vacancyModal'
import Hero from '../_components/hero'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Briefcase, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Vacancy {
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
}

export default function VacancyPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([])
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch('/api/vacancies')
        const data = await response.json()
        setVacancies(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error fetching vacancies:', error)
        setVacancies([])
      } finally {
        setLoading(false)
      }
    }

    fetchVacancies()
  }, [])

  const categories = ['All', ...new Set(vacancies.map((v) => v.category).filter(Boolean))]

  const filteredVacancies = vacancies.filter((vacancy) => {
    const matchesSearch =
      vacancy.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vacancy.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || vacancy.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <Hero
        backImage="support.webp"
        image=""
        title="Career Opportunities"
        subtitle="Join Our Team of Technology Innovators"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Join <span className="text-blue-600">Our Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {`Explore exciting career opportunities at Compulink Systems and be part of a team that's shaping the future of technology in Zimbabwe.`}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{vacancies.length}</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Departments</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 items-center">
                <Filter className="h-4 w-4 text-gray-400 mr-2" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(`${category}`)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600 flex items-center justify-end">
                {filteredVacancies.length} position(s) found
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vacancies Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading career opportunities...</p>
            </div>
          </div>
        ) : filteredVacancies.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-gray-50 rounded-2xl"
          >
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Positions Available</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm || selectedCategory !== 'All'
                ? 'No positions match your current filters. Try adjusting your search criteria.'
                : "We don't have any open positions at the moment. Please check back later or follow us on social media for updates."}
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVacancies.map((vacancy, index) => (
              <motion.div
                key={vacancy._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <VacancyCard vacancy={vacancy} onClick={() => setSelectedVacancy(vacancy)} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{`Can't Find Your Perfect Role?`}</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              {`We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities that match your skills and experience.`}
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Submit General Application
            </Button>
          </div>
        </motion.div>

        {selectedVacancy && (
          <VacancyModal vacancy={selectedVacancy} onClose={() => setSelectedVacancy(null)} />
        )}
      </div>
    </div>
  )
}
