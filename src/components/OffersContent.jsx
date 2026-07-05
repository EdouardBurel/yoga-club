import "./OffersContent.css";

const offers = [
  {
    name: "Yoga en entreprise (QVT) / Séminaires",
    price: "",
    desc: "Une séance personnalisée, adaptée à votre niveau et à vos objectifs.",
  },
  {
    name: "Yoga entre amis",
    price: "",
    desc: "Une séance privée organisée chez vous, entre proches.",
  },
  {
    name: "Ateliers",
    price: "voir galerie",
    desc: "Thématiques variées : Yoga & Méditation, Yoga & Son, Yoga & Danse, Yoga & Créativité...",
  },
  {
    name: "Soma Yin Yoga & relaxation Sonore",
    price: "",
    desc: "1 séance par mois à Bois-Guillaume (76230), sur inscription.",
  },
];

export default function OffersContent({ onNavigate }) {
  return (
    <div className="offers">
      {offers.map((o) => (
        <div className="offer" key={o.name}>
          <div className="offer__head">
            <h3 className="offer__name">{o.name}</h3>
            <span className="offer__price">{o.price}</span>
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
