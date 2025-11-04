"use client";
import React from "react";
import Image from "next/image";
import heroImg from "@/app/assets/home-main-img.jpg";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* <video
        src={"/herovideo.mp4"}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full  object-cover lg:object-contain object-center mt-[8vh]  sm:min-h-0"
        style={{ objectPosition: 'center center' }}
      /> */}
      <Image
        src={heroImg}
        alt="Hero Image"
        className="w-full h-full  object-cover object-center"
      />

      <div className="absolute bottom-[10%] sm:bottom-[15%] left-[50%] -translate-x-[50%] p-2 w-max">
        <a
          href="/#contact-form"
          className="
          hero-btn group relative inline-flex items-center justify-center
          rounded-full px-4 sm:px-7 py-3 sm:py-4  uppercase font-semibold tracking-wide
          text-white dark:text-white bg-white dark:bg-black
          ring-1 ring-black/10 dark:ring-white/10 shadow-sm
          transition-transform duration-300 ease-out
          hover:-translate-y-0.5 hover:shadow-lg
          disabled:opacity-60 disabled:cursor-not-allowed
          overflow-hidden
          will-change-transform
          "
        >
          <span className="relative z-10 text-[12px] sm:text-[16px]">
            {" "}
            Join the waitlist →{" "}
          </span>
          {/* Gradient layer (fades in smoothly) */}
          <span
            aria-hidden
            className=" absolute inset-0 -z-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-opacity "
          />

          {/* Base black sheen (fades out slightly slower) */}
          <span
            aria-hidden
            className=" absolute inset-0 -z-10 bg-[linear-gradient(110deg,_#000_25%,_#111_50%,_#000_75%)] bg-[length:200%_100%] opacity-100 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-opacity,transform "
          />

          {/* Glow layer (subtle, long fade) */}
          <span
            aria-hidden
            className=" pointer-events-none absolute inset-[-20%] -z-10 bg-gradient-to-r from-fuchsia-400/0 via-purple-400/0 to-cyan-400/0 blur-2xl opacity-0 transition-opacity duration-700 ease-out will-change-opacity "
          />
        </a>
      </div>
    </section>
  );
}
