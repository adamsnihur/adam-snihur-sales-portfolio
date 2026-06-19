import { useEffect, useState } from "react";

interface SectionTitleProps {
  readonly label: string;
  readonly title: string;
  readonly intro?: string;
}

interface SiteHeaderProps {
  readonly knowledgeView: boolean;
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
    </svg>
  );
}

export function SectionTitle({ label, title, intro }: Readonly<SectionTitleProps>) {
  return (
    <header className="section-title" data-reveal>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}

export function SiteHeader({ knowledgeView }: Readonly<SiteHeaderProps>) {
  const sectionPrefix = knowledgeView ? "./" : "";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
    return undefined;
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href={knowledgeView ? "./" : "#top"} aria-label="Adam Śnihur - początek strony">Adam Śnihur</a>
      <nav aria-label="Główna nawigacja">
        <a href={`${sectionPrefix}#doswiadczenie`}>Doświadczenie</a>
        <a href={`${sectionPrefix}#podejscie`}>Podejście</a>
        <a href={knowledgeView ? "./#wiedza" : "#wiedza"}>Wiedza</a>
        <a href="#/narzedzia">Narzędzia</a>
        <a href={`${sectionPrefix}#kontakt`}>Kontakt</a>
      </nav>
      <a className="button button-small button-dark" href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download>
        CV <DownloadIcon />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-close">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-menu">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
            <a href={`${sectionPrefix}#doswiadczenie`} onClick={() => setMenuOpen(false)}>Doświadczenie</a>
            <a href={`${sectionPrefix}#podejscie`} onClick={() => setMenuOpen(false)}>Podejście</a>
            <a href={knowledgeView ? "./#wiedza" : "#wiedza"} onClick={() => setMenuOpen(false)}>Wiedza</a>
            <a href="#/narzedzia" onClick={() => setMenuOpen(false)}>Narzędzia</a>
            <a href={`${sectionPrefix}#kontakt`} onClick={() => setMenuOpen(false)}>Kontakt</a>
            <a className="button button-dark" href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download onClick={() => setMenuOpen(false)}>
              Pobierz CV <DownloadIcon />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function ContactSection() {
  return (
    <section className="contact" id="kontakt" data-reveal>
      <div><p className="eyebrow">Kontakt</p><h2>Porozmawiajmy o wyniku,<br />który mam pomóc osiągnąć.</h2></div>
      <div className="contact-actions">
        <a className="button button-light" href="mailto:adam.snihur@gmail.com?subject=Rozmowa%20o%20roli%20sprzedażowej">Napisz do mnie <ArrowIcon /></a>
        <a href="https://www.linkedin.com/in/adam-snihur-b66b3318b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="./CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf" download>CV w PDF</a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return <footer><span>Adam Śnihur</span><span>Sprzedaż B2B · Poznań</span></footer>;
}
