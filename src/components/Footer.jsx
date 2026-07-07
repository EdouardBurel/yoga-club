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

      {open === "legal" && (
        <Modal title="Mentions légales" onClose={() => setOpen(null)}>
          <h3>1 — Édition du site</h3>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site internet https://www.yogawithindia.com/
            l'identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi :
          </p>
          <p>
            <strong>Propriétaire du site :</strong> BUREL INDIA — Contact :
            contact.ywindia@gmail.com — Adresse : Le Fairway, 76380 Montigny,
            FRANCE.
            <br />
            <strong>Identification de l'entreprise :</strong> BUREL INDIA —
            SIRET 797&nbsp;874&nbsp;773&nbsp;00030 — Adresse postale : Le
            Fairway, 76380 Montigny, FRANCE.
            <br />
            <strong>Directeur de la publication :</strong> India Burel — contact
            : contact.ywindia@gmail.com
            <br />
            <strong>Hébergeur :</strong> GitHub, Inc., 88 Colin P. Kelly Jr.
            Street, San Francisco, CA 94107, USA
            <br />
            <strong>Délégué à la protection des données :</strong> India Burel —
            contact : contact.ywindia@gmail.com
            <br />
            <strong>Autres contributeurs :</strong> Edouard Burel (Web
            Designer).
          </p>

          <h3>2 — Propriété intellectuelle et contrefaçons</h3>
          <p>
            India Burel est propriétaire des droits de propriété intellectuelle
            et détient les droits d'usage sur tous les éléments accessibles sur
            le site internet, notamment les textes, images, graphismes, logos,
            vidéos, architecture, icônes et sons.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable d'India Burel.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des
            éléments qu'il contient sera considérée comme constitutive d'une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          <h3>3 — Limitations de responsabilité</h3>
          <p>
            India Burel ne pourra être tenue pour responsable des dommages
            directs et indirects causés au matériel de l'utilisateur, lors de
            l'accès au site https://www.yogawithindia.com.
          </p>
          <p>
            India Burel décline toute responsabilité quant à l'utilisation qui
            pourrait être faite des informations et contenus présents sur
            https://www.yogawithindia.com.
          </p>
          <p>
            India Burel s'engage à sécuriser au mieux le site
            https://www.yogawithindia.com, cependant sa responsabilité ne pourra
            être mise en cause si des données indésirables sont importées et
            installées sur son site à son insu.
          </p>
          <p>
            Des espaces interactifs (espace contact ou commentaires) sont à la
            disposition des utilisateurs. India Burel se réserve le droit de
            supprimer, sans mise en demeure préalable, tout contenu déposé dans
            cet espace qui contreviendrait à la législation applicable en
            France, en particulier aux dispositions relatives à la protection
            des données.
          </p>
          <p>
            Le cas échéant, India Burel se réserve également la possibilité de
            mettre en cause la responsabilité civile et/ou pénale de
            l'utilisateur, notamment en cas de message à caractère raciste,
            injurieux, diffamant ou pornographique, quel que soit le support
            utilisé (texte, photographie…).
          </p>

          <h3>4 — CNIL et gestion des données personnelles</h3>
          <p>
            Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
            modifiée, l'utilisateur du site https://www.yogawithindia.com
            dispose d'un droit d'accès, de modification et de suppression des
            informations collectées. Pour exercer ce droit, envoyez un message à
            notre Délégué à la Protection des Données : India Burel —
            contact.ywindia@gmail.com.
          </p>

          <h3>5 — Liens hypertextes et cookies</h3>
          <p>
            Le site https://www.yogawithindia.com contient des liens hypertextes
            vers d'autres sites et dégage toute responsabilité à propos de ces
            liens externes ou des liens créés par d'autres sites vers
            https://www.yogawithindia.com.
          </p>
          <p>
            La navigation sur le site https://www.yogawithindia.com est
            susceptible de provoquer l'installation de cookie(s) sur
            l'ordinateur de l'utilisateur. Un « cookie » est un fichier de
            petite taille qui enregistre des informations relatives à la
            navigation d'un utilisateur sur un site. Les données ainsi obtenues
            permettent d'obtenir des mesures de fréquentation, par exemple.
          </p>
          <p>
            Vous avez la possibilité d'accepter ou de refuser les cookies en
            modifiant les paramètres de votre navigateur. Aucun cookie ne sera
            déposé sans votre consentement. Les cookies sont enregistrés pour
            une durée maximale de 1 mois.
          </p>

          <h3>6 — Droit applicable et attribution de juridiction</h3>
          <p>
            Tout litige en relation avec l'utilisation du site
            https://www.yogawithindia.com est soumis au droit français.
          </p>
        </Modal>
      )}
    </>
  );
}
