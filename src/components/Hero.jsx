import { useState, useEffect } from 'react'
import { heroSlides } from '../data.js'
import './Hero.css'

export default function Hero() {
  const [i, setI] = useState(0)

  // auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero" aria-label="Featured images">
      <div className="hero__track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {heroSlides.map((src, idx) => (
          <div className="hero__slide" key={idx}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="hero__dots">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === i ? 'is-active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  )
}
