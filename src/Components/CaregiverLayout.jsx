
import {
  Bell,
  CalendarClock,
  HeartHandshake,
  LayoutDashboard,
  UserCircle,
  Users,
  FileCheck,
} from 'lucide-react';

import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function CaregiverLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f6faf7] lg:flex">

      <Sidebar
        portalLabel="Caregiver Portal"
        userName="Sarah Jenkins, RN"
        userSubtext="Senior Geriatric Caregiver"
      >

        <NavLink
          to="/caregiver/dashboard"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/caregiver/my-elderly-people"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Users className="h-4 w-4 shrink-0" />
          <span>My Elderly People</span>
        </NavLink>

        <NavLink
          to="/caregiver/verification"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <FileCheck className="h-4 w-4 shrink-0" />
          <span>Verification Form</span>
        </NavLink>

        <NavLink
          to="/caregiver/care-schedule"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <CalendarClock className="h-4 w-4 shrink-0" />
          <span>Care Schedule</span>
        </NavLink>

        <NavLink
          to="/caregiver/notifications"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Bell className="h-4 w-4 shrink-0" />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/caregiver/profile"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <UserCircle className="h-4 w-4 shrink-0" />
          <span>Profile</span>
        </NavLink>

      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">

        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur sm:px-8">

          <div className="flex items-center gap-2.5">
            <HeartHandshake className="h-5 w-5 text-[#16845b]" />
            <span className="text-sm font-semibold text-slate-800">
              Caregiver Workspace
            </span>
          </div>

          <div className="flex items-center gap-3">

            <span className="hidden rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b] sm:inline-flex">
              Verification Required
            </span>

            <Link
              to="/caregiver/notifications"
              className="relative rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-[#16845b] hover:text-[#16845b]"
              aria-label="Caregiver Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#16845b]" />
            </Link>

            <Link
              to="/caregiver/profile"
              className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-[#f6faf7] px-3 py-1.5 sm:flex"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16845b] text-xs font-bold text-white">
                SJ
              </div>
              <span className="text-xs font-semibold text-slate-800">
                Sarah Jenkins
              </span>
            </Link>

          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}
