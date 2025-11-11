import LinkButton from "@/components/linkButton";
import { Button } from "@/components/ui/button";
import React from "react";

function Promotion() {
    return (
        <div className="bg-fixed bg-[url('/images/banner.jpg')]">
            <div className="bg-scroll bg-black w-full h-full  bg-opacity-70">
                <div className="m-10 py-10">
                    <h1 className="text-xl uppercase text-blue-500 font-semibold">
                        COMPU<span className="text-red-600">LINK </span>
                        Promotion
                    </h1>
                    <p className="w-96 md:w-[530px] text-white py-3 font-bold text-2xl   md:text-4xl">
                        COMPU<span className="text-red-600">LINK </span> PROMOTION Why Not
                        Check Out These Resources to Help You Security Solution
                    </p>
                    <p className="text-white md:w-[700px] w-96 py-2">
                        Cyber security solutions are technological tools and services that
                        help protect organizations against cyber attacks, which can result
                        in application downtime, theft of sensitive data, damage to
                        reputation, compliance fines, and other adverse consequences.
                    </p>
                    <div className="w-40">
                        <LinkButton link="/" name="Get started" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
