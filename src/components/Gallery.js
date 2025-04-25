'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  
  const openModal = (image) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Esta función calculará las dimensiones reales de la imagen renderizada
  const updateImageDimensions = () => {
    if (imageRef.current && activeImage) {
      const img = imageRef.current;
      const rect = img.getBoundingClientRect();
      setImageDimensions({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left
      });
    }
  };
  
  // Actualizar dimensiones cuando cambia la imagen activa o en resize
  useEffect(() => {
    if (activeImage) {
      // Permitir que la imagen se cargue y renderice primero
      const timer = setTimeout(updateImageDimensions, 100);
      window.addEventListener('resize', updateImageDimensions);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateImageDimensions);
      };
    }
  }, [activeImage]);
  
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
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition z-50"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center justify-center relative max-w-3xl w-full">
            {/* Contenedor de la imagen */}
            <div className="relative flex items-center justify-center w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
              <div className="relative h-full flex items-center justify-center">
                <Image
                  ref={imageRef}
                  src={activeImage.src}
                  alt={activeImage.alt || 'Imagen de PyDay Chile'}
                  width={1200}
                  height={900}
                  style={{ 
                    maxHeight: '100%', 
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                  onLoad={updateImageDimensions}
                  priority
                />
                
                {/* Caption*/}
                {activeImage.caption && imageDimensions.width > 0 && (
                  <div 
                    className="absolute bg-black/60 p-3 md:p-4 text-center"
                    style={{
                      bottom: 0,
                      width: imageDimensions.width,
                      maxWidth: '100%'
                    }}
                  >
                    <p className="text-white text-sm md:text-base">{activeImage.caption}</p>
                    {activeImage.location && (
                      <p className="text-white text-xs md:text-sm opacity-70 mt-1">{activeImage.location}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}