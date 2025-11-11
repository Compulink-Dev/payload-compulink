import MainLayout from "@/components/mainLayout";
import React from "react";
import LinkButton from "@/components/linkButton";
import Hero from "../_components/hero";

function BookMeeting() {
  return (
    <div>
      <Hero backImage="hardware.jpg" image="" />
      <div className="">
        <div className="h-full py-8 my-8 w-full flex justify-center items-center">
          <div className="h-full w-2/3 md:w-2/4 p-8 rounded-lg border border-red-500">
            <p className="font-bold text-xl text-center py-2">Book a meeting</p>
            <div className="flex flex-col mt-6 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                <p className="font-bold text-sm col-span-1">Name</p>
                <input className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                <p className="font-bold text-sm col-span-1">Email</p>
                <input className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                <p className="font-bold text-sm col-span-1">
                  Business Category
                </p>
                <input className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                <p className="font-bold text-sm col-span-1">Meeting Platform</p>
                <input className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
              </div>
              <div className="flex items-end">
                <LinkButton name={"Book Now"} link={""} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-2xl text-blue-600 font-semibold uppercase">
                        Where You Can Find Us
                    </h1>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.238405686132!2d31.091223209710314!3d-17.82435713330818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb255ddd6075%3A0x39ffae6e040af2f5!2s313%20A5%2C%20Harare!5e0!3m2!1sen!2szw!4v1704783507714!5m2!1sen!2szw"
                            width="600"
                            height="450"
                            className=''
                            style={{ border: "0" }}
                            //@ts-ignore\
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default BookMeeting;
