"use client";

import React from "react";
import Image from "next/image";
import kshan from "@/app/assets/kshan.png";

import { Instagram } from 'lucide-react';

export default function Kshan() {


  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins text-white mt-10">
      <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white m-2 text-center">OUR VIRTUAL HUMANS</div>
      <hr className="h-px bg-white border-0" />
      
      <div className="flex flex-col md:flex-row">
        {/* Image container with preserved spacing */}
        <div className="flex justify-center p-4 md:p-2 md:pt-4 md:pr-8 order-first md:order-none">
          <Image 
            src={kshan} 
            alt="kshan" 
            width={300} 
            height={300}
            className="rounded-lg object-cover w-auto h-auto max-h-[300px] hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ minWidth: '250px' }}
          />
        </div>
        
        <div className="hidden md:block w-px bg-white m-0 p-0"></div>
        
        {/* Text content */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center md:text-left font-poppins lg:text-center pt-4">KSHAN</h1>
          <hr className="h-px bg-white border-0" />
          
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 md:mt-6 font-semibold mb-4 px-4 md:ml-8 md:mr-8 text-center md:text-left">
            Your guide to sustainable men&apos;s style. Curating eco-conscious looks that turn heads.
          </p>
          
          <div className="flex gap-3 sm:gap-4 mb-4 mt-4 justify-center md:justify-start md:ml-8">
            <span className="px-3 py-1 bg-[#4EBF74] text-black rounded-full text-sm sm:text-base md:text-lg font-poppins">EcoChic</span>
            <span className="px-3 py-1 bg-[#8C4EBF] text-black rounded-full text-sm sm:text-base md:text-lg font-poppins">ConsciousLiving</span>
          </div>
          
          <div className="mt-4 flex items-center justify-center md:justify-start md:ml-8 mb-6 md:mb-4">
            <div className="text-lg sm:text-xl md:text-2xl text-white mr-4">
              Tap in to my style game!
            </div>
            <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md group">
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}