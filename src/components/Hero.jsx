import { useState, useEffect } from 'react'
import { heroSlides } from '../data.js'
import './Hero.css'

const FIRST_DELAY = 8000   // indiaTitle stays 8s
const SLIDE_DELAY = 5000   // the others rotate every 5s

export default function Hero() {
  const [i, setI] = useState(0)
  const count = heroSlides.length

  useEffect(() => {
    if (count <= 1) return
    const delay = i === 0 ? FIRST_DELAY : SLIDE_DELAY
    const id = setTimeout(() => setI((p) => (p + 1) % count), delay)
    return () => clearTimeout(id)
  }, [i, count])

  return (
    <section id="top" className="hero" aria-label="Yoga with India">
      <div className="hero__stage">
        {heroSlides.map((src, idx) => (
          <img
            key={idx}
            className={`hero__img ${idx === i ? 'is-active' : ''}`}
            src={src}
            alt=""
            aria-hidden={idx !== i}
          />
        ))}
      </div>
    </section>
  )
}