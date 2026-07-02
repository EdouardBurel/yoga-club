import { useState } from 'react'
import { practices } from '../data.js'
import Modal from './Modal.jsx'
import './Practices.css'

export default function Practices() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="practices" id="practices">
      <div className="container">
        <h2 className="section-title">Ce que je propose</h2>

        <div className="practices__grid">
          {practices.map((p) => (
            <article className="card" key={p.title}>
              <div className="card__img">
                <img src={p.img} alt={p.title} />
                <div className="card__overlay">
                  <h3 className="card__title">{p.title}</h3>
                  <button className="card__more" onClick={() => setSelected(p)}>
                    En savoir plus
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <p>{selected.desc}</p>
        </Modal>
      )}
    </section>
  )
}