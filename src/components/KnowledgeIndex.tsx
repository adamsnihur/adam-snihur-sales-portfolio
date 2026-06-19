import { articles } from "../data/articles";
import { ArrowIcon, SiteFooter, SiteHeader } from "./shared";

export function KnowledgeIndex() {
  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <SiteHeader knowledgeView />
      <main className="knowledge-view" id="main">
        <header className="knowledge-hero">
          <p className="eyebrow">Biblioteka sprzedaży B2B</p>
          <h1 tabIndex={-1}>Wiedza sprzedażowa</h1>
          <p>
            Kompendium wiedzy o diagnozie potrzeb, negocjacjach, pracy z pipeline-em,
            zdobywaniu leadów oraz partnerskiej postawie w sprzedaży B2B.
          </p>
        </header>
        <div className="knowledge-list">
          {articles.map((article, index) => (
            <article key={article.slug}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <p className="article-meta">{article.readingTime} czytania</p>
                <h2>
                  <a href={`#/wiedza/${article.slug}`}>{article.title}</a>
                </h2>
                <p>{article.description}</p>
                <a className="article-link" href={`#/wiedza/${article.slug}`}>
                  Czytaj artykuł <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a className="back-link" href="./#wiedza">← Wróć do portfolio</a>
      </main>
      <SiteFooter />
    </>
  );
}
