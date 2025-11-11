import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div>
            <div className="py-4 grid grid-cols-1 md:grid-cols-4">
                <div className="px-4 ">
                    <Image src={"/images/logo.png"} alt="" width={300} height={300} className="my-4" />
                    <div>
                        <p>
                            Technology is about building solutions in partnership with the
                            society
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-400 text-white">
                                <Link href={''}>
                                    <Facebook size={20} />
                                </Link>
                            </div>
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-600 text-white">
                                <Link href={''}>
                                    <Twitter size={20} />
                                </Link>
                            </div>
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-500 hover:bg-purple-600 text-white">
                                <Link href={''}>
                                    <Instagram size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col md:flex-row justify-start gap-8 md:gap-36 ml-8 items-start">
                    <div>
                        <p className="font-semibold text-lg">Quick Links</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <Link
                                href={"/"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Home
                            </Link>
                            <Link
                                href={"/projects"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Projects
                            </Link>
                            <Link
                                href={"/events"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Events
                            </Link>
                            <Link
                                href={"/events"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Updates & News
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">More</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <Link
                                href={"/ticket"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Log Ticket
                            </Link>
                            <Link
                                href={"/booking-meeting"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Book Meeting
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">Services</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <Link
                                href={"/services/software"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Software Services
                            </Link>
                            <Link
                                href={"/services/networks"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Networking Services
                            </Link>
                            <Link
                                href={"/services/cloud-computing"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Cloud Computing
                            </Link>
                            <Link
                                href={"/services/cyber-security"}
                                className="text-gray-500 text-sm hover:text-blue-500 hover:border-b-0 border-blue-500 "
                            >
                                Cyber Security
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-800 text-white h-16 flex items-center justify-center">
                <p className="text-xs">
                    Copyright © 2024 Compulink Systems. All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
