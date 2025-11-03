"use client";

import React from "react";
import Image from "next/image";
import nadia from "@/app/assets/nadia.png";
import bunny from "@/app/assets/bunny.png";
import { Instagram, Youtube } from "lucide-react";

// import { SplitText } from "@/components/split-text";
import { TypewriterEffect } from "@/app/components/TypeWriter";

export default function FashionInfluencers() {
   
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};
  return (
    <div className="mx-4 md:mx-[20%]  border-2 border-white text-white font-poppins bg-black mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Nadia Image + Nadia Text (mobile) / Bunny Text (desktop) */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-white">
          {/* Nadia Image */}
          <div className="flex justify-center items-center p-2 md:p-4 border-b border-white">
            <Image
              src={nadia}
              alt="Nadia"
              width={300}
              height={350}
              className="object-cover w-full max-w-[280px] md:max-w-[350px] hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
            />
          </div>

          {/* Mobile: Nadia Text */}
          <div className="flex flex-col items-center text-center md:hidden p-3">
           {/* <SplitText
        text="NADIA"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
 
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "NADIA" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-sm md:text-xl font-medium leading-relaxed">
              Elevating everyday elegance into extraordinary statements, one meticulously curated look at a time.
            </p> */}
            <div className="flex gap-2 my-2">
        
            </div>
            <div className="flex items-center gap-2 mt-1 mb-1">
              {/* <span className="font-medium">Embrace Your Inner Winston</span> */}
              <a href="https://www.instagram.com/p/DHYA1N2xzxx/" target="_blank" className="group">
                <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                  <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
            </div>
          </div>

          {/* Desktop: Bunny Text */}
          <div className="hidden md:flex flex-col items-center text-center ">
            {/* <h1 className="text-3xl md:text-4xl font-bold mb-1 p-2">BUNNY</h1> */}
            {/* <SplitText
        text="BUNNY"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
       
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "NADIA" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-base md:text-xl font-medium leading-relaxed p-2">
              Bringing sunshine and smiles to every outfit, because fashion should always be fun!
            </p> */}
           <div className="flex items-center gap-2 mt-1 mb-4">
              {/* <span className="font-medium text-lg">Embrace Your Inner Winston</span> */}
              <a href="https://www.instagram.com/p/DHYA1N2xzxx/" target="_blank" className="group">
                <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                  <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Bunny Image + Bunny Text (mobile) / Nadia Text (desktop) */}
        <div className="flex flex-col">
          {/* Desktop: Nadia Text */}
          <div className="hidden md:flex flex-col items-center text-center border-b border-white ">
           {/* <SplitText
        text="NADIA"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "BUNNY" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-base md:text-xl font-medium leading-relaxed p-2">
              Elevating everyday elegance into extraordinary statements, one meticulously curated look at a time.
            </p> */}
            <div className="flex items-center gap-2 mt-1 mb-4">
              {/* <span className="font-medium text-lg">Shine Like Perfora!</span> */}
             <a href="https://www.instagram.com/reel/DCOD2g0yzrh/" target="_blank" rel="noopener noreferrer" className="group">
               <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                 <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
               </span>
             </a>
              
            </div>
            
          </div>

          {/* Bunny Image */}
          <div className="flex justify-center items-center p-2 md:p-4">
            <Image
              src={bunny}
              alt="Bunny"
              width={300}
              height={350}
              className="object-cover w-full max-w-[280px] md:max-w-[350px] hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
            />
          </div>

          {/* Mobile: Bunny Text */}
          <div className="flex md:hidden flex-col items-center text-center border-t border-white p-3">
           {/* <SplitText
        text="BUNNY"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center "
        delay={50}
        textAlign="center"
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
 
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "BUNNY" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-sm md:text-xl font-medium leading-relaxed">
              Bringing sunshine and smiles to every outfit, because fashion should always be fun!
            </p> */}
            <div className="flex gap-2 my-2">
        
            </div>
            <div className="flex items-center gap-2 mt-1 mb-1">
              {/* <span className="font-medium">Shine Like Perfora!</span> */}
              <a href="https://www.instagram.com/reel/DCOD2g0yzrh/" target="_blank" rel="noopener noreferrer" className="group">
                <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                  <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}