"use client";

import React from "react";
import Image from "next/image";
import rynaa from "@/app/assets/rynaa.png";

import { Instagram, Youtube } from 'lucide-react';

export default function Rynaa() {
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center font-poppins pt-4">RYNAA</h1>
          <hr className="h-px bg-white border-0" />
          
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 font-semibold mb-4 px-4 sm:ml-8 sm:mr-20 text-center sm:text-left">
            Avant-garde fashion queen. Bold looks, fearless vibes. #AvantGardeFashion #FashionAsArt.
          </p>
          
          <div className="flex gap-3 sm:gap-4 mb-4 mt-4 justify-center sm:justify-start sm:ml-8">
            <span className="px-3 py-1 bg-[#4EBF74] text-black rounded-full text-base sm:text-lg font-poppins">Trendsetter</span>
            <span className="px-3 py-1 bg-[#8C4EBF] text-black rounded-full text-base sm:text-lg font-poppins">Fearless</span>
          </div>
          
          <div className="mt-4 sm:ml-8 flex items-center justify-center sm:justify-start mb-6 sm:mb-4">
            <div className="text-xl sm:text-2xl text-white mr-3 sm:mr-4">
              Unlock My Vision
            </div>
            <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md group">
              <Instagram className="w-9 h-9 sm:w-10 sm:h-10 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
            </span>
            <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md ml-2 group">
              <Youtube className="w-10 h-10 sm:w-11 sm:h-11 text-white transition-transform duration-200 group-hover:scale-125" />
            </span>
          </div>
        </div>
        
        <div className="hidden md:block w-px bg-white m-0 p-0"></div>
        
        <div className="flex justify-center p-4 sm:p-2 sm:pt-4">
          <Image 
            src={rynaa} 
            alt="rynaa" 
            width={300} 
            height={300}
            className="rounded-lg object-cover w-[250px] sm:w-[300px] mx-2 sm:mx-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}