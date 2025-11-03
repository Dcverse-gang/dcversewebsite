"use client";

import React from "react";
import Image from "next/image";
const pose_change = "/Pose-Change.gif";

// import { SplitText } from "@/components/split-text";  
import { TypewriterEffect } from "@/app/components/TypeWriter";

interface ModelProps {
  id?: string;
}

export default function ModelControl({ id }: ModelProps) {
  
   const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 align-center p-4 mt-2 sm:mt-4 md:mt-6">
          <Image 
            src={pose_change} 
            alt="Pose Change" 
            className="w-full h-auto object-cover max-w-[500px] mx-auto"
            width={600}
            height={600}
          />
        </div>
        
        {/* Vertical divider - visible on all screens */}
        <div className="w-px bg-white mx-4 md:mx-0"></div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-4 sm:p-6">
            <p className="uppercase text-white text-right text-xs sm:text-sm mb-1 sm:mb-2">
              Be Independent
            </p>
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
              Model Controls
            </h1> */}
            {/* <SplitText
        text="MODEL CONTROL"
        className="text-2xl md:text-4xl lg:text-4xl font-bold text-white text-center ml-[5%] lg:ml-[8%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "MODEL" }, { text: "CONTROL" }]}
          className="text-2xl md:text-4xl lg:text-4xl font-bold text-white text-right"
        />
        </div>
          <hr className="border border-white" />
          <div className="flex flex-1">
            <div className="w-5/7 p-4 sm:p-6 text-white">
              <p className="text-lg sm:text-xl md:text-2xl space-y-2 sm:space-y-4 font-sans">
                → Clone yourself. <br/><br/>
                → Control Pose and Expressions as per the guidelines.<br/><br/>
                → Create exceptional results from Prompts
              </p>
            </div>
            
            {/* Vertical divider - visible on all screens */}
            <div className="w-px bg-white"></div>
            
            <div className="w-2/7 relative overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    grey 20px,
                    grey 21px
                  )`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}