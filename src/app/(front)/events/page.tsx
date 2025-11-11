import React from "react";
import MainLayout from "@/components/mainLayout";
import Event from "./_components/event";
import EventCards from "./_components/eventCards";
import EventCard from "./_components/eventCard";
import Hero from "../_components/hero";

async function Events() {
  return (
    <div>
      <Hero backImage="class1.jpg" image="" />
      <EventCard />
      <div className=" w-full h-full ">
        <h1 className="text-center text-3xl my-8">All Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-10 gap-4">
          <EventCards />
        </div>
      </div>
    </div>
  );
}

export default Events;
