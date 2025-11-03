"use client";

import React from "react";
import Image from "next/image";
const vton_gif = "/Vton-Gif.gif";
import { TypewriterEffect } from "./TypeWriter";

// import { SplitText } from "@/components/split-text";

export default function AiTryOn() {
   
   const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins">
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Moved to top on mobile */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-first md:order-last">
          <Image 
            src={vton_gif} 
            alt="VTON GIF" 
            className="w-full h-auto object-cover max-w-[500px]"
            width={600}
            height={600}
          />
        </div>

      
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-4 sm:p-6">
            <p className="uppercase text-white text-left text-xs sm:text-sm mb-1 sm:mb-2">
              No more expensive physical Shoots
            </p>
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
              AI Product Try Ons
            </h1> */}
            {/* <SplitText
        text="AI TRY ONS"
        className="text-2xl md:text-4xl lg:text-4xl font-bold text-center text-white ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
            <TypewriterEffect
              words={[{ text: "AI" }, { text: "TRY" }, { text: "ONS" }]}
              className="text-2xl md:text-4xl lg:text-4xl font-bold text-left text-white "
            />
          </div>

          <hr className="border border-white" />

          <div className="flex flex-1">
            {/* Diagonal Pattern Section */}
            <div className="w-1/4 relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    grey 20px,
                    grey 21px
                  )`,
                }}
              />
            </div>

            {/* Vertical Line - Visible on all screens */}
            <div className="w-px bg-white"></div>

            {/* Bullet Points Section */}
            <div className="w-3/4 p-4 sm:p-6 text-white">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl space-y-2 sm:space-y-4 font-sans">
                <div>→ Ultra-realistic try-on experiences</div>
                <div>→ Supports beauty, eyewear, fashion</div>
                <div>→ Reduce Production Cost, Perfect for PDPs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-px bg-white m-0 p-0" />
      </div>
    </div>
  );
}
