import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { donationOptions, organizationProfile } from "@/lib/content";

const stewardshipPromises = [
  "Audited accounts filed annually with the Corporate Affairs Commission",
  "Restricted funds honored for event-, medical-, or food-specific gifts",
  "Chairman and Trustee dual signatories on every bank mandate",
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Fuel gospel encounters and holistic relief."
        description="Every naira, dollar, pound, or euro advances evangelism, ministerial training, medical caravans, and food bank deliveries for the most vulnerable."
        actions={
          <Link
            href="/contact"
            className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white"
          >
            Need a custom pledge?
          </Link>
        }
        backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRlfGVufDB8fDB8fHww"
        // media={{
        //   src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&sat=-15",
        //   caption: "Stanbic IBTC outreach desk",
        // }}
        align="left"
      />

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Impact reel</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">What your generosity makes possible.</h2>
            <p className="mt-4 text-sm text-slate-600">
              Donations underwrite crusade logistics, medical supplies, food baskets, and pastoral coaching scholarships.
              We document every deployment so you can celebrate testimonies with us.
            </p>
            <div className="mt-6 text-sm text-slate-600">
              <p>
                Your support makes a meaningful difference — together we bring <strong>hope</strong>, encourage
                <strong> dignity</strong>, and enable <strong>sustainable change</strong> across the communities we serve.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80&sat=-25"
              alt="Volunteers packaging relief"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Ways to give</p>
          <div className="mt-6 grid gap-6 md:grid-cols-1">
            {donationOptions
              .filter((option) => option.label === "Direct Bank Transfer")
              .map((option) => (
                <div key={option.label} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">{option.label}</p>
                  <ul className="mt-3 list-none space-y-2 pl-0 text-sm text-slate-600">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="inline-block w-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-slate-500">Note: We currently accept direct bank transfers only. Online and international options will be enabled soon.</p>
                </div>
              ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Bank transfers should reference “Hope4DLiving Outreach” so we can reconcile each gift quickly after it lands in the Stanbic IBTC account.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Stewardship promises</p>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            {stewardshipPromises.map((promise) => (
              <li key={promise} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {promise}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/80">
            {organizationProfile.registrationNote}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Need donation receipts or MOUs?</h2>
          <p className="mt-4 text-sm text-slate-700">
            We prepare acknowledgement letters, grant agreements, and narrative/financial reports for individual and institutional partners. Share your requirements and timelines, and we will align.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow shadow-brand-600/40 transition hover:bg-brand-700"
          >
            Talk to our stewardship desk
          </Link>
        </div>
      </section>
    </>
  );
}
