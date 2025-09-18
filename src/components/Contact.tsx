import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopUpMessage("Merci ! Votre message a été envoyé avec succès.");
          setShowPopUp(true);
          form.current?.reset();
        },
        (error) => {
          setPopUpMessage(
            "Une erreur est survenue. Veuillez réessayer plus tard."
          );
          setShowPopUp(true);
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
<section
  id="contact"
  className="py-24 bg-gradient-to-r from-amber-50 via-white to-amber-50 flex justify-center"
>
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
      <span>📩</span> Contactez-moi
    </h1>
    <p className="text-center text-lg text-gray-600 mb-8">
      N’hésitez pas à m’envoyer un message pour toute question ou projet.
    </p>

    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <input
        type="text"
        name="user_name"
        placeholder="Nom"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
      />
      <button
        type="submit"
        className="w-full bg-amber-700 text-white py-3 rounded-lg shadow-md hover:bg-amber-800 transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
      >
        Envoyer
      </button>
    </form>

    {/* Coordonnées directes */}
    <div className="mt-10 text-center text-gray-700">
      <p>📞 06 67 23 26 53</p>
      <p>✉️ lamournico.fr</p>
    </div>

    {/* Popup modal */}
    {showPopUp && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-lg p-6 max-w-sm text-center shadow-lg relative">
          <p className="mb-4">{popUpMessage}</p>
          <button
            className="absolute top-2 right-2 text-gray-600 text-sm hover:text-amber-700 bg-transparent border-0 p-0"
            onClick={() => setShowPopUp(false)}
          >
            ✕
          </button>
        </div>
      </div>
    )}
  </div>
</section>  );
};

export default Contact;
