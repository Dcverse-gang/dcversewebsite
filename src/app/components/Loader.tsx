import React from "react";
import Image from "next/image";
import Dcverse_logo from "@/app/assets/Dcverse_logo.png";

const Loader: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.25),transparent_60%)]" />
        <div className="bg-grid" />
        <div className="orb orb--one" />
        <div className="orb orb--two" />
        <div className="floating-particle particle-1" />
        <div className="floating-particle particle-2" />
        <div className="floating-particle particle-3" />
        <div className="floating-particle particle-4" />
        <div className="animated-line line-1" />
        <div className="animated-line line-2" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-3 sm:gap-6 lg:gap-8 select-none px-4">
        {/* Logo + progress ring */}
        <div className="relative">
          <div className="flex items-center justify-center perspective">
            <Image
              loading="eager"
              src={Dcverse_logo}
              alt="DCverse Logo"
              priority
              fetchPriority="high"
              className="h-28 w-auto xs:h-32 sm:h-40 md:h-48 lg:h-52 logo3d"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
          <span className="gradient-shimmer bg-clip-text text-transparent">
            Welcome to DCverse
          </span>
        </h1>

        {/* Subheading + animated loading indicator */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto px-4">
          <p className="text-gray-300/90 text-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide mb-8 sm:mb-10 md:mb-14">
            Unleash Your Creativity
          </p>
          
          {/* Animated loading dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="dot-loader"></div>
            <div className="dot-loader dot-loader-delay-1"></div>
            <div className="dot-loader dot-loader-delay-2"></div>
            <div className="dot-loader dot-loader-delay-3"></div>
          </div>
          <span className="sr-only">Loading…</span>
        </div>
      </div>

      {/* Component-scoped animations */}
      <style jsx>{`
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 36px 36px, 36px 36px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%);
          animation: gridPan 16s linear infinite;
        }

        .orb {
          position: absolute;
          filter: blur(40px);
          border-radius: 9999px;
          opacity: 0.35;
          mix-blend-mode: screen;
        }
        .orb--one {
          width: 15rem; height: 15rem;
          background: radial-gradient(circle, rgba(255,145,0,0.6), transparent 60%);
          top: -10%; left: -6%;
          animation: drift 14s ease-in-out infinite;
        }
        .orb--two {
          width: 12rem; height: 12rem;
          background: radial-gradient(circle, rgba(59,130,246,0.6), transparent 60%);
          bottom: -8%; right: -4%;
          animation: drift 18s ease-in-out infinite reverse;
        }

        @media (min-width: 640px) {
          .orb--one { width: 22rem; height: 22rem; }
          .orb--two { width: 18rem; height: 18rem; }
        }

        @media (min-width: 1024px) {
          .orb--one { width: 28rem; height: 28rem; }
          .orb--two { width: 24rem; height: 24rem; }
        }

        .perspective { perspective: 800px; }
        .logo3d {
          will-change: transform, filter;
          animation: wobble 2.2s ease-in-out infinite, glow 2.6s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(99,102,241,0.35));
        }

        .gradient-shimmer {
          background-image: linear-gradient(90deg, #fb923c, #ec4899, #60a5fa);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes wobble {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg) translateZ(0); }
          25% { transform: rotateY(12deg) rotateX(4deg) translateZ(4px); }
          50% { transform: rotateY(0deg) rotateX(0deg) translateZ(0); }
          75% { transform: rotateY(-12deg) rotateX(-4deg) translateZ(4px); }
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 8px 24px rgba(99,102,241,0.35)); }
          50% { filter: drop-shadow(0 12px 36px rgba(236,72,153,0.55)); }
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
        }

        @keyframes gridPan {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 36px 36px, 36px 36px; }
        }

        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -12px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }

        /* Animated loading dots */
        .dot-loader {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fb923c, #ec4899);
          box-shadow: 0 0 12px rgba(236, 72, 153, 0.6);
          animation: dotBounce 1.4s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .dot-loader {
            width: 16px;
            height: 16px;
          }
        }

        @media (min-width: 768px) {
          .dot-loader {
            width: 18px;
            height: 18px;
          }
        }

        .dot-loader-delay-1 {
          animation-delay: 0.2s;
        }

        .dot-loader-delay-2 {
          animation-delay: 0.4s;
        }

        .dot-loader-delay-3 {
          animation-delay: 0.6s;
        }

        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          40% {
            transform: translateY(-12px) scale(1.1);
            opacity: 1;
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
          }
        }

        /* Floating particles */
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: screen;
        }

        .particle-1 {
          width: 6px;
          height: 6px;
          background: rgba(251, 146, 60, 0.8);
          top: 20%;
          left: 15%;
          animation: float 8s ease-in-out infinite;
          filter: blur(0.5px);
        }

        .particle-2 {
          width: 4px;
          height: 4px;
          background: rgba(236, 72, 153, 0.7);
          top: 70%;
          right: 20%;
          animation: float 10s ease-in-out infinite reverse;
          filter: blur(0.5px);
        }

        .particle-3 {
          width: 5px;
          height: 5px;
          background: rgba(96, 165, 250, 0.7);
          bottom: 15%;
          left: 25%;
          animation: float 12s ease-in-out infinite;
          filter: blur(0.5px);
        }

        .particle-4 {
          width: 3px;
          height: 3px;
          background: rgba(251, 146, 60, 0.6);
          top: 35%;
          right: 10%;
          animation: float 9s ease-in-out infinite reverse;
          filter: blur(0.5px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(15px); }
          50% { transform: translateY(-40px) translateX(0); }
          75% { transform: translateY(-20px) translateX(-15px); }
        }

        /* Animated lines */
        .animated-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent);
          mix-blend-mode: screen;
        }

        .line-1 {
          width: 150px;
          height: 1px;
          top: 40%;
          left: 10%;
          animation: slideLine 4s ease-in-out infinite;
        }

        .line-2 {
          width: 120px;
          height: 1px;
          bottom: 30%;
          right: 15%;
          animation: slideLine 5s ease-in-out infinite reverse;
        }

        @media (min-width: 640px) {
          .line-1 { width: 250px; height: 2px; }
          .line-2 { width: 200px; height: 2px; }
        }

        @media (min-width: 1024px) {
          .line-1 { width: 300px; height: 2px; }
          .line-2 { width: 250px; height: 2px; }
        }

        @keyframes slideLine {
          0% { opacity: 0; transform: translateX(-100px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100px); }
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .bg-grid,
          .orb--one,
          .orb--two,
          .logo3d,
          .gradient-shimmer,
          .floating-particle,
          .animated-line,
          .dot-loader { animation: none !important; }
        }

        /* Mobile optimization */
        @media (max-width: 640px) {
          .bg-grid {
            background-size: 24px 24px, 24px 24px;
          }

          .particle-1, .particle-2, .particle-3, .particle-4 {
            opacity: 0.4;
          }
        }

        /* Tablet optimization */
        @media (min-width: 641px) and (max-width: 1024px) {
          .bg-grid {
            background-size: 30px 30px, 30px 30px;
          }
        }

        /* Large screens */
        @media (min-width: 1025px) {
          .bg-grid {
            background-size: 36px 36px, 36px 36px;
          }
        }
      `}</style>

    </div>
  );
};

export default Loader;
