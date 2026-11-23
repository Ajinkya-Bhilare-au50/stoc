import { useId, useState } from "react";
import { Link } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CreditCardIcon,
  PlayCircleIcon,
  QrCodeIcon,
  ShareIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Collapse from "../../components/ui/Collapse";
import { ROUTES } from "../../config/routes";

const UPI_APPS = ["Google Pay", "PhonePe", "Paytm", "BHIM UPI", "Amazon Pay"];

/** "₹ 3999" | 3999 → 3999 */
export const toAmount = (price) => Number(String(price).replace(/[^\d.]/g, "")) || 0;
const rupees = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

function Stars({ value }) {
  return (
    <span className="flex" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative h-4 w-4">
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

function PriceBox({ price, discountPercentage, payLink, onPay }) {
  const amount = toAmount(price);
  const pct = Number(discountPercentage) || 0;
  const final = pct ? amount - (amount * pct) / 100 : amount;
  return (
    <div className="tile flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs text-ink-subtle">Course fee</p>
        <p className="mt-0.5 flex items-baseline gap-2">
          <span className="text-2xl font-bold tabular-nums text-ink">{rupees(final)}</span>
          {pct > 0 && (
            <>
              <span className="text-sm tabular-nums text-ink-subtle line-through">{rupees(amount)}</span>
              <span className="badge badge-up">{pct}% off</span>
            </>
          )}
        </p>
      </div>
      <div className="flex gap-2">
        <Link to={ROUTES.enquiry} className="btn btn-outline flex-1 sm:flex-none">
          Enquire
        </Link>
        {payLink ? (
          <a
            href={payLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 sm:flex-none"
          >
            Enroll now
          </a>
        ) : (
          <button type="button" onClick={onPay} className="btn btn-primary flex-1 sm:flex-none">
            Enroll now
          </button>
        )}
      </div>
    </div>
  );
}

function SyllabusItem({ module, open, onToggle }) {
  const id = useId();
  return (
    <li className="rounded-tile border border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-elevated/50"
      >
        <span className="text-sm font-semibold text-ink">{module.title}</span>
        <ChevronDownIcon
          className={`h-4 w-4 shrink-0 text-ink-subtle transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <Collapse open={open} id={id}>
        <div className="border-t border-line px-4 py-3">
          {module.description && <p className="text-sm text-ink-muted">{module.description}</p>}
          {module.topics?.length > 0 && (
            <ul className="mt-2 space-y-1.5">
              {module.topics.map((topic) => (
                <li key={topic} className="flex items-center gap-2 text-sm text-ink-muted">
                  <PlayCircleIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {topic}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Collapse>
    </li>
  );
}

/**
 * Shared course presentation for the stock and coding pages.
 *
 * `course` fields: title, description, image, price, discountPercentage,
 * rating, reviews, enrollments, instructor {name, image}, facts [{icon, label,
 * value}], syllabus [{title, description, topics}], howToJoin, qrImage,
 * payLink?, isTopSelling?, isTopTrending?, enrolledAvatars?
 * `isModuleOpen(i)` / `onToggleModule(i)` keep the syllabus state in the page.
 * `paymentButton` is an optional node (e.g. the Razorpay button); `joinSteps`
 * an optional node shown under "How to join".
 */
export default function CourseCard({ course, isModuleOpen, onToggleModule, paymentButton, joinSteps }) {
  const [tab, setTab] = useState(0);
  const PAY_TAB = 2;
  const share = async () => {
    const data = { title: course.title, text: course.description, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* user cancelled */
    }
  };

  return (
    <article className="card overflow-hidden p-0 sm:p-0">
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[13rem_1fr]">
        <div className="relative">
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="aspect-[4/3] w-full rounded-tile bg-surface object-cover md:aspect-square"
          />
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {course.isTopSelling && <span className="badge bg-down text-white shadow">Top selling</span>}
            {course.isTopTrending && <span className="badge bg-accent text-white shadow">Trending</span>}
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-bold leading-snug text-ink sm:text-2xl">{course.title}</h2>
            <button
              type="button"
              onClick={share}
              className="btn btn-ghost h-9 w-9 shrink-0 px-0"
              aria-label="Share course"
            >
              <ShareIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 text-sm text-ink-muted">{course.description}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {course.rating != null && (
              <span className="flex items-center gap-1.5" aria-label={`Rated ${course.rating} out of 5`}>
                <span className="font-semibold text-warn">{Number(course.rating).toFixed(1)}</span>
                <Stars value={Number(course.rating)} />
                {course.reviews != null && (
                  <span className="text-ink-subtle">({course.reviews} reviews)</span>
                )}
              </span>
            )}
            {course.enrollments && (
              <span className="flex items-center gap-1.5 text-ink-muted">
                <UsersIcon className="h-4 w-4" aria-hidden />
                {course.enrollments} enrolled
              </span>
            )}
            {course.enrolledAvatars?.length > 0 && (
              <span className="flex -space-x-2" aria-hidden>
                {course.enrolledAvatars.slice(0, 4).map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-card"
                  />
                ))}
              </span>
            )}
          </div>

          {course.facts?.length > 0 && (
            <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {course.facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2.5 text-sm">
                  {Icon && <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />}
                  <div>
                    <dt className="text-xs text-ink-subtle">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          )}

          {course.instructor && (
            <div className="mt-5 flex items-center gap-3">
              <img
                src={course.instructor.image}
                alt=""
                className="h-9 w-9 rounded-full object-cover ring-2 ring-line"
              />
              <div className="text-sm">
                <p className="text-xs text-ink-subtle">Instructor</p>
                <p className="font-semibold text-ink">{course.instructor.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-line p-5 sm:p-6">
        <PriceBox
          price={course.price}
          discountPercentage={course.discountPercentage}
          payLink={course.payLink}
          onPay={() => setTab(PAY_TAB)}
        />

        <Tabs className="mt-6" selectedIndex={tab} onSelect={setTab}>
          <TabList>
            <Tab>
              <BookOpenIcon className="h-4 w-4" aria-hidden /> Syllabus
            </Tab>
            <Tab>
              <AcademicCapIcon className="h-4 w-4" aria-hidden /> How to join
            </Tab>
            <Tab>
              <CreditCardIcon className="h-4 w-4" aria-hidden /> Pay online
            </Tab>
          </TabList>

          <TabPanel>
            <ol className="space-y-2">
              {course.syllabus.map((module, i) => (
                <SyllabusItem
                  key={module.title}
                  module={module}
                  open={!!isModuleOpen(i)}
                  onToggle={() => onToggleModule(i)}
                />
              ))}
            </ol>
          </TabPanel>

          <TabPanel>
            <p className="text-sm leading-6 text-ink-muted">{course.howToJoin}</p>
            {joinSteps && <div className="mt-6">{joinSteps}</div>}
            <Link to={ROUTES.enquiry} className="btn btn-secondary mt-4">
              Talk to an advisor
            </Link>
          </TabPanel>

          <TabPanel>
            <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
              {course.qrImage && (
                <div className="mx-auto rounded-tile bg-white p-3 sm:mx-0">
                  <img
                    src={course.qrImage}
                    alt={`UPI QR code to pay for ${course.title}`}
                    className="h-44 w-44 object-contain"
                  />
                </div>
              )}
              <div>
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <QrCodeIcon className="h-5 w-5 text-accent" aria-hidden />
                  Scan to pay with any UPI app
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Use your phone's camera or UPI app to scan the code and complete the payment.
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {UPI_APPS.map((app) => (
                    <li key={app} className="badge badge-neutral">
                      {app}
                    </li>
                  ))}
                </ul>
                {(paymentButton || course.payLink) && (
                  <div className="mt-5 border-t border-line pt-5">
                    <p className="mb-2 text-xs font-medium text-ink-subtle">Or pay by card / netbanking</p>
                    {paymentButton ?? (
                      <a
                        href={course.payLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Pay securely with Razorpay
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </article>
  );
}
