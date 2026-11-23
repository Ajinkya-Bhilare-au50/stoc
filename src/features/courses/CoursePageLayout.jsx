import { CheckCircleIcon } from "@heroicons/react/24/solid";

/** Page header + main column + sticky sidebar, shared by the course pages. */
export default function CoursePageLayout({ eyebrow, title, description, actions, aside, children, after }) {
  return (
    <>
      <section className="border-b border-line bg-surface/40">
        <div className="container-page flex flex-col gap-6 py-10 sm:py-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title mt-2">{title}</h1>
            {description && <p className="lead mt-3">{description}</p>}
          </div>
          {actions && <div className="flex shrink-0 flex-wrap gap-3">{actions}</div>}
        </div>
      </section>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-12 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0 space-y-8">{children}</div>
        {aside && (
          <aside className="space-y-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:max-h-[calc(100vh-var(--header-h)-3rem)] lg:self-start lg:overflow-y-auto lg:hide-scrollbar">
            {aside}
          </aside>
        )}
      </div>

      {after}
    </>
  );
}

/** Sidebar info card with optional checklist. */
export function InfoCard({ title, children, points }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      {children && <div className="mt-2 text-sm leading-6 text-ink-muted">{children}</div>}
      {points && (
        <ul className="mt-4 space-y-3">
          {points.map(({ title: t, text }) => (
            <li key={t} className="flex gap-3">
              <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-up" aria-hidden />
              <div className="text-sm">
                <p className="font-medium text-ink">{t}</p>
                {text && <p className="mt-0.5 text-ink-muted">{text}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Compact list of the page's courses for the sidebar. */
export function CourseIndex({ courses }) {
  return (
    <div className="card">
      <h2 className="card-title">Courses on this page</h2>
      <ul className="mt-3 divide-y divide-line">
        {courses.map((c, i) => (
          <li key={c.title}>
            <a
              href={`#course-${i + 1}`}
              className="flex items-center gap-3 py-3 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <span className="line-clamp-2">{c.title.replace(/^Course \d+:\s*/, "")}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
