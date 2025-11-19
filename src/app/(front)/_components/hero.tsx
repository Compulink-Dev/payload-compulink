import LinkButton from '@/components/link-button'
import { ChevronRight } from 'lucide-react'
import React from 'react'

function Hero({ backImage, image }: { backImage: string; image: string }) {
  return (
    <div
      style={{
        backgroundImage: `url("/images/${backImage}")`,
        backgroundPosition: 'center',
      }}
      className=" h-[600px] text-white flex mt-4 items-center px-8 w-full"
    >
      <div className="">
        <section className="">
          <div className="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Building digital products & brands.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Here at Compulink we focus on markets where technology, innovation, and capital can
                unlock long-term value and drive economic growth.
              </p>
              <div className="flex items-center gap-1">
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:text-slate-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Get started
                  <ChevronRight className="pl-2" />
                </a>
                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Speak to Sales
                            </a> */}
                <LinkButton name="Speak to Sales" link="/contact" />
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={`${image}`} />
              {/* <img src="/images/computer2.jpg" alt="" className="rounded-2xl shadow-lg" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
