// Helper that builds a yellow-on-black placeholder so empty slots look intentional.
const ph = (w, h, label) =>
  `https://placehold.co/${w}x${h}/1a1a1a/ffc107?font=space-mono&text=${encodeURIComponent(label)}`;

export const heroSlides = [
  "images/indiaTitle.png",
  "images/bricks.jpg",
  "images/lotus2.jpg",
  "images/back.jpg",
];

export const aboutImage = "images/indiav2.jpg";

export const practices = [
  {
    title: "Hatha Yoga",
    img: "images/hatha.png", // keep your current image path
    desc: "Le yoga le plus traditionnel, accessible à tous, avec des exercices de respiration (pranayama) et des enchaînements de postures (asanas) tenues pendant plusieurs respirations. Il permet de travailler en douceur la souplesse, la concentration et le souffle.",
  },
  {
    title: "Vinyasa Yoga",
    img: "images/vinyasa.jpg",
    desc: "Pratiqué sur un fond musical et à un rythme dynamique qui lie mouvement et respiration, le Vinyasa est basé sur un enchaînement fluide de postures favorisant à la fois la mobilité, le renforcement du corps et la concentration.",
  },
  {
    title: "Somatic Yin Yoga",
    img: "images/yin.jpg",
    desc: "Une pratique douce et sécurisante de yoga, intégrant des outils inspirés de la médecine traditionnelle chinoise, pour réorganiser le corps vécu, énergiser les fascias et libérer les mémoires émotionnelles.",
  },
  {
    title: "Voyage sonore",
    img: "images/bowl.png",
    desc: "Une parenthèse de détente où j'intègre différents instruments (bol de cristal, bol tibétain, carillon Koshi et autres instruments intuitifs) : les vibrations du son constituent un précieux outil d'apaisement permettant de favoriser le relâchement profond, la présence à soi et la régulation du système nerveux.",
  },
];

export const featureBoxes = [
  {
    title: "Yoga en entreprise / Séminaires (sur devis)",
    img: ph(700, 500, "Mindfulness"),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat ducimus sed vel amet rerum sit ut iste quaerat, quidem voluptas in natus error necessitatibus.",
  },
  {
    title: "Yoga entre amis",
    video: "images/video.mp4",
  },
];

export const carouselSlides = [
  "images/group.jpg",
  "images/group1.jpg",
  "images/indiav.jpg",
];

export const ctaImage = ph(1400, 500, "On the mat");

export const cities = [
  { city: "Montigny", address: "45 Pirrama Rd, Pyrmont NSW 2025" },
  { city: "Le Havre", address: "163 Collins St, Melbourne VIC 3000" },
];

export const testimonials = [
  {
    name: "Hélène",
    avatar: ph(120, 120, ":)"),
    body: "Depuis 2024 , j'apprécie beaucoup les cours de Hatha et Yin Yoga d' India avec et sans musique. Bienveillance et Douceur dans sa pratique. Quelques exercices de méditation guidée relaxante.Une voix très apaisante et une touche ' so British' qui signent sa singularité.",
  },
  {
    name: "Jessica",
    avatar: ph(120, 120, ":)"),
    body: "I highly recommend India's yoga lessons - if you feel the need to reconnect your mind and body then look no further! India's calm and soothing voice will immediately put you at ease from the start and you'll feel your body relax with every breath 🧘",
  },
  {
    name: "Weekend entre amies",
    avatar: ph(120, 120, ":)"),
    body: "Un moment magique et reposant entre filles avec une séance alliant force et sérénité. Un véritable régal...à refaire sans hésiter!"
  },
  {
    name: "Kerry",
    avatar: ph(120, 120, ":)"),
    body: "I really enjoy India's yoga lessons and her outstanding savoir faire. India is an exceptional yoga teacher with excellent interpersonal skills. She is kind and caring and looks after her students wonderfully. She creates a zen, peaceful ambience which really helps me unwind and chill. I highly recommend her lessons!",
  },
];
