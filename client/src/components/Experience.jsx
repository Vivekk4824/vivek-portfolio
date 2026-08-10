export default function Experience({ experience }) {
  if (!experience) return null;

  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <span className="section-number">03.</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-timeline">
        {experience.map((item) => (
          <article className="experience-item" key={item.id}>
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <span className="experience-type">
                    {item.type}
                  </span>

                  <h3>{item.role}</h3>

                  <h4>{item.org}</h4>
                </div>

                <span className="experience-period">
                  {item.period}
                </span>
              </div>

              <ul className="experience-points">
                {item.points.map((point, index) => (
                  <li key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}