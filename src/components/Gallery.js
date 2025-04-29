"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);
  const modalRef = useRef(null);

  // Navegación por teclado
  const handleKeyNavigation = useCallback(
    (e) => {
      if (!activeImage) return;
      const currentIndex = images.findIndex(
        (img) => img.src === activeImage.src
      );

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setActiveImage(images[currentIndex - 1]);
      }
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
        setActiveImage(images[currentIndex + 1]);
      }
      if (e.key === "Escape") {
        setActiveImage(null);
        document.body.style.overflow = "auto";
      }
    },
    [activeImage, images]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyNavigation);
    return () => window.removeEventListener("keydown", handleKeyNavigation);
  }, [handleKeyNavigation]);

  // Cargar placeholder dinámico
  const getBlurData = (width, height) =>
    `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" fill="#3D8B3720"/>`
    )}`;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => {
          const isPriority = index < 6;
          return (
            <div
              key={image.src}
              className="aspect-square relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                setActiveImage(image);
                document.body.style.overflow = "hidden";
              }}
            >
              <Image
                src={image.src}
                alt={image.alt || `Imagen ${index + 1} de PyDay Chile`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading={isPriority ? "eager" : "lazy"}
                priority={isPriority}
                placeholder="blur"
                blurDataURL={getBlurData(1600, 900)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium line-clamp-2">
                  {image.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {activeImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === modalRef.current && setActiveImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-50"
            onClick={() => {
              setActiveImage(null);
              document.body.style.overflow = "auto";
            }}
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1600}
              height={900}
              className="max-h-[90vh] w-auto mx-auto object-contain"
              priority
              quality={90}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center backdrop-blur-md">
              <p className="text-white text-lg font-medium">
                {activeImage.caption}
              </p>
              {activeImage.location && (
                <p className="text-gray-300 text-sm mt-1">
                  {activeImage.location}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
