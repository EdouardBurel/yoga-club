import { useState } from "react";
import "./Navbar.css";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Mes pratiques", href: "#practices" },
  { label: "Offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Yoga with India">
          <img
            className="nav__logo-img"
            src="images/logov.png"
            alt="Yoga with India"
          />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
;
