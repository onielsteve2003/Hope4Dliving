import Link from "next/link";
import { organizationProfile, pageLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
            {organizationProfile.shortName}
          </p>
          <p className="mt-2 text-lg font-bold text-slate-900">
            {organizationProfile.name}
          </p>
          <p className="mt-3 text-sm text-slate-600">{organizationProfile.address}</p>
          <p className="mt-2 text-xs text-slate-500">
            {organizationProfile.registrationNote}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Quick Links
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-600">
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-brand-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Key Contacts
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {organizationProfile.contacts.map((contact) => (
              <li key={contact.role}>
                <span className="font-semibold text-slate-900">{contact.role}:</span>{" "}
                {contact.name} · {contact.phone}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {organizationProfile.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Website by <span className="font-semibold">OnielSteve</span> — <a className="text-brand-600 hover:underline" href="mailto:stephenobumonah@gmail.com">stephenobumonah@gmail.com</a> · <a className="text-brand-600 hover:underline" href="tel:+2349134352062">+2349134352062</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
