import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}`;
  const whatsappLabel = `+${profile.whatsapp.slice(0, 2)} ${profile.whatsapp.slice(
    2,
    7
  )} ${profile.whatsapp.slice(7)}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2 section-title">Contact</h2>

        <p className="body-text">
          Open to frontend roles, freelance work and collaboration. The fastest
          way to reach me is email or WhatsApp.
        </p>

        <ul className="contact-list contact-list-lg">
          <li>
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              <span>{profile.email}</span>
            </a>
          </li>
          <li>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>WhatsApp — {whatsappLabel}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
