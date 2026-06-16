import { PageHero } from "@/components/page-hero";
import Link from "next/link";
import { downloadableResources } from "@/lib/content";

const bibleVerses = [
  {
    verse: "Go into all the world and preach the gospel to all creation.",
    reference: "Mark 16:15",
  },
  {
    verse:
      "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.",
    reference: "Luke 4:18",
  },
  {
    verse:
      "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.",
    reference: "Romans 1:16",
  },
  {
    verse: "How beautiful are the feet of those who bring good news!",
    reference: "Romans 10:15",
  },
];

const upcomingEvents = [
  {
    title: "Pioneer Crusade - Enugu",
    date: "Coming Soon",
    description: "Open-air crusade with medical missions and food distributions.",
    status: "Planning Phase",
  },
  {
    title: "Ministerial Training Cohort 1",
    date: "2026 / 2027",
    description: "Intensive discipleship and theological training for emerging ministers.",
    status: "Registration Open",
  },
  {
    title: "Relief Caravan - Northern Nigeria",
    date: "Coming Soon",
    description: "Medical care, food banks, and shelter support for displaced families.",
    status: "Logistics Planning",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Equip & Engage"
        title="Resources for Gospel Impact"
        description="Messages, training materials, and tools to empower believers for effective ministry and outreach."
        backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80&sat=-15"
        media={{
          src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80&sat=-15",
          caption: "Study materials and Bibles",
        }}
        align="center"
      />

      {/* Bible Foundation Section */}
      <section className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">Grounded in God&apos;s Word</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Every resource we offer is rooted in Scripture and designed to equip believers for kingdom impact.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bibleVerses.map((verse, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10"
              >
                <p className="text-base italic leading-relaxed text-white">&ldquo;{verse.verse}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-brand-300">— {verse.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">Library</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Real Downloads for Ministry and Outreach</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Download current Hope4DLiving forms, guides, and ministry briefs that supporters, volunteers, and applicants can use right away.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {downloadableResources.map((resource) => (
            <div
              key={resource.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-linear-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-8 text-white">
                <div className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                  {resource.category}
                </div>
                <div className="mt-6 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                  {resource.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mt-2 text-xl font-bold text-slate-900">{resource.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{resource.description}</p>
                <a
                  href={resource.href}
                  download
                  className="mt-5 inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  {resource.actionLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">Helpful Next Step</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Need scholarship help?</h2>
              <p className="mt-4 text-base text-slate-600">
                Download the form, review the application guide, and send your completed submission to the Hope4DLiving team for review.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/forms/Hope4DLiving_Scholarship_Form_v2.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Download Scholarship Form
              </a>
              <a
                href="mailto:info@hope4dliving.org?subject=Scholarship%20Form%20Submission"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
              >
                Submit Completed Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">Calendar</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Upcoming Outreach Events</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Join us as we take the Gospel and compassion to communities across Nigeria and beyond.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {event.status}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-600">{event.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-linear-to-r from-brand-700 to-brand-600 shadow-2xl">
          <div className="p-10 text-center text-white lg:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-50">
              Whether you want to volunteer, partner with us in outreach, or support our mission financially, there&apos;s a
              place for you in the Hope4DLiving family.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50"
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="inline-block rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Support the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
