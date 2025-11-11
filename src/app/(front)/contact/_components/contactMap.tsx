"use client";
import dynamic from "next/dynamic";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiHome, FiPhoneCall } from "react-icons/fi";
import { useLoadScript } from "@react-google-maps/api";
import Maps from "./maps";

const Info = ({ icon, title, info1, info2 }: any) => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-10 items-center mt-4 md:mt-8 text-white">
      <div className="">{icon}</div>
      <div className="">
        <p className="text-lg md:text-3xl font-bold">{title}</p>
        <p className="text-xs md:text-sm">{info1}</p>
        <p className="text-xs md:text-sm">{info2}</p>
      </div>
    </div>
  );
};

function ContactMap() {
  const { isLoaded } = useLoadScript({
    //@ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="h-[500px] w-full bg-orange-100 my-8 flex justify-center items-center relative">
      <Maps />
      <div className="h-full bg-blue-900 w-[200px] md:w-[400px] absolute  -top-8 rounded-lg p-4">
        <Info
          icon={<FiHome className="text-4xl " />}
          title="Main office"
          info1={"313 Samora Machel Ave, Eastlea Harare"}
          info2={"Harare, Zimbabwe"}
        />
        <Info
          icon={<FiHome className="text-4xl " />}
          title="Bulawayo office"
          info1={
            "22 Princess Park Mansions Samuel Parirenyatwa Street/ Leopold Takawira Avenue Bulawayo"
          }
          info2={"Bulawayo, Zimbabwe"}
        />
        <Info
          icon={<MdOutlineMail className="text-4xl" />}
          title={"Email address"}
          info1={"Email :info@compulink.co.zw"}
          info2={"Email :sales@compulink.co.zw"}
        />
        <Info
          icon={<FiPhoneCall className="text-4xl" />}
          title={"Our phone"}
          info1={"Call (Bulawayo)  : +(263) 29 277 794"}
          info2={"Call (Harare) : +(263) 24 249 4407"}
        />
      </div>
    </div>
  );
}

export default ContactMap;
