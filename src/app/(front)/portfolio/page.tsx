import React from "react";
import Services from "./_components/services";
import Software from "./_components/software";
import Networking from "./_components/network";
import { AccordionTabs } from "./_components/accordion";
import Hero from "../_components/hero";
import Service from "../_components/service";

function Portfolio() {
  return (
    <div>
      <Hero backImage="web5.webp" image="" />
      <div className=" flex flex-col items-center justify-center w-full py-14 px-8  md:px-32">
        <h1 className=" pb-10 text-center text-3xl text-blue-700 font-semibold">
          <div className=" relative translate-x-52 translate-y- w-5  overflow-hidden inline-block">
            {/* <div className=" h-10  bg-blue-800 -rotate-45 transform origin-top-left"></div> */}
          </div>
          Who Are We?
          <hr className="border-x-4 border-gray-300 my-1" />
        </h1>

        <p>
          In these years Compulink Systems has managed to deliver high standard
          products and services to various institutions in the service scope of
          networking services, cyber security, software services and hardware
          supply.
        </p>
      </div>
      <div className="bg-slate-900 text-white">
        <AccordionTabs />
      </div>
      {/* <AboutSection /> */}
      <Services />
      <Service />
      <h1 className="text-center text-3xl font-semibold pt-10 text-blue-700">
        Projects
      </h1>
      <Software />
      <Networking />
    </div>
  );
}

export default Portfolio;
