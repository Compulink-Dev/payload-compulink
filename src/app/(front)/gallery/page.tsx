// import React from "react";
// import MainLayout from '@/components/mainLayout';
// import GalleryCard from './_components/galleryCard'
// import GalleryList from "./_components/galleries";

// function Gallery() {
//     return (
//         <MainLayout backImage='hardware.jpg' image=''>
//             <div className="grid grid-cols-1 md:grid-cols-3 py-10">
//                 <div className="p-10 col-span-1">
//                     <h1 className="text-6xl uppercase font-semibold text-blue-900">
//                         Latest <br />
//                     </h1>
//                     <span className="text-3xl uppercase font-semibold text-blue-900">
//                         Technologies
//                     </span>
//                     <p className="text-gray-700 py-4">
//                         Delivering unmatched service is what we live for. We create a
//                         culture of care and service where our customer comes first. .
//                     </p>
//                 </div>
//                 <div className="col-span-2 gap-6 ">
//                     <div className="flex flex-wrap gap-10 px-8">
//                         <GalleryList />
//                     </div>
//                 </div>

//             </div>
//             <div className="col-span-2 gap-6 ">
//                 <div className="p-8">
//                     <p className="font-bold text-2xl">All Galleries</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-8">
//                     <GalleryCard />
//                 </div>
//             </div>
//             {/* <div className="flex flex-wrap items-center justify-center gap-10 py-10 ">
//                 <div className="py-10">
//                     <LinkButton name={"View More"} link={""} />
//                 </div>
//             </div> */}
//         </MainLayout>
//     );
// }

// export default Gallery;

import React from "react";

import MainLayout from "@/components/mainLayout";
import VideoTab from "./_components/video-tabs";
import GalleryCard from "./_components/gallery-card";
import Hero from "../_components/hero";

function Gallery() {
  return (
    <div>
      <Hero backImage="hardware.jpg" image="" />
      <div className="">
        <div className="p-8">
          <div className="">
            <VideoTab />
          </div>
          <div className="">
            <GalleryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
