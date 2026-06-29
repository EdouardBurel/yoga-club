import { aboutImage } from "../data.js";
import "./AboutClub.css";

export default function AboutClub() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__text">
          <img
            className="about__logo"
            src="images/logov.png"
            alt="Yoga with India logo"
          />
          <h2 className="about__title">
            A propos <span>Yoga with India</span>
          </h2>
          <p>
            Retrouvez calme, souplesse et sérénité grâce à une pratique alliant
            mouvement, souffle et relaxation sonore.
          </p>
          <p className="about__italic">
            Sessions available in French or English.
          </p>
          <a className="btn-outline" href="#about">
            Découvrir les offres
          </a>
        </div>

        <div className="about__media">
          <div className="about__disc" aria-hidden="true"></div>
          <img
            className="about__person"
            src={aboutImage}
            alt="India, yoga teacher, in prayer pose"
          />
        </div>
      </div>
    </section>
  );
}
