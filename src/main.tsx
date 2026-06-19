import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArticlePage } from "./components/ArticlePage";
import { HomePage } from "./components/HomePage";
import { KnowledgeIndex } from "./components/KnowledgeIndex";
import { NotFoundPage } from "./components/NotFoundPage";
import { ToolsIndex } from "./components/ToolsIndex";
import { ScrollToTopButton } from "./components/shared";
import { articles } from "./data/articles";
import { getFocusTarget, getRouteTitle } from "./routeEffects";
import { parseHash, type AppRoute } from "./routing";
import "./styles.css";
import "./responsive.css";

interface NavigationState {
  readonly route: AppRoute;
  readonly hash: string;
  readonly isInitial: boolean;
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>(() => ({
    route: parseHash(window.location.hash),
    hash: window.location.hash,
    isInitial: true,
  }));
  const { hash, isInitial, route } = navigation;
  const article = route.kind === "article"
    ? articles.find((item) => item.slug === route.slug)
    : undefined;

  useEffect(() => {
    const syncRoute = () => {
      const nextHash = window.location.hash;
      setNavigation({
        route: parseHash(nextHash),
        hash: nextHash,
        isInitial: false,
      });
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    document.title = getRouteTitle(route, article?.title);

    const frame = window.requestAnimationFrame(() => {
      const target = getFocusTarget(document, route, hash, isInitial);
      if (!target) return;

      if (target.scrollTarget) {
        target.scrollTarget.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }

      if (!target.element.hasAttribute("tabindex")) {
        target.element.setAttribute("tabindex", "-1");
      }
      target.element.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [article, hash, isInitial, route]);

  useEffect(() => {
    const reveals = document.querySelectorAll("[data-reveal]");
    
    // Clear previous state before observing to ensure animations rerun on navigation
    reveals.forEach((el) => el.classList.remove("revealed"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [route]);

  let pageElement = <NotFoundPage />;
  if (route.kind === "home") pageElement = <HomePage />;
  else if (route.kind === "knowledge-index") pageElement = <KnowledgeIndex />;
  else if (route.kind === "article" && article) pageElement = <ArticlePage article={article} />;
  else if (route.kind === "tools-index") pageElement = <ToolsIndex />;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      {pageElement}
      <ScrollToTopButton />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
