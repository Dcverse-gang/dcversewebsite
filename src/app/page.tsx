"use client";

import Divider from "./components/divider";
import AIRelisticSkin from "./components/AIRealisticSkin";
import AiTryOn from "./components/AiTryOn";
import ModelControl from "./components/ModelControl";
import DCVerse from "./components/hero";
import AdsSection from "./components/Ads";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/faetures";
import Form from "./components/form";
import Footer from "./components/footer";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";
import PoweredBy from "./components/PoweredBy";
import VirtualHumans from "./components/new";
import Image from "next/image";
import ThreeWall3DBackground from "./components/ThreeDGridBackground";
import FashionInfluencers from "./components/new2";
import TwoColCard from "./components/TwoColCard";
import Video from "./components/Video";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full relative bg-black overflow-x-hidden">
      <div className="sticky top-0 left-0 right-0 h-[8vh] min-h-[40px] bg-black z-10 flex items-center justify-center px-2 sm:px-0 border-b-1 border-white">
        <Image
          src={Dcverse_logo}
          alt="DCverse Logo"
          className="absolute left-[50%] right-[50%] h-[80%] max-h-[36px] sm:max-h-[60px] object-contain"
          style={{ width: "auto" }}
        />
        <div className="flex shrink mx-8 py-6 w-full justify-end items-center">
          {/* Wrapper for components to show when users are signed out  */}
          <SignedOut>
            <Link
              href="/signin"
              className="flex gap-8 justify-end items-center"
            >
              <div className=" outline-white outline-1 flex items-center text-white rounded-full font-medium text-sm sm:text-base min-h-[90%] sm:px-3 cursor-pointer hover:bg-slate-400/20">
                Sign in
              </div>
              {/* <div className="text-white hover:underline cursor-pointer"> */}
              {/*   Sign Up */}
              {/* </div> */}
            </Link>
          </SignedOut>

          {/* Wrapper for components visible when users are signed in  */}
          <SignedIn>
            <div>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
      <div className="backdrop-blur-sm backdrop-brightness-[0.6]">
        <DCVerse />

        {/* ==================== */}
        <Divider id="divider1" className="pt-0" />

        <h1 className="text-3xl sm:text-5xl !mb-0 font-bold bg-black text-white text-center font-poppins p-2">
          Filmmaking Essentials
        </h1>
        <Divider id="divider2" />
        {/* ==================== */}
        <TwoColCard
          className="mt-10 lg:!mx-[5%]"
          leftData={
            <Video
              src={"/dubbing-video.mp4"}
              className=" w-full min-h-full sm:min-h-[400px]  object-cover object-center"
            />
          }
          subHeading="Filmmaking Essentials"
          heading="AI Debugging"
          points={[
            "AI-powered scene analysis and error detection",
            "Real-time feedback for filmmakers",
            "Enhance production quality and efficiency",
          ]}
        />
        <TwoColCard
          reverse
          className="mb-10 lg:!mx-[5%]"
          leftData={
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WYhfJEfsz7Q?si=pjrbqdDOXd6oxDog"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="object-cover object-center min-h-full sm:min-h-[400px]"
            ></iframe>
          }
          subHeading="Filmmaking Essentials"
          heading="AI Music Videos"
          points={[
            "AI-generated music videos tailored to your style",
            "Seamless integration with your music tracks",
            "Engage audiences with captivating visuals",
          ]}
        />

        {/* ==================== */}

        <Divider id="divider1" className="pt-0" />

        <h1 className="text-3xl sm:text-5xl !mb-0 font-bold bg-black text-white text-center font-poppins p-2">
          India&apos;s First AI Creatorverse
        </h1>
        <Divider id="divider2" />

        <VirtualHumans />
        <FashionInfluencers />
        <Divider id="divider3" />
        <ThreeWall3DBackground startId="divider2" endId="divider3" />
        <PoweredBy />
        <AIRelisticSkin />
        <AiTryOn />
        <ModelControl />
        <Divider id="divider4" />
        <ThreeWall3DBackground startId="divider3" endId="divider4" />

        <AdsSection />
        <TrustedBy />
        <Features />
        <Form />
        <Divider id="divider5" />

        <Footer id="footer" />
        <ThreeWall3DBackground startId="divider4" endId="divider5" />
      </div>
    </div>
  );
}
