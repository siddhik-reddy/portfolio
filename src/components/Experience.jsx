import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="h2 section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((item, i) => (
            <li key={i} className="timeline-item">
              <p className="timeline-period">{item.period}</p>
              <h3 className="card-title">{item.role}</h3>
              <p className="muted">
                {item.company} — {item.location}
              </p>
              <ul className="bullet-list">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <ul className="tag-list">
                {item.technologies.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
