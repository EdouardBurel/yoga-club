import "./OffersContent.css";

const offers = [
  {
    name: "Yoga entre amis",
    price: "",
    desc: "Une séance privée organisée chez vous, entre proches.",
  },
  {
    name: "Yoga en entreprise (QVCT) / Séminaire",
    price: "",
    desc: "Offrez à vos équipes un moment de détente et de reconnexion.",
  },
  {
    name: "Ateliers",
    gallery: true,
    desc: "Des rendez-vous ponctuels dans l'année où je propose des ateliers autour de différentes thématiques invitant à explorer le yoga autrement. Chaque atelier est une expérience unique de partage, de découverte et de bien-être.",
  },
];

export default function OffersContent({ onNavigate, onShowGallery }) {
  return (
    <div className="offers">
      {offers.map((o) => (
        <div className="offer" key={o.name}>
          <div className="offer__head">
            <h3 className="offer__name">{o.name}</h3>
            {o.gallery ? (
              <button className="offer__gallery-link" onClick={onShowGallery}>
                voir galerie
              </button>
            ) : (
              o.price && <span className="offer__price">{o.price}</span>
            )}
          </div>
          <p className="offer__desc">{o.desc}</p>
        </div>
      ))}
      <button className="btn-solid offers__cta" onClick={onNavigate}>
        Réserver / demander un devis
      </button>
    </div>
  );
}
