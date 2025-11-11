import MainLayout from "@/components/mainLayout";
import { Label } from "@/components/ui/label";
import React from "react";
import ServiceCard from "../../_components/serviceCard";
import ServiceTop from "../../_components/serviceTop";
import Hero from "../../_components/hero";

function CloudComputing() {
  return (
    <div>
      <Hero backImage="cyber2.jpg" image="" />
      <ServiceTop
        image="cyber.webp"
        title="Cyber Security"
        description="Cyber security solutions are technological tools and services that help protect organizations against cyber attacks, which can result in application downtime, theft of sensitive data, damage to reputation, compliance fines, and other adverse consequences."
        description2="With over 30 years of experience helping thousands of businesses like yours withstand cyber threats and protect valuable data, we’re confident in our ability to help you improve your network security."
      />
      <div className="p-8">
        <Label className="text-2xl font-bold mt-6">Cyber Security</Label>
      </div>
      <div className="p-8 grid grid-cols-3 gap-8">
        {/* <ServiceCard />
                <ServiceCard />
                <ServiceCard /> */}
      </div>
    </div>
  );
}

export default CloudComputing;
