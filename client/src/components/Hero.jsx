import Terminal from "./Terminal";
import useTyping from "../hooks/useTyping";
import useLeetCode from "../hooks/useLeetCode";


export default function Hero({ hero }) {
  const roles = [
    "DSA Problem Solver",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Open Source Contributor"
  ];

  const typed = useTyping(roles);
  const {
  stats: leetcode,
  loading: leetcodeLoading
} = useLeetCode();



  if (!hero) {
    return (
      <section className="hero">
        <div className="hero-content">
          Loading...
        </div>
      </section>
    );
  }

  const [firstName, ...rest] = hero.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="hero" className="hero">

      <div className="hero-grid" />

      <div className="hero-content">

        <div className="hero-eyebrow">
          Available for Internships & Collabs
        </div>

        <h1 className="hero-name">
          {firstName}
          <br />
          <span>{lastName}</span>
        </h1>

        <div className="hero-role">

          <span className="tag">
            {hero.title}
          </span>

          <span className="tag">
            {hero.location}
          </span>

          <br />

          <span className="typed-text">
            {typed}
            <span className="typed-cursor" />
          </span>

        </div>

        <div className="hero-stats">

          <Stat
            number={
              leetcodeLoading
                ? "..."
                : leetcode?.problemsSolved ??
                  hero.stats.leetcodeSolved
            }
            label="LeetCode Problems"
            live={!leetcodeLoading && !!leetcode}
          />

          <Stat
            number={
              leetcodeLoading
                ? "..."
                : leetcode?.rating
                  ? Math.round(leetcode.rating)
                  : hero.stats.maxRating
            }
            label="Contest Rating"
            live={!leetcodeLoading && !!leetcode}
          />

          <Stat
            number={
              leetcodeLoading
                ? "..."
                : leetcode?.contestsAttended ?? "—"
            }
            label="Contests Attended"
            live={!leetcodeLoading && !!leetcode}
          />

          <Stat
            number={hero.stats.cgpa}
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
            href={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"}/resume`}
          >
            Resume ↓
          </a>

          <a
            className="btn-outline"
            href={hero.github}
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

function Stat({ number, label, live }) {
  return (
    <div className="stat-box">
      <span className="stat-num">
        {number}

        {live && (
          <span className="live-dot">
            ●
          </span>
        )}
      </span>

      <span className="stat-label">
        {label}
      </span>
    </div>
  );
}
