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
    </section>
  );
}
