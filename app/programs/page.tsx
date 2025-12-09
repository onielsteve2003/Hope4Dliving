import { PageHero } from "@/components/page-hero";
import { SectionCard } from "@/components/section-card";
import { aimsAndObjectives, strategicInitiatives } from "@/lib/content";

const compassionTracks = [
  {
    title: "Medical mercy routes",
    description:
      "Volunteer doctors, nurses, and pharmacists provide consultations, minor surgeries, maternal care, and prescription support for underserved communities.",
    focus: "Mobile clinics · health education · referrals",
  },
  {
    title: "Hope Pantry food bank",
    description:
      "Food drives, warehouse partners, and rapid-response kits deliver grains, proteins, and nutritional supplements to families most impacted by hunger.",
    focus: "Monthly distributions · school feeding · agri-donations",
  },
  {
    title: "Shelter & relief collaborations",
    description:
      "Rapid deployment of tents, clothing, footwear, and rebuilding materials for displaced people, widows, and orphans.",
    focus: "Emergency shelters · housing grants · trauma care",
  },
];

const discipleshipPipeline = [
  {
    stage: "Awaken",
    details: "City-wide crusades, rural outreaches, and digital campaigns publish the hope of Christ.",
  },
  {
    stage: "Equip",
    details: "Modular ministerial training plus mentorship prepares leaders for ordination.",
  },
  {
    stage: "Deploy",
    details: "Graduates pioneer home churches, campus fellowships, and humanitarian brigades.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Four-dimensional ministry: spirit, soul, body, and society."
        description="Our initiatives unite gospel proclamation, leadership development, medical relief, and social support so that entire communities encounter the love of Christ."
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80&sat=-15"
        media={{
          src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80&sat=-15",
          caption: "Compassion convoy staging",
        }}
        align="left"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Strategic pillars</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Impact tracks synchronized with our constitution.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Every outreach references at least one of the eight aims and objectives adopted by the Corporate Affairs Commission.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {aimsAndObjectives.map((aim) => (
                <li key={aim}>{aim}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {strategicInitiatives.map((initiative) => (
              <SectionCard
                key={initiative.title}
                title={initiative.title}
                description={initiative.description}
                meta={initiative.impact}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Field visuals</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Where compassion meets logistics.</h2>
            <p className="mt-4 text-sm text-slate-600">
              Advance teams capture photo and drone footage so partners can see exactly how medical tents, food tables, and
              discipleship breakouts run on the ground.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Mobile clinics powered by volunteer medics.</li>
              <li>• Refrigerated trucks delivering produce to food banks.</li>
              <li>• Youth revival nights with translation headsets.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80&sat=-15",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80&sat=-10",
              "https://images.unsplash.com/photo-1461532257246-777de18cd58b?auto=format&fit=crop&w=900&q=80&sat=-15",
              "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?auto=format&fit=crop&w=900&q=80&sat=-15",
            ].map((image) => (
              <div key={image} className="relative h-40 overflow-hidden rounded-2xl shadow-md">
                <img src={image} alt="Hope4DLiving outreach" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Compassion operations</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            Medical, food, and relief units on standby.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {compassionTracks.map((track) => (
              <div key={track.title} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-base font-semibold text-slate-900">{track.title}</p>
                <p className="mt-2 text-sm text-slate-600">{track.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600">{track.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-r from-brand-600 via-brand-500 to-brand-600 px-8 py-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Discipleship pipeline</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {discipleshipPipeline.map((phase) => (
              <div key={phase.stage} className="rounded-2xl border border-white/30 bg-white/10 p-5">
                <p className="text-lg font-bold">{phase.stage}</p>
                <p className="mt-3 text-sm text-white/90">{phase.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/80">
            Each graduate signs a ministry covenant, receives ongoing coaching, and plugs into our relief network for sustained impact.
          </p>
        </div>
      </section>
    </>
  );
}
