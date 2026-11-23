import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import sujal from "./images/sujal.jpg";
import sanjana from "./images/sanjana.jpg";
import mahesh from "./images/mahesh.jpg";
import varun from "./images/varun.jpg";
import { ROUTES } from "../config/routes";
import { SITE } from "../config/site";

const MEMBERS = [
  { name: "Sujal", photo: sujal },
  { name: "Varun", photo: varun },
  { name: "Sanjana", photo: sanjana },
  { name: "Mahesh", photo: mahesh },
];

const PERKS = ["Daily market discussion", "Doubt-clearing with mentors", "Batch updates & resources"];

/** "Sniper Coders" community call-to-action. */
export default function Banner() {
  const whatsapp = SITE.whatsappGroup;

  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-panel border border-line bg-card p-6 shadow-card sm:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="eyebrow">Community</p>
              <h2 className="section-title mt-2">Join the Sniper Coders community</h2>
              <p className="lead mt-3 max-w-xl">
                Learn alongside other students — share trade ideas, ask questions and get batch updates in one place.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {PERKS.map((perk) => (
                  <li key={perk} className="badge badge-neutral px-2.5 py-1">
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {whatsapp ? (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
                    <FaWhatsapp className="h-5 w-5" aria-hidden />
                    Join WhatsApp group
                  </a>
                ) : (
                  <Link to={ROUTES.contact} className="btn btn-primary btn-lg">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden />
                    Ask to join the group
                  </Link>
                )}
                <Link to={ROUTES.testimonials} className="btn btn-outline btn-lg">
                  Read student reviews
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-center">
              <ul className="flex -space-x-3" aria-label="Community members">
                {MEMBERS.map((m) => (
                  <li key={m.name}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      title={m.name}
                      loading="lazy"
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-card transition-transform hover:z-10 hover:scale-110 sm:h-16 sm:w-16"
                    />
                  </li>
                ))}
                <li className="flex h-14 w-14 items-center justify-center rounded-full bg-elevated text-sm font-bold text-ink ring-4 ring-card sm:h-16 sm:w-16">
                  15+
                </li>
              </ul>
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-ink">15+ learners</span> already enrolled this batch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
