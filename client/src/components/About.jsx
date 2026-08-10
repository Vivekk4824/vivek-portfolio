export default function About({ about }) {
  if (!about) return null;

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span className="section-number">01.</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-terminal">
          <div className="about-terminal-header">
            <span>about.json</span>
          </div>

          <div className="about-terminal-body">
            <span className="json-bracket">{"{"}</span>

            <div className="json-line">
              <span className="json-key">"name"</span>
              <span>: </span>
              <span className="json-value">
                "Vivek Patil"
              </span>
              <span>,</span>
            </div>

            <div className="json-line">
              <span className="json-key">"education"</span>
              <span>: </span>
              <span className="json-value">
                "B.Tech IT"
              </span>
              <span>,</span>
            </div>

            <div className="json-line">
              <span className="json-key">"location"</span>
              <span>: </span>
              <span className="json-value">
                "Nashik, Maharashtra"
              </span>
              <span>,</span>
            </div>

            <div className="json-line">
              <span className="json-key">"interests"</span>
              <span>: [</span>
            </div>

            <div className="json-array">
              <span>"DSA",</span>
              <span>"Web Development",</span>
              <span>"AI / ML"</span>
            </div>

            <div className="json-line">
              <span>]</span>
            </div>

            <span className="json-bracket">{"}"}</span>
          </div>
        </div>

        <div className="about-text">
          <p>{about.summary}</p>

          <p>
            I enjoy building practical applications,
            solving algorithmic problems, and exploring
            new technologies that can solve real-world
            problems.
          </p>
        </div>
      </div>
    </section>
  );
}