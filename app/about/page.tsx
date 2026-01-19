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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Constitution"
        title="Order, transparency, and accountability under God."
        description="Every article of our constitution safeguards the proclamation of the gospel and the delivery of holistic compassion across the nations."
        backgroundImage="https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlibGV8ZW58MHx8MHx8fDA%3D"
        media={{
          src: "https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlibGV8ZW58MHx8MHx8fDA%3D",
          caption: "Study of Scripture at a leadership retreat",
        }}
        align="left"
      />

      {/* Founder Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[0.7fr_1.3fr] items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/team/daddy.jpg"
              alt="Founder: Rev. Vitalis C. Onah"
              className="h-40 w-40 rounded-full object-cover border-4 border-brand-600 bg-slate-100"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Founder</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Rev. Vitalis C. Onah</h2>
            <p className="mt-3 text-sm text-slate-600">
              A devoted servant-leader who began ministry in 2007 and now leads Hope4DLiving Global Outreach with a
              heart for revival, compassion, and discipleship. He is the founder of The New Covenant Catholic Church
              (Freedom City) and is happily married with five children (three girls and two boys).
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Why this matters</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Biblical convictions meet strong governance.</h2>
            <p className="mt-4 text-sm text-slate-600">
              Trustees fast, pray, and deliberate with legal counsel to ensure that every covenant aligns with scripture and
              national regulations. From bank mandates to relief collaborations, transparency protects both donors and beneficiaries.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• CAC-certified constitution with audited filings.</li>
              <li>• Conflict-of-interest disclosures signed annually.</li>
              <li>• Relief partners vetted for safeguarding compliance.</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1653392098608-baafefcf9ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5udWFsJTIwcmV0cmVhdCUyMG9mJTIwcGVvcGxlJTIwZ2F0aGVyaW5nfGVufDB8fDB8fHww"
              alt="Leaders praying together"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">Annual retreat</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">Preamble</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{preamble}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Foundational Articles</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {governanceArticles.map((article) => (
            <SectionCard key={article.title} title={article.title} description={article.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Aims & Objectives</p>
          <h2 className="mt-4 text-3xl font-bold">Eight commitments that guide our mission.</h2>
          <ol className="mt-6 space-y-3 text-sm leading-relaxed text-white/90">
            {aimsAndObjectives.map((aim, index) => (
              <li key={aim}>
                <span className="font-semibold text-white">{index + 1}.</span> {aim}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Trustees & Governance</h2>
          <p className="mt-3 text-sm text-slate-600">{trusteesGuidelines.selection}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <SectionCard
              title="Term & Size"
              description={`Trustees serve for ${trusteesGuidelines.termYears} years with a minimum of ${trusteesGuidelines.min} and maximum of ${trusteesGuidelines.max} members.`}
            />
            <SectionCard
              title="Vacancy Protocol"
              description={trusteesGuidelines.vacancyProcess}
            />
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-900">Removal criteria</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {trusteesGuidelines.removalCriteria.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-8 shadow-inner shadow-brand-900/5">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-700">Meeting cadence</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Accountability gatherings that keep Hope4DLiving focused.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {meetingSchedule.map((meeting) => (
              <div key={meeting.name} className="rounded-2xl border border-white/60 bg-white/80 p-4">
                <p className="text-base font-semibold text-slate-900">{meeting.name}</p>
                <p className="mt-1 text-sm text-slate-600">{meeting.cadence}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Quorum: {meeting.quorum}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Signed on {organizationProfile.founded} by Chairman {organizationProfile.contacts[0].name}.
          </p>
        </div>
      </section>
    </>
  );
}
