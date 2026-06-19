# QA — Sales Portfolio Authority Upgrade

Data: 2026-06-19

Zakres: bieżąca dostępność, routing, responsywność i obsługa klawiatury w buildzie produkcyjnym.

Standard odniesienia: WCAG 2.2 AA; wynik nie jest formalną deklaracją zgodności ani testem czytnikiem ekranu.

## Wynik

PASS. Wszystkie sprawdzone widoki miały jeden `h1`, brak poziomego overflow oraz brak błędów konsoli i strony. Lighthouse Accessibility uzyskał 100/100 na trzech trasach, bez failing weighted audits. Ręczna kontrola klawiatury, focusu, skip linku i ograniczenia ruchu przeszła bez wykrytych barier w badanym zakresie.

## Lighthouse Accessibility

| Widok | `requestedUrl` | Wynik | Failing weighted audits | Raport |
|---|---|---:|---:|---|
| Strona główna | `http://127.0.0.1:4173/` | 100/100 | 0 | `lighthouse-accessibility-2026-06-19.json` |
| Indeks wiedzy | `http://127.0.0.1:4173/#/wiedza` | 100/100 | 0 | `lighthouse-accessibility-knowledge-2026-06-19.json` |
| Artykuł reprezentatywny | `http://127.0.0.1:4173/#/wiedza/discovery-przed-oferta` | 100/100 | 0 | `lighthouse-accessibility-article-2026-06-19.json` |

Pola `requestedUrl` i `finalDisplayedUrl` zachowują hashe dla indeksu i artykułu. Lighthouse nie był ponownie uruchamiany podczas dokumentowania wyników.

Weryfikacja JSON:

```bash
jq '. as $report | {requestedUrl, finalDisplayedUrl, accessibility: .categories.accessibility.score, failingWeightedAudits: ([.categories.accessibility.auditRefs[] | select(.weight > 0) | .id as $id | $report.audits[$id] | select(.score != null and .score < 1)] | length)}' raporty/lighthouse-accessibility-2026-06-19.json raporty/lighthouse-accessibility-knowledge-2026-06-19.json raporty/lighthouse-accessibility-article-2026-06-19.json
```

Wynik dla każdego pliku: `accessibility: 1`, `failingWeightedAudits: 0`; URL-e zgodne z tabelą.

## Matryca tras i viewportów

Chromium sprawdzono przy szerokościach 375, 768 i 1440 px.

| Widok / trasa | 375 | 768 | 1440 | Kontrole |
|---|:---:|:---:|:---:|---|
| `/` | PASS | PASS | PASS | 1 × `h1`, brak overflow, portret i dane główne |
| `#/wiedza` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/discovery-przed-oferta` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/batna-zopa-ustepstwa` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/proces-b2b-follow-up` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/handlowiec-klient-operacje` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| Nieznana trasa | PASS | PASS | PASS | widok awaryjny, 1 × `h1`, brak overflow i błędów |
| Zniekształcona trasa | PASS | PASS | PASS | bezpieczny widok, 1 × `h1`, brak overflow i błędów |

Na stronie głównej potwierdzono portret `971 × 1619` z zatwierdzonego assetu, obecność AdVibes i daty, trzy karty wiedzy oraz wymagane linki. Pełnostronicowe screenshoty zostały obejrzane; nie stwierdzono czarnego obszaru portretu.

## Focus, klawiatura i ruch

- `#wiedza` po smooth scroll: górna krawędź sekcji około `0 px`, focus na jej `h2`.
- Przy dopasowanym `prefers-reduced-motion: reduce`: przejście miało `0s`.
- Kolejność focusu prześledzono klawiaturą na stronie głównej, indeksie i artykule; była logiczna i nie ujawniła pułapki klawiaturowej.
- Elementy interaktywne miały widoczny focus: `3px solid` outline.
- Skip link przyjmował focus; `Enter` przenosił focus do `h1` wewnątrz `main`.

## Komendy zamykające

```bash
npm run build
npm test
git diff --check
```

Końcowe wyniki tych poleceń są dowodem przed commitem i zostały raportowane wraz z SHA commita.
