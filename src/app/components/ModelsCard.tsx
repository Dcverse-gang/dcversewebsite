"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import { TypewriterEffect } from "@/app/components/TypeWriter";

function ModelsCard({
  name,
  image,
  links,
  reverse=false,
}: {
  name: string;
  image: string;
  links?: { insta?: string; youtube?: string };
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col   border-white ${reverse ? "md:flex-col-reverse" : "md:border-r border-b md:border-b-0"}`}
    >
      {/*  Image */}
      <div
        className={`flex justify-center items-center p-2 md:p-4 ${reverse ? "" : "border-b"} border-white`}
      >
        <Image 
loading="lazy"
          src={image}
          alt={name}
          width={300}
          height={350}
          className="object-cover w-full max-w-[280px] md:max-w-[350px] hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Mobile:  Text */}
      <div
        className={`flex flex-col items-center text-center md:hidden ${reverse ? "border-t border-white" : ""}`}
      >
        {/* <TypewriterEffectSmooth 
                words={name} 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                cursorClassName="h-8 sm:h-10 bg-white"
              /> */}
        {/* <SplitText
          text=name
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[10%]"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
          animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
    
          threshold={0.3} 
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        /> */}
        <TypewriterEffect
          words={[{ text: name }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center py-2 lg:ml-[10%]"
        />
        <hr className="h-px w-full bg-white border-0 my-1" />
        {/* <p className="text-sm md:text-xl font-medium leading-relaxed">
                I&apos;m Kshan, your guide to sustainable men&apos;s style, curating
                eco-conscious looks that turn heads.
              </p> */}
        <div className="flex items-center gap-2 my-2">
          {/* <span className="font-medium">Tap in to my style game!</span> */}
          {links?.insta && (
            <a href={links?.insta} target="_blank" className="group">
              <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
              </span>
            </a>
          )}
          {links?.youtube && (
            <a
              href="https://www.youtube.com/@RynaaLifestyle"
              target="_blank"
              className="group"
            >
              <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md">
                <Youtube className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-200 group-hover:scale-125" />
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Desktop:  Text */}
      <div className="hidden md:flex flex-col items-center text-center ">
        {/* <SplitText
          text=name
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
          delay={50}
          animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
          animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          
          threshold={0.3} 
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        /> */}
        <TypewriterEffect
          words={[{ text: name }]}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ml-[5%] lg:ml-[4%]"
        />
        <hr className="h-px w-full bg-white border-0 my-1" />
        {/* <p className="text-base md:text-xl font-medium leading-relaxed p-2">
                Avant-garde fashion queen. Bold looks, fearless vibes. <br/>
                <strong>#AvantGardeFashion</strong> <br />
                <strong>#FashionAsArt</strong>
              </p> */}
        <div className="flex items-center gap-2 my-2">
          {/* <span className="font-medium text-lg">Tap in to my style game!</span> */}
          {links?.insta && (
            <a href={links?.insta} target="_blank" className="group">
              <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md">
                <Instagram className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
              </span>
            </a>
          )}
          {links?.youtube && (
            <a href={links?.youtube} target="_blank" className="group">
              <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md">
                <Youtube className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-200 group-hover:scale-125" />
              </span>
            </a>
          )}
        </div>
        {reverse && <hr className="h-px w-full bg-white border-0 my-1" />}
      </div>
    </div>
  );
}

export default ModelsCard;
