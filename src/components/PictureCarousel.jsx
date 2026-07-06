import { useState, useEffect, useCallback } from "react";
import { carouselSlides } from "../data.js";
import "./PictureCarousel.css";

export default function PictureCarousel() {
  const [i, setI] = useState(0);
  const count = carouselSlides.length;

  const go = useCallback(
    (dir) => setI((p) => (p + dir + count) % count),
    [count],
  );

  // auto-advance every 5s; resets when the index changes (e.g. after a manual click)
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count, i]);

  return (
    <section className="pcarousel" aria-label="Galerie">
      <div className="pcarousel__stage">
        {carouselSlides.map((src, idx) => (
          <img
            key={idx}
            className={`pcarousel__img ${idx === i ? "is-active" : ""}`}
            src={src}
            alt=""
            aria-hidden={idx !== i}
          />
        ))}

        {count > 1 && (
          <>
            <button
              className="pcarousel__arrow left"
              aria-label="Précédent"
              onClick={() => go(-1)}
            >
              ‹
            </button>
            <button
              className="pcarousel__arrow right"
              aria-label="Suivant"
              onClick={() => go(1)}
            >
              ›
            </button>

            <div className="pcarousel__dots">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`pcarousel__dot ${idx === i ? "is-active" : ""}`}
                  aria-label={`Image ${idx + 1}`}
                  onClick={() => setI(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
