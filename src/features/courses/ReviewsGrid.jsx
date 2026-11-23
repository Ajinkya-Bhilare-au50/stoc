import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import ReviewsUser from "../../components/ReviewsUser";

const INITIAL = 6;

/** Course reviews: average from the data, responsive grid, "show all". */
export default function ReviewsGrid({ title = "Course reviews", reviews }) {
  const [expanded, setExpanded] = useState(false);
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);
  const shown = expanded ? reviews : reviews.slice(0, INITIAL);

  return (
    <section className="section-tight">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title mt-2">{title}</h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <StarIcon className="h-5 w-5 text-warn" aria-hidden />
            <span className="text-2xl font-bold tabular-nums text-ink">{average.toFixed(1)}</span>
            from {reviews.length} reviews
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((review) => (
            <li key={review.name + review.reviewContent.slice(0, 20)}>
              <ReviewsUser {...review} />
            </li>
          ))}
        </ul>
        {reviews.length > INITIAL && (
          <div className="mt-8 text-center">
            <button type="button" className="btn btn-outline" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show fewer reviews" : `Show all ${reviews.length} reviews`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
