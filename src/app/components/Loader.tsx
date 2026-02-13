"use client";

import React from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";

const Loader: React.FC = () => {
  return (
    <div
      className="loader-root fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0b] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Subtle gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(120, 119, 198, 0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(99, 102, 241, 0.08), transparent 45%)",
        }}
      />
      {/* Minimal grid */}
      <div
        className="loader-grid pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-12 px-4">
        {/* Logo with soft glow */}
        <div className="loader-logo-wrap relative flex items-center justify-center">
          <div className="loader-logo-glow absolute inset-0 scale-150 rounded-full bg-[#6366f1]/20 blur-3xl" />
          <Image
            loading="eager"
            src={Dcverse_logo}
            alt="DCverse"
            priority
            fetchPriority="high"
            className="loader-logo relative h-20 w-auto sm:h-24 md:h-28 lg:h-32 drop-shadow-2xl"
          />
        </div>

        {/* Brand + status */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-white/95 sm:text-2xl">
            DCverse
          </h1>
          <p className="text-sm font-medium text-white/50 sm:text-base">
            Preparing your experience
          </p>
        </div>

        {/* Modern indeterminate bar */}
        <div className="loader-bar-track w-full max-w-[280px] sm:max-w-[320px] h-[3px] rounded-full bg-white/6 overflow-hidden">
          <div className="loader-bar-thumb h-full rounded-full bg-linear-to-r from-transparent via-indigo-400/90 to-transparent" />
        </div>

        {/* Minimal dot indicator (backup for screen readers) */}
        <span className="sr-only">Loading…</span>
      </div>

      {/* Progress bar at bottom (SaaS-style) */}
      <div className="loader-bottom-bar absolute bottom-0 left-0 right-0 h-[2px] bg-white/4 overflow-hidden">
        <div className="loader-bottom-thumb h-full bg-linear-to-r from-indigo-500/80 via-violet-400/80 to-indigo-500/80" />
      </div>

      <style jsx>{`
        .loader-root {
          font-family: var(--font-geist-sans), system-ui, sans-serif;
        }

        .loader-logo {
          will-change: opacity;
          animation: loaderLogoFade 2s ease-in-out infinite;
        }

        .loader-logo-glow {
          animation: loaderGlowPulse 3s ease-in-out infinite;
        }

        .loader-bar-thumb {
          width: 40%;
          animation: loaderBarSlide 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .loader-bottom-thumb {
          width: 35%;
          animation: loaderBarSlide 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes loaderLogoFade {
          0%,
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes loaderGlowPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes loaderBarSlide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-logo,
          .loader-logo-glow,
          .loader-bar-thumb,
          .loader-bottom-thumb {
            animation: none !important;
          }
          .loader-logo {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
