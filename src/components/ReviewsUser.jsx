import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function Stars({ value }) {
  return (
    <span className="flex" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative h-4 w-4" aria-hidden>
            <StarIcon className="absolute inset-0 h-4 w-4 text-line" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <StarIcon className="h-4 w-4 text-warn" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

/** Single course review card; falls back to initials if the photo fails. */
const ReviewsUser = ({ name, rating, reviewContent, imageUrl }) => {
  const [broken, setBroken] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");

  return (
    <figure className="card flex h-full flex-col gap-3">
      <div className="flex items-center gap-3">
        {imageUrl && !broken ? (
          <img
            src={imageUrl}
            alt=""
            loading="lazy"
            onError={() => setBroken(true)}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-line"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-elevated text-sm font-semibold text-ink-muted">
            {initials}
          </span>
        )}
        <figcaption>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <Stars value={rating} />
        </figcaption>
      </div>
      <blockquote className="text-sm leading-6 text-ink-muted">{reviewContent}</blockquote>
    </figure>
  );
};

export default ReviewsUser;
