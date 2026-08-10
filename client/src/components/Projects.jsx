export default function Projects({ projects }) {
  if (!projects) return null;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-number">04.</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div
              className="project-number"
              style={{
                "--project-accent": project.color
              }}
            >
              0{index + 1}
            </div>

            <div className="project-content">
              <div className="project-top">
                <div>
                  <span className="project-period">
                    {project.period}
                  </span>

                  <h3>{project.name}</h3>

                  <h4>{project.subtitle}</h4>
                </div>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span
                    className="project-tech"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map(
                  (highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}