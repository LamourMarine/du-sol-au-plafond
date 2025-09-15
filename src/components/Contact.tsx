import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [popUpMessage, setPopUpMessage] = useState ("");
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
          setPopUpMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
          setShowPopUp(true);
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 flex justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Contactez-moi</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="w-full bg-[#1a1a1a] text-white py-2 rounded hover:text-amber-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Envoyer
          </button>
        </form>
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
    </section>
  );
};

export default Contact;
