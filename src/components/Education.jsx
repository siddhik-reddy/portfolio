import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2 section-title">Education</h2>
        <div className="education-grid">
          {education.map((item, i) => (
            <div key={i} className="card">
              <h3 className="card-title">{item.degree}</h3>
              <p className="muted">{item.institution}</p>
              <p className="muted">
                {item.period} — {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
