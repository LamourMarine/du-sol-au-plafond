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
        data-section="Gallery"
        className="bg-yellow-800/30 py-32 min-h-[60vh]"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Galerie</h1>
          <p className="text-gray-700 text-lg">
            Découvrez quelques-unes de mes réalisations.
          </p>
        </div>

        {/*Plomberie*/}
        <h3 className="text-2xl font-bold mb-4 mt-4 text-center">Plomberie</h3>
        <GalleryCarousel images={plomberieImages} />

        {/*Carrelage*/}
        <h3 className="text-2xl font-bold mb-4 mt-4 text-center">Carrelage</h3>
        <GalleryCarousel images={carrelageImages} />

        {/*Sols / parquet / terasse*/}
        <h3 className="text-2xl font-bold mb-4 mt-4 text-center">Sols</h3>
        <GalleryCarousel images={solImages} />
      </section>
    </>
  );
};

export default Gallery;
