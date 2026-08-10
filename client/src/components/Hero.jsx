import Terminal from "./Terminal";
import useTyping from "../hooks/useTyping";

export default function Hero() {
  const roles = [
    "DSA Problem Solver",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Open Source Contributor"
  ];

  const typed = useTyping(roles);

  return (
    <section id="hero" className="hero">

      <div className="hero-grid" />

      <div className="hero-content">

        <div className="hero-eyebrow">
          Available for Internships & Collabs
        </div>

        <h1 className="hero-name">
          Vivek
          <br />
          <span>Patil</span>
        </h1>

        <div className="hero-role">

          <span className="tag">
            IT Undergrad @ KKWIEER '27
          </span>

          <span className="tag">
            Nashik, MH
          </span>

          <br />

          <span className="typed-text">
            {typed}
            <span className="typed-cursor" />
          </span>

        </div>

        <div className="hero-stats">

          <Stat
            number="340+"
            label="LeetCode Problems"
          />

          <Stat
            number="1522"
            label="Max LeetCode Rating"
          />

          <Stat
            number="2★"
            label="CodeChef Rating"
          />

          <Stat
            number="8.39"
            label="CGPA"
          />

        </div>

        <div className="hero-cta">

          <a
            className="btn-primary"
            href="#projects"
          >
            View Projects →
          </a>

          <a
            className="btn-outline"
            href="http://localhost:5000/api/resume"
          >
            Resume ↓
          </a>

          <a
            className="btn-outline"
            href="https://github.com/Vivekk4824"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>

      </div>

      <Terminal />

    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat-box">
      <span className="stat-num">
        {number}
      </span>

      <span className="stat-label">
        {label}
      </span>
    </div>
  );
}