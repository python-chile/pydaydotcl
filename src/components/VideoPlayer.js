"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VideoPlayer({ video }) {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }
    return () => observer.disconnect();
  }, []); 

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-video relative">
        {!isLoaded ? (
          <Image
            src={video.thumbnail}
            alt={`Thumbnail - ${video.title}`}
            fill
            className="object-cover"
            quality={60}
            loading="lazy"
          />
        ) : (
          <iframe
            ref={iframeRef}
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            onLoad={() => console.log("Video loaded")}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-300 mt-1">
          {video.speaker} • PyDay Chile {video.year}
        </p>
      </div>
    </div>
  );
}