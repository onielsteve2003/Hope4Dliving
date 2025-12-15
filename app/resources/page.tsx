import { PageHero } from "@/components/page-hero";
import { SectionCard } from "@/components/section-card";
import Link from "next/link";

const resources = [
  {
    category: "Messages",
    title: "Power to Prevail",
    description:
      "The Holy Spirit empowers believers to live victoriously and be effective witnesses. Discover how to walk in His power daily.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=80&sat=-15",
    type: "Teaching",
  },
  {
    category: "Messages",
    title: "The Gospel Changes Everything",
    description:
      "Salvation through Jesus Christ brings eternal hope and practical transformation. Learn how the Gospel impacts every dimension of life.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80&sat=-15",
    type: "Evangelism",
  },
  {
    category: "Prayer",
    title: "Interceding for Africa",
    description:
      "Join us in prayer for revival, healing, and breakthrough across Nigeria and the African continent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80&sat=-20",
    type: "Prayer Guide",
  },
  {
    category: "Training",
    title: "Ministerial Discipleship",
    description:
      "Equip yourself with theological depth and practical ministry tools through our training pathways.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80&sat=-15",
    type: "Course",
  },
  {
    category: "Outreach",
    title: "Crusade Planning Guide",
    description:
      "Learn how to organize effective city-wide evangelistic crusades that combine proclamation with compassion.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80&sat=-20",
    type: "Manual",
  },
  {
    category: "Compassion",
    title: "Medical Mission Handbook",
    description:
      "Practical guide for deploying medical caravans and compassion clinics in underserved communities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80&sat=-15",
    type: "Guide",
  },
];

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
            <h2 className="text-3xl font-bold sm:text-4xl">Grounded in God's Word</h2>
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
                <p className="text-base italic leading-relaxed text-white">"{verse.verse}"</p>
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
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Practical Tools for Ministry</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Download teachings, guides, and training materials to strengthen your walk with Christ and expand your
            ministry effectiveness.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  {resource.type}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">{resource.category}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{resource.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{resource.description}</p>
                <button className="mt-4 text-sm font-semibold text-brand-600 hover:underline">
                  Coming Soon →
                </button>
              </div>
            </div>
          ))}
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
              Whether you want to volunteer, partner with us in outreach, or support our mission financially, there's a
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
