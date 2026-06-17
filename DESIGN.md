---
name: Adam Snihur Sales Portfolio
colors:
  background: "#F4F1EA"
  surface: "#FCFAF5"
  text: "#121214"
  muted: "#5F5E5A"
  primary: "#121214"
  accent: "#C2410C"
  border: "#D7D2C8"
typography:
  heading: "Outfit"
  body: "Source Sans 3"
rounded:
  small: "10px"
  medium: "18px"
  pill: "999px"
spacing:
  section: "clamp(5rem, 10vw, 9rem)"
  container: "min(1180px, calc(100% - 2rem))"
---

# Kierunek

Wyrazisty minimalizm B2B: papierowe, ciepłe tło; prawie czarny tekst; pojedynczy pomarańczowy akcent kojarzący się z energią sprzedażową i doświadczeniem w Orange, lecz bez imitowania identyfikacji marki.

## Hierarchia

- Nagłówki są krótkie, ciężkie i ciasno złożone.
- Treść ma długość umożliwiającą skanowanie w kilkanaście sekund.
- Dowody doświadczenia są przedstawione jako rytmiczna oś, nie siatka generycznych kart.

## Komponenty

- Nawigacja: lekka, lepka, z widocznym fokusem.
- CTA: grafitowe lub pomarańczowe pigułki z ikoną strzałki SVG.
- Proof strip: trzy zwarte dowody pod hero.
- Experience row: firma, rola, okres i maksymalnie trzy dowody.
- Contact band: ciemne zakończenie z wysokim kontrastem.

## Ruch

Jedno wejście hero i delikatne odsłanianie sekcji przez Intersection Observer. Krzywa `cubic-bezier(0.22, 1, 0.36, 1)`. Brak parallax i scroll-jackingu. Pełne wyłączenie przy `prefers-reduced-motion: reduce`.

## Copy

Bezpośrednie, konkretne zdania w pierwszej osobie. Język sprzedażowy bez nadęcia, pustych superlatywów i nieudokumentowanych metryk.
