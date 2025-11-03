"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface DividerProps {
  id?: string;
  className?: string;
}

export default function Divider({ id, className="" }: DividerProps) {
  const [binaryText, setBinaryText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const generateBinaryString = useCallback(() => {
    const charsPerScreen = Math.ceil(window.innerWidth / 4.5);
    let binary = "";
    for (let i = 0; i < charsPerScreen; i++) {
      binary += Math.round(Math.random()).toString();

      if (i % 15 === 0 && i !== 0 && i < charsPerScreen - 5) {
        // adding more space between // and numbers
        binary += "      //////      "; 
      }
    }
    return binary;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initial generate once
    setBinaryText(generateBinaryString());

    // Flip bits in place
    const interval = setInterval(() => {
      setBinaryText((prev) => {
        return prev
          .split("")
          .map((char) => {
            if (char === "0" || char === "1") {
              return Math.random() > 0.97 ? (char === "0" ? "1" : "0") : char;
            }
            return char;
          })
          .join("");
      });
    }, 80); // Slowed to 500ms for smoother change

    // Handle resize to generate a new baseline
    const handleResize = () => {
      setBinaryText(generateBinaryString()); 
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [generateBinaryString]);

  return (
    <div
      id={id}
      className={`${className} w-full bg-black overflow-hidden py-1 select-none font-poppins`}
    >
      <div
        ref={containerRef}
        className="whitespace-nowrap text-center tracking-tighter"
      >
        <hr className="h-px my-4 bg-black border-white mb-1 mt-0" />
        <span className="text-white font-mono text-[10px] leading-3 opacity-80">
          {binaryText.split("").map((char, i) => (
            <span
              key={i}
              className="transition-all duration-1000 ease-in-out px-0.5"
              style={{ color: char === "0" ? "#ffffffcc" : "#ffffff" }}
            >
              {char}
            </span>
          ))}
        </span>
        <hr className="h-px my-4 bg-black border-white mb-0 mt-1" />
      </div>
    </div>
  );
}