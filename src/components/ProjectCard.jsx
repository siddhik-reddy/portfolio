import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-text">{project.summary}</p>

      <ul className="tag-list">
        {project.technologies.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary btn-sm"
        >
          <Github size={14} />
          GitHub
        </a>
        <Link
          to={`/projects/${project.slug}`}
          className="btn btn-ghost btn-sm"
        >
          Details
        </Link>
      </div>
    </article>
  );
}
