import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__lead">
          Une question, une envie de réserver&nbsp;? Écrivez-moi, je vous
          répondrai avec plaisir.
        </p>

        <div className="contact__card">
          <a className="contact__mail" href="mailto:contact@ywindia.com">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            contact.ywindia@gmail.com
          </a>

          <a
            className="btn-solid"
            href="https://calendly.com/indeev/yoga-with-india"
            target="_blank"
            rel="noopener noreferrer"
          >
            Téléphone
          </a>

          <div className="contact__divider" aria-hidden="true">
            <span></span>◇<span></span>
          </div>

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
      </div>
    </section>
  );
}
