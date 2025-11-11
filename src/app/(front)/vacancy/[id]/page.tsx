import { CarouselSize } from '@/components/carousel'
import MainLayout from '@/components/mainLayout'
import { Separator } from '@/components/ui/separator'
import { Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function VacancyPage() {
    return (
        <MainLayout backImage='class1.jpg' image=''>
            <div className='w-full p-8'>
                <p className="mb-4 font-bold text-2xl">Position</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image
                        alt=''
                        src={'/images/cloud.webp'}
                        width={200}
                        height={200}
                        className='w-full h-[300px]'
                    />
                    <div className="col-span-2">
                        <p className="">Position</p>
                        <div className="flex gap-2 items-center">
                            <Timer width={14} height={14} />
                            <p className="">Duration</p>
                        </div>
                        <p className="">Description</p>
                        <Separator className='w-full my-2' />
                        <div className="">
                            <p className="">Qualification</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default VacancyPage