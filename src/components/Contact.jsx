import { useState } from "react";
import Modal from "./Modal.jsx";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/xdenwpqq";

// ---- sanitization & validation helpers ----
const clean = (v, max) =>
  v
    .replace(/[<>]/g, "") // strip angle brackets (no HTML tags possible)
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control characters
    .trim()
    .slice(0, max);

const NAME_RE = /^[\p{L}\p{M}' -]{1,60}$/u; // letters incl. accents, spaces, hyphens
const PHONE_RE = /^[0-9+ .()-]{6,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    message: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSent, setLastSent] = useState(0);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const updatePhone = (e) => {
    // keep only digits, +, spaces, dots, parentheses, hyphens — as the user types
    const filtered = e.target.value.replace(/[^0-9+ .()-]/g, "");
    setForm({ ...form, telephone: filtered });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot: bots fill hidden fields — drop silently
    if (form._gotcha) return;

    // cooldown: max one send per 30 seconds
    if (Date.now() - lastSent < 30000) {
      setErrorMsg("Merci de patienter un instant avant un nouvel envoi.");
      setStatus("error");
      return;
    }

    // sanitize
    const prenom = clean(form.prenom, 60);
    const nom = clean(form.nom, 60);
    const telephone = clean(form.telephone, 20);
    const email = clean(form.email, 120);
    const message = clean(form.message, 2000);

    // validate
    if (!NAME_RE.test(prenom) || !NAME_RE.test(nom)) {
      setErrorMsg("Le prénom et le nom ne doivent contenir que des lettres.");
      setStatus("error");
      return;
    }
    if (!PHONE_RE.test(telephone)) {
      setErrorMsg("Merci de vérifier le numéro de téléphone.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setErrorMsg("Merci de vérifier l'adresse email.");
      setStatus("error");
      return;
    }
    if (message.length < 10) {
      setErrorMsg("Merci d'écrire un message d'au moins quelques mots.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ prenom, nom, telephone, email, message }),
      });
      if (res.ok) {
        setStatus("sent");
        setLastSent(Date.now());
        setForm({
          prenom: "",
          nom: "",
          telephone: "",
          email: "",
          message: "",
          _gotcha: "",
        });
      } else {
        setErrorMsg(
          "Une erreur est survenue. Merci de réessayer dans un instant.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Une erreur est survenue. Merci de réessayer dans un instant.",
      );
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__lead">
          Une question, une envie de réserver&nbsp;? Écrivez-moi, je vous
          répondrai avec plaisir.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label>
              Prénom
              <input
                name="prenom"
                type="text"
                value={form.prenom}
                onChange={update}
                required
                maxLength={60}
                autoComplete="given-name"
              />
            </label>
            <label>
              Nom
              <input
                name="nom"
                type="text"
                value={form.nom}
                onChange={update}
                required
                maxLength={60}
                autoComplete="family-name"
              />
            </label>
          </div>

          <div className="contact__row">
            <label>
              Téléphone
              <input
                name="telephone"
                type="tel"
                value={form.telephone}
                onChange={updatePhone}
                required
                maxLength={20}
                pattern="[0-9+ .()-]{6,20}"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                maxLength={120}
                autoComplete="email"
              />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              required
              minLength={10}
              maxLength={2000}
              placeholder="Dites-m'en un peu plus sur votre demande…"
            />
          </label>

          <input
            type="text"
            name="_gotcha"
            value={form._gotcha}
            onChange={update}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            className="btn-solid contact__submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer"}
          </button>

          {status === "error" && <p className="contact__error">{errorMsg}</p>}
        </form>

        <div className="contact__socials">
          <a
            className="social"
            href="https://www.linkedin.com/company/yoga-with-india/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            className="social"
            href="https://www.instagram.com/healthyndie/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle
                cx="17.3"
                cy="6.7"
                r="0.9"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {status === "sent" && (
        <Modal title="Message envoyé 🙏" onClose={() => setStatus("idle")}>
          <div className="contact__sent">
            <p>
              Merci&nbsp;! Vos coordonnées ont bien été envoyées. Je vous
              répondrai dans les plus brefs délais.
            </p>
            <button className="btn-solid" onClick={() => setStatus("idle")}>
              Fermer
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
