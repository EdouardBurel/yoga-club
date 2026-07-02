import "./OffersContent.css";

const offers = [
  {
    name: "Cours individuel",
    price: "à partir de 50 €",
    desc: "Une séance personnalisée, adaptée à votre niveau et à vos objectifs.",
  },
  {
    name: "Cours en petit groupe",
    price: "15 € / séance",
    desc: "Pratiquez à plusieurs dans une ambiance conviviale et bienveillante.",
  },
  {
    name: "Yoga entre amis",
    price: "sur devis",
    desc: "Une séance privée organisée chez vous, entre proches.",
  },
  {
    name: "Yoga en entreprise / séminaires",
    price: "sur devis",
    desc: "Offrez à vos équipes un moment de détente et de reconnexion.",
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
