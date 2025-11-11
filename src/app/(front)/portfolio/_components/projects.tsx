import FillButton from "@/components/fillButton";
import LinkButton from "@/components/linkButton";
import Image from "next/image";
import React from "react";


function Projects({ name, description, link, image }: any) {
    return (
        <div className="md:flex w-[100%] h-full bg-white hover:shadow-2xl border rounded-lg">
            <Image
                className="w-30 md:w-30 h-30 object-contain mx-auto rounded"
                src={`${image}`}
                alt=""
                height={200}
                width={200}
            />

            <div className="p-8 max-w-sm">
                <h2 className="text-xl font-semibold py-2">
                    <span className="font-semibold">{name}</span>
                </h2>
                <p className="text-sm text-slate-500">
                    {description}
                </p>
                <div className="flex py-2">
                    <LinkButton name={"Read more"} link={link} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
