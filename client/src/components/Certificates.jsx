export default function Certificates({ certificates }) {
  if (!certificates) return null;

  return (
    <section
      id="certificates"
      className="section certificates-section"
    >
      <div className="section-header">
        <span className="section-number">06.</span>
        <h2>Certifications</h2>
      </div>

      <div className="certificates-list">
        {certificates.map((certificate, index) => (
          <article
            className="certificate-card"
            key={index}
          >
            <div className="certificate-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="certificate-info">
              <h3>{certificate.name}</h3>

              <span>
                {certificate.org}
              </span>
            </div>

            <time>
              {certificate.date}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
