'use client'
import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const PartnerCard = ({ image, link }: { image: string; link: string }) => {
  return (
    <Link href={link} target="_blank">
      <Card className="border-border hover:border-primary transition-colors">
        <CardContent className="flex aspect-video items-center justify-center p-4">
          <img className="max-h-16 max-w-full object-contain" src={image} alt="Partner logo" />
        </CardContent>
      </Card>
    </Link>
  )
}

function HomeCarousel() {
  const partners = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png',
      link: 'https://www.dahuasecurity.com/',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VkffqvcxY2jI0eKAHdFUlpZWoAcmWBSZ8goKYP73&s',
      link: 'https://www.lenovo.com/za/en/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoqcvsmFl0IkCBrjarP5DRdVhxZZ0rKad8bXb8uQ2Z97j18c6dTI',
    },
    {
      image: 'https://www.freepnglogos.com/uploads/linux-png/linux-logo-linux-17.png',
      link: 'https://www.linux.org/',
    },
    {
      image:
        'https://www.hikvision.com/content/dam/hikvision/uk/marketing-portal/logos/hikvision/Hikvision%20Logo.PNG',
      link: 'https://www.hikvision.com/africa/',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kzsWcjMwN15Lj4pgmAFz1lrkG5ok_ESdz45WTXnt&s',
      link: 'https://www.molex.com/en-us/home',
    },
    {
      image: 'https://ccnytech.com/wp-content/uploads/2016/12/Fortinet-logo.png',
      link: 'https://www.fortinet.com/',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Sophos_logo.png',
      link: 'https://www.sophos.com/en-us',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Symantec_logo10.svg/2560px-Symantec_logo10.svg.png',
      link: 'https://www.broadcom.com/products/cybersecurity',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF9PggA4k79rtJEBQDpi0wX8HQFlgga6PwpoxY6jd&s',
      link: 'https://www.vmware.com/',
    },
  ]

  return (
    <div className="my-8 mx-4">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-center text-2xl text-blue-600 font-semibold uppercase">Our partners</h1>
        <hr className="w-20 border-t-2 border-gray-800 mt-2" />
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-2">
                <PartnerCard image={partner.image} link={partner.link} />
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

export default HomeCarousel
