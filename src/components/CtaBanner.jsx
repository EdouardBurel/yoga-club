import { ctaImage } from '../data.js'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta" style={{ backgroundImage: `url(${ctaImage})` }}>
      <div className="cta__overlay">
        <div className="container cta__inner">
          <h2 className="cta__title">We love to see you soon on the mat!</h2>
          <p className="cta__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptas aliquam ullam sint sequi, consequatur fugiat mollitia quos
            aliquid id asperiores doloremque vero repudiandae.
          </p>
          <a className="btn-outline cta__btn" href="#about">Read more</a>
        </div>
      </div>
    </section>
  )
}
