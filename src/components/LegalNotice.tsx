import React from "react";

const MentionsLegales = () => {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 md:px-0 text-gray-800 pt-26">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Mentions légales & Politique de confidentialité
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Informations légales</h2>
        <p>Propriétaire du site : Lamour Nicolas</p>
        <p>Statut : Auto-entrepreneur</p>
        <p>Adresse : 57 rue du Vivier, 62200 Boulogne-sur-Mer</p>
        <p>Email : <a href="mailto:lamournico@live.fr" className="text-amber-600 hover:underline">lamournico@live.fr</a></p>
        <p>Téléphone : 06 67 23 26 53</p>
        <p>
          Numéro SIRET/SIREN : en attente (sera ajouté dès attribution)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
        <p>
          Le site est actuellement hébergé sur Netlify. L’adresse et les coordonnées
          de l’hébergeur seront mises à jour si nécessaire.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
        <p>
          Les informations collectées via le formulaire de contact (nom, email, message)
          sont utilisées uniquement pour répondre aux demandes. Elles ne sont pas
          partagées avec des tiers et sont conservées le temps nécessaire au traitement
          de votre demande.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cookies et traceurs</h2>
        <p>
          Ce site n'utilise pas de cookies ou traceurs pour le moment. Si de futurs outils
          de suivi sont ajoutés, une politique spécifique sera mise en place et vous en serez informé.
        </p>
      </section>
    </main>
  );
};

export default MentionsLegales;
