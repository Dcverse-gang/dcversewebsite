"use client";

import React from "react";
import Image from "next/image";
const vton_gif = "/Vton-Gif.gif";
import { TypewriterEffect } from "./TypeWriter";

function TwoColCard({
  leftData,
  subHeading,
  heading,
  points,
  className = "",
  reverse,
}: {
  leftData: React.ReactNode;
  subHeading: string;
  heading: string;
  points: string[];
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`${className} mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white bg-black bg-opacity-50 backdrop-blur-sm font-poppins`}
    >
      <div className="grid grid-cols-12">
        {/* Image Section - Moved to top on mobile */}
        <div
          className={`${reverse ? "order-first md:order-last sm:border-l" : "sm:border-r "} border-b border-white  col-span-12 md:col-span-6 lg:col-span-7 flex items-center justify-center p-4`}
        >
          {leftData}
        </div>

        {/* Text Content Section */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
          <div className={`p-4 sm:p-6 ${reverse ? "text-left" : "text-right"}`}>
            <p className="uppercase text-white text-xs sm:text-sm mb-1 sm:mb-2">
              {subHeading}
            </p>

            <TypewriterEffect
              words={heading.toUpperCase().split(" ").map((word) => ({ text: word }))}
              className={`text-2xl md:text-4xl lg:text-4xl font-bold text-white ${reverse ? "text-left" : "text-right"}`}
            />
          </div>

          <hr className="border border-white" />

          <div className={`flex flex-1 ${reverse ? "" : "flex-row-reverse"}`}>
            <div
              className={`flex flex-1 w-1/4 ${reverse ? "" : "flex-row-reverse"}`}
            >
              {/* Diagonal Pattern Section */}
              <div className={`w-full relative overflow-hidden`}>
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
            </div>

            {/* Bullet Points Section */}
            <div className="w-3/4 p-4 sm:p-6 text-white">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl space-y-2 sm:space-y-4 font-sans">
                {points.map((item, i) => (
                  <div key={i}>→ {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColCard;
