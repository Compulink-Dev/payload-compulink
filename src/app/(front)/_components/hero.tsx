import { Button } from '@/components/ui/button'
import { ChevronRight, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroProps {
  backImage: string
  image?: string
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showStats?: boolean
  showBadge?: boolean
  badgeText?: string
  overlayIntensity?: 'light' | 'medium' | 'dark'
  textAlign?: 'left' | 'center'
  height?: 'small' | 'medium' | 'large' | 'full'
}

function Hero({
  backImage,
  image,
  title = 'Building digital products & brands',
  subtitle = 'Innovation & Excellence',
  description = 'Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/portfolio',
  secondaryButtonText = 'Speak to Sales',
  secondaryButtonLink = '/contact',
  showStats = true,
  showBadge = true,
  badgeText = 'Innovation & Excellence',
  overlayIntensity = 'medium',
  textAlign = 'left',
  height = 'large',
}: HeroProps) {
  // Height mappings
  const heightClasses = {
    small: 'h-[400px] md:h-[450px]',
    medium: 'h-[500px] md:h-[550px]',
    large: 'h-[600px] md:h-[650px] lg:h-[700px]',
    full: 'min-h-screen',
  }

  // Overlay intensity mappings
  const overlayClasses = {
    light: 'bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-blue-900/30',
    medium: 'bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-900/40',
    dark: 'bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/50',
  }

  // Text alignment classes
  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  }

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={`/images/${backImage}`}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dynamic overlay based on intensity */}
        <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} />
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
          <div
            className={`grid lg:grid-cols-12 gap-8 h-full items-center pt-20 md:pt-24 ${textAlignClasses[textAlign]}`}
          >
            {/* Text Content */}
            <div
              className={`lg:col-span-7 space-y-6 text-white ${textAlign === 'center' ? 'mx-auto max-w-4xl' : ''}`}
            >
              {/* Badge */}
              {showBadge && (
                <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="font-medium">{badgeText}</span>
                </div>
              )}

              {/* Subtitle */}
              {subtitle && (
                <p className="text-lg md:text-xl text-blue-300 font-semibold uppercase tracking-wide">
                  {subtitle}
                </p>
              )}

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                {title.split(' ').map((word, index, array) => (
                  <span
                    key={index}
                    className={
                      word.toLowerCase().includes('compulink') || index === array.length - 1
                        ? 'text-blue-400'
                        : ''
                    }
                  >
                    {word}
                    {index < array.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </h1>

              {/* Description */}
              {description && (
                <p
                  className={`text-lg md:text-xl text-gray-100 leading-relaxed ${textAlign === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}
                >
                  {description}
                </p>
              )}

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-4 ${textAlign === 'center' ? 'justify-center' : ''}`}
              >
                {primaryButtonText && primaryButtonLink && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-base group"
                  >
                    <Link href={primaryButtonLink}>
                      {primaryButtonText}
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base"
                  >
                    <Link href={secondaryButtonLink}>
                      {secondaryButtonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>

              {/* Stats or Trust Indicators */}
              {showStats && (
                <div
                  className={`flex flex-wrap gap-8 pt-8 ${textAlign === 'center' ? 'justify-center' : ''}`}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">30+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">500+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">99%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">24/7</div>
                    <div className="text-sm text-gray-300">Support Available</div>
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              {textAlign === 'center' && (
                <div className="pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-300 mb-4">Trusted by industry leaders</p>
                  <div className="flex flex-wrap justify-center gap-6 opacity-80">
                    {['CABS', 'Old Mutual', 'Government', 'Healthcare', 'Education', 'Finance'].map(
                      (industry) => (
                        <div key={industry} className="flex items-center gap-1 text-white/70">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{industry}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Image (Optional) */}
            {image && (
              <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
                <div className="relative w-full h-96 xl:h-[500px]">
                  <Image
                    src={image}
                    alt="Hero image"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Fade (only for non-full height) */}
      {height !== 'full' && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      )}

      {/* Scroll Indicator (for full height) */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
