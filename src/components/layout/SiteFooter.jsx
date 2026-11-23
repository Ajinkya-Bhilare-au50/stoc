import { Link } from "react-router";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../images/logo-128.png";
import { ROUTES } from "../../config/routes";
import { FOOTER_LINKS, SITE } from "../../config/site";

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function SiteFooter() {
  const socials = Object.entries(SITE.social).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_2fr]">
        <div className="max-w-sm">
          <Link to={ROUTES.home} className="inline-flex items-center gap-2.5">
            <img src={logo} alt="" width="32" height="32" className="h-8 w-8 rounded-full ring-1 ring-line" />
            <span className="text-base font-bold tracking-tight text-ink">
              Sniper<span className="text-accent">Coding</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-ink-muted">{SITE.tagline}</p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3 text-ink-muted">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-ink-subtle" aria-hidden />
              <span>{SITE.contact.address}</span>
            </li>
            <li>
              <a href={SITE.contact.phoneHref} className="flex gap-3 text-ink-muted transition-colors hover:text-ink">
                <PhoneIcon className="h-5 w-5 shrink-0 text-ink-subtle" aria-hidden />
                {SITE.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.contact.email}`} className="flex gap-3 text-ink-muted transition-colors hover:text-ink">
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-ink-subtle" aria-hidden />
                {SITE.contact.email}
              </a>
            </li>
          </ul>

          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2">
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
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved. Market data is for education only and is not investment advice.
          </p>
          <p>Designed &amp; developed in India by Ajinkya.</p>
        </div>
      </div>
    </footer>
  );
}
