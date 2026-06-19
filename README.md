# Adam Śnihur — portfolio sprzedażowe

Jednostronicowe portfolio rekrutacyjne pod role przedstawiciela handlowego, account managera i sprzedaży B2B.

Audyt produkcyjny Lighthouse: **100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**.

Strona: https://adamsnihur.github.io/adam-snihur-sales-portfolio/

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Komendy

| Komenda | Zastosowanie |
|---|---|
| `npm run dev` | Uruchamia serwer deweloperski Vite. |
| `npm run build` | Sprawdza TypeScript i buduje wersję produkcyjną do `dist/`. |
| `npm test` | Weryfikuje artefakty, treści krytyczne i zachowanie routingu. |
| `npm run preview` | Uruchamia lokalny podgląd wcześniej zbudowanego `dist/`. |

Przed podglądem produkcyjnym uruchom:

```bash
npm run build
npm test
npm run preview
```

## Routing

| Hash | Widok |
|---|---|
| `/` | Strona główna. |
| `#wiedza` | Sekcja wiedzy na stronie głównej. |
| `#/wiedza` | Indeks artykułów. |
| `#/wiedza/discovery-przed-oferta` | Discovery przed przygotowaniem oferty. |
| `#/wiedza/batna-zopa-ustepstwa` | BATNA, ZOPA i ustępstwa. |
| `#/wiedza/proces-b2b-follow-up` | Proces B2B i follow-up. |
| `#/wiedza/handlowiec-klient-operacje` | Współpraca handlowca z operacjami. |
| Nieznany hash zaczynający się od `#/` | Widok awaryjny „Nie znaleziono strony”. |

Dane wszystkich artykułów znajdują się w `src/data/articles.ts`.

## Portret i zatwierdzanie zmian

Portret sprzedażowy znajduje się w `public/adam-snihur-sales-portrait.png`. Komponent strony głównej renderuje go z wymiarami intrinsic `971 × 1619`, aby przeglądarka zachowała właściwe proporcje i zarezerwowała miejsce przed załadowaniem obrazu.

Każda zmiana copy portfolio lub portretu wymaga wcześniejszej akceptacji Adama.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje stronę i publikuje katalog `dist` w GitHub Pages po pushu do `main`. W ustawieniach repozytorium źródło Pages musi być ustawione na **GitHub Actions**.

Routing korzysta z hashy, dlatego wszystkie widoki działają na statycznym hostingu GitHub Pages bez dodatkowych reguł przekierowań. Plik `public/.nojekyll` jest kopiowany do buildu.

## Prywatność

Repozytorium zawiera wyłącznie informacje zawodowe przeznaczone do publikacji. Nie jest połączone z katalogiem `personal/portfolio_cv` ani z innymi prywatnymi materiałami.
