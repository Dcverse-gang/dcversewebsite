"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo1 from "@/app/assets/logo1.png";
import logo2 from "@/app/assets/logo2.png";
import logo3 from "@/app/assets/logo3.png";
import logo4 from "@/app/assets/logo4.png";
import logo5 from "@/app/assets/logo5.png";
import logo6 from "@/app/assets/logo6.png";
import logo7 from "@/app/assets/logo7.png";
import logo8 from "@/app/assets/logo8.png";
import logo9 from "@/app/assets/logo9.png";
import logo10 from "@/app/assets/logo10.png";
import logo11 from "@/app/assets/logo11.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10, logo11
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    let scrollAmount = 0;
    let requestId: number;

    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= scrollWidth) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="mx-4 sm:mx-[10%] lg:mx-[20%] border bg-black border-white py-6">
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-t border-white" />
          <p className="text-white text-center mx-4 text-sm sm:text-base md:text-xl uppercase font-poppins font-semibold tracking-widest">
            Trusted by global brands
          </p>
          <hr className="flex-grow border-t border-white" />
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-8 items-center scrollbar-hide px-6"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="inline-flex relative h-12 sm:h-16 md:h-20"
              style={{ minWidth: "100px" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
