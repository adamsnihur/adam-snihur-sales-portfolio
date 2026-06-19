import { tools } from "../data/tools";
import { ArrowIcon, SiteFooter, SiteHeader } from "./shared";

const categoryNames = {
  outbound: "Outbound & Data Enrichment",
  crm: "CRM & Lejek Sprzedaży",
  ai: "AI & Generative Outreach",
  automation: "Automatyzacja & Integracje"
} as const;

export function ToolsIndex() {
  // Group tools by category
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;

  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <SiteHeader knowledgeView />
      <main className="tools-view" id="main">
        <header className="tools-hero" data-reveal>
          <p className="eyebrow">Stos technologiczny sprzedaży B2B</p>
          <h1 tabIndex={-1}>Narzędzia sprzedażowe</h1>
          <p>
            Wybrane systemy, bazy danych oraz platformy automatyzacji, które wykorzystuję 
            w codziennej pracy handlowej do pozyskiwania kontaktów i usprawniania procesów.
          </p>
        </header>

        <div className="tools-content">
          {categories.map((categoryKey) => {
            const categoryTools = tools.filter((t) => t.category === categoryKey);
            if (categoryTools.length === 0) return null;

            return (
              <section className="tools-category-section" key={categoryKey} aria-labelledby={`cat-${categoryKey}`}>
                <div className="category-header" data-reveal>
                  <h2 id={`cat-${categoryKey}`}>{categoryNames[categoryKey]}</h2>
                </div>
                <div className="tools-list">
                  {categoryTools.map((tool) => (
                    <article className="tool-card" key={tool.name} data-reveal>
                      <header className="tool-card-header">
                        <h3>{tool.name}</h3>
                      </header>
                      <div className="tool-card-body">
                        <p className="tool-description">{tool.description}</p>
                        <div className="tool-usecase">
                          <strong>Główne zastosowanie:</strong>
                          <p>{tool.useCase}</p>
                        </div>
                        <div className="tool-benefits">
                          <strong>Kluczowe korzyści:</strong>
                          <ul>
                            {tool.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <a className="back-link" href="./">← Wróć do portfolio</a>
      </main>
      <SiteFooter />
    </>
  );
}
