import React from 'react'
import { CardWithForm } from '@/components/card-with-form'

function Parnters() {
  return (
    <div className="py-4">
      <div className=" text-center">
        <h1 className="text-lg text-center pt-8 uppercase md:text-2xl text-blue-500">
          Have Been Trusted
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold py-4">Trusted By Experts</h2>
        <p className="p-10">
          Delivering unmatched service is what we live for. We create a culture of care and service
          where our customer comes first.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center px-8 md:px-0  gap-8">
        <CardWithForm
          //   link={
          //     "https://companieslogo.com/img/orig/OMU.JO_BIG-5d5b6185.png?t=1657183124"
          //   }
          name={'Networking Infrastructure'}
          link={'/services/network'}
        />
        <CardWithForm
          //   link={
          //     "https://www.chronicle.co.zw/wp-content/uploads/sites/3/2013/07/Econet-logo.png"
          //   }
          name={'Software Solutions'}
          link={'/services/software'}
        />
        <CardWithForm
          //   link={"https://www.zimplats.com/data/2020/04/zimplatslogo.png"}
          name={'Hardware Solutions'}
          link={'/services/hardware'}
        />
      </div>
    </div>
  )
}

export default Parnters
