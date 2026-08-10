export default function Achievements({ achievements }) {
  if (!achievements) return null;

  return (
    <section
      id="achievements"
      className="section achievements-section"
    >
      <div className="section-header">
        <span className="section-number">05.</span>
        <h2>Achievements</h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <article
            className="achievement-card"
            key={index}
          >
            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <div className="achievement-content">
              <h3>{achievement.title}</h3>

              <p>{achievement.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}