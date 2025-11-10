"use client";

import React from "react";
import kshan from "@/app/assets/kshan.png";
import rynaa from "@/app/assets/rynaa.png";
import { TypewriterEffect } from "@/app/components/TypeWriter";
import ModelsCard from "./ModelsCard";
interface VirtualHumansProps {
  id?: string;
}

export default function VirtualHumans({ id }: VirtualHumansProps) {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="mx-4 md:mx-[20%] mt-6 md:mt-10 border-2 !border-b-0 border-white text-white font-poppins bg-black">
      {/* <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white m-2 text-center">OUR VIRTUAL HUMANS</div> */}
      <div className="p-4">
        {/* <SplitText
        text="OUR VIRTUAL HUMANS"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ml-[10%] lg:ml-[25%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
       
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
        <TypewriterEffect
          words={[{ text: "OUR" }, { text: "VIRTUAL" }, { text: "HUMANS" }]}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center ml-[10%] lg:ml-[10%]"
        />
      </div>
      <hr className="h-px bg-white border-0" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Kshan Image + Kshan Text (mobile) / Rynaa Text (desktop) */}

        <ModelsCard
          name="KSHAN"
          image={kshan.src}
          links={{ insta: "https://www.instagram.com/kshan_lifestyle/" }}
        />

        {/* Right Side: Rynaa Image + Rynaa Text (mobile) / Kshan Text (desktop) */}
        <ModelsCard
          reverse
          name="RYNAA"
          image={rynaa.src}
          links={{
            insta: "https://www.instagram.com/rynaa_lifestyle",
            youtube: "https://www.youtube.com/@RynaaLifestyle",
          }}
        />
      </div>
    </div>
  );
}
