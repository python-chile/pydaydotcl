'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NotFound() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = video.duration - 0.1;
      });
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
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

      <Link
        href="/"
        className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-50 
                   pixel-font text-xl border-4 border-[var(--accent-yellow)] 
                   px-8 py-3 bg-[var(--bg-dark)] hover:bg-[var(--primary-green)] 
                   transition-all duration-300 hover:scale-110 hover:glow"
        style={{
          textShadow: "3px 3px 0 var(--outline-red)",
          boxShadow: "0 0 25px rgba(var(--accent-yellow-rgb), 0.5)",
        }}
      >
        ▶ REINICIAR
      </Link>
    </div>
  );
}
