export default function Skills({ skills }) {
  if (!skills) return null;

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <span className="section-number">02.</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div
            className="skill-card"
            key={group.category}
          >
            <div className="skill-card-header">
              <span className="skill-icon">
                {getIcon(group.category)}
              </span>

              <h3>{group.category}</h3>
            </div>

            <div className="skill-list">
              {group.items.map((skill) => (
                <span
                  className="skill-tag"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getIcon(category) {
  switch (category) {
    case "Languages":
      return "</>";

    case "Web Development":
      return "⌘";

    case "AI / ML":
      return "✦";

    case "Tools & Databases":
      return "⚙";

    default:
      return "•";
  }
}