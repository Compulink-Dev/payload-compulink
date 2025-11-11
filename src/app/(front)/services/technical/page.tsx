import MainLayout from "@/components/mainLayout";
import React from "react";
import ServiceCard from "../../_components/serviceCard";
import { Label } from "@/components/ui/label";
import ServiceTop from "../../_components/serviceTop";
import Hero from "../../_components/hero";

function Technical() {
  return (
    <div>
      <Hero backImage="support.webp" image="" />
      <ServiceTop
        image="support.webp"
        title="Technical Support"
        description="ICT support technicians provide technical support and assistance for users of computer infrastructure and web technologies. They also undertake diagnosis and resolution of technical problem"
        description2=" They may work directly within the communication technology industry, in the public service, or for companies in a range of industries, located across the state, such as agriculture, mining or transport. These workers answer queries from users via telephone, email, chat room or instant message, identify technical problems and possible solutions, then compile reports about this, as well as enter information into databases and liaise with colleagues in the rectification of common problem"
      />
      <div className="p-8">
        <Label className="text-2xl font-bold mt-6">Technical Support</Label>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          image={"oldMutual.jpeg"}
          title="Old Mutual Database Backup"
          link="technical/old-mutual"
          description="Database backup is the process of creating a copy of a company's master and transaction data files. As consumers, we need extra supplies when our typical resources aren't usable. For instance, in case of a blackout, one would want candles, flashlights, and canned goods."
        />
      </div>
    </div>
  );
}

export default Technical;
