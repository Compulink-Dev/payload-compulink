'use client'
import LinkButton from '@/components/linkButton';
import { ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react'


function HeroCarousel() {

    useEffect(() => {
        const init = async () => {
            const { Carousel, initTWE } = await import("tw-elements");
            initTWE({ Carousel });
        };
        init();
    }, []);

    return (
        <div
            id="carouselExampleSlidesOnly"
            className="relative mt-16 md:mt-12"
            data-twe-carousel-init
            data-twe-ride="carousel"
            data-twe-interval="4000"
        >

            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item
                    data-twe-carousel-active>
                    <div className="relative text-white inline-block w-full h-full">
                        <img
                            src="/images/web9.webp"
                            className="block h-[400px] md:h-full w-full"
                            alt="Camera" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <section className="">
                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                    <div className="mr-auto  place-self-center lg:col-span-7">
                                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                            Building digital products & brands.
                                        </h1>
                                        <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                            Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <a href="/portfolio" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                                Get started
                                                <ChevronRight className='pl-2' />
                                            </a>
                                            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Speak to Sales
                            </a> */}
                                            <LinkButton name='Speak to Sales' link='/contact' />
                                        </div>
                                    </div>
                                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                        <img src={``} />
                                        {/* <img src="/images/computer2.jpg" alt="" className="rounded-2xl shadow-lg" /> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="block w-full"
                        alt="Wild Landscape" /> */}
                </div>

                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item>
                    <div className="relative inline-block w-full h-full">
                        <img
                            src="/images/web5.webp"
                            className="block w-full h-[400px] md:h-full "
                            alt="Camera" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <section className="">
                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                                            Building digital products & brands.
                                        </h1>
                                        <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                            Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <a href="/portfolio" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                                Get started
                                                <ChevronRight className='pl-2' />
                                            </a>
                                            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Speak to Sales
                            </a> */}
                                            <LinkButton name='Speak to Sales' link='/contact' />
                                        </div>
                                    </div>
                                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                        <img src={``} />
                                        {/* <img src="/images/computer2.jpg" alt="" className="rounded-2xl shadow-lg" /> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-item>
                    <div className="relative inline-block w-full h-full">
                        <img
                            src="/images/web3.webp"
                            className="block w-full h-[400px] md:h-full "
                            alt="Camera" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <section className="">
                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                                            Building digital products & brands.
                                        </h1>
                                        <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                            Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <a href="/portfolio" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                                Get started
                                                <ChevronRight className='pl-2' />
                                            </a>
                                            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Speak to Sales
                            </a> */}
                                            <LinkButton name='Speak to Sales' link='/contact' />
                                        </div>
                                    </div>
                                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                        <img src={``} />
                                        {/* <img src="/images/computer2.jpg" alt="" className="rounded-2xl shadow-lg" /> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroCarousel