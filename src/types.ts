export type SalesExperience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  evidence: string[];
};

export type SupportingExperience = {
  company: string;
  role: string;
  period: string;
  contribution: string;
};

export type SalesProject = {
  company: string;
  role: string;
  period: string;
  machinePeriod: string;
  summary: string;
  challenge: string;
  scope: string;
  deliverables: string;
};

export type Capability = {
  title: string;
  description: string;
  evidence: string[];
};

export type MethodStep = readonly [number: string, title: string, copy: string];

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  example?: { label: "Przykład hipotetyczny" | "Praktyka"; body: string };
};

export type SalesArticle = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  sections: ArticleSection[];
};
