"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageType {
  readonly src: string;
  readonly height: number;
  readonly width: number;
  readonly alt: string;
}

interface ImageGalleryProps {
  images: readonly ImageType[];
  language?: "en" | "es";
}

export default function ImageGallery({
  images,
  language = "en",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    }
  };

  if (images.length === 0) return null;

  const firstImage = images[0];
  const isMobile = firstImage.height > firstImage.width;

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-markup">
          {language === "es" ? "Capturas de Pantalla" : "Screenshots"}
        </h2>
        <div className="space-y-4">
          {/* Show only the first image */}
          <div
            className="rounded-lg overflow-hidden border border-border cursor-pointer hover:shadow-lg transition-shadow duration-200 relative group"
            onClick={() => openModal(0)}
          >
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              width={firstImage.width}
              height={firstImage.height}
              className={`w-full h-auto object-cover ${
                isMobile ? "max-h-[500px]" : "max-h-96"
              }`}
            />
            {/* Overlay with click hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-center">
                <p className="text-lg font-semibold">
                  {language === "es"
                    ? "Ver todas las imágenes"
                    : "View all images"}
                </p>
                {images.length > 1 && (
                  <p className="text-sm mt-1">
                    {language === "es"
                      ? `${images.length} imágenes disponibles`
                      : `${images.length} images available`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              aria-label={language === "es" ? "Cerrar" : "Close"}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                  aria-label={
                    language === "es" ? "Imagen anterior" : "Previous image"
                  }
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                  aria-label={
                    language === "es" ? "Siguiente imagen" : "Next image"
                  }
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}

            {/* Main image */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={images[selectedImage].width}
                height={images[selectedImage].height}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
