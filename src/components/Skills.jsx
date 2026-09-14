import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="h2 section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="card skill-card">
              <h3 className="card-title">{group.category}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
