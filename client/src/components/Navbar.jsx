export default function Navbar() {
  return (
    <nav
      style={{
        height: "60px",
        background: "#111827",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}
    >
      <div>vivek.dev</div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about" style={{ color: "white" }}>
          About
        </a>

        <a href="#skills" style={{ color: "white" }}>
          Skills
        </a>

        <a href="#projects" style={{ color: "white" }}>
          Projects
        </a>

        <a href="#contact" style={{ color: "white" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}