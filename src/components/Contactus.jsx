import { useState } from "react";
import { CheckCircleIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SITE } from "../config/site";

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};
const EMPTY = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

/**
 * Submits to Netlify Forms (form "contact", registered in index.html).
 * Submissions appear under Netlify → Forms; enable email notifications there.
 */
async function submitContact(values) {
  const body = new URLSearchParams({ "form-name": "contact", "bot-field": "", ...values });
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

export default function ContactUs() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    try {
      await submitContact(values);
      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const socials = Object.entries(SITE.social).filter(([, url]) => url);
  const field = (name) => `${name === "message" ? "textarea" : "input"} ${errors[name] ? "input-error" : ""}`;

  return (
    <section id="Contactus" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title mt-2">Get in touch</h1>
          <p className="lead mt-3">
            Questions about courses, batches or fees? Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <form className="card" onSubmit={onSubmit} noValidate name="contact">
            <h2 className="card-title">Send us a message</h2>

            {status === "sent" ? (
              <div
                role="status"
                className="mt-6 flex items-start gap-3 rounded-tile border border-up/30 bg-up/10 p-4"
              >
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-up" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">Message sent</p>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    Thanks for reaching out — we'll reply by email soon.
                  </p>
                  <button type="button" className="link mt-2 text-sm" onClick={() => setStatus("idle")}>
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <input
                  type="text"
                  name="bot-field"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label label-required">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={onChange}
                      className={field("name")}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="field-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="label label-required">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={onChange}
                      className={field("email")}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="field-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label label-required">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    className={field("message")}
                    placeholder="How can we help?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="field-error">
                      {errors.message}
                    </p>
                  )}
                </div>
                {status === "failed" && (
                  <p
                    role="alert"
                    className="rounded-tile border border-down/30 bg-down/10 p-3 text-sm text-ink"
                  >
                    Sorry, your message couldn't be sent. Please email{" "}
                    <a className="link" href={`mailto:${SITE.contact.email}`}>
                      {SITE.contact.email}
                    </a>{" "}
                    or call{" "}
                    <a className="link" href={SITE.contact.phoneHref}>
                      {SITE.contact.phone}
                    </a>
                    .
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
            )}
          </form>

          <aside className="card h-fit">
            <h2 className="card-title">Contact information</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="text-ink-muted">{SITE.contact.address}</span>
              </li>
              <li>
                <a href={SITE.contact.phoneHref} className="flex gap-3 text-ink-muted hover:text-ink">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  {SITE.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.contact.email}`} className="flex gap-3 text-ink-muted hover:text-ink">
                  <EnvelopeIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-2 border-t border-line pt-5">
                {socials.map(([name, url]) => {
                  const Icon = SOCIAL_ICONS[name];
                  return (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={name}
                        className="btn btn-secondary h-9 w-9 px-0"
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
