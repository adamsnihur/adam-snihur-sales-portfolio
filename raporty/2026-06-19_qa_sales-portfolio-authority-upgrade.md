# QA — Sales Portfolio Authority Upgrade

Data: 2026-06-19

Zakres: bieżąca dostępność, routing, responsywność i obsługa klawiatury w buildzie produkcyjnym.

Testowany commit produktu: `6414e5f69adf3d1177f6a06b5d289ec4f760dadc`. Późniejsze commity dowodowe zmieniają wyłącznie dokumentację, raporty i verifier; kod produktu pozostaje zgodny z tym SHA.

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

Komendy generujące raporty (Lighthouse 13.4.0, przy uruchomionym `npm run preview` na porcie 4173):

```bash
npx -y lighthouse@13.4.0 'http://127.0.0.1:4173/' --only-categories=accessibility --output=json --output-path=raporty/lighthouse-accessibility-2026-06-19.json --chrome-flags='--headless'
npx -y lighthouse@13.4.0 'http://127.0.0.1:4173/#/wiedza' --only-categories=accessibility --output=json --output-path=raporty/lighthouse-accessibility-knowledge-2026-06-19.json --chrome-flags='--headless'
npx -y lighthouse@13.4.0 'http://127.0.0.1:4173/#/wiedza/discovery-przed-oferta' --only-categories=accessibility --output=json --output-path=raporty/lighthouse-accessibility-article-2026-06-19.json --chrome-flags='--headless'
```

Weryfikacja JSON:

```bash
jq '. as $report | {requestedUrl, finalDisplayedUrl, accessibility: .categories.accessibility.score, failingWeightedAudits: ([.categories.accessibility.auditRefs[] | select(.weight > 0) | .id as $id | $report.audits[$id] | select(.score != null and .score < 1)] | length)}' raporty/lighthouse-accessibility-2026-06-19.json raporty/lighthouse-accessibility-knowledge-2026-06-19.json raporty/lighthouse-accessibility-article-2026-06-19.json
```

Wynik dla każdego pliku: `accessibility: 1`, `failingWeightedAudits: 0`; URL-e zgodne z tabelą.

## Matryca tras i viewportów

Chromium sprawdzono przy viewportach `375 × 812`, `768 × 1024` i `1440 × 1000` px.

| Widok / trasa | 375 × 812 | 768 × 1024 | 1440 × 1000 | Kontrole |
|---|:---:|:---:|:---:|---|
| `/` | PASS | PASS | PASS | 1 × `h1`, brak overflow, portret i dane główne |
| `#/wiedza` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/discovery-przed-oferta` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/batna-zopa-ustepstwa` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/proces-b2b-follow-up` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/handlowiec-klient-operacje` | PASS | PASS | PASS | 1 × `h1`, brak overflow, brak console/page errors |
| `#/wiedza/nie-istnieje` | PASS | PASS | PASS | widok awaryjny, 1 × `h1`, brak overflow i błędów |
| `#/wiedza/%E0%A4%A` | PASS | PASS | PASS | bezpieczny widok, 1 × `h1`, brak overflow i błędów |

Na stronie głównej potwierdzono portret `971 × 1619` z zatwierdzonego assetu, obecność AdVibes i daty, trzy karty wiedzy oraz wymagane linki. Pełnostronicowe screenshoty zostały obejrzane; nie stwierdzono czarnego obszaru portretu.

Trwałe dowody wizualne:

- [Strona główna — viewport 375 × 812](screenshots/2026-06-19-home-mobile.png)
- [Strona główna — viewport 1440 × 1000](screenshots/2026-06-19-home-desktop.png)

## Focus, klawiatura i ruch

- `#wiedza` po smooth scroll: górna krawędź sekcji około `0 px`, focus na jej `h2`.
- Przy dopasowanym `prefers-reduced-motion: reduce`: przejście miało `0s`.
- Kolejność focusu prześledzono klawiaturą na stronie głównej, indeksie i artykule; była logiczna i nie ujawniła pułapki klawiaturowej.
- Elementy interaktywne miały widoczny focus: `3px solid` outline.
- Skip link przyjmował focus; `Enter` przenosił focus do `h1` wewnątrz `main`.

## Weryfikacja końcowa

```bash
npm run build
npm test
git diff --check
```

Wyniki końcowe:

- `npm run build`: exit `0`; TypeScript `--noEmit` i Vite 8.0.16 PASS, 29 modułów, build ukończony.
- `npm test`: exit `0`; `Build verification: PASS`, 4 testy routingu, 4 PASS, 0 FAIL.
- `git diff --check`: exit `0`, bez komunikatów.

Build i testy dotyczą kodu produktu niezmienionego względem `6414e5f69adf3d1177f6a06b5d289ec4f760dadc` oraz verifiera i dowodów w końcowym drzewie commita zawierającego ten raport. `git diff --check` dotyczy końcowego diffu dowodowego względem commita nadrzędnego; dokładny SHA commita zawierającego wyniki znajduje się w historii Git.
