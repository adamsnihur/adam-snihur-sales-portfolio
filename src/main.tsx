import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./responsive.css";

type SalesExperience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  evidence: string[];
};

type SupportingExperience = {
  company: string;
  role: string;
  period: string;
  contribution: string;
};

const salesExperience: SalesExperience[] = [
  {
    company: "Solar Volt",
    role: "Przedstawiciel handlowy ds. OZE",
    period: "03.2020–07.2021",
    summary: "Bezpośrednia sprzedaż rozwiązań OZE prowadzona równolegle z pracą w Orange Polska.",
    evidence: [
      "Prowadzenie popołudniowych spotkań z klientami zainteresowanymi fotowoltaiką, umawianych przez call center.",
      "Badanie potrzeb i prezentowanie dopasowanej oferty podczas bezpośrednich wizyt u klientów.",
      "Odpowiadanie na pytania i zastrzeżenia oraz prowadzenie procesu w kierunku finalizacji umowy.",
    ],
  },
  {
    company: "Orange Polska",
    role: "Account Manager",
    period: "03.2019–06.2021",
    summary: "Sprzedaż rozwiązań telekomunikacyjnych dla klientów biznesowych w Wielkopolsce.",
    evidence: [
      "Aktywne pozyskiwanie klientów przez cold calling, networking i ukierunkowany prospecting.",
      "Badanie potrzeb, prezentowanie dopasowanych rozwiązań i negocjowanie umów.",
      "Rozwój portfela przez upselling i cross-selling oraz regularne przekraczanie celów.",
    ],
  },
  {
    company: "S’ouvre",
    role: "Koordynator grupy sprzedażowej",
    period: "08.2017–02.2019",
    summary: "Sprzedaż bezpośrednia FMCG połączona z prowadzeniem niewielkiego zespołu.",
    evidence: [
      "Realizacja indywidualnych celów sprzedażowych i rozmowy z klientami.",
      "Szkolenia z technik sprzedaży oraz wiedzy produktowej.",
      "Wsparcie zespołu w wymagających sytuacjach i planowanie jego pracy.",
    ],
  },
  {
    company: "Własna działalność",
    role: "E-commerce",
    period: "2020–2023",
    summary: "Samodzielne prowadzenie sprzedaży internetowej i odpowiedzialność za rentowność.",
    evidence: [
      "Sprzedaż we własnym sklepie oraz na platformach zewnętrznych.",
      "Analiza trendów, wyników i zachowań klientów.",
      "Optymalizacja oferty i negocjowanie warunków z dostawcami.",
    ],
  },
];

const supportingExperience: SupportingExperience[] = [
  {
    company: "GSK",
    role: "Analityk Globalnego Łańcucha Dostaw",
    period: "01.2025–05.2026",
    contribution: "Analiza danych, rekomendacje dla interesariuszy i rozwiązywanie sytuacji kryzysowych.",
  },
  {
    company: "GSK",
    role: "Product Manager, Social & Paid Media",
    period: "09.2024–01.2025",
    contribution: "Analiza rynku, prezentowanie wyników oraz koordynacja zespołów marketingu, analityki i IT.",
  },
  {
    company: "Królewski Balet Klasyczny",
    role: "Project Coordinator",
    period: "09.2022–08.2024",
    contribution: "Relacje z partnerami, koordynacja tournée oraz kampanie wspierające sprzedaż biletów.",
  },
  {
    company: "Projekt gry przeglądarkowej",
    role: "Project Manager",
    period: "07.2021–09.2022",
    contribution: "Badanie rynku, model monetyzacji, relacja z inwestorem i koordynacja zespołów.",
  },
];

const methods = [
  ["01", "Poznaję kontekst", "Zaczynam od sytuacji klienta, jego celu i realnych ograniczeń."],
  ["02", "Diagnozuję potrzebę", "Porządkuję informacje i oddzielam objawy od właściwego problemu."],
  ["03", "Dopasowuję rozwiązanie", "Przekładam potrzeby na konkretną propozycję i jasno komunikuję wartość."],
  ["04", "Rozwijam relację", "Dbam o wdrożenie, rozwiązuję problemy i szukam kolejnych obszarów współpracy."],
];

const skills = [
  "Sprzedaż B2B",
  "Aktywne pozyskiwanie klientów",
  "Badanie potrzeb",
  "Negocjacje",
  "Finalizacja sprzedaży",
  "Rozwój portfela",
  "Upselling i cross-selling",
  "E-commerce",
  "Analiza rynku",
  "Prezentowanie rekomendacji",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
    </svg>
  );
}

function SectionTitle({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <header className="section-title" data-reveal>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Adam Śnihur — początek strony">Adam Śnihur</a>
        <nav aria-label="Główna nawigacja">
          <a href="#doswiadczenie">Doświadczenie</a>
          <a href="#podejscie">Podejście</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="button button-small button-dark" href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download>
          CV <DownloadIcon />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy" data-reveal>
            <p className="availability"><span /> Otwarty na role sprzedażowe B2B</p>
            <h1>Relacja otwiera drzwi.<br /><em>Analiza domyka sprzedaż.</em></h1>
            <p className="hero-lead">
              Łączę doświadczenie w pozyskiwaniu klientów i negocjacjach z analitycznym sposobem myślenia. Rozumiem zarówno rozmowę handlową, jak i procesy stojące za dobrą obsługą klienta.
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
              <img src="./adam-snihur-sales-friendly-v2.png" alt="Przyjazny portret Adama Śnihura" width="1537" height="1023" />
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

        <section className="supporting">
          <SectionTitle label="03 / Szersza perspektywa" title="Doświadczenie, które wzmacnia sprzedaż" intro="Analityka, marketing i koordynacja projektów pomagają mi lepiej rozumieć organizację klienta — nie odciągają mnie od celu handlowego." />
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

        <section className="skills-section">
          <div data-reveal><p className="eyebrow">04 / Kompetencje</p><h2>Co wnoszę do zespołu</h2></div>
          <div className="skill-cloud" data-reveal>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="contact" id="kontakt" data-reveal>
          <div><p className="eyebrow">Kontakt</p><h2>Porozmawiajmy o wyniku,<br />który mam pomóc osiągnąć.</h2></div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:adam.snihur@gmail.com?subject=Rozmowa%20o%20roli%20sprzedażowej">Napisz do mnie <ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/adam-snihur-b66b3318b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download>CV w PDF</a>
          </div>
        </section>
      </main>

      <footer><span>Adam Śnihur</span><span>Sprzedaż B2B · Poznań</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
