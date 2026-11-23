import { StarIcon } from "@heroicons/react/24/solid";

/** Single testimonial card. */
const Feedback = ({ name, role, avatarUrl, rating, content, googleicon }) => (
  <figure className="card flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <img
        src={avatarUrl}
        alt=""
        loading="lazy"
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-line"
      />
      <figcaption className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="truncate text-xs text-ink-subtle">{role}</p>
      </figcaption>
      {googleicon && <img src={googleicon} alt="Google review" className="h-5 w-5 shrink-0 opacity-90" loading="lazy" />}
    </div>
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < rating ? "text-warn" : "text-line"}`} aria-hidden />
      ))}
    </div>
    <blockquote className="text-sm leading-6 text-ink-muted">“{content}”</blockquote>
  </figure>
);

export default Feedback;
