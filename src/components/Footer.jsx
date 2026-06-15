import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="nav__logo" aria-label="India Yoga home">
          <img
            className="nav__logo-img"
            src="/images/logoIndia.png"
            alt="India Yoga"
          />
        </a>
        <p>© {new Date().getFullYear()} Yoga Club. Many practices, one intention.</p>
        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#practices">Practices</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
