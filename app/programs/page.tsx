import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { strategicInitiatives } from "@/lib/content";

const programPillars = [
  {
    icon: "📢",
    title: "Gospel Proclamation",
    description: "City-wide crusades, rural outreaches, and digital campaigns publishing the hope of Christ to every community.",
    highlights: ["Open-air crusades", "Campus fellowships", "Media evangelism"],
  },
  {
    icon: "📖",
    title: "Ministerial Training",
    description: "Equipping pastors, evangelists, and church workers with theological grounding and practical ministry skills.",
    highlights: ["Leadership development", "Ordination pathways", "Mentorship programs"],
  },
  {
    icon: "🏥",
    title: "Medical Outreach",
    description: "Mobile clinics, health education, and medical missions bringing healthcare to underserved communities.",
    highlights: ["Free consultations", "Maternal care", "Health screenings"],
  },
  {
    icon: "🍞",
    title: "Food Relief",
    description: "Food banks, emergency distributions, and sustainable nutrition programs for families facing hunger.",
    highlights: ["Monthly distributions", "School feeding", "Emergency response"],
  },
];

const compassionTracks = [
  {
    title: "Medical Mercy Routes",
    description: "Volunteer doctors, nurses, and pharmacists provide consultations, minor surgeries, maternal care, and prescription support.",
    icon: "🩺",
  },
  {
    title: "Hope Pantry Food Bank",
    description: "Food drives, warehouse partners, and rapid-response kits deliver grains, proteins, and nutritional supplements.",
    icon: "🥫",
  },
  {
    title: "Shelter & Relief",
    description: "Rapid deployment of tents, clothing, footwear, and rebuilding materials for displaced people and orphans.",
    icon: "🏠",
  },
];

const discipleshipPipeline = [
  {
    stage: "01",
    title: "Awaken",
    description: "City-wide crusades, rural outreaches, and digital campaigns publish the hope of Christ.",
  },
  {
    stage: "02",
    title: "Equip",
    description: "Modular ministerial training plus mentorship prepares leaders for ordination.",
  },
  {
    stage: "03",
    title: "Deploy",
    description: "Graduates pioneer home churches, campus fellowships, and humanitarian brigades.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Four pillars of holistic transformation."
        description="Spirit, soul, body, and society — our initiatives unite gospel proclamation with practical compassion so entire communities encounter the love of Christ."
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
        align="left"
      />

      {/* Program Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Four Dimensions of Ministry</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Every program is designed to bring transformation across every area of life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-2xl transition group-hover:bg-brand-600 group-hover:text-white">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {pillar.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">On The Ground</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Where compassion meets action.</h2>
              <p className="mt-4 text-base text-slate-600">
                Our advance teams capture every outreach so partners can see exactly how medical tents, 
                food distributions, and discipleship sessions run on the ground.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-lg">🚑</div>
                  <span className="text-sm text-slate-700">Mobile clinics powered by volunteer medics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-lg">🚛</div>
                  <span className="text-sm text-slate-700">Refrigerated trucks delivering produce to food banks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-lg">🎤</div>
                  <span className="text-sm text-slate-700">Youth revival nights with translation support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                    alt="Team coordination"
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
                    alt="Community outreach"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?auto=format&fit=crop&w=900&q=80"
                    alt="Medical mission"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1478479474071-8a3014d422c8?auto=format&fit=crop&w=900&q=80"
                    alt="Food distribution"
                    className="h-40 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compassion Operations */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Compassion Operations</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Medical, food, and relief units on standby.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {compassionTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-3xl">
                {track.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{track.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{track.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">Strategic Focus</p>
            <h2 className="mt-3 text-3xl font-bold">Current Initiative Tracks</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strategicInitiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-white">{initiative.title}</h3>
                <p className="mt-3 text-sm text-white/80">{initiative.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  {initiative.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discipleship Pipeline */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-br from-brand-600 to-brand-700 px-8 py-12 text-white">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-200">The Journey</p>
            <h2 className="mt-3 text-3xl font-bold">Discipleship Pipeline</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              From first encounter to ministry deployment — a clear pathway for every believer.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {discipleshipPipeline.map((phase) => (
              <div key={phase.stage} className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-bold">
                  {phase.stage}
                </div>
                <h3 className="mt-4 text-xl font-bold">{phase.title}</h3>
                <p className="mt-3 text-sm text-white/80">{phase.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/70">
            Each graduate signs a ministry covenant, receives ongoing coaching, and plugs into our relief network.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Want to Partner With Us?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Whether you're a medical professional, church leader, or someone called to serve — 
            there's a place for you in our programs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-700"
            >
              <span>Get Involved</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-600 px-8 py-4 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
