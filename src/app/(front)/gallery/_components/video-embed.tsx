"use client"; // if using App Router

import React from "react";

const VideoEmbed = () => {
  return (
    <div className="grid grid-cols-2 w-full my-4">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded w-full">
        <p className="text-lg font-bold my-2">
          ZITF-COMPULINK MOBILE FINALE.mp4
        </p>
        <iframe
          src="https://compulink1-my.sharepoint.com/personal/simonn_compulink_co_zw/_layouts/15/embed.aspx?UniqueId=7ff5419a-888a-4c98-8f41-1b6ebc165aec&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
          width="100%"
          height="360"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          title="ZITF-COMPULINK MOBILE FINALE.mp4"
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
