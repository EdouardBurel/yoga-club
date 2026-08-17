import { useState } from 'react'
import Modal from './Modal.jsx'
import './Announcement.css'

export default function Announcement() {
  const [show, setShow] = useState(true)

  const goToContact = () => {
    setShow(false)                                 // close the pop-up
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 250)                                        // wait for close anim + scroll unlock
  }

  if (!show) return null

  return (
    <Modal title="🌙 1 vendredi par mois à Bois-Guillaume" onClose={() => setShow(false)}>
      <div className="announce">
        <h3 className="announce__event">Soma Yin Yoga &amp; Sound</h3>
        <p>
          Offrez-vous une parenthèse de douceur et laissez-vous porter par une
          expérience unique. Grâce aux outils somatiques inspirés de la
          médecine traditionnelle chinoise, aux postures douces du Yin Yoga et
          aux vibrations des différents instruments, accordez-vous un moment
          de profonde détente, de présence à soi et de régulation du système
          nerveux.
        </p>
        <button className="btn-solid announce__cta" onClick={goToContact}>
          → Je veux connaître les prochaines dates
        </button>
      </div>
    </Modal>
  )
}