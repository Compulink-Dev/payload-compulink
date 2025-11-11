import Image from 'next/image'
import React from 'react'

function ServiceTop({ title, description, description2, image }: any) {
    return (
        <div className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 p-8">
                <div className="">
                    <Image src={`/images/${image}`} className='h-52 w-full rounded' alt='' width={100} height={100} />
                </div>
                <div className="col-span-2">
                    <p className="font-bold text-2xl">{title}</p>
                    <p className="text-slate-400 mt-8">
                        {description}
                    </p>
                    <p className="text-slate-400 mt-2">
                        {description2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTop