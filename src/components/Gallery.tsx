import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
  const plomberieImages = [
    "src/assets/Images_travaux/20231227_133023.jpg",
    "src/assets/Images_travaux/20231227_215633.jpg",
    "src/assets/Images_travaux/20231227_215643.jpg",
    "src/assets/Images_travaux/20231229_082657.jpg",
    "src/assets/Images_travaux/20231229_102539.jpg",
  ];

  const carrelageImages = [
    "/src/assets/image1.jpg",
    "/src/assets/image2.jpg",
    "/src/assets/image3.jpg",
    "/src/assets/image4.jpg",
    "/src/assets/image5.jpg",
  ];

  const solImages = [
    "/src/assets/image1.jpg",
    "/src/assets/image2.jpg",
    "/src/assets/image3.jpg",
    "/src/assets/image4.jpg",
    "/src/assets/image5.jpg",
  ];

  return (
    <>
<section
  id="gallery"
  className="bg-gradient-to-b from-white via-amber-50/40 to-white py-32"
>
  <div className="text-center mb-16">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
      Galerie
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-amber-700 rounded"></span>
    </h1>
    <p className="text-gray-600 text-lg mt-6">
      Découvrez quelques-unes de mes réalisations.
    </p>
  </div>

  <div className="max-w-6xl mx-auto space-y-16">
    {/* Plomberie */}
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Plomberie
      </h3>
      <GalleryCarousel images={plomberieImages} />
    </div>

    {/* Carrelage */}
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Carrelage
      </h3>
      <GalleryCarousel images={carrelageImages} />
    </div>

    {/* Sols */}
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Sols
      </h3>
      <GalleryCarousel images={solImages} />
    </div>
  </div>
</section>    </>
  );
};

export default Gallery;
