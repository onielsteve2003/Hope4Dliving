import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const powerMessages = [
  {
    title: "The Gospel of Grace",
    scripture: "Ephesians 2:8-9",
    summary: "Salvation is a free gift — not earned by works, but received through faith in Jesus Christ.",
  },
  {
    title: "Freedom from Bondage",
    scripture: "John 8:36",
    summary: "Christ breaks every chain. In Him, we find deliverance from sin, shame, and spiritual oppression.",
  },
  {
    title: "New Creation",
    scripture: "2 Corinthians 5:17",
    summary: "Old things pass away. When you come to Christ, you become an entirely new person with a new destiny.",
  },
  {
    title: "Abundant Life",
    scripture: "John 10:10",
    summary: "Jesus came so that we may have life — overflowing with purpose, joy, and eternal hope.",
  },
];

const salvationSteps = [
  {
    step: "1",
    title: "Acknowledge",
    description: "Recognize your need for a Savior. None of us are perfect — all have sinned (Romans 3:23).",
    icon: "💡",
  },
  {
    step: "2",
    title: "Believe",
    description: "Trust that Jesus Christ is Lord, that He died for your sins, and rose again (Romans 10:9).",
    icon: "❤️",
  },
  {
    step: "3",
    title: "Confess",
    description: "Declare with your mouth that Jesus is Lord. Call upon His name and you will be saved (Romans 10:13).",
    icon: "🙏",
  },
  {
    step: "4",
    title: "Follow",
    description: "Walk in newness of life. Grow in faith through fellowship, Scripture, and obedience.",
    icon: "🚶",
  },
];

const crusadeFocus = [
  "Proclaim Jesus as the ONLY way of salvation.",
  "Offer prayer for healing, deliverance, and restoration.",
  "Connect new believers with local churches for discipleship.",
  "Distribute Bibles, teaching materials, and follow-up resources.",
];

export default function SalvationPage() {
  return (
    <>
      <PageHero
        eyebrow="Salvation"
        title="Encounter the life-changing power of Christ."
        description="At the heart of everything we do is one message: Jesus saves. Here, you'll discover the foundation of our faith and the invitation that has transformed millions of lives."
        backgroundImage="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      {/* Hope Statement */}
      <section className="bg-brand-600 py-4">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-medium text-white/90 md:text-base">
            "For God so loved the world, that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." — <span className="font-semibold text-white">John 3:16</span>
          </p>
        </div>
      </section>

      {/* Power Messages */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Core Messages</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">The Power of the Gospel</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            These are the foundational truths we proclaim at every crusade and outreach.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {powerMessages.map((message, idx) => (
            <div
              key={message.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100 opacity-50 transition group-hover:bg-brand-200" />
              <span className="relative z-10 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                {message.scripture}
              </span>
              <h3 className="relative z-10 mt-4 text-xl font-bold text-slate-900">{message.title}</h3>
              <p className="relative z-10 mt-3 text-sm text-slate-600">{message.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps to Salvation */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">The Path</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">How to Be Saved</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
              Salvation is simple — but it's the most important decision you'll ever make.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-brand-200 md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {salvationSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:w-5/12 ${
                    idx % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className={`flex items-center gap-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-600 text-lg font-bold text-white shadow-lg">
                    {step.step}
                  </div>

                  {/* Spacer */}
                  <div className="hidden w-5/12 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 px-8 py-12 text-white md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-300">Pray With Us</p>
            <h2 className="mt-3 text-3xl font-bold">A Simple Prayer of Faith</h2>
            <p className="mt-4 text-base text-white/80">
              If you're ready to receive Christ, pray this prayer from your heart:
            </p>
            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 text-left">
              <p className="text-base italic text-white/90 leading-relaxed">
                "Lord Jesus, I come to You today. I acknowledge that I am a sinner and I need Your forgiveness. 
                I believe that You died on the cross for my sins and rose again on the third day. 
                I confess You as my Lord and Savior. Come into my heart and make me new. 
                I surrender my life to You. Thank You for saving me. In Jesus' name, Amen."
              </p>
            </div>
            <p className="mt-6 text-sm text-white/70">
              If you prayed this prayer, you are now a child of God! We want to celebrate with you and help you grow.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
            >
              <span>Tell Us About Your Decision</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Crusade Focus */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-600">Our Crusades</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">What Happens at a Crusade?</h2>
              <p className="mt-4 text-base text-slate-600">
                Our crusades are more than events — they're divine appointments where lives are transformed, 
                bodies are healed, and communities are restored.
              </p>
              <ul className="mt-8 space-y-4">
                {crusadeFocus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1000&q=80"
                alt="Crusade gathering"
                className="h-80 w-full object-cover lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Ready to Take the Next Step?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Whether you just received Christ or you want to rededicate your life, we're here to walk with you. 
            Reach out — your journey of faith continues here.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-700"
            >
              <span>Connect With Us</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-600 px-8 py-4 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
