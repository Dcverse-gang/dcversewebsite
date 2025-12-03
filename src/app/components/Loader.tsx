import React from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <Image
          loading="eager"
          src={Dcverse_logo}
          alt="DCverse Logo"
          priority
          fetchPriority="high"
          className="w-auto h-16 sm:h-[200px] animate-[spin3D_2s_linear_infinite]"
        />
        <div className=" text-5xl font-bold uppercase text-center bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
          Welcome to DCverse
        </div>
        <div className="text-gray-300 text-2xl font-bold text-center">
          Unleash Your Creativity
        </div>
      </div>
    </div>
  );
};

export default Loader;
