import { practices } from "../data.js";
import "./Practices.css";

export default function Practices() {
  return (
    <section className="practices" id="practices">
      <div className="container">
        <h2 className="section-title">Ce que je propose</h2>

        <div className="practices__grid">
          {practices.map((p) => (
            <article className="card" key={p.title}>
              <img className="card__img" src={p.img} alt={p.title} />
              <div className="card__overlay">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
