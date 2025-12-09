## Hope4DLiving Web Experience

Faith-forward landing site for **HOPE 4D LIVING GLOBAL OUTREACH**, built with Next.js 14 App Router, TypeScript, and Tailwind CSS. It highlights the CAC-certified constitution, ministry programs (gospel, medical, food bank, relief), donation pathways, and contact workflows.

### Tech Stack
- Next.js App Router + React Server Components
- TypeScript with absolute imports via `@/*`
- Tailwind CSS v4 token-based theming
- `next/font` Geist Sans/Mono for typography

### Available Pages
- `/` – Hero, aims & objectives, governance snapshot, FAQs, CTA
- `/about` – Full constitution summary, trustee governance, meeting cadence
- `/programs` – Strategic initiatives plus compassion operations (medical, food bank, relief)
- `/donate` – Giving channels, stewardship promises, CTA to contact
- `/contact` – HQ details, leadership contacts, office hours, contact form
- `/api/contact` – Placeholder API route for form submissions (logs payload server-side)

### Local Development
```bash
npm install     # already run once, repeat if dependencies change
npm run dev     # http://localhost:3000
npm run lint    # ESLint (Next.js config)
npm run build   # Production build preview
```

### Content Customization Checklist
- Update `lib/content.ts` with final taglines, stats, and account information once confirmed.
- Replace `/public/logo/logo1.png` and `/public/logo/logo2.png` if newer brand marks arrive.
- Supply official email addresses on the Contact page (currently placeholder text).
- Swap placeholder donation account details on `/donate` once you provide Bank Name, Account Name, Account Number, and international transfer info.
- Wire `app/api/contact/route.ts` to Resend, SendGrid, Mailjet, or any CRM/webhook for real notifications.

### Deployment & Domain
Deploy to [Vercel](https://vercel.com) or Azure Static Web Apps for instant previews. Point the preferred domain (`hope4dliving.org` recommended for NGOs) to the hosting provider and configure HTTPS/redirects there.

### Next Steps
1. Provide finalized payment and email infrastructure details.
2. Gather imagery/testimonies to enrich the hero and program sections.
3. Decide whether a backend (Supabase/Firebase/Postgres) is needed for volunteer rosters or donation receipts.
4. Add analytics (Vercel Web Analytics or Plausible) and SEO metadata for upcoming campaigns.
