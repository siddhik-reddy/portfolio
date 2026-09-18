import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";
import { profile } from "../data/profile.js";
import TerminalIntro from "./TerminalIntro.jsx";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Full Stack Developer</p>
            <h1 className="h1 hero-title">{profile.name}</h1>
            <p className="lead hero-tagline">{profile.tagline}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="btn btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={18} />
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <TerminalIntro />
          </div>
        </div>
      </div>
    </section>
  );
}
