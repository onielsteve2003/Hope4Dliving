"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  organizationProfile,
  strategicInitiatives,
  outreachVision,
} from "@/lib/content";
import { SectionCard } from "@/components/section-card";

const heroBanner = {
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-15",
  alt: "Volunteers offering food and encouragement during an outreach.",
};

const CountdownTimer = dynamic(() => import("@/components/CountdownTimer"), { ssr: false });

export default function Home() {
  const crusadeDate = new Date("2027-01-06T08:00:00+01:00");
  // List of hero videos
  const heroVideos = [
    "/videos/hero-image.mp4",
    "/videos/hero-image2.mp4",
    "/videos/hero-image3.mp4",
  ];

  // State for current video index
  // Always start with first video for SSR, randomize on client after mount
  const [videoIndex, setVideoIndex] = React.useState(0);
  React.useEffect(() => {
    setVideoIndex(Math.floor(Math.random() * heroVideos.length));
  }, [heroVideos.length]);

  // Handler to switch to a new random video when the current one ends
  const handleVideoEnd = React.useCallback(() => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * heroVideos.length);
    } while (nextIndex === videoIndex && heroVideos.length > 1);
    setVideoIndex(nextIndex);
  }, [videoIndex, heroVideos.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[60vh] flex items-center justify-center">
        <video
          key={heroVideos[videoIndex]} // force reload on src change
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop={false} // loop disabled for switching
          playsInline
          poster={heroBanner.image}
          onEnded={handleVideoEnd}
        >
          <source src={heroVideos[videoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 text-center text-white sm:px-6 lg:px-8 items-center justify-center min-h-[40vh]">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            <span className="text-xs font-medium text-white/90">CAC Registered Non-Profit</span>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bringing Hope to <span className="text-brand-200">Every Life</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              Gospel proclamation. Medical outreach. Food relief. Ministerial training.
            </p>
          </div>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg shadow-white/20 transition hover:bg-slate-100 hover:shadow-xl"
            >
              <span>Partner With Us</span>
              <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/programs"
              className="rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              See Our Work
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <p className="text-2xl font-bold sm:text-3xl">4+</p>
              <p className="text-xs text-white/70">Pillars of Impact</p>
            </div>
            <div>
              <p className="text-2xl font-bold sm:text-3xl">100%</p>
              <p className="text-xs text-white/70">Goes to Mission</p>
            </div>
            <div>
              <p className="text-2xl font-bold sm:text-3xl">2025</p>
              <p className="text-xs text-white/70">CAC Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Highlight */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-brand-100 bg-white p-8 shadow-lg lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">Next Impact</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Enugu Crusade – January 2027</h2>
            <p className="mt-3 text-sm text-slate-600">Wednesday 6th & Thursday 7th January 2027</p>
            <p className="mt-2 text-sm text-slate-600">Morning Session 8AM · Evening Session 4PM</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <span>Register Interest</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <CountdownTimer targetDate={crusadeDate} />
          </div>
        </div>
      </section>



      {/* Ministry Model Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">{outreachVision.title}</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{outreachVision.subtitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            {outreachVision.description}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {outreachVision.principles.map((principle, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <div className="text-4xl">{principle.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Strategic Focus */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">
            Our Mission
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Reconciling men to God, restoring dignity to lives.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We exist to take the life-transforming hope of Christ to every dimension of life — 
            through bold evangelism, compassion-driven outreach, and the equipping of ministers 
            for sustainable kingdom impact across Nigeria, Africa, and the nations.
          </p>
        </div>

        {/* Strategic Initiatives */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Built on scripture, governed with integrity.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From trusteeship and income policies to the special clause on nonprofit accountability, every article of
              the constitution safeguards our mission to reconcile men to God.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              Learn more about us →
            </Link>
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

      {/* Ways to Get Involved */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">Get Involved</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Ways to Partner With Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Whether you give, pray, volunteer, or invite us to your community — every act of partnership expands the reach of hope.
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                💰
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Give</h3>
              <p className="mt-2 text-sm text-slate-600">Fund crusades, medical missions, and food relief</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                🙏
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Pray</h3>
              <p className="mt-2 text-sm text-slate-600">Join our intercessory network for breakthrough</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                🤝
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Volunteer</h3>
              <p className="mt-2 text-sm text-slate-600">Serve at outreaches and community events</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                📍
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Host</h3>
              <p className="mt-2 text-sm text-slate-600">Invite us to minister in your city or church</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              <span>Learn how you can get involved</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-700 via-brand-600 to-brand-500 px-8 py-16 text-white shadow-2xl shadow-brand-900/40">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
            </svg>
          </div>
          
          <div className="relative text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Make an Impact?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90">
              Partner with us to deploy gospel-centered outreaches, medical caravans, food bank deliveries, and shelter
              initiatives that restore dignity in every dimension of life.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/donate"
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100 hover:shadow-xl"
              >
                <span>Give Today</span>
                <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Invite Us to Your City
              </Link>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.35em] text-white/60">{organizationProfile.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
