"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  donationOptions,
  organizationProfile,
  strategicInitiatives,
  outreachVision,
} from "@/lib/content";
import { SectionCard } from "@/components/section-card";

const launchRoadmap = [
  {
    phase: "Phase 1",
    title: "Foundation & CAC Certification",
    description:
      "Compliance filings so every outreach is rooted in accountability.",
    status: "LIVE",
  },
  {
    phase: "Phase 2",
    title: "Digital Launch & Resource Hub",
    description:
      "Communication channels, and discipleship resources that keep partners informed in real time.",
    status: "IN PROGRESS",
  },
  {
    phase: "Phase 3",
    title: "Field Deployments",
    description:
      "Roll out city-wide crusades, medical caravans, food bank pop-ups, and pastoral training hubs across Nigeria and Africa.",
    status: "UP NEXT",
  },
];

const heroBanner = {
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-15",
  alt: "Volunteers offering food and encouragement during an outreach.",
};


const contactPortraits: Record<string, string> = {
  chairman: "/team/daddy.jpg",
  secretary: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
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
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-200">Hope4DLiving</p>
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Preaching Christ, equipping ministers, restoring dignity across nations.
            </h1>
            <p className="mt-4 text-lg text-white/90">
              A faith-forward outreach bringing hope, healing, and practical compassion.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-brand-700 shadow shadow-brand-600/30 transition hover:bg-white"
            >
              Give today
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore programs
            </Link>
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

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">
              Constitution Snapshot
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
              Read the full constitution →
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

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-600">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Accessible leaders, accountable stewardship.</h2>
            <p className="mt-4 text-base text-slate-600">
              Meet the founding team stewarding this assignment. We keep direct lines open so intercessors, partners, and
              beneficiaries can reach us quickly for ministry coordination, accountability, and prayer support.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              Contact the team →
            </Link>
          </div>
          <div className="grid gap-4">
            {organizationProfile.contacts.map((contact) => (
              <div key={contact.role} className="relative flex items-center rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">{contact.role}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{contact.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">Primary line: {contact.role === "Chairman" ? "+2348056683285" : contact.phone}</p>
                </div>
                <div className="ml-4 shrink-0">
                  <img
                    src={contactPortraits[contact.role.toLowerCase()] ?? heroBanner.image}
                    alt={contact.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-brand-500 bg-slate-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">Ways to Partner</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Give, host, and advocate alongside us.</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-1">
            {donationOptions
              .filter((option) => option.label === "Direct Bank Transfer")
              .map((option) => (
                <div key={option.label} className="rounded-2xl border border-slate-100 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">{option.label}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {option.details.map((detail) => {
                      if (detail.startsWith("Account Name:")) {
                        return <li key={detail}><strong>Account Name:</strong> Covenant Catholic Ministry Worldwide</li>;
                      }
                      if (detail.startsWith("Bank Name:")) {
                        return <li key={detail}><strong>Bank Name:</strong> Stanbic IBTC Bank</li>;
                      }
                      if (detail.startsWith("Account Number:")) {
                        return <li key={detail}><strong>Account Number:</strong> 0015964783</li>;
                      }
                      if (detail.startsWith("Reference:")) {
                        return <li key={detail}><strong>Reference:</strong> Hope4DLiving Outreach</li>;
                      }
                      return <li key={detail}>{detail}</li>;
                    })}
                  </ul>
                  <p className="mt-4 text-xs text-slate-500">Note: Direct bank transfers keep ministry funds moving while our card gateways finish onboarding and compliance reviews.</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-r from-brand-600 via-brand-500 to-brand-600 px-8 py-12 text-white shadow-xl shadow-brand-900/30">
          <h2 className="text-3xl font-bold">Ready to engage Hope4DLiving?</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/90">
            Partner with us to deploy gospel-centered outreaches, medical caravans, food bank deliveries, and shelter
            initiatives that restore dignity in every dimension of life.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
            >
              Support financially
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Invite us to your city
            </Link>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.45em] text-white/70">{organizationProfile.address}</p>
        </div>
      </section>
    </>
  );
}
