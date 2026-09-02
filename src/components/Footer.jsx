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
          <h3>1 — Édition du site</h3>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site internet https://www.ywindia.com/ l'identité
            des différents intervenants dans le cadre de sa réalisation et de
            son suivi :
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
            <strong>Directeur de la publication :</strong> India Burel —
            contact : contact.ywindia@gmail.com
            <br />
            <strong>Hébergeur :</strong> GitHub, Inc., 88 Colin P. Kelly Jr.
            Street, San Francisco, CA 94107, USA
            <br />
            <strong>Délégué à la protection des données :</strong> India Burel
            — contact : contact.ywindia@gmail.com
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
            moyen ou le procédé utilisé, est interdite, sauf autorisation
            écrite préalable d'India Burel.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des
            éléments qu'il contient sera considérée comme constitutive d'une
            contrefaçon et poursuivie conformément aux dispositions des
            articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          <h3>3 — Limitations de responsabilité</h3>
          <p>
            India Burel ne pourra être tenue pour responsable des dommages
            directs et indirects causés au matériel de l'utilisateur, lors de
            l'accès au site https://www.ywindia.com.
          </p>
          <p>
            India Burel décline toute responsabilité quant à l'utilisation qui
            pourrait être faite des informations et contenus présents sur
            https://www.ywindia.com.
          </p>
          <p>
            India Burel s'engage à sécuriser au mieux le site
            https://www.ywindia.com, cependant sa responsabilité ne pourra être
            mise en cause si des données indésirables sont importées et
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
            modifiée, l'utilisateur du site https://www.ywindia.com dispose
            d'un droit d'accès, de modification et de suppression des
            informations collectées. Pour exercer ce droit, envoyez un message
            à notre Délégué à la Protection des Données : India Burel —
            contact.ywindia@gmail.com.
          </p>

          <h3>5 — Liens hypertextes et cookies</h3>
          <p>
            Le site https://www.ywindia.com contient des liens hypertextes vers
            d'autres sites et dégage toute responsabilité à propos de ces liens
            externes ou des liens créés par d'autres sites vers
            https://www.ywindia.com.
          </p>
          <p>
            La navigation sur le site https://www.ywindia.com est susceptible
            de provoquer l'installation de cookie(s) sur l'ordinateur de
            l'utilisateur. Un « cookie » est un fichier de petite taille qui
            enregistre des informations relatives à la navigation d'un
            utilisateur sur un site. Les données ainsi obtenues permettent
            d'obtenir des mesures de fréquentation, par exemple.
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
            https://www.ywindia.com est soumis au droit français.
          </p>
        </Modal>
      )}

      {open === "cgv" && (
        <Modal title="Conditions Générales de Vente" onClose={() => setOpen(null)}>
          <p className="cgv__date">Dernière mise à jour : 01.09.2026</p>

          <h3>Article 1 — Identité du prestataire</h3>
          <p>
            Les présentes Conditions Générales de Vente (ci-après «&nbsp;CGV&nbsp;»)
            régissent les prestations de yoga proposées sous le nom commercial
            Yoga with India par :
          </p>
          <p>
            BUREL India — Micro-Entrepreneur
            <br />
            SIRET : 797&nbsp;874&nbsp;773&nbsp;00030
            <br />
            Adresse professionnelle : Résidence Le Fairway, 76380 Montigny
            <br />
            E-mail : contact.ywindia@gmail.com
            <br />
            Téléphone : 07&nbsp;66&nbsp;87&nbsp;29&nbsp;20
          </p>
          <p>Ci-après désignée «&nbsp;la Prestataire&nbsp;».</p>

          <h3>Article 2 — Objet et champ d'application</h3>
          <p>
            Les présentes CGV ont pour objet de définir les conditions dans
            lesquelles la Prestataire propose des cours et prestations de yoga à
            ses clients. Les prestations peuvent notamment comprendre :
          </p>
          <ul>
            <li>des cours individuels de yoga à domicile</li>
            <li>des séances collectives et ateliers en studio</li>
            <li>des séances de yoga en entreprise ou sur le lieu de travail</li>
            <li>des ateliers ou événements ponctuels</li>
            <li>toute autre prestation présentée sur le site Yoga with India</li>
          </ul>
          <p>
            Les caractéristiques, durées et tarifs des prestations sont
            communiqués au Client avant toute réservation. Certaines prestations
            sont organisées ponctuellement ou régulièrement dans des studios ou
            espaces partenaires loués pour l'occasion. La réservation est
            effectuée directement auprès de Yoga with India et est valable pour
            la séance, la date, l'horaire et le lieu indiqués lors de la
            réservation. Le nombre de places pouvant être limité, la réservation
            n'est considérée comme définitive qu'après confirmation et, lorsque
            cela est demandé, réception du paiement.
          </p>
          <p>
            Toute réservation implique que le Client a pris connaissance des
            présentes CGV et les accepte sans réserve.
          </p>

          <h3>Article 3 — Nature des prestations</h3>
          <p>
            Les cours proposés peuvent notamment intégrer du Hatha Yoga, Vinyasa
            Yoga, Somatic Yin Yoga, de la mobilité fonctionnelle, méditation,
            pranayama (exercices de respiration), relaxation et autres pratiques
            complémentaires selon la prestation choisie. Les séances sont
            adaptées autant que possible au niveau et aux besoins des
            participants.
          </p>
          <p>
            Les prestations proposées par Yoga with India relèvent de
            l'enseignement du yoga et du bien-être. Elles ne constituent en
            aucun cas un acte médical, paramédical, psychothérapeutique ou un
            traitement médical et ne se substituent pas à l'avis ou au suivi
            d'un professionnel de santé.
          </p>

          <h3>Article 4 — Réservation</h3>
          <p>
            Les réservations peuvent être effectuées par l'intermédiaire du site
            internet, par e-mail, par un rendez-vous téléphonique ou directement
            auprès de la Prestataire.
          </p>
          <p>
            La réservation devient définitive après confirmation par la
            Prestataire et après réception du règlement ou de l'acompte demandé.
            La Prestataire se réserve le droit de refuser une réservation en cas
            d'indisponibilité ou pour tout motif légitime.
          </p>

          <h3>Article 5 — Tarifs</h3>
          <p>
            Les tarifs applicables sont ceux communiqués au Client au moment de
            la réservation ou affichés sur le site internet. Les prix sont
            indiqués en euros, toutes taxes comprises lorsque la TVA est
            applicable, ou avec la mention légale correspondant au régime fiscal
            de la Prestataire lorsqu'elle bénéficie d'une franchise ou d'une
            exonération de TVA.
          </p>
          <p>
            Les éventuels frais de déplacement sont précisés au Client avant la
            validation de la réservation. La Prestataire se réserve le droit de
            modifier ses tarifs à tout moment. Toute prestation déjà réservée et
            confirmée demeure toutefois facturée au tarif convenu lors de la
            réservation.
          </p>

          <h3>Article 6 — Modalités de paiement</h3>
          <p>Selon la prestation choisie, le règlement peut être effectué :</p>
          <ul>
            <li>en espèces ou par chèque</li>
            <li>par paiement en ligne sécurisé via Stripe ou par Wero</li>
          </ul>
          <p>
            Pour les paiements effectués en ligne, les données bancaires sont
            traitées par le prestataire de paiement concerné selon ses propres
            conditions de sécurité et de confidentialité. Yoga with India n'a
            pas accès aux données bancaires complètes du Client.
          </p>
          <p>
            Sauf disposition particulière convenue lors de la réservation, le
            règlement est exigible au plus tard le jour de la prestation. Pour
            certains ateliers, événements (week-end bien-être) ou prestations
            spécifiques, un paiement total ou un acompte pourra être demandé au
            moment de la réservation. Ces modalités seront précisées avant la
            commande.
          </p>

          <h3>Article 7 — Annulation ou report par le Client</h3>
          <p>
            Pour les cours individuels ou en groupe réservés directement auprès
            de Yoga with India, toute demande d'annulation ou de report doit
            être communiquée à la Prestataire au minimum 4&nbsp;heures avant
            l'heure prévue de la séance.
          </p>
          <p>
            En cas d'annulation moins de 4&nbsp;heures avant la séance ou de
            non-présentation, la séance pourra être considérée comme due. En cas
            de circonstances exceptionnelles dûment justifiées, la Prestataire
            pourra, à sa discrétion, proposer un report de la séance.
          </p>
          <p>
            Des conditions d'annulation spécifiques peuvent s'appliquer aux
            ateliers, événements ou autres prestations ponctuelles. Elles seront
            communiquées au Client avant la réservation.
          </p>

          <h3>Article 8 — Annulation par Yoga with India</h3>
          <p>
            Yoga with India se réserve la possibilité d'annuler ou de reporter
            une séance notamment en cas de maladie, de force majeure, de
            conditions rendant le déplacement impossible ou de tout événement
            indépendant de sa volonté.
          </p>
          <p>
            Dans ce cas, le Client pourra bénéficier, selon la situation, d'un
            report de la séance ou du remboursement de la prestation concernée
            lorsqu'elle a déjà été réglée. Aucune indemnité supplémentaire ne
            pourra être réclamée du seul fait de cette annulation, sous réserve
            des dispositions légales impératives applicables.
          </p>

          <h3>Article 9 — Retard</h3>
          <p>
            Le Client est invité à respecter l'horaire prévu afin de permettre
            le bon déroulement de la séance. En cas de retard du Client, la
            séance pourra être écourtée afin de respecter les engagements
            suivants de la Prestataire, sans réduction du prix initialement
            convenu.
          </p>
          <p>
            En cas de retard de la Prestataire, la durée de la séance sera, dans
            la mesure du possible, maintenue ou une solution équivalente sera
            proposée au Client.
          </p>

          <h3>Article 10 — Santé, aptitude physique et responsabilité du Client</h3>
          <p>
            Le Client est responsable de s'assurer que son état de santé lui
            permet de pratiquer le yoga et les activités proposées. Il lui
            appartient d'informer la Prestataire avant la séance de toute
            blessure, douleur, grossesse, intervention chirurgicale récente,
            restriction médicale ou autre élément susceptible d'avoir une
            incidence sur sa pratique.
          </p>
          <p>
            En cas de doute sur son aptitude à pratiquer, le Client est invité à
            demander l'avis d'un professionnel de santé. Chaque participant
            reste à l'écoute de ses propres limites et s'engage à interrompre
            tout mouvement provoquant une douleur inhabituelle ou un malaise.
          </p>
          <p>
            La Prestataire adapte ses indications dans la mesure du possible
            mais ne saurait être tenue responsable d'un dommage résultant
            notamment du non-respect des consignes, de la dissimulation d'une
            information pertinente ou d'une pratique effectuée au-delà des
            capacités personnelles du participant, sous réserve des dispositions
            légales applicables.
          </p>

          <h3>Article 11 — Cours à domicile</h3>
          <p>
            Pour les prestations réalisées au domicile du Client, celui-ci
            s'engage à mettre à disposition un espace suffisamment dégagé,
            propre et sécurisé pour permettre la pratique dans de bonnes
            conditions.
          </p>
          <p>
            Lorsque plusieurs personnes participent à la séance, le Client ayant
            effectué la réservation s'assure que l'espace disponible est adapté
            au nombre de participants prévu. Les modalités relatives au matériel
            nécessaire à la séance sont précisées lors de la réservation.
          </p>

          <h3>Article 12 — Droit de rétractation</h3>
          <p>
            Lorsqu'un Client consommateur conclut à distance un contrat de
            prestation de services, notamment par internet, il bénéficie en
            principe d'un délai légal de 14&nbsp;jours à compter de la
            conclusion du contrat pour exercer son droit de rétractation, sans
            avoir à motiver sa décision.
          </p>
          <p>
            Pour exercer ce droit, le Client doit informer Yoga with India de sa
            décision au moyen d'une déclaration claire et dénuée d'ambiguïté ou
            en utilisant un formulaire de rétractation.
          </p>
          <p>
            Lorsque le Client souhaite qu'une prestation commence avant la fin
            du délai légal de rétractation, Yoga with India recueille sa demande
            expresse dans les conditions prévues par la réglementation. Si le
            Client exerce son droit de rétractation alors que l'exécution de la
            prestation a commencé à sa demande avant la fin du délai de
            14&nbsp;jours, il pourra être tenu de régler un montant
            correspondant aux prestations déjà réalisées, conformément aux
            dispositions légales applicables.
          </p>
          <p>
            Lorsque la prestation a été pleinement exécutée avant la fin du
            délai de rétractation, le Client perd son droit de rétractation
            lorsque les conditions légales relatives à son accord préalable et
            exprès et à la reconnaissance de la perte de ce droit ont été
            respectées. Certaines prestations de loisirs fournies à une date ou
            période déterminée peuvent également relever des exceptions légales
            au droit de rétractation.
          </p>

          <h3>Article 13 — Responsabilité et assurance</h3>
          <p>
            La Prestataire déclare être titulaire d'une assurance responsabilité
            civile professionnelle couvrant son activité d'enseignement du yoga.
            La responsabilité de la Prestataire ne pourra être engagée que dans
            les limites prévues par la législation applicable.
          </p>
          <p>
            Le Client reste responsable de ses effets personnels pendant les
            séances. Yoga with India ne pourra être tenue responsable de leur
            perte, vol ou détérioration, sauf lorsque sa responsabilité est
            légalement établie.
          </p>

          <h3>Article 14 — Force majeure</h3>
          <p>
            Aucune des parties ne pourra être tenue responsable d'un manquement
            à ses obligations lorsque celui-ci résulte d'un événement de force
            majeure au sens de la législation française. Lorsque cela est
            possible, la séance concernée sera reportée à une date convenue
            entre les parties.
          </p>

          <h3>Article 15 — Données personnelles</h3>
          <p>
            Les données personnelles recueillies lors d'une prise de contact,
            d'une réservation ou d'un paiement sont utilisées uniquement dans le
            cadre de la gestion de la relation avec le Client, des réservations,
            des paiements et, lorsque le Client y a expressément consenti, des
            communications commerciales.
          </p>
          <p>
            Le traitement des données personnelles est effectué conformément à
            la réglementation applicable, notamment au Règlement général sur la
            protection des données (RGPD). Les modalités détaillées relatives au
            traitement des données personnelles et à l'exercice des droits des
            utilisateurs sont précisées dans la politique de confidentialité du
            site.
          </p>

          <h3>Article 16 — Propriété intellectuelle</h3>
          <p>
            Les contenus, textes, supports pédagogiques, séquences, documents,
            photographies et autres éléments créés et communiqués par Yoga with
            India restent protégés par les droits de propriété intellectuelle
            qui leur sont applicables. Ils ne peuvent être reproduits, diffusés,
            commercialisés ou utilisés à des fins professionnelles sans
            autorisation préalable.
          </p>

          <h3>Article 17 — Litige et médiation de la consommation</h3>
          <p>
            En cas de litige entre le Client et l'entreprise, ceux-ci
            s'efforceront de le résoudre à l'amiable (le Client adressera une
            réclamation écrite auprès du professionnel). À défaut d'accord
            amiable ou en l'absence de réponse du professionnel dans un délai
            raisonnable d'un (1) mois, le Client consommateur au sens de
            l'article L.133-4 du code de la consommation a la possibilité de
            saisir gratuitement, si un désaccord subsiste, le médiateur
            compétent inscrit sur la liste des médiateurs établie par la
            Commission d'évaluation et de contrôle de la médiation de la
            consommation, à savoir :
          </p>
          <p>
            La Société Médiation Professionnelle — Alteritae
            <br />
            5, rue Salvaing, 12000 Rodez
            <br />
            www.mediateur-consommation-smp.fr
          </p>

          <h3>Article 18 — Droit applicable</h3>
          <p>Les présentes CGV sont soumises au droit français.</p>
        </Modal>
      )}
    </>
  );
}