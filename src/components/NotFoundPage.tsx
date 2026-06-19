import { SiteFooter, SiteHeader } from "./shared";

export function NotFoundPage() {
  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <SiteHeader knowledgeView />
      <main className="not-found" id="main">
        <p className="eyebrow">404</p>
        <h1 tabIndex={-1}>Nie znaleziono tej strony</h1>
        <p>Adres jest nieprawidłowy albo wskazany artykuł nie istnieje.</p>
        <div className="not-found-actions">
          <a className="button button-dark" href="#/wiedza">Przejdź do wiedzy</a>
          <a className="back-link" href="./">Wróć do portfolio</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
