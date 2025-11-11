import { Button } from '@/components/ui/button'
import getGalleries from '@/lib/gallery/getGalleries'
import Image from 'next/image'
import React from 'react'

async function GalleryCard() {

    const galleries = await getGalleries()

    return (
        <>
            {
                galleries.map((item: any) => (
                    <div
                        key={item.title}
                        className="w-full h-full border rounded"
                    >
                        <Image
                            src="/images/gallery.gif"
                            height={400}
                            width={500}
                            alt={item.projectName}
                            className="w-96 h-56 object-contain"
                        />
                        <div className="p-2">
                            <h1 className="uppercase text-sm font-semibold">
                                Technology
                                <hr className="border bg-blue-700 py-[0.8px] w-24" />
                            </h1>
                            <p className="text-2xl font-bold">{item.projectName}</p>
                            <p className="text-ellipsis overflow-hidden py-2 text-gray-600">
                                {item.description}
                            </p>
                            <p className="text-gray-700">
                                By <span className="text-black">{item.company}</span> -{" "}
                                {/* {dateFormat(item.createdAt)} */}
                            </p>
                            <Button className="bg-blue-700 hover:bg-blue-500 my-2">View More</Button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default GalleryCard