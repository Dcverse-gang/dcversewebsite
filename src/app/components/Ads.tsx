"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { TypewriterEffect } from "@/app/components/TypeWriter";

const ads = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/-jPTWxxeP4I?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/mI1lqu-_sDA?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/OD1cOgm1UBA?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/ZPtGxEFbMDs?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0",
  },
];
interface AdProps {
  id?: string;
}

const words = ["OUR", "ADVERTISEMENT"];
export default function AdsSection({ id }: AdProps) {
  // const containerRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const scrollWidth = container.scrollWidth / 2;
  //   let scrollAmount = 0;
  //   let requestId: number;

  //   const scroll = () => {
  //     scrollAmount += 0.5;
  //     if (scrollAmount >= scrollWidth) {
  //       scrollAmount = 0;
  //     }
  //     container.scrollLeft = scrollAmount;
  //     requestId = requestAnimationFrame(scroll);
  //   };

  //   requestId = requestAnimationFrame(scroll);
  //   return () => cancelAnimationFrame(requestId);
  // }, []);

  return (
    <div className=" overflow-hidden mt-4 h-full">
      <div className="mx-4 sm:mx-[10%] lg:mx-[20%] bg-black border border-white shadow-lg h-full ">
        <div className="p-4">
          <div className="flex justify-center items-center w-full">
            <TypewriterEffect
              words={[{ text: "OUR" }, { text: "ADVERTISEMENT" }]}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center"
            />
          </div>
        </div>
        <hr className="h-px bg-white border-0" />
        <div className="my-14 mx-6 sm:mx-8">
          <Marquee pauseOnHover={true} autoFill={true} speed={20}>
            <div
              className="flex overflow-x-hidden whitespace-nowrap gap-6 mr-6 sm:gap-8 items-center scrollbar-hide "
              style={{ height: "400px", minHeight: "400px" }}
            >
              {ads?.map((ad, index) => (
                <div
                  key={`${ad.id}-${index}`}
                  className="inline-flex h-full relative rounded-lg overflow-hidden transition-transform hover:scale-97 bg-black"
                  style={{ minWidth: "300px", width: "300px", height: "100%" }}
                >
                  <iframe
                    src={ad.url}
                    title={`Advertisement ${ad.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    // loading="lazy"
                    className="w-full h-full border-0"
                    style={{
                      aspectRatio: "9/16",
                      minHeight: "100%",
                      minWidth: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
