import { HeartHandshake, LogOut, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ portalLabel, userName, userSubtext, children }) {
  return (
    <>
      <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-white shadow-sm">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight text-slate-900">
              Care<span className="text-[#16845b]">Connect</span>
            </Link>
            <p className="text-xs font-semibold text-[#16845b]">{portalLabel}</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-5">
          {children}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="mb-3 rounded-xl bg-[#eaf6ee] p-3">
            <p className="text-sm font-semibold text-slate-900">{userName}</p>
            <p className="text-xs text-slate-600">{userSubtext}</p>
          </div>
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <div className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16845b] text-white">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <span className="text-base font-bold text-slate-900">
                Care<span className="text-[#16845b]">Connect</span>
              </span>
              <p className="text-[11px] font-semibold text-[#16845b]">{portalLabel}</p>
            </div>
          </Link>

          <details className="relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Menu className="h-4 w-4" />
              <span>Menu</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 max-h-[75vh] w-64 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <div className="mb-2 rounded-xl bg-[#eaf6ee] p-2.5">
                <p className="text-xs font-semibold text-slate-900">{userName}</p>
                <p className="text-[11px] text-slate-600">{userSubtext}</p>
              </div>
              <nav className="space-y-1">
                {children}
              </nav>
              <div className="mt-3 border-t border-slate-100 pt-2">
                <Link
                  to="/login"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}
