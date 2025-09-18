import React from "react";

const About = () => {
  return (
    <>
<section
  id="about"
  className="relative py-32 min-h-[60vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center scroll-mt-20"
  style={{
    backgroundImage:
      "url('/public/images/todd-quackenbush-IClZBVw5W5A-unsplash.jpg')",
  }}
>
  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative bg-white/80 md:bg-white/90 rounded-lg p-6 md:p-10 shadow-lg max-w-4xl z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
      Du sol au plafond, vos projets prennent vie
    </h2>
    <p className="text-gray-700 text-lg text-center mb-6">
      Artisan passionné avec plus de 20 ans d’expérience, je vous accompagne
      dans tous vos travaux d’intérieur et d’extérieur. Mon objectif : allier
      savoir-faire et écoute pour réaliser vos projets sur mesure.
    </p>

    {/* Points forts */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-center">
      <div>
        <h3 className="text-xl font-semibold text-amber-700 mb-2">Polyvalence</h3>
        <p className="text-gray-600 text-sm">
          Travaux de rénovation, peinture, menuiserie, sols et plus encore.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-amber-700 mb-2">Qualité</h3>
        <p className="text-gray-600 text-sm">
          Des finitions soignées et durables, avec un vrai souci du détail.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-amber-700 mb-2">Confiance</h3>
        <p className="text-gray-600 text-sm">
          Un artisan à l’écoute, qui s’adapte à vos besoins et à votre budget.
        </p>
      </div>
    </div>

    {/* Bouton CTA */}
    <div className="mt-8 flex justify-center">
      <a
        href="#contact"
        className="bg-amber-700 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-800 transition"
      >
        Discutons de votre projet
      </a>
    </div>
  </div>
</section>
    </>
  );
};

export default About;
