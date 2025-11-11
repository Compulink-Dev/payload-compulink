import React from "react";
import MainLayout from "@/components/mainLayout";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import Hero from "@/app/(front)/_components/hero";

function TechnicalPage() {
  return (
    <div>
      <Hero backImage="software.webp" image="" />
      <div className="p-8">
        <p className="mb-4 font-bold text-2xl">Title</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            src={"/images/oldMutual.jpeg"}
            width={200}
            height={200}
            alt=""
            className="w-full h-[300px]"
          />
          <div className="col-span-2">
            <p className="">Title</p>
            <div className="flex items-center gap-2">
              <Globe height={14} width={14} className="text-slate-400" />
              <Link href={""}>Old Mutual</Link>
            </div>
            <p className="">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalPage;
