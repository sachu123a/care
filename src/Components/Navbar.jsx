import { HeartHandshake, Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-white shadow-sm">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Care<span className="text-[#16845b]">Connect</span>
            </span>
            <p className="text-[11px] font-medium text-slate-500">Elderly Care Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            end
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
          >
            Services
          </NavLink>
          <NavLink
            to="/subscription"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
          >
            Subscription
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#16845b] hover:text-[#16845b]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-xl bg-[#16845b] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            Get Started
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-50">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
              >
                Services
              </NavLink>
              <NavLink
                to="/subscription"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
              >
                Subscription
              </NavLink>
              <NavLink
                to="/contact"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
              >
                Contact
              </NavLink>
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <Link
                to="/login"
                className="rounded-xl border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-[#16845b] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#116948]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
