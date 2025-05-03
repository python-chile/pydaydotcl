"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="lottie-player fixed inset-0 z-50 flex items-center justify-center bg-[var(--py-bg)]/50 backdrop-blur-sm">
      <DotLottieReact
        src="/images/loading/icon.lottie"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
      />
    </div>
  );
}
