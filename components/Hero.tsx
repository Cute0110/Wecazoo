import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 px-4 md:px-10 mb-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="flex flex-col gap-1 md:gap-2.5">
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-xl xl:text-2xl font-light uppercase">
              SIGN UP & GET REWARD
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold max-w-lg">
              UP TO <span className="text-primary">$20,000</span>
            </h1>
          </div>
          <Button className="text-sm w-fit">Create Account</Button>
        </div>
        <div>
          <Image
            src="/images/hero.png"
            alt="Hero image"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
