# Specyfikacja produktu

## User Approval: APPROVED

Zatwierdzone przez użytkownika w rozmowie: „możesz działać”.

## Zakres funkcjonalny

Jednostronicowe portfolio sprzedażowe zawierające:

1. Nawigację z CTA do CV.
2. Hero z pozycjonowaniem i trzema dowodami dopasowania.
3. Sekcję doświadczenia sprzedażowego: Orange, S’ouvre, e-commerce.
4. Sekcję sposobu pracy handlowej.
5. Skrócone doświadczenie wspierające sprzedaż.
6. Sekcję kompetencji i narzędzi.
7. Końcowe CTA: e-mail, LinkedIn i pobranie CV.

## Model danych

```ts
interface SalesExperience {
  company: string;
  role: string;
  period: string;
  summary: string;
  evidence: string[];
}

interface SupportingExperience {
  company: string;
  role: string;
  period: string;
  contribution: string;
}
```

## Inputs & Outputs

### Inputs

- Zweryfikowana treść polskiego CV sprzedażowego.
- Publiczny adres LinkedIn i zawodowy adres e-mail.
- Tokeny wizualne z `DESIGN.md`.

### Outputs

- Statyczny build strony gotowy do GitHub Pages.
- Publiczny plik PDF CV dostępny z poziomu strony.
- Repozytorium zawierające kod, instrukcję uruchomienia i workflow deploymentu.

## Kryteria akceptacji

- W pierwszym widoku widać rolę docelową oraz CTA do CV i kontaktu.
- Orange, S’ouvre i e-commerce pojawiają się przed rolami techniczno-operacyjnymi.
- Wszystkie twierdzenia dają się potwierdzić w CV.
- Linki e-mail, LinkedIn i PDF działają.
- Strona działa przy szerokości 320–1440 px bez poziomego przewijania.
- Kontrast tekstu spełnia WCAG AA, fokus klawiatury jest widoczny.
- `prefers-reduced-motion` wyłącza animacje wejścia.
- Brak błędów konsoli i brak zasobów 404.
- Produkcyjny build kończy się powodzeniem.

## Test Assertions

- `npm run build` zwraca kod wyjścia 0.
- Test DOM potwierdza obecność nagłówka H1 oraz linków do CV, e-maila i LinkedIn.
- Automatyczny audyt dostępności nie zwraca błędów krytycznych.
- Kontrola widoków 375 px i 1440 px nie wykazuje poziomego przewijania.
- Każdy lokalny zasób wskazany w HTML istnieje w produkcyjnym katalogu `dist/`.

## Poza zakresem

- Formularz kontaktowy, backend, CRM i analityka.
- Wersja angielska i przełącznik motywu.
- Wymyślone wyniki procentowe, logotypy klientów i rekomendacje bez źródeł.
- Modyfikowanie lub zastępowanie `personal/portfolio_cv`.
