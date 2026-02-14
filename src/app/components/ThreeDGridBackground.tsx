"use client";
import React, { useEffect, useRef } from "react";

interface ThreeWall3DBackgroundProps {
  startId: string;
  endId: string;
}

function useThrottledScrollResize(
  callback: () => void,
  delay: number,
  deps: React.DependencyList
) {
  const rafRef = useRef<number | null>(null);
  const lastRun = useRef(0);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const run = () => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        lastRun.current = now;
        callbackRef.current();
      }
    };

    const throttled = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        run();
      });
    };

    run();
    window.addEventListener("resize", throttled, { passive: true });
    window.addEventListener("scroll", throttled, { passive: true });

    return () => {
      window.removeEventListener("resize", throttled);
      window.removeEventListener("scroll", throttled);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, deps);
}

export default function ThreeWall3DBackground({
  startId,
  endId,
}: ThreeWall3DBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!containerRef.current) return;
    const startElement = document.getElementById(startId);
    const endElement = document.getElementById(endId);
    if (startElement && endElement) {
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();
      const scrollY = window.scrollY;
      containerRef.current.style.top = `${startRect.top + scrollY}px`;
      containerRef.current.style.height = `${endRect.bottom - startRect.top}px`;
    }
  };

  useThrottledScrollResize(updatePosition, 100, [startId, endId]);

  return (
    <div 
      ref={containerRef}
      className="fixed left-0 right-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Center wall */}
      <div
        className="absolute h-full w-[50vw] left-1/2 -translate-x-1/2"
        style={{
          transform: "perspective(900px) rotateY(0deg)",
        }}
      />
      
      {/* Left wall - reduced angle from 40deg to 30deg */}
      <div
        className="absolute h-full w-[50vw] left-0 origin-left"
        style={{
          transform: "perspective(900px) rotateY(14deg)",
        }}
      >
        {generateGridLines("vertical", "#59554B",6)}
        {generateGridLines("horizontal", "#59554B", 12)}
      </div>

      {/* Right wall - reduced angle from -40deg to -30deg */}
      <div
        className="absolute h-full w-[50vw] right-0 origin-right"
        style={{
          transform: "perspective(1000px) rotateY(-14deg)",
        }}
      >
        {generateGridLines("vertical", "rgba(128,128,128,0.4)", 6)}
        {generateGridLines("horizontal", "rgba(128,128,128,0.4)", 12)}
      </div>
    </div>
  );
}

function generateGridLines(
  direction: "vertical" | "horizontal",
  color: string,
  count: number
) {
  const lines = [];
  for (let i = 0; i <= count; i++) {
    lines.push(
      <div
        key={`${direction}-${i}`}
        className="absolute bg-white"
        style={{
          [direction === "vertical" ? "left" : "top"]: `${(100 / count) * i}%`,
          [direction === "vertical" ? "width" : "height"]: "2px",
          [direction === "vertical" ? "height" : "width"]: "100%",
          opacity: 0.4,
          zIndex: 1
        }}
      />
    );
  }
  return lines;
}