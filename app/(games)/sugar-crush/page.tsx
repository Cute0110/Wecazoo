import React from "react";
import { list } from "@vercel/blob";
import BetButton from "@/components/BetButton";

const LimboPage = async () => {
  const { blobs } = await list({
    limit: 1000,
    prefix: "sugar-crush/",
  });

  return (
    <div className="container flex flex-col items-center justify-center gap-8 md:gap-6 w-full pt-16 md:pt-12 pb-8">
      <div className="w-full sm:w-3/4 md:w-3/5 lg:1/2">
        <video
          controls={false}
          autoPlay={true}
          muted
          loop
          preload="auto"
          playsInline
          aria-label="Video player"
          className="w-full h-auto rounded-[10px]"
        >
          <source src={blobs[1].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <BetButton />
    </div>
  );
};

export default LimboPage;
