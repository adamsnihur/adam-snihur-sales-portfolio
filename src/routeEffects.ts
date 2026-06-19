import type { AppRoute } from "./routing";

const titles = {
  home: "Adam Śnihur | Sprzedaż B2B",
  knowledge: "Wiedza sprzedażowa | Adam Śnihur",
  tools: "Narzędzia sprzedażowe | Adam Śnihur",
  notFound: "Nie znaleziono strony | Adam Śnihur",
} as const;

export interface FocusTarget {
  readonly element: HTMLElement;
  readonly scrollTarget: HTMLElement | null;
}

export function getRouteTitle(route: AppRoute, articleTitle?: string): string {
  if (route.kind === "home") return titles.home;
  if (route.kind === "knowledge-index") return titles.knowledge;
  if (route.kind === "tools-index") return titles.tools;
  if (route.kind === "article" && articleTitle) return `${articleTitle} | Adam Śnihur`;
  return titles.notFound;
}

export function getFocusTarget(
  documentRoot: Pick<Document, "getElementById" | "querySelector">,
  route: AppRoute,
  hash: string,
  isInitial: boolean,
): FocusTarget | null {
  if (route.kind === "home" && hash.length > 1 && !hash.startsWith("#/")) {
    const scrollTarget = documentRoot.getElementById(hash.slice(1));
    if (!scrollTarget) return null;

    return {
      element: scrollTarget.querySelector<HTMLElement>("h1, h2, h3, [tabindex]") ?? scrollTarget,
      scrollTarget,
    };
  }

  if (route.kind === "home" && isInitial) return null;

  const element = documentRoot.querySelector<HTMLElement>("main h1, main");
  return element ? { element, scrollTarget: null } : null;
}
