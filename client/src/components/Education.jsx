export default function Education({ education }) {
  if (!education) return null;

  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <span className="section-number">07.</span>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        {education.map((item, index) => (
          <article
            className="education-card"
            key={`${item.degree}-${index}`}
          >
            <div className="education-year">
              {item.period}
            </div>

            <div className="education-main">
              <div className="education-heading">
                <div>
                  <h3>{item.degree}</h3>

                  <h4>{item.institution}</h4>
                </div>

                <span className="education-score">
                  {item.score}
                </span>
              </div>

              <p className="education-location">
                📍 {item.location}
              </p>

              {item.courses?.length > 0 && (
                <div className="education-courses">
                  <span className="courses-label">
                    Relevant Coursework
                  </span>

                  <div className="course-list">
                    {item.courses.map((course) => (
                      <span
                        className="course-tag"
                        key={course}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}