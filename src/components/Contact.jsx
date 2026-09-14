import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile.js";
import { validateContact } from "../utils/validateContact.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validateContact(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2 section-title">Contact</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="body-text">
              Open to frontend roles, freelance work and collaboration.
            </p>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={16} /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
              />
              {errors.message && (
                <p id="message-error" className="error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {sent && (
              <p className="form-success">
                Message validated. Connect a backend to enable delivery.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
