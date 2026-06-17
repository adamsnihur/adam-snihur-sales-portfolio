# Architektura

```text
index.html
  └── src/main.tsx
      └── App
          ├── Header
          ├── Hero
          ├── SalesExperience
          ├── SalesMethod
          ├── SupportingExperience
          ├── Skills
          └── Contact

public/
  └── cv-adam-snihur-sprzedaz.pdf
```

## Kontrakty

- `App` składa statyczne sekcje; brak stanu biznesowego.
- Dane doświadczenia są lokalnymi, typowanymi tablicami.
- Komponenty korzystają wyłącznie z tokenów CSS zdefiniowanych w `src/styles.css`.
- JavaScript wzbogaca stronę o animacje, ale nie jest wymagany do odczytania treści ani użycia CTA.

## Niezmienniki

- Nie pobieramy danych z `personal/` w czasie działania strony.
- Nie publikujemy numeru telefonu ani prywatnych dokumentów źródłowych.
- Każdy link zewnętrzny otwierany w nowej karcie ma `rel="noopener noreferrer"`.
- Istniejące portfolio i jego deployment nie są zależnością tego projektu.
