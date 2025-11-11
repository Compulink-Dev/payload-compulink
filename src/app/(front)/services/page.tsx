"use client";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import MainLayout from "@/components/mainLayout";
import { Button } from "@/components/ui/button";
import Service from "../_components/service";
import { motion } from "framer-motion";
import Hero from "../_components/hero";

function Services() {
  return (
    <div>
      <Hero backImage="software.webp" image="" />
      <div className="py-6">
        <div className="w-full h-full">
          <div className="flex flex-col ">
            <div className="py-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col h-96 items-center justify-center px-8">
                  <h1 className="uppercase text-3xl text-blue-800  font-semibold p-4">
                    Our Services
                  </h1>
                  <p className="text-gray-600 text-center">
                    Offering a variety of services ,Managed Services are also
                    provided by Compulink Systems through a Tier 3 Data Centre
                    offering cloud services. The Data Centre hosts services on a
                    secure Private Cloud Platform leveraging on leading ISPs to
                    ensure availability at all times.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 -translate-y-24">
              <div className="flex flex-col items-start ">
                <div className="flex gap-2 px-4 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Innovative Software Development</h1>
                </div>
                <div className="flex gap-2 px-4 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Innovative Software Development</h1>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="flex gap-2 px-4 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Innovative Software Development</h1>
                </div>{" "}
                <div className="flex gap-2 px-4 items-center">
                  <GoDotFill className="text-blue-500" />
                  <h1 className="">Innovative Software Development</h1>
                </div>
              </div>
              <div className="px-4">
                <div className="w-[121px] shadow-2xl">
                  <Button>Read more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4">
          <div className="px-10 md:pl-20">
            <div className="w-7  overflow-hidden inline-block">
              <div className=" h-12  bg-blue-700 rotate-45 transform origin-top-right"></div>
            </div>
            <h1 className="-translate-y-4 text-2xl font-semibold text-blue-700 ">
              Request This Service
            </h1>
            <hr className="border-[1.5px] border-blue-700" />
            <h1 className="py-2 text-3xl font-normal">Need A Website?</h1>
            <p className="py-4 text-gray-700">
              We offer solutions ranging in the given scope ( AI, Data Science
              Solutions, API INTEGRATION, WEB & MOBILE SOLUTIONS, CHATBOTS,
              PIPELINE DEVELOPMENT). Use of the software is important for
              automation of the organisations tasks as well as reporting the
              progress or lags in the organisations activities.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/AI.jpg"}
              height={700}
              width={500}
              alt=""
              className="rounded"
            />
          </div>
        </div>
        <Service />
      </div>
    </div>
  );
}

export default Services;
