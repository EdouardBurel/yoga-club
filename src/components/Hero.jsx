import { heroSlides } from "../data.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Yoga with India">
      <img className="hero__img" src={heroSlides[0]} alt="Yoga with India" />
    </section>
  );
}
