import React from "react";
import { TbWorld } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegFileCode } from "react-icons/fa";

function AboutSection() {
    return (
        <>
            <div className="bg-fixed bg-[url('/AI.jpg')] h-screen bg-cover w-full object-">
                <div className="bg-black h-screen opacity-80">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x-4 py-10 ">
                        <div className="flex items-center justify-center w-96 gap-4 text-white py-2">
                            <TbWorld size={"3rem"} color="	#FF7F7F" />
                            <p className="text-3xl font-semibold">Our Mission</p>
                        </div>
                        <div className="col-span-2">
                            <p className="flex items-center justify-center pt-2 px-6 text-center text-white ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Impedit dolorem, incidunt voluptatem, magnam ducimus officia
                                aliquid illum sint unde laborum nemo mollitia quis error
                                recusandae dolor. Ullam non illum fugiat?
                            </p>
                        </div>
                    </div>
                    <hr className="my-4 w-[98%] mx-auto" />
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x-4 py-10 ">
                        <div className="flex items-center justify-center w-96 gap-4 text-white py-2">
                            <GiNetworkBars size={"3rem"} color=" #FF7F7F" />
                            <p className="text-3xl font-semibold">Our Vision</p>
                        </div>
                        <div className="col-span-2">
                            <p className="flex items-center justify-center pt-2 px-6 text-center text-white ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Impedit dolorem, incidunt voluptatem, magnam ducimus officia
                                aliquid illum sint unde laborum nemo mollitia quis error
                                recusandae dolor. Ullam non illum fugiat?
                            </p>
                        </div>
                    </div>
                    <hr className="my-4  w-[98%] mx-auto" />
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x-4 py-10 ">
                        <div className="flex items-center justify-center w-96 gap-4 text-white py-2">
                            <FaRegFileCode size={"3rem"} color=" #FF7F7F" />
                            <p className="text-3xl font-semibold">Our Strategies</p>
                        </div>
                        <div className="col-span-2">
                            <p className="flex items-center justify-center pt-2 px-6 text-center text-white ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Impedit dolorem, incidunt voluptatem, magnam ducimus officia
                                aliquid illum sint unde laborum nemo mollitia quis error
                                recusandae dolor. Ullam non illum fugiat?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSection;
