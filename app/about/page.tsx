import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionCard } from "@/components/section-card";
import {
  aimsAndObjectives,
  governanceArticles,
  meetingSchedule,
  organizationProfile,
  trusteesGuidelines,
} from "@/lib/content";

const preamble =
  "We, the members of HOPE 4D LIVING GLOBAL OUTREACH – a not-for-profit and non-political organization – firmly and solemnly resolve to provide for ourselves this constitution and to be governed by its provisions.";

const coreValues = [
  {
    icon: "✝️",
    title: "Christ-Centered",
    description: "Every initiative flows from the gospel and points back to Jesus.",
  },
  {
    icon: "💎",
    title: "Integrity",
    description: "Transparent stewardship with audited accounts and dual signatories.",
  },
  {
    icon: "❤️",
    title: "Compassion",
    description: "Meeting physical needs as a demonstration of God's love.",
  },
  {
    icon: "🌍",
    title: "Global Vision",
    description: "Starting in Nigeria, reaching Africa and the nations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Hope for every dimension of life."
        description="We exist to reconcile men to God and restore dignity to lives through gospel proclamation, ministerial training, medical outreach, and food relief."
        backgroundImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80"
        align="left"
      />

      {/* Quick Stats */}
      <section className="bg-brand-600">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center text-white md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold">2025</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">Founded</p>
            </div>
            <div>
              <p className="text-3xl font-bold">CAC</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">Registered</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">Pillars of Impact</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">To Mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-100/50"></div>
            <img
              src="/team/daddy.jpg"
              alt="Founder: Rev. Vitalis C. Onah"
              className="relative h-80 w-full rounded-2xl object-cover shadow-xl lg:h-96"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Meet the Founder</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Rev. Vitalis C. Onah</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              A devoted servant-leader who began ministry in 2007, Rev. Onah carries a burning passion for revival, 
              compassion, and discipleship. His vision for Hope4DLiving was born from years of frontline ministry 
              and a deep conviction that the gospel must touch every dimension of life — spiritual, physical, and social.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              He is the founder of The New Covenant Catholic Church (Freedom City) and is happily married with 
              five children — three girls and two boys.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                <span>Connect With Us</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">What We Stand For</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Why This Matters</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Biblical convictions meet strong governance.</h2>
            <p className="mt-4 text-base text-slate-600">
              Trustees fast, pray, and deliberate with legal counsel to ensure that every covenant aligns with 
              scripture and national regulations. From bank mandates to relief collaborations, transparency 
              protects both donors and beneficiaries.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">CAC-certified constitution with audited filings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Conflict-of-interest disclosures signed annually</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Relief partners vetted for safeguarding compliance</span>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1653392098608-baafefcf9ab2?auto=format&fit=crop&w=800&q=80"
              alt="Leaders praying together"
              className="h-80 w-full object-cover lg:h-96"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white/90">Leadership prayer retreat</p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Our Purpose</p>
            <h2 className="mt-3 text-3xl font-bold">Eight commitments that guide our mission.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {aimsAndObjectives.map((aim, index) => (
              <div key={aim} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed text-white/90">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution Preamble */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Constitutional Preamble</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium italic leading-relaxed text-slate-700">
            "{preamble}"
          </p>
          <p className="mt-6 text-xs text-slate-500">
            Established {organizationProfile.founded} · {organizationProfile.registrationNote}
          </p>
        </div>
      </section>

      {/* Governance Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Governance</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Foundational Articles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Key provisions that ensure accountability, transparency, and mission alignment.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {governanceArticles.slice(0, 6).map((article) => (
            <SectionCard key={article.title} title={article.title} description={article.description} />
          ))}
        </div>
        {governanceArticles.length > 6 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {governanceArticles.slice(6).map((article) => (
              <SectionCard key={article.title} title={article.title} description={article.description} />
            ))}
          </div>
        )}
      </section>

      {/* Trustees Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Leadership Structure</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Trustees & Governance</h2>
              <p className="mt-4 text-base text-slate-600">{trusteesGuidelines.selection}</p>
              
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Term & Size</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Trustees serve for {trusteesGuidelines.termYears} years with a minimum of {trusteesGuidelines.min} and 
                    maximum of {trusteesGuidelines.max} members.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Vacancy Protocol</p>
                  <p className="mt-2 text-sm text-slate-600">{trusteesGuidelines.vacancyProcess}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Removal Criteria</p>
              <p className="mt-2 text-xs text-slate-500">A trustee may be removed under the following conditions:</p>
              <ul className="mt-4 space-y-2">
                {trusteesGuidelines.removalCriteria.map((rule, index) => (
                  <li key={rule} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                      {index + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Schedule */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Accountability</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Meeting Cadence</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Regular gatherings that keep Hope4DLiving focused, aligned, and accountable.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {meetingSchedule.map((meeting) => (
            <div
              key={meeting.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{meeting.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{meeting.cadence}</p>
              <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2">
                <p className="text-xs font-semibold text-brand-700">Quorum: {meeting.quorum}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-br from-brand-700 via-brand-600 to-brand-500 px-8 py-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/90">
            Whether through prayer, giving, volunteering, or inviting us to your community — 
            there's a place for you in this movement of hope.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100"
            >
              <span>Partner With Us</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
