"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { pageLinks, organizationProfile } from "@/lib/content";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMenu() {
    setMobileOpen((prev) => !prev);
  }

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
            <Image
              src="/logo/logo1.png"
              alt={`${organizationProfile.shortName} logo`}
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              {organizationProfile.shortName}
            </p>
            <p className="text-base font-bold text-slate-900">
              {organizationProfile.name}
            </p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {pageLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-brand-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/donate"
            className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/30 transition hover:bg-brand-700 md:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-600 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-slate-200 bg-white px-4 py-4 shadow-lg">
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={closeMenu}
              className="block rounded-2xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
