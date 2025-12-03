"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-white bg-black overflow-hidden relative">
      {/* Left Video Section - Now visible on mobile */}
      <video
        className=" w-full h-full object-cover"
        src="/videos/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute h-full w-full bg-[#00000060] flex items-center justify-center flex-col">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-mono font-bold text-center">
            Welcome to Dcverse
          </h1>
          <p className="text-center mt-4 mb-8 text-lg md:text-xl">
            Your gateway to AI-powered dubbing and music video creation.
          </p>
        </div>
        <div className="flex gap-4">
          {[
            { href: "/", label: "Home Page" },
            { href: "/AITryOn", label: "AI TRY ONS" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="relative h-[200px] w-[200px] rounded-xl cursor-pointer transition-transform duration-150 group-hover:scale-95">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[linear-gradient(40deg,_#22D3EE,_#8B5CF6,_#EC4899,_#EF4444,_#F59E0B)]"
                />
                <div className="relative m-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] border border-white rounded-[10px] group-hover:bg-transparent bg-[#ffffff2d] flex items-center justify-center text-2xl font-semibold text-white backdrop-blur-sm">
                  {item.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
