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
  "src/components/ProjectCaseStudy.tsx",
  "src/components/CapabilityGroups.tsx",
  "src/components/KnowledgeSection.tsx",
  "src/components/KnowledgeIndex.tsx",
  "src/components/ArticlePage.tsx",
];

const missingSourceFiles = sourceFiles.filter(
  (file) => !existsSync(join(root, file)),
);
const sourceByFile = new Map(
  sourceFiles
    .filter((file) => !missingSourceFiles.includes(file))
    .map((file) => [file, readFileSync(join(root, file), "utf8")]),
);
const assertionsByFile = new Map([
  [
    "src/components/HomePage.tsx",
    [
      "Relacja otwiera drzwi",
      'import { ProjectCaseStudy } from "./ProjectCaseStudy"',
      '<ProjectCaseStudy project={salesProject} />',
      'import { CapabilityGroups } from "./CapabilityGroups"',
      '<CapabilityGroups />',
    ],
  ],
  [
    "src/components/ProjectCaseStudy.tsx",
    [
      "Wyzwanie",
      "Zakres",
      "Rezultat pracy",
      "dateTime={project.machinePeriod}",
    ],
  ],
  [
    "src/data/capabilities.ts",
    [
      "Prospecting i discovery",
      "Negocjacje i finalizacja",
      "Rozwój klienta",
      "Sprzedaż analityczna i operacyjna",
    ],
  ],
  [
    "src/data/experience.ts",
    [
      "Solar Volt",
      "03.2020–07.2021",
      "Konsultant procesu sprzedaży (freelance)",
      "03.2026–05.2026",
      'machinePeriod: "2026-03/2026-05"',
    ],
  ],
  ["src/components/KnowledgeSection.tsx", ["Wiedza sprzedażowa"]],
  [
    "src/data/articles.ts",
    [
      "Sprzedaż B2B zaczyna się przed ofertą",
      "BATNA, ZOPA i ustępstwa",
      "Proces sprzedaży B2B: od leada do konsekwentnego follow-upu",
      "Handlowiec jako łącznik między klientem a operacjami firmy",
    ],
  ],
  ["src/routing.ts", ["#/wiedza"]],
]);

for (const [file, assertions] of assertionsByFile) {
  const source = sourceByFile.get(file);
  if (!source) continue;
  for (const assertion of assertions) {
    if (!source.includes(assertion)) {
      throw new Error(`Brak treści krytycznej w ${file}: ${assertion}`);
    }
  }
}

function extractExportedObject(source, exportName, file) {
  const declaration = new RegExp(
    `export\\s+const\\s+${exportName}\\b[^=]*=\\s*{`,
  ).exec(source);
  if (!declaration) {
    throw new Error(`Nie znaleziono eksportu obiektu ${exportName} w ${file}`);
  }

  const start = declaration.index + declaration[0].lastIndexOf("{");
  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  let objectSource = "";

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    const nextCharacter = source[index + 1];

    if (lineComment) {
      if (character === "\n") {
        lineComment = false;
        objectSource += character;
      }
      continue;
    }
    if (blockComment) {
      if (character === "*" && nextCharacter === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      objectSource += character;
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }
    if (character === "/" && nextCharacter === "/") {
      lineComment = true;
      objectSource += " ";
      index += 1;
      continue;
    }
    if (character === "/" && nextCharacter === "*") {
      blockComment = true;
      objectSource += " ";
      index += 1;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      objectSource += character;
      continue;
    }
    objectSource += character;
    if (character === "{") depth += 1;
    if (character === "}") {
      depth -= 1;
      if (depth === 0) return objectSource;
    }
  }

  throw new Error(`Nie można wyodrębnić obiektu ${exportName} w ${file}`);
}

const experienceFile = "src/data/experience.ts";
const forbiddenSalesProjectClaim =
  /(zwiększyłem|wzrost przychodu|ROAS|konwersj[aię]|wdrożon[yo])/i;
const experienceSource = sourceByFile.get(experienceFile);

if (experienceSource) {
  const salesProjectSource = extractExportedObject(
    experienceSource,
    "salesProject",
    experienceFile,
  );

  if (forbiddenSalesProjectClaim.test(salesProjectSource)) {
    throw new Error(
      `Nieweryfikowalne twierdzenie AdVibes: ${forbiddenSalesProjectClaim}`,
    );
  }
}

for (const [file, source] of sourceByFile) {
  if (/lorem ipsum|todo|placeholder/i.test(source)) {
    throw new Error(`W kodzie pozostała treść tymczasowa: ${file}`);
  }
}

if (missingSourceFiles.length > 0) {
  throw new Error(
    `Brak zaplanowanych modułów źródłowych: ${missingSourceFiles.join(", ")}`,
  );
}

console.log("Build verification: PASS");
