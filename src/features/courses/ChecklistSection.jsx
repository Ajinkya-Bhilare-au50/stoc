import { CheckCircleIcon } from "@heroicons/react/24/solid";

/** Titled checklist section (what you'll learn, who it's for, …). */
export default function ChecklistSection({ eyebrow, title, items, columns = 2 }) {
  return (
    <section className="section-tight">
      <div className="container-page">
        <div className="card sm:p-8">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="section-title mt-2">{title}</h2>
          <ul className={`mt-6 grid gap-x-8 gap-y-3 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-ink-muted">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-up" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
