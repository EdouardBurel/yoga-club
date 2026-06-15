import { useState } from 'react'
import { carouselSlides } from '../data.js'
import './PictureCarousel.css'

export default function PictureCarousel() {
  const [i, setI] = useState(0)
  const go = (dir) =>
    setI((p) => (p + dir + carouselSlides.length) % carouselSlides.length)

  return (
    <section className="pcarousel" aria-label="Studio gallery">
      <div className="pcarousel__frame">
        <button className="pcarousel__arrow left" aria-label="Previous" onClick={() => go(-1)}>
          ‹
        </button>

        <div className="pcarousel__stage">
          <img src={carouselSlides[i]} alt={`Studio photo ${i + 1}`} />
        </div>

        <button className="pcarousel__arrow right" aria-label="Next" onClick={() => go(1)}>
          ›
        </button>
      </div>
    </section>
  )
}
