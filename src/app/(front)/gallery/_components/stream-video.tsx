"use client"; // if you're using the App Router

import React from "react";

const StreamedVideo = () => {
  return (
    <div className="grid grid-cols-2 w-full my-4">
      <video
        controls
        className="w-full h-auto rounded-lg shadow-md"
        poster="/poster.jpg" // Optional: Add a poster image if available
      >
        <source
          src="https://nuop3dj38j.ufs.sh/f/AQUC7xhOxFC857sXzoOmH93y8UYIRutLVKnElqPwrpMhadTk"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-start px-4">
        <h1 className="text-lg font-bold my-2">ZITF-COMPULINK MOBILE FINALE</h1>
        <p className="text-gray-700">
          This video showcases the highlights of the Compulink Mobile Finale at
          the ZITF event. Experience the innovation and technology that
          Compulink brings to the table.
        </p>
      </div>
    </div>
  );
};

export default StreamedVideo;
