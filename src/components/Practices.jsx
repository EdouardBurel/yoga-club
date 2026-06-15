import { practices } from '../data.js'
import './Practices.css'

export default function Practices() {
  return (
    <section className="practices" id="practices">
      <div className="container">
        <h2 className="section-title">Many Practices, One Intention</h2>

        <div className="practices__grid">
          {practices.map((p) => (
            <article className="card" key={p.title}>
              <div className="card__img">
                <img src={p.img} alt={p.title} />
              </div>
              <h3 className="card__title">{p.title}</h3>
              <a className="card__more" href="#practices">More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
