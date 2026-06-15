import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo" aria-hidden="true">🧘</span>
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
