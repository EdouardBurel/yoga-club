import { useState } from "react";
import Modal from "./Modal.jsx";
import OffersContent from "./OffersContent.jsx";
import "./FeatureBoxes.css";

export default function FeatureBoxes() {
  const [showOffers, setShowOffers] = useState(false);

  const goToContact = () => {
    setShowOffers(false); // close the offers pop-up
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200); // wait for the modal to unmount (frees scroll lock)
  };

  return (
    <section className="features">
      <div className="container features__grid">
        <div className="feature-cta">
          <h3 className="feature-cta__title">Nos offres</h3>
          <p className="feature-cta__text">
            Cours individuels, en petit groupe, entre amis ou en entreprise.
          </p>
          <button className="btn-outline" onClick={() => setShowOffers(true)}>
            Découvrir les offres
          </button>
        </div>

        <div className="feature-video">
          <video
            className="feature-video__media"
            src="images/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <span className="feature-video__title">Yoga entre amis</span>
        </div>
      </div>

      {showOffers && (
        <Modal title="Nos offres" onClose={() => setShowOffers(false)}>
          <OffersContent onNavigate={goToContact} />
        </Modal>
      )}
    </section>
  );
}
