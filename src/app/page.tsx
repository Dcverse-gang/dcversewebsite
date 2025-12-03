"use client";

import React, { lazy, Suspense, useState } from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";
import beforeImg from "@/app/assets/before.png";
import afterImg from "@/app/assets/after.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
const Modal = lazy(() => import("./components/Modal"));
const WaitlistForm = lazy(() => import("./components/WaitlistForm"));
const Loader = lazy(() => import("./components/Loader"));

const Divider = lazy(() => import("./components/divider"));
const DCVerse = lazy(() => import("./components/hero"));
const AdsSection = lazy(() => import("./components/Ads"));
const TrustedBy = lazy(() => import("./components/TrustedBy"));
const Features = lazy(() => import("./components/faetures"));
const Form = lazy(() => import("./components/form"));
const Footer = lazy(() => import("./components/footer"));
const PoweredBy = lazy(() => import("./components/PoweredBy"));
const VirtualHumans = lazy(() => import("./components/new"));
const ThreeWall3DBackground = lazy(
  () => import("./components/ThreeDGridBackground")
);
const FashionInfluencers = lazy(() => import("./components/new2"));
const TwoColCard = lazy(() => import("./components/TwoColCard"));
const Video = lazy(() => import("./components/Video"));
const Button6 = lazy(() =>
  import("./components/Buttons").then((mod) => ({ default: mod.Button6 }))
);

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full relative bg-black">
        <div className="sticky top-0 left-0 right-0 h-[8vh] min-h-[40px] bg-black z-10 flex items-center justify-center px-2 sm:px-0 lg:px-10 border-b-1 border-white">
          <Image
            loading="eager"
            src={Dcverse_logo}
            priority
            fetchPriority="high"
            alt="DCverse Logo"
            className="sm:absolute left-[50%] right-[50%] h-[80%] max-h-[36px] sm:max-h-[60px] object-contain"
            style={{ width: "auto" }}
          />
          <div className="flex shrink py-6 w-full justify-end items-center">
            {/* Wrapper for components to show when users are signed out  */}
            <SignedOut>
              <Button6
                text="Sign in"
                className="py-[8px] px-[1pc] text-[13px]"
                onClick={() => {
                  router.push("/signin");
                }}
              />
              {/* <Link
              href="/signin"
              className="flex gap-8 justify-end items-center"
            >
              <div className=" outline-white outline-1 flex items-center text-white rounded-full font-medium text-sm sm:text-base min-h-[90%] px-2 sm:px-3 cursor-pointer hover:bg-slate-400/20">
                Sign in
              </div>
              <div className="text-white hover:underline cursor-pointer">
                Sign Up
              </div>
            </Link> */}
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
          <DCVerse setOpen={setOpen} />

          {/* ==================== */}
          <Divider id="divider1" className="pt-0" />

          <h1 className="text-2xl sm:text-5xl !mb-0 font-bold bg-black text-white text-center font-poppins p-2">
            Filmmaking Essentials
          </h1>
          <Divider id="divider2" />
          {/* ==================== */}
          <TwoColCard
            className="mt-10 lg:!mx-[5%]"
            leftData={
              <Video
                src={"/videos/dubbing-video.mp4"}
                className=" w-full min-h-full sm:min-h-[400px]  object-cover lg:object-fill object-center"
              />
            }
            subHeading="Filmmaking Essentials"
            heading="AI Dubbing"
            points={[
              "Realistic Lip Sync",
              "15+ Indian & 30+ global language support",
              "Global reach with AI",
            ]}
            colLeft="col-span-12 md:col-span-6 lg:col-span-7"
            colRight="col-span-12 md:col-span-6 lg:col-span-5"
          />
          <TwoColCard
            colLeft="col-span-12 md:col-span-6 lg:col-span-7"
            colRight="col-span-12 md:col-span-6 lg:col-span-5"
            reverse
            className="mb-10 lg:!mx-[5%]"
            leftData={
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WYhfJEfsz7Q?si=pjrbqdDOXd6oxDog"
                title="AI Music Video – Filmmaking Essentials"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="object-cover object-center min-h-full sm:min-h-[400px]"
              />
            }
            subHeading="Filmmaking Essentials"
            heading="AI Music Video"
            noArrow
            points={[
              "Now place real actors in your music video in just 3 steps. Own the content you produce without the hassle of right claims. Stay protected and secured with CloneOS.",
            ]}
          />

          {/* ==================== */}

          <Divider id="divider1" className="pt-0" />

          <h1 className="text-2xl sm:text-5xl !mb-0 font-bold bg-black text-white text-center font-poppins p-2">
            India&apos;s First AI Creatorverse
          </h1>
          <Divider id="divider2" />

          <VirtualHumans />
          <FashionInfluencers />
          <Divider id="divider3" />
          <ThreeWall3DBackground startId="divider2" endId="divider3" />
          <PoweredBy />
          <TwoColCard
            leftData={
              <>
                <span
                  style={{ top: "60%", background: "rgba(220,220,220,0.5)" }}
                  className="absolute left-4 ml-4 z-10 text-white px-5 py-2 rounded font-bold text-base select-none pointer-events-none flex items-center justify-center shadow-lg"
                >
                  Before
                </span>
                <span
                  style={{ top: "60%", background: "rgba(220,220,220,0.5)" }}
                  className="absolute right-4 mr-4 z-10 text-white px-5 py-2 rounded font-bold text-base select-none pointer-events-none flex items-center justify-center shadow-lg"
                >
                  After
                </span>
                <ImageComparison
                  className="aspect-[7/8] w-full border-0.5 border-zinc-200 dark:border-zinc-800"
                  springOptions={{ bounce: 0.1, duration: 1.8 }}
                >
                  <ImageComparisonImage
                    src={beforeImg.src}
                    alt="Before Skin"
                    position="left"
                  />
                  <ImageComparisonImage
                    src={afterImg.src}
                    alt="After Skin"
                    position="right"
                  />
                  <ImageComparisonSlider className="bg-white flex items-center justify-center">
                    <span className="bg-gray-700 bg-opacity-80 rounded-full p-1 shadow-lg flex items-center justify-center">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 6L4 11L8 16"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 6L18 11L14 16"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </ImageComparisonSlider>
                </ImageComparison>
              </>
            }
            topHeading="HOT FEATURES"
            subHeading="No more Plastic AI Skin"
            heading="AI REALISTIC SKIN"
            noArrow
            points={[
              "Skip the boring AI plastic skins and connect with your target audience on a personal level, with our crafted tool. Perfect for Cosmetics and Skincare brands.",
            ]}
          />
          {/* <AIRelisticSkin /> */}
          {/* <AiTryOn /> */}
          <TwoColCard
            reverse
            leftData={
              <>
                <Image
                  loading="lazy"
                  src="/gif/Vton-Gif.gif"
                  alt="VTON GIF"
                  className="w-full h-auto object-cover max-w-[500px]"
                  width={600}
                  height={600}
                />
              </>
            }
            subHeading="No more expensive physical Shoots"
            heading="AI TRY ONS"
            points={[
              "Ultra-realistic try-on experiences",
              "Supports beauty, eyewear, fashion",
              "Reduce Production Cost, Perfect for PDPs",
            ]}
          />
          {/* <ModelControl /> */}
          <TwoColCard
            leftData={
              <>
                <Image
                  loading="lazy"
                  src="/gif/Pose-Change.gif"
                  alt="Pose Change"
                  className="w-full h-auto object-cover max-w-[500px] mx-auto"
                  width={600}
                  height={600}
                />
              </>
            }
            subHeading="Be Independent"
            heading="MODEL CONTROL"
            points={[
              "Clone yourself.",
              "Control Pose and Expressions as per the guidelines.",
              "Create exceptional results from Prompts.",
            ]}
          />
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
      <Modal open={open} setOpen={setOpen} size="md">
        <WaitlistForm />
      </Modal>
    </Suspense>
  );
}
