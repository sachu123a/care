export default function StatCard({ title, value, subtitle, icon, badge }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#16845b]/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {value}
          </p>
          {subtitle && (
            <p className="mt-1.5 text-xs font-medium text-slate-500">{subtitle}</p>
          )}
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
          {icon}
        </div>
      </div>
      {badge && (
        <div className="mt-4 inline-flex items-center rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
          {badge}
        </div>
      )}
    </div>
  );
}
