type SectionCardProps = {
  title: string;
  description: string;
  meta?: string;
};

export function SectionCard({ title, description, meta }: SectionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      {meta && <p className="mt-4 text-xs font-semibold uppercase text-brand-600">{meta}</p>}
    </div>
  );
}
