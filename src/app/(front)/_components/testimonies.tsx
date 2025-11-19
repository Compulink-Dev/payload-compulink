//@ts-nocheck
'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { testimonies } from '@/lib/constants/data'
import Autoplay from 'embla-carousel-autoplay'

export default function Testimonies() {
  return (
    <div className="w-full h-full">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonies.map((testimony: any) => (
            <CarouselItem key={testimony.id} className="basis-full">
              <div className="p-4">
                <Card className="bg-background border-border">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <figure className="text-center">
                      <svg
                        className="w-10 h-10 mx-auto mb-3 text-muted-foreground"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <blockquote>
                        <p className="italic font-medium text-foreground bg-muted p-4 rounded-lg m-4">
                          {testimony.description}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-300">
                          <cite className="pe-3 font-medium text-foreground">{testimony.name}</cite>
                          <cite className="ps-3 text-sm text-muted-foreground">
                            {testimony.type}
                          </cite>
                        </div>
                      </figcaption>
                    </figure>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
