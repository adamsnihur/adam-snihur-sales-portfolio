import type {
  MethodStep,
  SalesExperience,
  SalesProject,
  SupportingExperience,
} from "../types";

export const salesExperience: SalesExperience[] = [
  {
    company: "Solar Volt",
    role: "Przedstawiciel handlowy ds. OZE",
    period: "03.2020–07.2021",
    summary: "Bezpośrednia sprzedaż rozwiązań OZE prowadzona równolegle z pracą w Orange Polska.",
    evidence: [
      "Prowadzenie popołudniowych spotkań z klientami zainteresowanymi fotowoltaiką, umawianych przez call center.",
      "Badanie potrzeb i prezentowanie dopasowanej oferty podczas bezpośrednich wizyt u klientów.",
      "Odpowiadanie na pytania i zastrzeżenia oraz prowadzenie procesu w kierunku finalizacji umowy.",
    ],
  },
  {
    company: "Orange Polska",
    role: "Account Manager",
    period: "03.2019–06.2021",
    summary: "Sprzedaż rozwiązań telekomunikacyjnych dla klientów biznesowych w Wielkopolsce.",
    evidence: [
      "Aktywne pozyskiwanie klientów przez cold calling, networking i ukierunkowany prospecting.",
      "Badanie potrzeb, prezentowanie dopasowanych rozwiązań i negocjowanie umów.",
      "Rozwój portfela przez upselling i cross-selling oraz regularne przekraczanie celów.",
    ],
  },
  {
    company: "S’ouvre",
    role: "Koordynator grupy sprzedażowej",
    period: "08.2017–02.2019",
    summary: "Sprzedaż bezpośrednia FMCG połączona z prowadzeniem niewielkiego zespołu.",
    evidence: [
      "Realizacja indywidualnych celów sprzedażowych i rozmowy z klientami.",
      "Szkolenia z technik sprzedaży oraz wiedzy produktowej.",
      "Wsparcie zespołu w wymagających sytuacjach i planowanie jego pracy.",
    ],
  },
  {
    company: "Własna działalność",
    role: "E-commerce",
    period: "2020–2023",
    summary: "Samodzielne prowadzenie sprzedaży internetowej i odpowiedzialność za rentowność.",
    evidence: [
      "Sprzedaż we własnym sklepie oraz na platformach zewnętrznych.",
      "Analiza trendów, wyników i zachowań klientów.",
      "Optymalizacja oferty i negocjowanie warunków z dostawcami.",
    ],
  },
];

export const supportingExperience: SupportingExperience[] = [
  {
    company: "GSK",
    role: "Analityk Globalnego Łańcucha Dostaw",
    period: "01.2025–05.2026",
    contribution: "Analiza danych, rekomendacje dla interesariuszy i rozwiązywanie sytuacji kryzysowych.",
  },
  {
    company: "GSK",
    role: "Product Manager, Social & Paid Media",
    period: "09.2024–01.2025",
    contribution: "Analiza rynku, prezentowanie wyników oraz koordynacja zespołów marketingu, analityki i IT.",
  },
  {
    company: "Królewski Balet Klasyczny",
    role: "Project Coordinator",
    period: "09.2022–08.2024",
    contribution: "Relacje z partnerami, koordynacja tournée oraz kampanie wspierające sprzedaż biletów.",
  },
  {
    company: "Projekt gry przeglądarkowej",
    role: "Project Manager",
    period: "07.2021–09.2022",
    contribution: "Badanie rynku, model monetyzacji, relacja z inwestorem i koordynacja zespołów.",
  },
];

export const methods: MethodStep[] = [
  ["01", "Poznaję kontekst", "Zaczynam od sytuacji klienta, jego celu i realnych ograniczeń."],
  ["02", "Diagnozuję potrzebę", "Porządkuję informacje i oddzielam objawy od właściwego problemu."],
  ["03", "Dopasowuję rozwiązanie", "Przekładam potrzeby na konkretną propozycję i jasno komunikuję wartość."],
  ["04", "Rozwijam relację", "Dbam o wdrożenie, rozwiązuję problemy i szukam kolejnych obszarów współpracy."],
];

export const salesProject: SalesProject = {
  company: "AdVibes",
  role: "Konsultant procesu sprzedaży (freelance)",
  period: "03.2026–05.2026",
  summary:
    "Krótkoterminowy projekt dla agencji performance marketingowej: opracowanie procesu sprzedaży B2B, segmentacji klientów, prospectingu, pipeline’u i sekwencji kontaktu.",
  challenge:
    "Uporządkowanie sposobu pozyskiwania i prowadzenia potencjalnych klientów B2B.",
  scope:
    "Segmentacja, prospecting, etapy pipeline’u, sekwencje kontaktu i materiały wspierające rozpoczęcie sprzedaży.",
  deliverables:
    "Przygotowany model procesu, roadmapa działań i zestaw materiałów operacyjnych do wykorzystania przez agencję.",
};
