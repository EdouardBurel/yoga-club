import { useState } from "react";
import Modal from "./Modal.jsx";
import "./Announcement.css";

export default function Announcement() {
  const [show, setShow] = useState(true); // opens as soon as the site loads

  if (!show) return null;

  return (
    <Modal
      title="🌙 1 vendredi par mois à Bois-Guillaume"
      onClose={() => setShow(false)}
    >
      <div className="announce">
        <h3 className="announce__event">Soma Yin Yoga &amp; Sound</h3>
        <p>
          Offrez-vous une parenthèse de douceur et laissez-vous porter par une
          expérience unique. Grâce aux outils somatiques inspirés de la médecine
          traditionnelle chinoise, aux postures douces du Yin Yoga et aux
          vibrations des différents instruments, accordez-vous un moment de
          profonde détente, de présence à soi et de régulation du système
          nerveux.
        </p>

        <a
          className="btn-solid announce__cta"
          href="mailto:contact@ywindia.com?subject=Soma%20Yin%20Yoga%20%26%20Sound%20—%20prochaines%20dates"
        >
          → Je veux connaître les prochaines dates
        </a>
      </div>
    </Modal>
  );
}
