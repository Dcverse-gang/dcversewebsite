import { FC } from "react";
import Image from "next/image";

const SignIn: FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-white bg-black overflow-hidden">
      {/* Left Video Section - Now visible on mobile */}
      <div className="relative flex-1 min-h-[40vh] md:min-h-auto">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/AD-LinkedIn.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right Sign-In Section */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-0">
        <div className="w-full max-w-xs md:w-80 text-center">
          {/* Logo */}
          <div className="mb-6 md:mb-4 flex justify-center items-center gap-3">
            <Image
              src="/Dcverse_logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <h1 className="text-3xl md:text-4xl text-white font-mono">
              Dcverse
            </h1>
          </div>

          <form className="flex flex-col gap-4 font-sans">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full rounded-full border border-[#A3E8A5] text-[#A3E8A5] py-2 md:py-3 text-sm md:text-base"
            >
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google"
                className="w-4 h-4 md:w-5 md:h-5"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;