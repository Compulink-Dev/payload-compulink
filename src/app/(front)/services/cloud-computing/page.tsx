import MainLayout from "@/components/mainLayout";
import { Label } from "@/components/ui/label";
import React from "react";
import ServiceCard from "../../_components/serviceCard";
import ServiceTop from "../../_components/serviceTop";
import Hero from "../../_components/hero";

function CloudComputing() {
  return (
    <div>
      <Hero backImage="net.jpg" image="" />
      <ServiceTop
        image="host.webp"
        title="Cloud Computing"
        description="Cloud technology can centralize the data capture, storage, and interpretation processes."
        description2="It can also reduce the costs associated with these critical processes and generate far richer, more precise, faster data-led insights, which banks can use to drive performance"
      />
      <div className="p-8">
        <Label className="text-2xl font-bold mt-6">Cloud Computing</Label>
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
