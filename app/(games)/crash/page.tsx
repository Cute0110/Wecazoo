import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { list } from "@vercel/blob";

const CrashPage = async () => {
  const { blobs } = await list({
    limit: 1000,
    prefix: "crash/",
  });

  console.log(blobs);

  return (
    <div className="flex gap-4 w-full">
      <div className="flex flex-col gap-2 w-[85%]">
        <div>
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
            <source src={blobs[2].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex gap-6 bg-[#2A253A] p-6 rounded-[10px] items-center flex-1">
          <div className="bg-primary p-1.5 flex flex-col w-fit rounded-[10px]">
            <Button
              className="bg-background rounded-t-[10px] rounded-b-none text-xs py-2 px-4"
              size="fit"
            >
              Manual
            </Button>
            <Button
              className="bg-muted rounded-b-[10px] rounded-t-none text-xs py-2 px-4"
              size="fit"
            >
              Auto
            </Button>
          </div>
          <div className="flex items-center justify-evenly gap-6">
            <div className="bg-background rounded-[10px] px-4 py-2 flex items-center gap-4">
              <Minus
                className="rounded-full border border-primary p-[2px] hover:bg-white hover:text-primary hover:border-none cursor-pointer"
                size={20}
              />
              <span>1.00</span>
              <Plus
                className="rounded-full border border-primary p-[2px] hover:bg-white hover:text-primary hover:border-none cursor-pointer"
                size={20}
              />
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-x-4 gap-y-2 w-fit">
              <span className="text-xs text-muted bg-background rounded-lg px-6 py-2 w-20 h-8 flex items-center justify-center">
                10.00
              </span>
              <span className="text-xs text-muted bg-background rounded-lg px-6 py-2 w-20 h-8 flex items-center justify-center">
                20.00
              </span>
              <span className="text-xs text-muted bg-background rounded-lg px-6 py-2 w-20 h-8 flex items-center justify-center">
                50.00
              </span>
              <span className="text-xs text-muted bg-background rounded-lg px-6 py-2 w-20 h-8 flex items-center justify-center">
                100.00
              </span>
            </div>
          </div>
          <div className="flex-1">
            <Button className="w-full py-12 text-lg font-semibold border border-foreground flex flex-col">
              <p>BET</p>
              <span>1.00</span>
            </Button>
          </div>
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default CrashPage;
