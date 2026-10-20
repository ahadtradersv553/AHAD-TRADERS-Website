import "./CallNowBanner.css";

export default function CallNowBanner() {
  return (
    <section className="call-now-section" aria-label="Quick Contact Call Now">
      <div className="section-shell">
        <div className="call-now-card">
          <div className="call-now-badge">
            <span className="call-now-pulse" aria-hidden="true" />
            <span>Instant Assistance &bull; Delivery Across Pakistan</span>
          </div>

          <div className="call-now-body">
            <h2 className="call-now-title">
              <span className="call-now-word">CALL NOW</span>
              <span className="call-now-numbers">
                <a href="tel:03349333134" className="call-link" aria-label="Call 0334 9333134">
                  0334 9333134
                </a>
                <span className="call-slash" aria-hidden="true">/</span>
                <a href="tel:03024158700" className="call-link" aria-label="Call 0302 4158700">
                  0302 4158700
                </a>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
