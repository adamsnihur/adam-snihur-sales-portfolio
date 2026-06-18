import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const required = [
  "dist/index.html",
  "dist/CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf",
  "dist/adam-snihur-sales-portrait.png",
];

for (const file of required) {
  const path = join(root, file);
  if (!existsSync(path) || statSync(path).size === 0) {
    throw new Error(`Brak wymaganego artefaktu: ${file}`);
  }
}

const assets = readdirSync(join(root, "dist/assets"));
if (!assets.some((file) => file.endsWith(".js")) || !assets.some((file) => file.endsWith(".css"))) {
  throw new Error("Build nie zawiera kompletu zasobów JS/CSS");
}

const sourceFiles = [
  "src/main.tsx",
  "src/routing.ts",
  "src/data/experience.ts",
  "src/data/capabilities.ts",
  "src/data/articles.ts",
  "src/components/HomePage.tsx",
  "src/components/KnowledgeIndex.tsx",
  "src/components/ArticlePage.tsx",
];

for (const file of sourceFiles) {
  const path = join(root, file);
  if (!existsSync(path)) throw new Error(`Brak modułu źródłowego: ${file}`);
}

const source = sourceFiles
  .map((file) => readFileSync(join(root, file), "utf8"))
  .join("\n");
const assertions = [
  "Relacja otwiera drzwi",
  "Solar Volt",
  "03.2020–07.2021",
  "Konsultant procesu sprzedaży (freelance)",
  "03.2026–05.2026",
  "Wiedza sprzedażowa",
  "Sprzedaż B2B zaczyna się przed ofertą",
  "BATNA, ZOPA i ustępstwa",
  "Proces sprzedaży B2B: od leada do konsekwentnego follow-upu",
  "Handlowiec jako łącznik między klientem a operacjami firmy",
  "#/wiedza",
];

for (const assertion of assertions) {
  if (!source.includes(assertion)) throw new Error(`Brak treści krytycznej: ${assertion}`);
}

const forbiddenAdVibesClaims = [
  /AdVibes[^.]{0,160}(zwiększyłem|wzrost przychodu|ROAS|konwersj[aię]|wdrożon[oy])/i,
];

for (const claim of forbiddenAdVibesClaims) {
  if (claim.test(source)) throw new Error(`Nieweryfikowalne twierdzenie AdVibes: ${claim}`);
}

if (/lorem ipsum|todo|placeholder/i.test(source)) {
  throw new Error("W kodzie pozostała treść tymczasowa");
}

console.log("Build verification: PASS");
