import type { SalesTool } from "../types";

export const tools: SalesTool[] = [
  {
    name: "Clay",
    category: "outbound",
    description:
      "Platforma do zaawansowanego enrichmentu danych i automatyzacji researchu. Pozwala na bezproblemowe łączenie ponad 50 źródeł danych (waterfalling) w celu budowania precyzyjnych profili firm i decydentów.",
    useCase:
      "Automatyczne wyszukiwanie technologii używanych na stronach prospectów, weryfikacja otwartych rekrutacji i enrichment profili LinkedIn przed pierwszym kontaktem handlowym.",
    benefits: [
      "Koniec z ręcznym przeszukiwaniem profili firm - automatyczny enrichment w jednym miejscu.",
      "Waterfalling dostawców e-mail - najwyższa skuteczność odnajdywania adresów bezpośrednich.",
      "Integracja z LLM - automatyczne pisanie spersonalizowanych wstępów na bazie odnalezienych sygnałów zakupowych."
    ]
  },
  {
    name: "Apollo.io",
    category: "outbound",
    description:
      "Kompleksowa baza danych kontaktowych B2B połączona z systemem do wysyłki sekwencji outreach. Służy do precyzyjnego wyszukiwania decydentów spełniających kryteria idealnego klienta (ICP).",
    useCase:
      "Tworzenie list docelowych firm w oparciu o filtry technograficzne i demograficzne oraz uruchamianie wieloetapowych kampanii e-mail i zadań telefonicznych.",
    benefits: [
      "Dostęp do globalnej, na bieżąco aktualizowanej bazy milionów kontaktów biznesowych.",
      "Wbudowane testy A/B tematów wiadomości i treści maili w ramach sekwencji.",
      "Śledzenie otwarć, kliknięć i odpowiedzi z automatycznym wykluczaniem z dalszego kontaktu po otrzymaniu odpowiedzi."
    ]
  },
  {
    name: "HubSpot / Pipedrive",
    category: "crm",
    description:
      "Systemy CRM służące jako jedyne źródło prawdy o procesie sprzedaży. Umożliwiają pełną kontrolę nad lejkiem, higieną pipeline-u oraz aktywnościami zespołu handlowego.",
    useCase:
      "Zarządzanie szansami sprzedaży, przypisywanie zadań (follow-up), rejestrowanie notatek ze spotkań i prognozowanie przychodów na bazie Sales Velocity.",
    benefits: [
      "Pełna historia kontaktu z klientem dostępna dla każdego zespołu (sprzedaż, realizacja, wsparcie).",
      "Checklisty zadań obowiązkowych i opcjonalnych przypisane do konkretnych etapów lejka.",
      "Przejrzyste raportowanie powodów przegranych szans i wąskich gardeł w procesie decyzyjnym."
    ]
  },
  {
    name: "Make.com / Zapier",
    category: "automation",
    description:
      "Platformy no-code do integracji systemów i automatyzacji przepływu pracy. Pozwalają łączyć aplikacje biznesowe poprzez API bez konieczności pisania kodu.",
    useCase:
      "Automatyczne przesyłanie nowych leadów z formularza www do CRM, wysyłanie powiadomień na Slacku o ważnych zdarzeniach oraz synchronizacja baz danych.",
    benefits: [
      "Eliminacja ręcznego przepisywania danych między aplikacjami.",
      "Szybkie wdrażanie integracji (kilka godzin zamiast tygodni prac programistycznych).",
      "Automatyczne briefowanie handlowców o nowej szansie (np. pobieranie danych o firmie i przesyłanie ich przed spotkaniem)."
    ]
  },
  {
    name: "OpenAI / Claude API",
    category: "ai",
    description:
      "Interfejsy programistyczne zaawansowanych modeli językowych (LLM). Służą do automatyzacji zadań wymagających analizy i syntezy tekstu naturalnego w procesie sprzedaży.",
    useCase:
      "Analiza transkrypcji z rozmów discovery pod kątem obiekcji i kluczowych potrzeb klienta oraz generowanie spersonalizowanych treści e-mail w oparciu o zebrane dane z researchu.",
    benefits: [
      "Masowa personalizacja outreachu przy zachowaniu wysokiej jakości merytorycznej komunikacji.",
      "Szybkie przygotowywanie podsumowań spotkań (briefy dla operacji i notatki do CRM) bezpośrednio z nagrań audio.",
      "Automatyczne wykrywanie nastroju i intencji zakupowych w otrzymywanych wiadomościach."
    ]
  },
  {
    name: "PhantomBuster / Lusha",
    category: "outbound",
    description:
      "Narzędzia wspierające prospecting poprzez automatyczne skrobanie list z LinkedIn oraz szybkie pozyskiwanie numerów telefonów i adresów e-mail bezpośrednio z profili społecznościowych.",
    useCase:
      "Eksportowanie listy uczestników wydarzenia na LinkedIn, automatyczne wysyłanie zaproszeń do kontaktu oraz uzupełnianie brakujących danych kontaktowych decydentów.",
    benefits: [
      "Szybkie pozyskiwanie bezpośrednich numerów telefonów komórkowych do decydentów.",
      "Automatyzacja rutynowych działań na LinkedIn (odwiedzanie profili, zaproszenia, follow-upy) w bezpiecznych limitach platformy.",
      "Prosty eksport ustrukturyzowanych list kontaktów do formatu CSV lub bezpośrednio do CRM."
    ]
  }
];
