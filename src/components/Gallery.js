'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (image) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(image)}
          >
            <Image
              src={image.src}
              alt={image.alt || 'Imagen de PyDay Chile'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">
                {image.caption || `PyDay ${image.year || '2024'}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={activeImage.src}
                alt={activeImage.alt || 'Imagen de PyDay Chile'}
                fill
                className="object-contain"
              />
            </div>
            
            {activeImage.caption && (
              <div className="bg-black/50 p-4 text-white text-sm md:text-base">
                <p>{activeImage.caption}</p>
                {activeImage.location && (
                  <p className="text-sm opacity-70 mt-1">{activeImage.location}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}