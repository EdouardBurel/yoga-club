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
  `https://placehold.co/${w}x${h}/1a1a1a/ffc107?font=space-mono&text=${encodeURIComponent(label)}`

export const heroSlides = [
  ph(1600, 900, 'Yoga 1'),
  ph(1600, 900, 'Yoga 2'),
  ph(1600, 900, 'Yoga 3'),
]

export const aboutImage = ph(600, 600, 'Meditation')

export const practices = [
  { title: 'Hatha Yoga',    img: ph(400, 300, 'Hatha') },
  { title: 'Iyengar',       img: ph(400, 300, 'Iyengar') },
  { title: 'Jivamukti Yoga',img: ph(400, 300, 'Jivamukti') },
  { title: 'Hot Yoga',      img: ph(400, 300, 'Hot Yoga') },
  { title: 'Hatha Vinyasa', img: ph(400, 300, 'Vinyasa') },
  { title: 'Meditation',    img: ph(400, 300, 'Meditation') },
  { title: 'Kundalini',     img: ph(400, 300, 'Kundalini') },
  { title: 'Power Yoga',    img: ph(400, 300, 'Power') },
]

export const featureBoxes = [
  {
    title: 'Mindfulness',
    img: ph(700, 500, 'Mindfulness'),
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat ducimus sed vel amet rerum sit ut iste quaerat, quidem voluptas in natus error necessitatibus.',
  },
  {
    title: 'Yoga for Beginners',
    img: ph(700, 500, 'Beginners'),
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sequi culpa inventore! Vel esse accusantium architecto assumenda, dolorum cupiditate quaerat, doloremque vero magni quae ut non modi ipsum illo eveniet!',
  },
]

export const carouselSlides = [
  ph(1200, 700, 'Studio 1'),
  ph(1200, 700, 'Studio 2'),
  ph(1200, 700, 'Studio 3'),
]

export const ctaImage = ph(1400, 500, 'On the mat')

export const cities = [
  { city: 'Sydney',      address: '45 Pirrama Rd, Pyrmont NSW 2025' },
  { city: 'Melbourne',   address: '163 Collins St, Melbourne VIC 3000' },
  { city: 'Los Angeles', address: '800 W Olympic Blvd, Los Angeles CA 90015' },
]

export const testimonials = [
  { name: 'Dilshad',       avatar: ph(120, 120, ':)'), body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.' },
  { name: 'Sabir Ali',     avatar: ph(120, 120, ':)'), body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.' },
  { name: 'Dipankar Kumar',avatar: ph(120, 120, ':)'), body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.' },
  { name: 'Satya Narayan', avatar: ph(120, 120, ':)'), body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.' },
]
