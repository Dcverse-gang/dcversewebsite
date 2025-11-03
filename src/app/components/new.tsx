"use client";

import React from "react";
import Image from "next/image";
import kshan from "@/app/assets/kshan.png";
import rynaa from "@/app/assets/rynaa.png";
import { Instagram, Youtube } from "lucide-react";

// import { SplitText } from "@/components/split-text";
import { TypewriterEffect } from "@/app/components/TypeWriter";
interface VirtualHumansProps {
  id?: string;
}

export default function VirtualHumans({ id }: VirtualHumansProps) {
   
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};
  return (
    <div className="mx-4 md:mx-[20%] mt-6 md:mt-10 border-2 border-white text-white font-poppins bg-black">
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
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-white">
          {/* Kshan Image */}
          <div className="flex justify-center items-center p-2 md:p-4 border-b border-white">
            <Image
              src={kshan}
              alt="Kshan"
              width={300}
              height={350}
              className="object-cover w-full max-w-[280px] md:max-w-[350px] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Mobile: Kshan Text */}
          <div className="flex flex-col items-center text-center md:hidden ">
            {/* <TypewriterEffectSmooth 
              words={Kshan} 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
              cursorClassName="h-8 sm:h-10 bg-white"
            /> */}
            {/* <SplitText
        text="KSHAN"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
  
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "KSHAN" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-sm md:text-xl font-medium leading-relaxed">
              I&apos;m Kshan, your guide to sustainable men&apos;s style, curating
              eco-conscious looks that turn heads.
            </p> */}
            <div className="flex items-center gap-2 mt-2 mb-1">
              {/* <span className="font-medium">Tap in to my style game!</span> */}
             <a href="https://www.instagram.com/kshan_lifestyle/" target="_blank" className="group">
               <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                 <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
               </span>
             </a>
            </div>
          </div>

          {/* Desktop: Rynaa Text */}
          <div className="hidden md:flex flex-col items-center text-center ">
            {/* <SplitText
        text="RYNAA"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "KSHAN" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-base md:text-xl font-medium leading-relaxed p-2">
              Avant-garde fashion queen. Bold looks, fearless vibes. <br/>
              <strong>#AvantGardeFashion</strong> <br />
              <strong>#FashionAsArt</strong>
            </p> */}
            <div className="flex items-center gap-2 mt-2 mb-4">
              {/* <span className="font-medium text-lg">Tap in to my style game!</span> */}
              <a href="https://www.instagram.com/kshan_lifestyle/" target="_blank" className="group">
                <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                  <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Rynaa Image + Rynaa Text (mobile) / Kshan Text (desktop) */}
        <div className="flex flex-col">
          {/* Desktop: Kshan Text */}
          <div className="hidden md:flex flex-col items-center text-center border-b border-white ">
           {/* <SplitText
        text="KSHAN"
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
     
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "RYNAA" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1" />
            {/* <p className="text-base md:text-xl font-medium leading-relaxed p-2">
              I&apos;m Kshan, your guide to sustainable men&apos;s style, curating
              eco-conscious looks that turn heads.
            </p> */}
            <div className="flex items-center gap-2 mt-2 mb-4">
              {/* <span className="font-medium text-lg">Tap in to my style game!</span> */}
             <a href="https://www.instagram.com/rynaa_lifestyle" target="_blank" className="group">
               <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-lg">
                 <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
               </span>
             </a>
              <a href="https://www.youtube.com/@RynaaLifestyle" target="_blank" className="group">
                <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md">
                  <Youtube className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
            </div>
            
          </div>

          {/* Rynaa Image */}
          <div className="flex justify-center items-center p-2 md:p-4">
            <Image
              src={rynaa}
              alt="Rynaa"
              width={300}
              height={350}
              className="object-cover w-full max-w-[280px] md:max-w-[350px] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Mobile: Rynaa Text */}
          <div className="flex md:hidden flex-col items-center text-center border-t border-white ">
            {/* <h1 className="text-2xl md:text-4xl font-bold mb-1">RYNAA</h1> */}
           {/* <SplitText
        text="RYNAA"    
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
     
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */}
      <TypewriterEffect
          words={[{ text: "RYNAA" }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        />
            <hr className="h-px w-full bg-white border-0 my-1mx-2" />
            {/* <p className="text-sm md:text-xl font-medium leading-relaxed">
              Avant-garde fashion queen. Bold looks, fearless vibes. &nbsp;
              <strong>#AvantGardeFashion</strong> <br />
              <strong>#FashionAsArt</strong>
            </p> */}
            <div className="flex items-center gap-2 mt-2 mb-1">
              {/* <span className="font-medium">Unlock My Vision</span> */}
             <a href="https://www.instagram.com/rynaa_lifestyle" target="_blank" className="group">
               <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                 <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
               </span>
             </a>
              <a href="https://www.youtube.com/@RynaaLifestyle" target="_blank" className="group">
                <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md">
                  <Youtube className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-200 group-hover:scale-125" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}