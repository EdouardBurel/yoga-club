import { useState } from 'react'
import { cities } from '../data.js'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend here — this just shows a confirmation. To collect real
  // submissions, point this at a form service (Formspree, Getform, etc.).
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <h2 className="contact__heading">Contact Us</h2>
          <p className="contact__lead">
            Any questions or remarks? Just write us a message.
          </p>

          {cities.map((c) => (
            <div className="contact__city" key={c.city}>
              <h3>{c.city}</h3>
              <p>{c.address}</p>
            </div>
          ))}
        </div>

        <div className="contact__form-wrap">
          <h2 className="contact__form-title">Get in Touch</h2>
          <p className="contact__form-sub">
            Have an inquiry or some feedback for us? Fill out the form below to
            contact our team.
          </p>

          {sent ? (
            <p className="contact__success">
              Thanks, {form.name || 'friend'} — we&apos;ll be in touch soon. 🙏
            </p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update}
                  required
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                />
              </label>

              <label>
                How can we help?
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={update}
                  required
                />
              </label>

              <button className="btn-solid contact__submit" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
