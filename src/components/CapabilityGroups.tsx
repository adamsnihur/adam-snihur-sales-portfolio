import { capabilities } from "../data/capabilities";

export function CapabilityGroups() {
  return (
    <section className="capabilities-section" aria-labelledby="capabilities-title">
      <div data-reveal>
        <p className="eyebrow">05 / Kompetencje</p>
        <h2 id="capabilities-title">Co wnoszę do zespołu</h2>
      </div>
      <div className="capability-grid">
        {capabilities.map((capability) => (
          <div className="capability-group" key={capability.title} data-reveal>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <p className="capability-evidence-label">Potwierdzone w praktyce</p>
            <ul>
              {capability.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="capability-cert-banner" data-reveal>
        <div className="cert-banner-info">
          <span className="cert-badge-tag">Certyfikowana Wiedza / Certified Expertise</span>
          <h3>Certyfikat Umiejętności Jutra AI (Google) / Google AI Skills of Tomorrow</h3>
          <p>Oficjalne potwierdzenie wiedzy i praktycznych umiejętności z zakresu sztucznej inteligencji, automatyzacji i agentowych systemów AI wydane przez Google.</p>
        </div>
        <div className="cert-banner-actions">
          <a className="button button-small button-dark" href="./assets/CertyfikatUmiejetnosciJutra_PL.pdf" target="_blank" rel="noopener noreferrer">
            Certyfikat (PL) ↗
          </a>
          <a className="button button-small button-dark" href="./assets/CertyfikatUmiejetnosciJutra_EN.pdf" target="_blank" rel="noopener noreferrer">
            Certificate (EN) ↗
          </a>
        </div>
      </div>
    </section>
  );
}
