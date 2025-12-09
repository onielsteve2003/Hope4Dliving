import { ReactNode } from "react";

type HeroMedia = {
  src: string;
  alt?: string;
  caption?: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  backgroundImage?: string;
  media?: HeroMedia;
  align?: "center" | "left";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  backgroundImage,
  media,
  align = "center",
}: PageHeroProps) {
  const hasBg = Boolean(backgroundImage);
  const hasMedia = Boolean(media?.src);
  const wrapperClass = hasBg
    ? "relative isolate overflow-hidden"
    : "bg-gradient-to-b from-brand-50 via-white to-white";
  const layoutClass = hasMedia
    ? "relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
    : "relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8";
  const textAlign = hasMedia || align === "left" ? "text-left" : "text-center";
  const titleColor = hasBg ? "text-white" : "text-slate-900";
  const bodyColor = hasBg ? "text-white/85" : "text-slate-600";
  const eyebrowColor = hasBg ? "text-brand-200" : "text-brand-600";
  const actionJustify = textAlign === "text-center" ? "justify-center" : "justify-start";

  return (
    <section className={wrapperClass}>
      {hasBg && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
        </>
      )}
      <div className={`${layoutClass} ${textAlign} relative`}> 
        <div className="space-y-4">
          {eyebrow && (
            <p className={`text-sm font-semibold uppercase tracking-[0.4em] ${eyebrowColor}`}>
              {eyebrow}
            </p>
          )}
          <div>
            <h1 className={`text-3xl font-bold sm:text-4xl ${titleColor}`}>{title}</h1>
            <p className={`mt-4 text-lg ${bodyColor}`}>{description}</p>
          </div>
          {actions && <div className={`flex flex-wrap gap-4 ${actionJustify}`}>{actions}</div>}
        </div>
        {hasMedia && media && (
          <div
            className={`relative overflow-hidden rounded-3xl border ${
              hasBg ? "border-white/20 bg-white/5 backdrop-blur" : "border-slate-100 bg-white"
            } shadow-2xl`}
          >
            <img src={media.src} alt={media.alt ?? ""} className="h-full w-full object-cover" />
            {media.caption && (
              <p className="absolute bottom-4 left-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {media.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
