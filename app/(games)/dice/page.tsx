import React from "react";
import Image from "next/image";
import BetButton from "@/components/BetButton";
const diceImg = "/images/dice.png";

const DicePage = async () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 w-full pt-16 md:pt-12 pb-8">
      <div className="flex items-center justify-center w-2/3 md:w-3/5 lg:1/2">
        <Image src={diceImg} alt="Dice canvas" width={590} height={450} />
      </div>
      <BetButton />
    </div>
  );
};

export default DicePage;
