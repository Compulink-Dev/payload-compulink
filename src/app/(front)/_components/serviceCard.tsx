import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceCard({ title, image, description, link }: any) {
    return (
        <div className=''>
            <Card>
                <CardHeader className='font-bold text-lg'>{title}</CardHeader>
                <CardContent>
                    <div className="">
                        <Image src={`/images/${image}`} className='h-52 w-full rounded' alt='' width={100} height={100} />
                    </div>
                    <div className="pt-4 text-slate-500 text-sm">{description}</div>
                </CardContent>
                <CardFooter>
                    <Link href={`/services/${link}`} className=''>
                        <Button className='bg-blue-800 hover:bg-blue-600 text-white'>View details</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ServiceCard