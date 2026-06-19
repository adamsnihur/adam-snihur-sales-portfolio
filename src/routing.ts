export type AppRoute =
  | { kind: "home" }
  | { kind: "knowledge-index" }
  | { kind: "article"; slug: string }
  | { kind: "not-found" };

export function parseHash(hash: string): AppRoute {
  if (!hash || !hash.startsWith("#/")) return { kind: "home" };
  if (hash === "#/wiedza") return { kind: "knowledge-index" };

  if (hash.startsWith("#/wiedza/")) {
    const slug = hash.slice("#/wiedza/".length);
    return /^[a-z0-9-]+$/.test(slug)
      ? { kind: "article", slug }
      : { kind: "not-found" };
  }

  return { kind: "not-found" };
}
