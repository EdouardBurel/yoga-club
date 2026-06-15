import { testimonials } from '../data.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article className="quote" key={t.name}>
              <div className="quote__top">
                <img className="quote__avatar" src={t.avatar} alt={t.name} />
                <span className="quote__mark" aria-hidden="true">&rdquo;</span>
              </div>
              <p className="quote__body">{t.body}</p>
              <h3 className="quote__name">{t.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
