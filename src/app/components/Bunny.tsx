"use client";

import React from "react";
import Image from "next/image";
import bunny from "@/app/assets/bunny.png";

import { Instagram } from 'lucide-react';
import { Youtube} from 'lucide-react';

export default function Bunny() {
  return (
    <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins text-white">
      <div className="flex flex-col md:flex-row">
      
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center font-poppins pt-4">BUNNY</h1>
          <hr className="h-px bg-white border-0" />
          
          <p className="text-xl sm:text-2xl md:text-3xl mt-6 font-semibold mb-4 ml-4 mr-4 md:ml-8 md:mr-20 text-center md:text-left">
           Bringing sunshine and smiles to every outfit, because fashion should always be fun!
          </p>
          
          <div className="flex gap-4 mb-4 mt-4 ml-4 md:ml-8 justify-center md:justify-start">
            <span className="px-3 py-1 bg-[#4EBF74] text-black rounded-full text-sm sm:text-lg font-poppins">PerforaPicks</span>
            <span className="px-3 py-1 bg-[#8C4EBF] text-black rounded-full text-sm sm:text-lg font-poppins">KidStyleStar</span>
          </div>
          
          <div className="mt-4 ml-4 md:ml-8 flex items-center justify-center md:justify-start">
            <div className="text-lg sm:text-xl md:text-2xl text-white mr-4 mb-4">
              Shine Like Perfora!
            </div>
            <span className="inline-flex items-center justify-center bg-white rounded-md p-1 sm:p-1.5 shadow-md group">
              <Instagram className="w-8 h-8 sm:w-9 sm:h-9 text-neutral-700 transition-transform duration-200 group-hover:scale-125" />
            </span>
            <span className="inline-flex items-center justify-center bg-red-500 rounded-md p-1 sm:p-1.5 shadow-md ml-2 group">
              <Youtube className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform duration-200 group-hover:scale-125" />
            </span>
          </div>
        </div>
        
        <div className="hidden md:block w-px bg-white m-0 p-0"></div>
        
        <div className="flex justify-center p-4 md:p-0 md:pt-4">
          <Image 
            src={bunny} 
            alt="bunny" 
            width={300} 
            height={300}
            className="rounded-lg object-cover mx-4 w-[250px] sm:w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}