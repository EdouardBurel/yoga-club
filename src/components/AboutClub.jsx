import { aboutImage } from "../data.js";
import "./AboutClub.css";

export default function AboutClub() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__text">
          <img
            className="about__logo"
            src="images/logoIndia.png"
            alt="India Yoga logo"
          />
          <h2 className="about__title">
            A propos <span>Yoga India</span>
          </h2>
          <p>
            Every human should have at least one simple spiritual practice in
            their life. With it, you will live well and find a calmer mind.
          </p>
          <a className="btn-outline" href="#about">
            Read more
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
