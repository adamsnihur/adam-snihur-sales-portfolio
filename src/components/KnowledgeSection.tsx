import { articles } from "../data/articles";
import { ArrowIcon, SectionTitle } from "./shared";

export function KnowledgeSection() {
  return (
    <section className="knowledge-section" id="wiedza">
      <SectionTitle
        label="06 / Wiedza"
        title="Wiedza sprzedażowa"
        intro="Praktyczne ramy do prowadzenia discovery, negocjacji i procesu B2B bez zgadywania po stronie klienta."
      />
      <div className="knowledge-grid">
        {articles.slice(0, 3).map((article) => (
          <article className="knowledge-card" key={article.slug} data-reveal>
            <p className="article-meta">{article.readingTime} czytania</p>
            <h3>
              <a href={`#/wiedza/${article.slug}`}>{article.title}</a>
            </h3>
            <p>{article.description}</p>
            <a className="article-link" href={`#/wiedza/${article.slug}`}>
              Czytaj artykuł <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
      <a className="button button-dark knowledge-index-link" href="#/wiedza">
        Zobacz wszystkie <ArrowIcon />
      </a>
    </section>
  );
}
