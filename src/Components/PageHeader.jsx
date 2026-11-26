export default function PageHeader({ title, description, badge, action }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      <div>
        {badge && (
          <span className="mb-2 inline-block rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b]">
            {badge}
          </span>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
