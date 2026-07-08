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
            contact@ywindia.com
          </a>

          <a className="contact__phone" href="tel:+33612345678">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            06 12 34 56 78
          </a>

          <div className="contact__divider" aria-hidden="true">
            <span></span>◇<span></span>
          </div>

          <div className="contact__socials">
            <a
              className="social"
              href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fyoga-with-india%2F%3FviewAsMember%3Dtrue&data=05%7C02%7C%7Cd17608eba84347f6a41d08dedc3e73ff%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639190357964289651%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=eiaX3aspLv8bqpy6EuXM%2FsVTzXK0Iem1dFQFQkZFADc%3D&reserved=0"
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
              href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.instagram.com%2Fhealthyndie%3Figsh%3DMWZxZWpya3pjY3pqdQ%253D%253D%26utm_source%3Dqr&data=05%7C02%7C%7Cd17608eba84347f6a41d08dedc3e73ff%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639190357964303162%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=I%2B10Hwy%2F8sPETNYPM0x0fdMqkfoQJ7SPwBGkJqCpfyo%3D&reserved=0"
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
