import Link from "next/link";
import {
  aimsAndObjectives,
  donationOptions,
  faqs,
  meetingSchedule,
  organizationProfile,
  strategicInitiatives,
  powerMessages,
  outreachVision,
} from "@/lib/content";
import { SectionCard } from "@/components/section-card";

const highlights = [
  {
    label: "Communities Reached",
    value: "Host sites vetting",
    caption: "Partner pastors are prayerfully selecting the pioneer crusade cities.",
  },
  {
    label: "Ministers Equipped",
    value: "Cohort signup open",
    caption: "Interest forms are shaping the first ordination and discipleship pathways.",
  },
  {
    label: "Relief Deliveries",
    value: "Supply drives active",
    caption: "Warehouse partners are packing starter kits ahead of deployment.",
  },
];

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

const galleryImages = [
  {
    title: "Crusade Worship",
    caption: "Open-air gatherings lifting the name of Jesus across rural hubs.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80&sat=-15",
  },
  {
    title: "Compassion Clinic",
    caption: "Volunteer medics offering triage, prayer, and hope.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80&sat=-20",
  },
  {
    title: "Food Bank Mobilization",
    caption: "Staples packaged for displaced families and widows.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-20",
  },
  {
    title: "Next-Gen Discipleship",
    caption: "Teens discovering purpose through Scripture circles.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80&sat=-20",
  },
];

const storyFeatures = [
  {
    title: "Compassion Missions",
    description:
      "Pop-up medical caravans and trauma-informed counseling pods follow each crusade, ensuring tangible relief accompanies every altar call.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80&sat=-15",
  },
  {
    title: "Community Food Tables",
    description:
      "Hope pantries stocked with grains, hygiene kits, and clean water tablets stand up in underserved settlements within 48 hours of each mission.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80&sat=-10",
  },
];

const fieldDispatch = [
  {
    title: "Prayer Focus",
    summary: "Cover CAC filings, visas, and logistics volunteers as we prepare to move.",
    detail: "We send weekly prayer prompts to intercessors so nothing stalls the pioneer outreaches.",
  },
  {
    title: "Resource Mobilization",
    summary: "Food staples, Bibles, and trauma-care kits are being staged in Lagos.",
    detail: "Donors can underwrite pallets or sponsor medical professionals joining the convoy.",
  },
  {
    title: "City Listening Tours",
    summary: "Field pastors are gathering stories from communities requesting Hope4DLiving.",
    detail: "These interviews shape the crusade calendar and show us where the need is most urgent.",
  },
];

const contactPortraits: Record<string, string> = {
  chairman: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  secretary: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBanner.image}
          alt={heroBanner.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 text-center text-white sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-200">Hope4DLiving</p>
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Preaching Christ, equipping ministers, restoring dignity across nations.
            </h1>
            <p className="mt-4 text-lg text-white/90">
              HOPE 4D LIVING GLOBAL OUTREACH carries the gospel alongside medical care, food security, and relief
              interventions from Nigeria to the nations. Every outreach pairs proclamation with practical love.
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

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-brand-900/5">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">Launch readiness</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Where we are focusing first.</h2>
            <p className="mt-3 text-sm text-slate-600">
              We share the concrete preparations underway so you can pray and partner with us.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 p-4 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">In pictures</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Snapshots of hope-filled outreaches.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((item) => (
              <div
                key={item.title}
                className="relative h-52 overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">{item.title}</p>
                  <p className="text-sm text-white/90">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Power Message Section - Inspired by Reinhardt Bonnke */}
      <section className="bg-linear-to-br from-brand-700 via-brand-600 to-brand-800 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold sm:text-5xl">Are You Ready to Answer God's Call?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-brand-50">
              {powerMessages[1].quote}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/salvation"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-lg transition-all hover:bg-brand-50 hover:shadow-xl"
              >
                Experience God's Love
              </Link>
              <Link
                href="/programs"
                className="inline-block rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Join the Mission
              </Link>
            </div>
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
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl shadow-slate-900/40">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-brand-200">
            Aims & Objectives
          </p>
          <h2 className="mt-4 text-3xl font-bold">Eight anchors for holistic ministry.</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {aimsAndObjectives.map((aim) => (
              <li key={aim} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed">
                {aim}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {storyFeatures.map((story) => (
            <div key={story.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">Field Story</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{story.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white via-brand-50 to-white p-8 shadow-xl shadow-brand-900/10">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-700">Launch Roadmap</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">The journey from vision to impact.</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {launchRoadmap.map((phase) => (
              <div key={phase.title} className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-500">{phase.phase}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{phase.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {phase.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-600">
              Meetings
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Governance rhythms that keep us accountable.</h2>
            <div className="mt-6 space-y-4">
              {meetingSchedule.map((meeting) => (
                <div key={meeting.name} className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-base font-semibold text-slate-900">{meeting.name}</p>
                  <p className="text-sm text-slate-600">{meeting.cadence}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Quorum: {meeting.quorum}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-700">FAQs</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Building the digital launchpad together.
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-white/70 bg-white/80 p-4">
                  <summary className="cursor-pointer text-base font-semibold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-brand-900/10">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-brand-600">Field Dispatch</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Latest prep notes before deployment.</h2>
          <p className="mt-4 text-base text-slate-600">
            Here is a transparent briefing on the moving pieces you can pray for, fund, or
            volunteer with as Hope4DLiving launches.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {fieldDispatch.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">{item.title}</p>
                <p className="mt-3 text-base font-semibold text-slate-900">{item.summary}</p>
                <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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
