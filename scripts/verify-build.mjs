import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const required = [
  "dist/index.html",
  "dist/CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf",
  "dist/adam-snihur.jpg",
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

const source = readFileSync(join(root, "src/main.tsx"), "utf8");
const assertions = [
  "Relacja otwiera drzwi",
  "Orange Polska",
  "S’ouvre",
  "adam.snihur@gmail.com",
  "linkedin.com/in/adam-snihur-b66b3318b",
  "CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf",
];

for (const assertion of assertions) {
  if (!source.includes(assertion)) throw new Error(`Brak treści krytycznej: ${assertion}`);
}

if (/lorem ipsum|todo|placeholder/i.test(source)) {
  throw new Error("W kodzie pozostała treść tymczasowa");
}

console.log("Build verification: PASS");
