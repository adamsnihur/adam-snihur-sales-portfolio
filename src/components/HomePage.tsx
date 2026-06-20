import { methods, salesExperience, salesProject, supportingExperience } from "../data/experience";
import { CapabilityGroups } from "./CapabilityGroups";
import { KnowledgeSection } from "./KnowledgeSection";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import {
  ArrowIcon,
  ContactSection,
  DownloadIcon,
  SectionTitle,
  SiteFooter,
  SiteHeader,
} from "./shared";

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <SiteHeader knowledgeView={false} />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy" data-reveal>
            <p className="availability"><span /> Ponad 6 lat w sprzedaży • Otwarty na role B2B</p>
            <h1 tabIndex={-1}>Relacja otwiera drzwi.<br /><em>Analiza domyka sprzedaż.</em></h1>
            <p className="hero-lead">
              Łączę ponad 6 lat doświadczenia w pozyskiwaniu klientów i negocjacjach z analitycznym sposobem myślenia. Rozumiem zarówno rozmowę handlową, jak i procesy stojące za dobrą obsługą klienta.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="mailto:adam.snihur@gmail.com?subject=Rozmowa%20o%20roli%20sprzedażowej">
                Porozmawiajmy <ArrowIcon />
              </a>
              <a className="text-link" href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download>
                Pobierz CV <DownloadIcon />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Najważniejsze doświadczenia" data-reveal>
            <div className="portrait-wrap">
              <img src="./adam-snihur-sales-portrait.png" alt="Portret Adama Śnihura" width="971" height="1619" />
              <span className="portrait-label">Poznań / Polska</span>
            </div>
            <div className="proof-list">
              <div><strong>Solar Volt</strong><span>spotkania handlowe i sprzedaż OZE</span></div>
              <div><strong>Orange Polska</strong><span>sprzedaż i rozwój klientów B2B</span></div>
              <div><strong>S’ouvre</strong><span>sprzedaż bezpośrednia i zespół</span></div>
              <div><strong>E-commerce</strong><span>oferta, dostawcy i rentowność</span></div>
            </div>
          </aside>
        </section>

        <section className="sales" id="doswiadczenie">
          <SectionTitle label="01 / Doświadczenie" title="Sprzedaż w praktyce" intro="Cztery środowiska, jeden wspólny mianownik: zdobyć zaufanie, zrozumieć potrzebę i dowieźć wartość." />
          <div className="experience-list">
            {salesExperience.map((item, index) => (
              <article className="experience-row" key={item.company} data-reveal>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-meta"><span>{item.period}</span><strong>{item.company}</strong></div>
                <div className="experience-body">
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                  <ul>{item.evidence.map((proof) => <li key={proof}>{proof}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="method" id="podejscie">
          <SectionTitle label="02 / Sposób pracy" title="Od pierwszego kontaktu do relacji" />
          <div className="method-grid">
            {methods.map(([number, title, copy]) => (
              <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <ProjectCaseStudy project={salesProject} />

        <section className="supporting">
          <SectionTitle label="04 / Szersza perspektywa" title="Doświadczenie, które wzmacnia sprzedaż" intro="Analityka, marketing i koordynacja projektów pomagają mi lepiej rozumieć organizację klienta - nie odciągają mnie od celu handlowego." />
          <div className="supporting-list">
            {supportingExperience.map((item) => (
              <article key={`${item.company}-${item.role}`} data-reveal>
                <div><span>{item.period}</span><strong>{item.company}</strong></div>
                <h3>{item.role}</h3>
                <p>{item.contribution}</p>
              </article>
            ))}
          </div>
        </section>

        <CapabilityGroups />

        <KnowledgeSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
