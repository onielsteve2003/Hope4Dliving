import { PageHero } from "@/components/page-hero";
import { SectionCard } from "@/components/section-card";
import { firstCrusadeFocus, salvatonFocus, powerMessages } from "@/lib/content";
import Link from "next/link";

export default function SalvationPage() {
  return (
    <>
      <PageHero
        eyebrow="The Gospel Message"
        title="Experience God's Transforming Love"
        description="At Hope4DLiving, we believe salvation through Jesus Christ is the foundation of true and lasting transformation."
        backgroundImage="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80&sat=-10"
        media={{
          src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80&sat=-10",
          caption: "Worship at an open-air crusade",
        }}
        align="center"
      />

      {/* Power Messages Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Messages of Hope and Power</h2>
          <p className="mt-4 text-lg text-slate-600">
            God's Word brings life, healing, and transformation to every situation
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {powerMessages.map((message, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-brand-700">{message.title}</h3>
              <blockquote className="mt-4 text-sm italic leading-relaxed text-slate-600">
                "{message.quote}"
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                — {message.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Salvation Focus */}
      <section className="bg-linear-to-br from-brand-600 to-brand-800 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">{salvatonFocus.headline}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-50">
              {salvatonFocus.description}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {salvatonFocus.steps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-50">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-brand-50 hover:shadow-xl"
            >
              {salvatonFocus.callToAction}
            </Link>
          </div>
        </div>
      </section>

      {/* First Crusade Focus (replaces testimonies until after launch) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">
            {firstCrusadeFocus.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{firstCrusadeFocus.headline}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            {firstCrusadeFocus.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {firstCrusadeFocus.focusCards.map((card) => (
            <SectionCard key={card.title} title={card.title} description={card.description} meta={card.meta} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-700">{firstCrusadeFocus.note}</p>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700"
            >
              Join the Prayer & Volunteer Network
            </Link>
            <Link
              href="/donate"
              className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
            >
              Give Toward the First Crusade
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-white">Are You Ready to Answer God's Call?</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Whether you're seeking salvation, looking to grow in your faith, or wanting to join the mission,
                Hope4DLiving is here to walk with you.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-600"
                >
                  Connect With Us
                </Link>
                <Link
                  href="/programs"
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80&sat=-10"
                alt="Worship and prayer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
