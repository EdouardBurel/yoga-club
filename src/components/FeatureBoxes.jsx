import { featureBoxes } from '../data.js'
import './FeatureBoxes.css'

export default function FeatureBoxes() {
  return (
    <section className="features">
      <div className="container features__grid">
        {featureBoxes.map((f) => (
          <article
            className="feature"
            key={f.title}
            style={{ backgroundImage: `url(${f.img})` }}
          >
            <div className="feature__overlay">
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__body">{f.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
