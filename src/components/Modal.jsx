import { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({ title, onClose, children }) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setShown(true))   // trigger enter transition
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className={`modal__overlay ${shown ? 'is-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fermer">×</button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}