import React from "react";

const RetroGridBackground = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#e20040] overflow-hidden">
      {/* Vertical Grid Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-black"
          style={{ left: `${(100 / 8) * i}%` }}
        />
      ))}

      {/* Horizontal Skewed Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-px bg-black"
          style={{
            top: `${20 + i * 20}%`,
            transform: `skewY(${(i - 2) * 2}deg)`,
          }}
        />
      ))}

      {/* Centered Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-10 bg-[#e20040] text-black text-center font-serif text-xl leading-loose">
        <p className="mb-6">
          I collaborate with agencies and designers to craft memorable user
          experiences, bringing their vision to life with a nice touch of
          animation.
        </p>
        <p>
          I started with Dreamweaver, played with Flash and ActionScript, did
          back-end dev from scratch, worked with all kinds of CMS, focused on
          creative dev, worked on 140+ projects, led a team of 10 designers and
          developers, founded{" "}
          <a
            href="https://www.waaark.com"
            className="underline hover:text-white transition"
          >
            Waaark
          </a>{" "}
          and{" "}
          <a
            href="https://incredibles.dev"
            className="underline hover:text-white transition"
          >
            incredibles.dev
          </a>
          , won a few awards, and keep on learning.
        </p>
      </div>
    </div>
  );
};

export default RetroGridBackground;
