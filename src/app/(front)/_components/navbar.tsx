"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
    let links = [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Services", link: "/services" },
        { name: "Events", link: "/events" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact Us", link: "/contact" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-lg w-full fixed top-0 left-0 z-50">
            <div className="md:flex items-center justify-between bg-white py-4  md:px-10 px-7">
                <Image src={"/images/logo.png"} alt="Compulink" height={100} width={200} />
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {open ? <IoMdClose /> : <IoMdMenu />}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static bg-white  x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px]"
                        } `}
                >
                    {links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
                            <a
                                href={link.link}
                                className="text-gray-800 hover:text-red-600 duration-400 focus:text-red-600 active:text-red-600"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
