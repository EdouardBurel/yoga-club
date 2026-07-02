import { useState } from "react";
import Modal from "./Modal.jsx";
import "./Footer.css";

export default function Footer() {
  const [open, setOpen] = useState(null); // 'legal' | 'cgv' | null

  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__logo" aria-hidden="true">
            🧘
          </span>
          <p>© {new Date().getFullYear()} Yoga with India</p>
          <nav className="footer__links">
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
            <button
              className="footer__link-btn"
              onClick={() => setOpen("legal")}
            >
              Mentions légales
            </button>
            <button className="footer__link-btn" onClick={() => setOpen("cgv")}>
              CGV
            </button>
          </nav>
        </div>
      </footer>

      {open === "legal" && (
        <Modal title="Mentions légales" onClose={() => setOpen(null)}>
          <h3>Éditeur du site</h3>
          <p>
            [Prénom Nom]
            <br />
            Statut : [auto-entrepreneur / entreprise individuelle]
            <br />
            Adresse : [adresse complète]
            <br />
            Email : [email] — Téléphone : [téléphone]
            <br />
            SIRET : [numéro SIRET]
            <br />
            [N° TVA intracommunautaire, si applicable]
          </p>

          <h3>Directeur de la publication</h3>
          <p>[Prénom Nom]</p>

          <h3>Hébergeur</h3>
          <p>
            GitHub, Inc.
            <br />
            88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis
            <br />
            github.com
          </p>

          <h3>Propriété intellectuelle</h3>
          <p>
            L'ensemble des contenus (textes, images, logo) présents sur ce site
            est la propriété de [Prénom Nom], sauf mention contraire. Toute
            reproduction sans autorisation préalable est interdite.
          </p>

          <h3>Données personnelles</h3>
          <p>
            Les informations transmises via le formulaire de contact sont
            utilisées uniquement pour répondre à votre demande. Conformément au
            RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données en écrivant à [email].
          </p>
        </Modal>
      )}

      {open === "cgv" && (
        <Modal
          title="Conditions Générales de Vente"
          onClose={() => setOpen(null)}
        >
          <h3>1. Objet</h3>
          <p>
            Les présentes CGV régissent les prestations de cours et séances de
            yoga proposées par [Prénom Nom] ([statut]).
          </p>

          <h3>2. Prestations et tarifs</h3>
          <p>
            Les prestations et leurs tarifs sont décrits sur le site. Les prix
            sont indiqués en euros [TTC / TVA non applicable, art. 293 B du
            CGI].
          </p>

          <h3>3. Réservation et paiement</h3>
          <p>
            La réservation est confirmée après [accord / paiement]. Les moyens
            de paiement acceptés sont : [espèces, virement, …].
          </p>

          <h3>4. Annulation et rétractation</h3>
          <p>
            Toute annulation doit être signalée au moins [24/48] heures à
            l'avance. [Précisez vos conditions de report ou de remboursement. Le
            droit de rétractation de 14 jours peut ne pas s'appliquer aux
            séances réservées à une date déterminée — à vérifier.]
          </p>

          <h3>5. Responsabilité et santé</h3>
          <p>
            Le pratiquant déclare être en condition physique de suivre les cours
            et reste responsable de sa propre santé. Un avis médical est
            recommandé en cas de doute.
          </p>

          <h3>6. Litiges</h3>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige,
            une solution amiable sera recherchée avant toute action ([médiateur
            de la consommation, le cas échéant]).
          </p>
        </Modal>
      )}
    </>
  );
}
