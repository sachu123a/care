import {
  BarChart3,
  Bell,
  CalendarClock,
  CreditCard,
  HeartHandshake,
  Home,
  LayoutDashboard,
  Layers,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  UserCog,
  Users,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f6faf7] lg:flex">
      <Sidebar
        portalLabel="Admin Portal"
        userName="Dr. Eleanor Vance"
        userSubtext="Platform Administrator"
      >
        <NavLink
          to="/admin/dashboard"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/users"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Users className="h-4 w-4 shrink-0" />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/family-accounts"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Home className="h-4 w-4 shrink-0" />
          <span>Family Accounts</span>
        </NavLink>
        <NavLink
          to="/admin/caregivers"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <UserCog className="h-4 w-4 shrink-0" />
          <span>Caregivers</span>
        </NavLink>
        <NavLink
          to="/admin/caregiver-approvals"
          className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <span className="flex items-center gap-3">
            <UserCheck className="h-4 w-4 shrink-0" />
            <span>Caregiver Approvals</span>
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700">
            4
          </span>
        </NavLink>
        <NavLink
          to="/admin/elderly-people"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <HeartHandshake className="h-4 w-4 shrink-0" />
          <span>Elderly People</span>
        </NavLink>
        <NavLink
          to="/admin/care-schedules"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <CalendarClock className="h-4 w-4 shrink-0" />
          <span>Care Schedules</span>
        </NavLink>
       
        <NavLink
          to="/admin/subscriptions"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <CreditCard className="h-4 w-4 shrink-0" />
          <span>Subscriptions</span>
        </NavLink>
        <NavLink
          to="/admin/subscription-plans"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Layers className="h-4 w-4 shrink-0" />
          <span>Subscription Plans</span>
        </NavLink>
        <NavLink
          to="/admin/notifications"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Bell className="h-4 w-4 shrink-0" />
          <span>Notifications</span>
        </NavLink>
        <NavLink
          to="/admin/analytics"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <BarChart3 className="h-4 w-4 shrink-0" />
          <span>Analytics</span>
        </NavLink>
      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-[#16845b]" />
            <span className="text-sm font-semibold text-slate-800">
              CareConnect Administration Console
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/caregiver-approvals"
              className="hidden rounded-xl bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-100 sm:inline-flex"
            >
              4 Pending Approvals
            </Link>
            <Link
              to="/admin/notifications"
              className="relative rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-[#16845b] hover:text-[#16845b]"
              aria-label="Admin Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#16845b]" />
            </Link>
            <div className="hidden items-center gap-2.5 rounded-xl border border-slate-200 bg-[#f6faf7] px-3 py-1.5 sm:flex">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16845b] text-xs font-bold text-white">
                EV
              </div>
              <span className="text-xs font-semibold text-slate-800">Admin</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
