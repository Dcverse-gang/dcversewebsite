"use client";

import React from "react";
import nadia from "@/app/assets/nadia.png";
import bunny from "@/app/assets/bunny.png";
import ModelsCard from "./ModelsCard";

export default function FashionInfluencers() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="mx-4 md:mx-[20%]  border-2 border-white text-white font-poppins bg-black mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Nadia Image + Nadia Text (mobile) / Bunny Text (desktop) */}
        <ModelsCard
          name="NADIA"
          image={nadia.src}
          links={{ insta: "https://www.instagram.com/p/DHYA1N2xzxx/" }}
        />

        {/* Right Side: Bunny Image + Bunny Text (mobile) / Nadia Text (desktop) */}
        <ModelsCard
          reverse
          name="BUNNY"
          image={bunny.src}
          links={{
            insta: "https://www.instagram.com/reel/DCOD2g0yzrh/",
          }}
        />
      </div>
    </div>
  );
}
