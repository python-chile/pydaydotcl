"use client";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-gray-800/50 animate-pulse rounded-lg" />
  ),
});

export default function LazyVideoPlayerWrapper({ video }) {
  return <VideoPlayer video={video} />;
}