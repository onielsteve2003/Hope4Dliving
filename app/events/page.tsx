"use client";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("@/components/CountdownTimer"), { ssr: false });

export default function EventsPage() {
  const crusadeDate = new Date("2027-01-06T08:00:00+01:00");
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100 pb-16">
      <section className="mx-auto max-w-3xl px-4 pt-16 pb-8">
        <h1 className="text-4xl font-bold text-brand-700 mb-2 text-center">Upcoming Events</h1>
        <p className="text-lg text-slate-700 mb-8 text-center">Join us for our next major outreach! Stay tuned for more events and updates.</p>
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] bg-white/80 rounded-3xl shadow-xl p-8 border border-brand-100">
          <div>
            <span className="rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 inline-block mb-2">
              Enugu Crusade
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 inline-block mb-2 ml-2">2-Day Encounter</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">Wednesday 6th & Thursday 7th January 2027</h2>
            <p className="mt-2 text-base text-slate-600">Morning Session 8AM · Evening Session 4PM</p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Theme</p>
              <p className="mt-2 text-2xl font-extrabold text-brand-800">JESUS THE GAME CHANGER...</p>
            </div>
            {/* <p className="mt-4 text-sm text-slate-600">Venue and Ministers will be sent later.</p> */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-brand-700 mb-2">What to Expect</h3>
              <ul className="list-disc list-inside text-slate-700 text-base space-y-1">
                <li>Powerful worship and teaching sessions</li>
                <li>Morning and evening encounters</li>
                <li>Special prayers and impartation</li>
                <li>Fellowship with believers from across the region</li>
                <li>Life-transforming testimonies</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-full bg-white/60 blur-2xl" />
            <CountdownTimer targetDate={crusadeDate} />
          </div>
        </div>
        <div className="mt-12 text-center text-slate-600">
          <h3 className="text-lg font-semibold text-brand-700 mb-2">Want to stay updated?</h3>
          <p>Check back here for more events, or follow us on social media for the latest news and updates.</p>
        </div>
      </section>
    </main>
  );
}
