import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { organizationProfile } from "@/lib/content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${organizationProfile.name} | Official Website`,
  description:
    "Official website for HOPE 4D LIVING GLOBAL OUTREACH – preaching Christ, equipping ministers, and providing holistic relief across Nigeria and beyond.",
  metadataBase: new URL("https://hope4dliving.org"),
  openGraph: {
    title: organizationProfile.name,
    description:
      "Discover the mission, constitution, and compassion programs of HOPE 4D LIVING GLOBAL OUTREACH.",
    url: "https://hope4dliving.org",
    siteName: organizationProfile.name,
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/logo/logo1.png",
    shortcut: "/logo/logo1.png",
    apple: "/logo/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(22,90,176,0.08),_transparent_45%)]">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
