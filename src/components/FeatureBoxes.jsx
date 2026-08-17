import { useState } from "react";
import Modal from "./Modal.jsx";
import OffersContent from "./OffersContent.jsx";
import "./FeatureBoxes.css";

export default function FeatureBoxes() {
  const [showOffers, setShowOffers] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const goToContact = () => {
    setShowOffers(false); // close the offers pop-up
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200); // wait for the modal to unmount (frees scroll lock)
  };

  const openGallery = () => {
    setShowOffers(false); // close offers first
    setTimeout(() => setShowGallery(true), 250); // then open gallery
  };

  return (
    <section className="features" id="offres">
      <div className="container features__grid">
        <div className="feature-cta">
          <h3 className="feature-cta__title">Mes offres</h3>
          <p className="feature-cta__text">
            Cours individuels, en petit groupe, entre amis ou en entreprise.
          </p>

          <div className="feature-cta__actions">
            <button
              className="btn-outline"
              onClick={() => setShowOffers(true)}
            >
              Découvrir les offres
            </button>
            <a
              className="btn-solid"
              href="https://calendly.com/indeev/yoga-with-india"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appel découverte
            </a>
          </div>
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
          <span className="feature-video__title">Yoga à domicile</span>
        </div>
      </div>

      {showOffers && (
        <Modal title="Nos offres" onClose={() => setShowOffers(false)}>
          <OffersContent
            onNavigate={goToContact}
            onShowGallery={openGallery}
          />
        </Modal>
      )}

      {showGallery && (
        <Modal
          title="Ateliers — Galerie"
          onClose={() => setShowGallery(false)}
        >
          <div className="gallery-duo">
            <img src="images/group.jpg" alt="Atelier de yoga en groupe" />
            <img src="images/group1.jpg" alt="Atelier de yoga en groupe" />
          </div>
        </Modal>
      )}
    </section>
  );
}