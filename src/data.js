// ============================================================
//  All editable content lives here.
//
//  IMAGES: the defaults are branded placeholders so the site looks
//  complete out of the box. To use your own photos, drop them in the
//  /public folder (e.g. /public/images/hatha.jpg) and replace the URL
//  with "/images/hatha.jpg".
// ============================================================

// Helper that builds a yellow-on-black placeholder so empty slots look intentional.
const ph = (w, h, label) =>
  `https://placehold.co/${w}x${h}/1a1a1a/ffc107?font=space-mono&text=${encodeURIComponent(label)}`;

export const heroSlides = [
  "images/indiaTitle.png",
  "images/back.jpg",
  "images/bricks.jpg",
  "images/lotus2.jpg",
];

export const aboutImage = "images/indiav2.jpg"

export const practices = [
  { title: "Hatha Yoga", img: ph(400, 300, "Hatha") },
  { title: "Iyengar", img: ph(400, 300, "Iyengar") },
  { title: "Jivamukti Yoga", img: ph(400, 300, "Jivamukti") },
  { title: "Hot Yoga", img: ph(400, 300, "Hot Yoga") },
  { title: "Hatha Vinyasa", img: ph(400, 300, "Vinyasa") },
  { title: "India", img: ph(400, 300, "Meditation") },
  { title: "Kundalini", img: ph(400, 300, "Kundalini") },
  { title: "Power Yoga", img: ph(400, 300, "Power") },
];

export const featureBoxes = [
  {
    title: "Mindfulness",
    img: ph(700, 500, "Mindfulness"),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat ducimus sed vel amet rerum sit ut iste quaerat, quidem voluptas in natus error necessitatibus.",
  },
  {
    title: "Yoga for Beginners",
    img: ph(700, 500, "Beginners"),
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi culpa inventore! Vel esse accusantium architecto assumenda, dolorum cupiditate quaerat, doloremque vero magni quae ut non modi ipsum illo eveniet!",
  },
];

export const carouselSlides = [
  ph(1200, 700, "Studio 1"),
  ph(1200, 700, "Studio 2"),
  ph(1200, 700, "Studio 3"),
];

export const ctaImage = ph(1400, 500, "On the mat");

export const cities = [
  { city: "Montigny", address: "45 Pirrama Rd, Pyrmont NSW 2025" },
  { city: "Le Havre", address: "163 Collins St, Melbourne VIC 3000" },
];

export const testimonials = [
  {
    name: "Jessica",
    avatar: ph(120, 120, ":)"),
    body: "I highly recommend India's yoga lessons - if you feel the need to reconnect your mind and body then look no further! India's calm and soothing voice will immediately put you at ease from the start and you'll feel your body relax with every breath 🧘",
  },
  {
    name: "Hélène",
    avatar: ph(120, 120, ":)"),
    body: "Depuis 2024 , j'apprécie beaucoup les cours de Hatha et Yin Yoga d' India avec et sans musique. Bienveillance et Douceur dans sa pratique. Quelques exercices de méditation guidée relaxante.Une voix très apaisante et une touche ' so British' qui signent sa singularité.",
  },
  {
    name: "Michelle W.",
    avatar: ph(120, 120, ":)"),
    body: "India speaks English fluently! I'm English and managed to understand her lesson!",
  },
  {
    name: "Kerry",
    avatar: ph(120, 120, ":)"),
    body: "I really enjoy India's yoga lessons and her outstanding savoir faire. India is an exceptional yoga teacher with excellent interpersonal skills. She is kind and caring and looks after her students wonderfully. She creates a zen, peaceful ambience which really helps me unwind and chill. I highly recommend her lessons!",
  },
];
