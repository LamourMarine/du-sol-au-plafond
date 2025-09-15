import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  images: string[];
  visibleCount?: number;
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  images,
  visibleCount = 3,
}) => {
  const [startIndex, setStartIndex] = useState(0);


  //Décalage vers la gauche
  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + images.length) % images.length);
  };

  //Décalage vers la droite
  const nextSlide = () => {
    setStartIndex((prev) => 
        (prev + 1) % images.length);
  };

  
  const getVisibleImages = () => {
    if (startIndex + visibleCount <= images.length) {
        return images.slice(startIndex, startIndex + visibleCount);
    } else {
        //prendre la fin + le debut pour boucler
        return  [
            ...images.slice(startIndex),
            ...images.slice(0, startIndex + visibleCount - images.length)
        ];
    }
  };

  return (
    <div className="relative w-full max-w5xl mx-auto">
      {/*flèche gauche*/}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/*Images*/}
      <div className="flex justify-center gap-4 overflow-hidden">
        {getVisibleImages().map((src, index) => (
          <div
            key={index}
            className="w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={src}
              alt={`Travaux ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/*Flèche de droite*/}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default GalleryCarousel;
