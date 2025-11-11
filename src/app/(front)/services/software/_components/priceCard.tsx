import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'
import { PriceModal } from './priceModal'

// const lists = [
//     {
//         id: 1,
//         title: "Details"
//     },
//     {
//         id: 2,
//         title: "Details 2"
//     },
//     {
//         id: 3,
//         title: "Details 3"
//     },
//     {
//         id: 4,
//         title: "Details 4"
//     }
// ]


function PriceCard({ title, subtitle, price, lists }: any) {
    return (
        <div className=''>
            <Card>
                <CardHeader className='font-bold text-lg'>{title}</CardHeader>
                <CardContent>
                    <div className=" text-slate-500">{subtitle}</div>
                    <div className="pt-4 text-slate-800 font-bold">{`$${price}`}</div>
                    <PriceModal title={title} />
                    <Separator className='mt-4' />
                    <div className="mt-4">
                        <ul className="list-disc px-4">
                            {
                                lists?.map((list: any) => (
                                    <li
                                        style={{ listStyle: "initial" }}
                                        key={list.id}
                                        className="mb-1 text-slate-600">
                                        {list.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PriceCard