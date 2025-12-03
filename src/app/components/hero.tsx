"use client";
import React from "react";
import Image from "next/image";
import webHeroImg from "@/app/assets/banner/web-cloneos.png";
import phoneHeroImg from "@/app/assets/banner/phobe-cloneos.png";
import { Button5} from "./Buttons";

export default function Hero({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* <video
        src={"/videos/herovideo.mp4"}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full  object-cover lg:object-contain object-center mt-[8vh]  sm:min-h-0"
        style={{ objectPosition: 'center center' }}
      /> */}
      <Image
        loading="lazy"
        fetchPriority="high"
        src={webHeroImg}
        alt="Web Hero Image"
        className="w-full h-full  object-cover object-center hidden sm:block"
      />
      <Image
        loading="lazy"
        fetchPriority="high"
        src={phoneHeroImg}
        alt="Phone Hero Image"
        className="w-full h-full  object-cover object-center sm:hidden"
      />

      <div className="absolute bottom-[10%] sm:bottom-[15%] left-[50%] -translate-x-[50%] p-2 w-max scale-[0.7] sm:scale-100">
        {/* <Button1 text="Join the waitlist →" link="/#contact-form" /> */}
        {/* <Button7
          onClick={() => router.push("/#contact-form")}
          text="Join the waitlist →"
        /> */}
        <Button5
          color="gradient"
          onClick={() => setOpen(true)}
          text="Join the waitlist →"
          className="!w-[270px] hero-btn"
          btnClassName=" !font-semibold"
        />
      </div>
    </section>
  );
}
