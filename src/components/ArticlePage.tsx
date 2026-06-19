import type { SalesArticle } from "../types";
import { ContactSection, SiteFooter, SiteHeader } from "./shared";

interface ArticlePageProps {
  readonly article: SalesArticle;
}

export function ArticlePage({ article }: Readonly<ArticlePageProps>) {
  const minutes = article.readingTime.split(" ")[0];

  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <SiteHeader knowledgeView />
      <main id="main">
        <div className="article-shell">
          <a className="back-link" href="#/wiedza">← Wszystkie artykuły</a>
          <article className="article-page">
            <header>
              <p className="eyebrow">Wiedza sprzedażowa</p>
              <h1 tabIndex={-1}>{article.title}</h1>
              <p className="article-lead">{article.description}</p>
              <time dateTime={`PT${minutes}M`}>{article.readingTime} czytania</time>
            </header>

            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {section.example && (
                  <aside className="article-example" aria-label={section.example.label}>
                    <strong>{section.example.label}</strong>
                    <p>{section.example.body}</p>
                  </aside>
                )}
              </section>
            ))}
          </article>
        </div>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
