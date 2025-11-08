"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

import { FaPlay, FaPause } from "react-icons/fa";

type VideoProps = {
  className?: string;
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
};

const Video: React.FC<VideoProps> = ({
  className = "",
  src,
  autoPlay = false,
  muted = false,
  loop = true,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        await el.play();
        setIsPlaying(true);
        setShowButton(false);
      } else {
        el.pause();
        setIsPlaying(false);
        setShowButton(true);
      }
    } catch (e) {
      setShowButton(true);
    }
  }, []);
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onPlay = () => {
      setIsPlaying(true);
      setShowButton(false);
    };
    const onPause = () => {
      setIsPlaying(false);
      setShowButton(true);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setShowButton(true);
    };
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, []);
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    if (autoPlay) {
      el.play().catch(() => setShowButton(true));
    }
  }, [autoPlay, muted]);
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };
  return (
    <div className={`relative inline-block`}>
      <video
        ref={videoRef}
        src={src}
        playsInline
        loop={loop}
        poster={poster}
        className={className}
        controls={false}
      />
      {showButton && (
        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={togglePlay}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
rounded-full p-4 sm:p-6 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/70
text-white
bg-white/15 backdrop-blur-md border border-white/30
hover:bg-white/20 active:bg-white/25 active:scale-95 transition"
        >
          {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
        </button>
      )}
      <button
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full cursor-pointer bg-transparent"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
};

export default Video;
