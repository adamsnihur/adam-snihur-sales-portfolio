import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArticlePage } from "./components/ArticlePage";
import { HomePage } from "./components/HomePage";
import { KnowledgeIndex } from "./components/KnowledgeIndex";
import { NotFoundPage } from "./components/NotFoundPage";
import { articles } from "./data/articles";
import { parseHash, type AppRoute } from "./routing";
import "./styles.css";
import "./responsive.css";

function routesMatch(current: AppRoute, next: AppRoute) {
  return current.kind === next.kind
    && (current.kind !== "article" || (next.kind === "article" && current.slug === next.slug));
}

function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  const firstRender = useRef(true);
  const article = route.kind === "article"
    ? articles.find((item) => item.slug === route.slug)
    : undefined;

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = parseHash(window.location.hash);
      setRoute((currentRoute) => routesMatch(currentRoute, nextRoute) ? currentRoute : nextRoute);
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    if (route.kind === "home") {
      document.title = "Adam Śnihur | Sprzedaż B2B";
    } else if (route.kind === "knowledge-index") {
      document.title = "Wiedza sprzedażowa | Adam Śnihur";
    } else if (route.kind === "article" && article) {
      document.title = `${article.title} | Adam Śnihur`;
    } else {
      document.title = "Nie znaleziono strony | Adam Śnihur";
    }

    const isNormalHomeAnchor = route.kind === "home"
      && window.location.hash.length > 1
      && !window.location.hash.startsWith("#/");
    const shouldFocus = (!firstRender.current || route.kind !== "home") && !isNormalHomeAnchor;
    firstRender.current = false;

    if (!shouldFocus) return;
    const frame = window.requestAnimationFrame(() => {
      document.querySelector<HTMLElement>("main h1, main")?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [article, route]);

  if (route.kind === "home") return <HomePage />;
  if (route.kind === "knowledge-index") return <KnowledgeIndex />;
  if (route.kind === "article" && article) return <ArticlePage article={article} />;
  return <NotFoundPage />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
