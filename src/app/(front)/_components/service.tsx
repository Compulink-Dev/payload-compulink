import React from "react";
import { MdOutlineSecurity, MdNetworkCheck } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { FcSalesPerformance } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import LinkButton from "@/components/linkButton";


export function ServiceCard({ icon, name, description, link }: any) {
    return (
        <div className=" flex w-full flex-col items-center h-auto md:h-96 border-2 pb-4 md:pb-0 border-blue-900 rounded-lg">
            <div className="py-6 pt-2 text-red-800">{icon}</div>
            <h1 className="text-red-700 font-semibold text-center text-xl">{name}</h1>
            <p className="px-4 text-gray-700 py-2">{description}</p>
            <LinkButton link={link} name={'Explore'} />
        </div>
    );
}


function Service() {
    return (
        <div className="bg-scroll bg-gradient-to-r from-gray-100 bg-opacity h-full w-full text-gray-700 py-6">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center   uppercase text-xl font-semibold md:text-2xl py-4">
                    Our Services
                </h1>
                <h2 className="text-3xl md:text-4xl text-blue-800 font-bold w-96 md:w-[500px] py-6 text-center">
                    Bringing Technology from the horizon
                </h2>
                <p className="text-center text-gray-700 w-96 md:w-[600px]">
                    Delivering unmatched service is what we live for. We create a culture
                    of care and service where our customer comes first. .
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 mx-14">
                    <ServiceCard
                        icon={<FaCloudDownloadAlt size={"2.5rem"} color="red" />}
                        name={"Cloud Computing"}
                        description={
                            "Cloud technology can centralize the data capture, storage, and interpretation processes. It can also reduce the costs associated with these critical processes and generate far richer, more precise, faster data-led insights, which banks can use to drive performance. "
                        }
                        link='/services/cloud-computing'
                    />
                    <ServiceCard
                        icon={<MdNetworkCheck size={"2.5rem"} color="red" />}
                        name={"Networking"}
                        description={
                            "Networking, also known as computer networking, is the practice of transporting and exchanging data between nodes over a shared medium in an information system. Networking comprises not only the design, construction and use of a network, but also the management, maintenance and operation of the network infrastructure, software and policies."
                        }
                        link='/services/networks'
                    />
                    <ServiceCard
                        icon={<CgSoftwareDownload size={"2.5rem"} color="red" />}
                        name={"Software Development"}
                        description={
                            "We offer solutions ranging in the given scope ( ARTIFICIAL INTELLIGENCE, DATA SCIENCE SOLUTIONS, API INTEGRATION, WEB & MOBILE SOLUTIONS, CHATBOTS, PIPELINE DEVELOPMENT). Use of the software is important for automation of the organisations tasks as well as reporting the progress or lags in the organisations activities."
                        }
                        link='/services/software'
                    />
                    <ServiceCard
                        icon={<MdOutlineSecurity size={"2.5rem"} color="red" />}
                        name={"Cyber Security"}
                        description={
                            "Cyber security solutions are technological tools and services that help protect organizations against cyber attacks, which can result in application downtime, theft of sensitive data, damage to reputation, compliance fines, and other adverse consequences."
                        }
                        link='/services/cyber-security'
                    />
                    <ServiceCard
                        icon={<FcSalesPerformance size={"2.5rem"} color="red" />}
                        name={"Sales"}
                        description={
                            "Sales is a term used to describe the activities that lead to the selling of goods or services. Businesses have sales organizations that are broken up into different teams. And these sales teams are often determined based on the region they're selling to, the product or service they're selling, and the target customer."
                        }
                        link='sales'
                    />
                </div>
            </div>
        </div>
    );
}

export default Service;
