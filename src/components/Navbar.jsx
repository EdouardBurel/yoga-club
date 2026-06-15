import { useState } from "react";
import "./Navbar.css";

const links = ["Home", "About", "Our Master", "Profile", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="India Yoga home">
          <img
            className="nav__logo-img"
            src="images/logoIndia.png"
            alt="India Yoga"
          />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((label) => (
            <a key={label} href="#" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
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
