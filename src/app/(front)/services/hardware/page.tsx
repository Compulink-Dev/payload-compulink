import React from "react";
import Hero from "../../_components/hero";
import { Label } from "@/components/ui/label";
import ServiceTop from "../../_components/serviceTop";

function Hardware() {
  return (
    <div>
      <Hero backImage="hardware.jpg" image="" />
      <div className="p-8">
        <Label className="text-2xl font-bold mt-6">Hardware</Label>
      </div>
      <div className="">
        <ServiceTop
          image="hardware.jpeg"
          title="Hardware"
          description="Hardware refers to the external and internal devices and equipment that enable you to perform major functions such as input, output, storage, communication, processing, and more. There are two types of computer hardware: external and internal."
          description2="External hardware devices include monitors, keyboards, printers, and scanners, whereas internal hardware devices include motherboards, hard drives, and RAM"
        />
      </div>
      <div className="p-8">
        <Label className="text-2xl font-bold mt-6">Hardware</Label>
      </div>
      <div className="p-8 grid grid-cols-3 gap-8">
        {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
      </div>
    </div>
  );
}

export default Hardware;
