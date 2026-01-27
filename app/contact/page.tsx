"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { organizationProfile } from "@/lib/content";

const officeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "After Service (By Appointment)" },
];

const quickContacts = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: organizationProfile.contacts[0]?.phone || "0903 469 9523",
    href: `tel:${organizationProfile.contacts[0]?.phone?.replace(/\s/g, "") || "09034699523"}`,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@hope4dliving.org",
    href: "mailto:info@hope4dliving.org",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Address",
    value: "The New Covenant Catholic Church, Lagos",
    href: "https://www.google.com/maps/place/The+New+Covenant+Catholic+Church/@6.5449995,3.3674425,17z/data=!4m6!3m5!1s0x103b8da267cbe123:0xfb54517cfb1e11dc!8m2!3d6.5449995!4d3.3723134!16s%2Fg%2F11f3x9hvm5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const emailDepartments = organizationProfile.emails.slice(0, 4);

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = async (email: string) => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Whether you have a question, partnership proposal, or prayer request — our team is ready to connect with you."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      {/* Quick Contact Bar */}
      <section className="bg-brand-600 py-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {quickContacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Address" ? "_blank" : undefined}
                rel={contact.label === "Address" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-white transition hover:text-white/80"
              >
                <span className="text-white/80">{contact.icon}</span>
                <span className="text-sm font-medium">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8 lg:col-span-2">
            {/* Office Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <ul className="mt-4 space-y-3">
                {officeHours.map((schedule) => (
                  <li key={schedule.day} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{schedule.day}</span>
                    <span className="font-medium text-slate-900">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email Departments */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Departments
              </h3>
              <ul className="mt-4 space-y-4">
                {emailDepartments.map((email) => (
                  <li key={email.address} className="group">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                          {email.label}
                        </span>
                        <p className="text-sm font-medium text-slate-900">{email.address}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(email.address)}
                        className="shrink-0 rounded-lg border border-slate-200 p-2 text-slate-400 transition hover:border-brand-300 hover:text-brand-600"
                        title="Copy email"
                      >
                        {copiedEmail === email.address ? (
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Visit Our Office
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {organizationProfile.address}
              </p>
              <a
                href="https://www.google.com/maps/place/The+New+Covenant+Catholic+Church/@6.5449995,3.3674425,17z/data=!4m6!3m5!1s0x103b8da267cbe123:0xfb54517cfb1e11dc!8m2!3d6.5449995!4d3.3723134!16s%2Fg%2F11f3x9hvm5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
              >
                <span>Open in Maps</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-600">Our Location</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Find Us on the Map</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <div className="aspect-video bg-slate-200">
              <iframe
                src="https://maps.google.com/maps?q=The%20New%20Covenant%20Catholic%20Church%206.5449995,3.3723134&output=embed"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The New Covenant Catholic Church Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-linear-to-br from-brand-600 to-brand-700 px-8 py-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Other Ways to Connect</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Beyond messaging us, here's how you can get involved with our mission.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl">
                🙏
              </div>
              <h3 className="mt-4 text-lg font-bold">Submit a Prayer</h3>
              <p className="mt-2 text-sm text-white/80">Share your prayer request and our intercession team will pray for you.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl">
                🤝
              </div>
              <h3 className="mt-4 text-lg font-bold">Become a Partner</h3>
              <p className="mt-2 text-sm text-white/80">Join our community of monthly supporters making a difference.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl">
                📅
              </div>
              <h3 className="mt-4 text-lg font-bold">Invite Us</h3>
              <p className="mt-2 text-sm text-white/80">Book Rev. Vitalis for speaking engagements, crusades, or conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Ready to Support Our Mission?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Your partnership enables us to reach more lives with the gospel, provide medical care, 
            and distribute food to those in need.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-700"
            >
              <span>Give Now</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-600 px-8 py-4 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
