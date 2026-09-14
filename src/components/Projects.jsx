import { featuredProjects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2 section-title">Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
