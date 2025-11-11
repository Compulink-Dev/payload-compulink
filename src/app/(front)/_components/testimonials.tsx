"use client";
import React from "react";
import "swiper/css";
import { Button } from "@/components/ui/button";
import Testimonies from "./testimonies";
import Link from "next/link";

function Testimonials() {
  return (
    <div className="bg-scroll bg-[url('/images/support.webp')] sticky h-full object-cover ">
      <div className="bg-scroll bg-blue-950  py-20 bg-opacity-75">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Testimonies />
          <div className="flex flex-col items-start justify-center mx-8 py-8">
            <h1 className="text-blue-500 uppercase text-xl font-semibold md:text-2xl">
              Testimonials
            </h1>
            <h2 className="text-white text-2xl md:text-6xl font-bold">
              What Client Says
            </h2>
            <p className="text-gray-400 text-lg py-4">
              Working with Compulink has been a game-changer for our business.
              Their deep expertise in hardware, software, and networking
              solutions ensured that we received a comprehensive and tailored
              approach to our tech needs. From upgrading our infrastructure to
              optimizing our software stack and streamlining our network, their
              team demonstrated exceptional knowledge and support at every step.
            </p>
            <p className="text-gray-400 text-lg pb-4">
              Their commitment to excellence and innovation has significantly
              enhanced our operational efficiency and performance. I highly
              recommend{" "}
              <span className="">
                <Link href={"https://compulink.co.zw/"}>Compulink</Link>
              </span>{" "}
              to anyone seeking reliable and cutting-edge tech solutions.
            </p>
            <Button className="bg-blue-800 hover:bg-blue-600 text-white">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
