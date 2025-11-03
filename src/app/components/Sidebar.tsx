import Image from "next/image";
import { FiHome, FiZap, FiUser } from "react-icons/fi";
import { PiCoatHanger } from "react-icons/pi";
import { CiUser } from "react-icons/ci";


export default function Sidebar() {
  return (
    <aside className="w-16 bg-[#1D1D1D] flex flex-col items-center border-r border-white">
      {/* Top Logo */}
      <div className="w-full flex justify-center border-b border-white py-4">
        <Image
          src="/Dcverse_logo.png" // Place this inside /public
          alt="DC Logo"
          width={30}
          height={30}
        />
      </div>

      {/* Icons Section */}
      <div className="flex flex-col items-center flex-1 pt-6 space-y-6 w-full pt-50">
        <FiHome className="text-white hover:text-yellow-400 cursor-pointer" size={20} />
        
        {/* Divider */}
        <div className="w-full border-t border-white "  />

        <PiCoatHanger className="text-yellow-400 cursor-pointer mb-15" size={22} /> 
        <FiZap className="text-white hover:text-yellow-400 cursor-pointer mb-15" size={20} />
        <FiUser className="text-white hover:text-yellow-400 cursor-pointer " size={20} />
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center py-4 bottom-16 space-y-4">
        <CiUser className="text-white hover:text-yellow-400 cursor-pointer bottom-16" size={20} />
      </div>
    </aside>
  );
}
