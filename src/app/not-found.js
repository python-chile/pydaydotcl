"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { pressStart2P } from "./fonts";

export default function NotFound() {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.pause();
        video.currentTime = video.duration - 0.1;
        setVideoEnded(true);
      };

      video.addEventListener("ended", handleEnded);
      video.muted = true;
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });

      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/404status.webm"
        className="block w-full max-w-full h-auto lg:h-130 lg:w-auto mx-auto object-cover"
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
      />

      {videoEnded && (
        <Link
          href="/"
          className={`${pressStart2P.className} absolute bottom-[10%] left-1/2 -translate-x-1/2 z-50 
               text-base md:text-xl border-4 border-[var(--accent-yellow)] 
               px-4 md:px-8 py-2 md:py-3 backdrop-blur-xs
               transition-all duration-300 hover:scale-110 hover:glow
               max-w-[90vw] whitespace-nowrap text-center`}
          style={{
            textShadow: "3px 3px 0 var(--outline-red)",
            boxShadow: "0 0 25px rgba(var(--accent-yellow-rgb), 0.5)",
            color: "var(--accent-yellow)",
          }}
        >
          ▶ REINICIAR
        </Link>
      )}
    </div>
  );
}
