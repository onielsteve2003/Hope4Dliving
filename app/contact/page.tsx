import { PageHero } from "@/components/page-hero";
import { organizationProfile } from "@/lib/content";

const officeHours = [
  "Mondays – Fridays: 9:00am – 5:00pm",
//   "Ministry field days: Saturdays as scheduled",
  "Prayer line: 24/7 for urgent requests",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Invite Hope4DLiving to your city, campus, or community."
        description="Share partnership ideas, humanitarian requests, or press inquiries. A team member will respond within 24 hours."
        backgroundImage="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80&sat=-15"
        media={{
          src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80&sat=-20",
          caption: "Hope4DLiving hotline team",
        }}
        align="left"
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Reach us</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Headquarters</h2>
            <p className="mt-4 text-sm text-slate-600">{organizationProfile.address}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {organizationProfile.contacts.map((contact) => (
                <li key={contact.role}>
                  <span className="font-semibold text-slate-900">{contact.role}:</span> {contact.name} · {contact.phone}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-700">Office hours</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {officeHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-700">Email Addresses</p>
              <ul className="mt-3 space-y-3">
                {organizationProfile.emails.map((email) => (
                  <li key={email.address}>
                    <p className="text-sm font-semibold text-slate-900">{email.label}</p>
                    <a href={`mailto:${email.address}`} className="text-sm text-brand-600 hover:underline">
                      {email.address}
                    </a>
                    <p className="text-xs text-slate-500">{email.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 p-4 text-sm text-slate-600">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-700">Mailing</p>
              <p>We are finalizing our dedicated P.O. Box. Please call the office line for courier drop-offs while registration is completed.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-xl shadow-brand-900/5">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Email only</p>
              <h3 className="mt-3 text-xl font-bold text-slate-900">Reach the team directly</h3>
              <p className="mt-2 text-sm text-slate-600">
                Please email us using the addresses below. We monitor the inbox daily and will reply within 24 hours.
              </p>
              <div className="mt-6 space-y-3">
                {organizationProfile.emails.slice(0, 3).map((email) => (
                  <div key={email.address} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{email.label}</p>
                    <a href={`mailto:${email.address}`} className="text-sm font-semibold text-slate-900 hover:underline">
                      {email.address}
                    </a>
                    <p className="text-xs text-slate-500">{email.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="mailto:contact@hope4dliving.org"
                  className="inline-flex w-full justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
                >
                  Email contact@hope4dliving.org
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80&sat=-15"
                alt="Field coordination map"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
