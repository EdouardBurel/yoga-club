import { useState, useEffect } from "react";
import { heroSlides } from "../data.js";
import "./Hero.css";

export default function Hero() {
  const [i, setI] = useState(0);
  const count = heroSlides.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count, i]);

  return (
    <section id="top" className="hero" aria-label="Yoga with India">
      <div className="hero__stage">
        {heroSlides.map((src, idx) => (
          <img
            key={idx}
            className={`hero__img ${idx === i ? "is-active" : ""}`}
            src={src}
            alt=""
            aria-hidden={idx !== i}
          />
        ))}
      </div>
    </section>
  );
}
