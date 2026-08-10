export default function Terminal() {
  return (
    <div className="hero-terminal">

      <div className="term-header">
        <div className="term-dot red" />
        <div className="term-dot yellow" />
        <div className="term-dot green" />

        <span className="term-title">
          vivek@portfolio ~ zsh
        </span>
      </div>

      <div className="term-body">

        <TerminalLine command="whoami" />

        <div className="term-out">
          <span className="term-key">name:</span>{" "}
          <span className="term-val">
            "Vivek Patil"
          </span>
        </div>

        <div className="term-out">
          <span className="term-key">role:</span>{" "}
          <span className="term-val">
            "IT Undergraduate + Developer"
          </span>
        </div>

        <br />

        <TerminalLine command="leetcode --stats" />

        <div className="term-out">
          <span className="term-key">solved:</span>{" "}
          <span className="term-val">340+</span>
        </div>

        <div className="term-out">
          <span className="term-key">max_rating:</span>{" "}
          <span className="term-val">1522</span>
        </div>

        <div className="term-out">
          <span className="term-key">codechef:</span>{" "}
          <span className="term-val">"2-Star"</span>
        </div>

        <br />

        <TerminalLine command="cat status.txt" />

        <div className="term-out">
          🟢 Open to internships & collaborations
        </div>

        <div className="term-line">
          <span className="term-prompt">❯</span>
          <span className="term-cursor" />
        </div>

      </div>
    </div>
  );
}

function TerminalLine({ command }) {
  return (
    <div className="term-line">
      <span className="term-prompt">❯</span>
      <span className="term-cmd">
        {" "}{command}
      </span>
    </div>
  );
}