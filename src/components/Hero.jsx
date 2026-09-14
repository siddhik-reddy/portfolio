import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <p className="hero-eyebrow">Frontend Developer</p>
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
        </div>
      </div>
    </section>
  );
}
