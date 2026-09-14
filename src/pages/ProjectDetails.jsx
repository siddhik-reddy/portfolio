import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects.js";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="h2">Project not found</h1>
          <Link to="/" className="btn btn-secondary">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container project-details">
        <Link to="/" className="btn btn-ghost btn-sm back-link">
          <ArrowLeft size={14} />
          Back
        </Link>

        <h1 className="h1">{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <div className="project-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

        <div className="project-block">
          <h2 className="h2">Problem</h2>
          <p className="body-text">{project.problem}</p>
        </div>

        <div className="project-block">
          <h2 className="h2">Solution</h2>
          <p className="body-text">{project.solution}</p>
        </div>

        <div className="project-block">
          <h2 className="h2">Features</h2>
          <ul className="bullet-list">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-block">
          <h2 className="h2">Technology Stack</h2>
          <ul className="tag-list">
            {project.technologies.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
