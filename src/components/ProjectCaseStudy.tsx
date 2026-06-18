import type { SalesProject } from "../types";

type ProjectCaseStudyProps = {
  project: SalesProject;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const fields = [
    ["Wyzwanie", project.challenge],
    ["Zakres", project.scope],
    ["Rezultat pracy", project.deliverables],
  ] as const;

  return (
    <section className="project-section" aria-labelledby="project-title">
      <article className="project-case-study" data-reveal>
        <header className="project-header">
          <div>
            <p className="eyebrow">03 / Projekt freelance</p>
            <h2 id="project-title">{project.role} — {project.company}</h2>
          </div>
          <time dateTime="2026-03/2026-05">{project.period}</time>
        </header>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-fields">
          {fields.map(([label, copy]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{copy}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
}
