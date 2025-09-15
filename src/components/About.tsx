import React from "react";

const About = () => {
  return (
    <>
      <section id="about" data-section="About"
        className="relative py-32 min-h-[60vh] bg-cover bg-center bg-no-repeat text-white flex items-end justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/todd-quackenbush-IClZBVw5W5A-unsplash.jpg')",
        }}
        >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Rectangle blanc centré */}
        <div className="relative bg-white/80 rounded-lg p-4 md:p-8 shadow-lg max-w-xl text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Du sol au plafond, vos projets prennent vie
            </h2>
            <p className="text-gray-700">
            Artisan polyvalent pour vos travaux d’intérieur et d’extérieur.
            </p>
        </div>
      </section>
    </>
  );
};

export default About;
