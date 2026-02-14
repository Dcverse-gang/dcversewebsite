"use client";

import React, { useEffect, useRef, useState } from "react";

type LazyYouTubeIframeProps = {
  embedId: string;
  title: string;
  className?: string;
};

export default function LazyYouTubeIframe({
  embedId,
  title,
  className = "",
}: LazyYouTubeIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !src) {
          setSrc(
            `https://www.youtube.com/embed/${embedId}?si=pjrbqdDOXd6oxDog&autoplay=0`
          );
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [embedId, src]);

  return (
    <div ref={containerRef} className={className}>
      {!src ? (
        <div
          className="bg-black/20 flex items-center justify-center min-h-[200px] sm:min-h-[400px] w-full"
          style={{ aspectRatio: "16/9" }}
        >
          <span className="text-white/50 text-sm">Loading video…</span>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="object-cover object-center min-h-full sm:min-h-[400px] w-full"
          style={{ aspectRatio: "16/9" }}
        />
      )}
    </div>
  );
}
