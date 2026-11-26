import {
  ArrowRight,
  Bell,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CaregiverLayout from '../../Components/CaregiverLayout';
import PageHeader from '../../Components/PageHeader';
import StatCard from '../../Components/StatCard';

export default function CaregiverDashboard() {
  return (
    <CaregiverLayout>
      <PageHeader
        badge="Caregiver Workspace"
        title="Welcome Back, Sarah Jenkins, RN"
        description="Review your assigned elderly individuals, today's care visits, upcoming medical escorts, and latest alerts."
        action={
          <Link
            to="/caregiver/care-schedule"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <CalendarClock className="h-4 w-4" />
            <span>View Full Schedule</span>
          </Link>
        }
      />

      {/* Statistics Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Assigned Elderly People"
          value="4"
          subtitle="All active care plans"
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Today's Visits"
          value="3"
          subtitle="1 completed • 2 remaining"
          icon={<Clock className="h-6 w-6" />}
        />
        <StatCard
          title="Upcoming Schedules"
          value="7"
          subtitle="Next 5 days planned"
          icon={<CalendarClock className="h-6 w-6" />}
        />
        <StatCard
          title="Completed Activities"
          value="24"
          subtitle="This week • 100% on time"
          icon={<ClipboardCheck className="h-6 w-6" />}
        />
      </div>

      {/* Today's Care Schedule & Assigned Elderly People */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Today&apos;s Care Schedule</h2>
            <Link
              to="/caregiver/care-schedule"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
            >
              <span>All Schedules</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-[#eaf6ee]/70 p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Margaret Miller — Morning Vitals</p>
                <p className="text-xs text-slate-600">08:00 AM – 10:00 AM • 742 Evergreen Terrace</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Arthur Thompson — Assisted Walk</p>
                <p className="text-xs text-slate-600">11:00 AM – 01:00 PM • 118 Beacon St</p>
              </div>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                Up Next
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Margaret Miller — Mobility &amp; Hydration</p>
                <p className="text-xs text-slate-600">02:30 PM – 03:30 PM • 742 Evergreen Terrace</p>
              </div>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
                Scheduled
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Assigned Elderly People</h2>
            <Link
              to="/caregiver/my-elderly-people"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
            >
              <span>View Profiles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16845b] text-sm font-bold text-white">
                  MM
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Margaret Miller (Age 76)</p>
                  <p className="text-xs text-slate-500">Hypertension • Family: David Miller</p>
                </div>
              </div>
              <Link
                to="/caregiver/my-elderly-people"
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm"
              >
                Details
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-sm font-bold text-white">
                  AT
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Arthur Thompson (Age 81)</p>
                  <p className="text-xs text-slate-500">Mobility Support • Family: Claire Thompson</p>
                </div>
              </div>
              <Link
                to="/caregiver/my-elderly-people"
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Medical Visits & Recent Notifications */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Upcoming Medical Visits</h2>
            </div>
            <Link to="/caregiver/medical-visits" className="text-xs font-semibold text-[#16845b] hover:underline">
              View All
            </Link>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="font-bold text-slate-900">Margaret Miller — Dr. Alan Patel</p>
              <p className="text-xs text-slate-600">Boston Heart Clinic • Nov 28, 2026 at 10:30 AM</p>
              <p className="mt-1 text-xs font-medium text-[#16845b]">Routine Cardiology Checkup</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="font-bold text-slate-900">Arthur Thompson — Dr. Marcus Bell</p>
              <p className="text-xs text-slate-600">Brookline Senior Care Clinic • Dec 02, 2026 at 11:15 AM</p>
              <p className="mt-1 text-xs font-medium text-[#16845b]">Physiotherapy Progress Review</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Recent Notifications</h2>
            </div>
            <Link to="/caregiver/notifications" className="text-xs font-semibold text-[#16845b] hover:underline">
              Inbox
            </Link>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="rounded-xl bg-[#eaf6ee]/70 p-3.5">
              <p className="font-bold text-slate-900">Schedule Update Confirmed</p>
              <p className="mt-0.5 text-slate-600">
                Afternoon visit for Margaret Miller updated to 2:30 PM – 3:30 PM today.
              </p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-3.5">
              <p className="font-bold text-slate-900">New Senior Assignment</p>
              <p className="mt-0.5 text-slate-600">
                Admin assigned Arthur Thompson (Brookline) to your Tuesday/Thursday rotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaregiverLayout>
  );
}
