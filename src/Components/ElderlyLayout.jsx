
import {
  AlertTriangle,
  Bell,
  Bot,
  CalendarClock,
  CreditCard,
  FileHeart,
  LayoutDashboard,
  PhoneCall,
  Stethoscope,
  UserCheck,
  UserCircle,
  Users,
  Search
} from 'lucide-react';

import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function ElderlyLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f6faf7] lg:flex">

      <Sidebar
        portalLabel="Elderly & Family Portal"
        userName="Margaret & Robert Miller"
        userSubtext="Shared Family Account • Premium"
      >

        <NavLink
          to="/elderly/dashboard"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/elderly/my-caregiver"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <UserCheck className="h-4 w-4 shrink-0" />
          <span>My Caregiver</span>
        </NavLink>

        {/* Find Caregivers */}
        <NavLink
          to="/elderly/find-caregivers"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Search className="h-4 w-4 shrink-0" />
          <span>Find Caregivers</span>
        </NavLink>

        <NavLink
          to="/elderly/family-members"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Users className="h-4 w-4 shrink-0" />
          <span>Family Members</span>
        </NavLink>

        <NavLink
          to="/elderly/care-schedule"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <CalendarClock className="h-4 w-4 shrink-0" />
          <span>Care Schedule</span>
        </NavLink>

        <NavLink
          to="/elderly/medical-visits"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Stethoscope className="h-4 w-4 shrink-0" />
          <span>Medical Visits</span>
        </NavLink>

        <NavLink
          to="/elderly/emergency-contacts"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-rose-600 transition hover:bg-rose-50 aria-[current=page]:bg-rose-50 aria-[current=page]:font-semibold aria-[current=page]:text-rose-700"
        >
          <PhoneCall className="h-4 w-4 shrink-0" />
          <span>Emergency Contacts</span>
        </NavLink>

        <NavLink
          to="/elderly/health-records"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <FileHeart className="h-4 w-4 shrink-0" />
          <span>Health Records</span>
        </NavLink>

        <NavLink
          to="/elderly/subscription"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <CreditCard className="h-4 w-4 shrink-0" />
          <span>Subscription</span>
        </NavLink>

        <NavLink
          to="/elderly/ai-chatbot"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Bot className="h-4 w-4 shrink-0" />
          <span>AI Care Assistant</span>
        </NavLink>

        <NavLink
          to="/elderly/notifications"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <Bell className="h-4 w-4 shrink-0" />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/elderly/profile"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eaf6ee] hover:text-[#16845b] aria-[current=page]:bg-[#eaf6ee] aria-[current=page]:font-semibold aria-[current=page]:text-[#16845b]"
        >
          <UserCircle className="h-4 w-4 shrink-0" />
          <span>Profile</span>
        </NavLink>

      </Sidebar>

      <div className="flex min-w-0 flex-1 flex-col">

        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur sm:px-8">

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Elderly &amp; Family Shared Dashboard
            </p>

            <p className="text-xs text-slate-500">
              Viewing care records for Margaret Miller (Age 76)
            </p>
          </div>

          <div className="flex items-center gap-3">

            <Link
              to="/elderly/emergency-contacts"
              className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-rose-700"
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Emergency SOS</span>
            </Link>

            <Link
              to="/elderly/notifications"
              className="relative rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-[#16845b] hover:text-[#16845b]"
              aria-label="Family Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#16845b]" />
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
