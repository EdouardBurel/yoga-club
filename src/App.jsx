import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutClub from './components/AboutClub.jsx'
import Practices from './components/Practices.jsx'
import FeatureBoxes from './components/FeatureBoxes.jsx'
import PictureCarousel from './components/PictureCarousel.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Contact from './components/Contact.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import Announcement from './components/Announcement.jsx'


export default function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <AboutClub />
        <Practices />
        <FeatureBoxes />
        <PictureCarousel />
        {/* <CtaBanner /> */}
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
