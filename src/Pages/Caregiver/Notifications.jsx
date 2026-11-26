import { Bell, CalendarClock, Megaphone, Stethoscope, UserPlus } from 'lucide-react';
import CaregiverLayout from '../../Components/CaregiverLayout';
import PageHeader from '../../Components/PageHeader';

export default function CaregiverNotifications() {
  return (
    <CaregiverLayout>
      <PageHeader
        badge="Alerts"
        title="Caregiver Notifications"
        description="Stay informed on new senior assignments, schedule updates, medical visit reminders, and admin announcements."
      />

      <div className="space-y-4">
        <div className="flex items-start gap-4 rounded-2xl border border-[#16845b]/25 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
            <UserPlus className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#16845b]">New Assignment</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Arthur Thompson (Age 81) assigned to your care roster
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Brookline location • Mobility support &amp; weekday afternoon walks • Assigned by Admin
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-amber-700">Schedule Update</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Margaret Miller&apos;s afternoon walk shifted to 2:30 PM – 3:30 PM
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Updated today for November 26, 2026 • Requested by David Miller
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-sky-700">Medical Visit Reminder</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Margaret Miller has a Cardiology Checkup on Nov 28 at 10:30 AM
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Boston Heart Clinic with Dr. Alan Patel • Bring weekly blood pressure log
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-purple-700">Admin Announcement</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Annual Caregiver Safety &amp; Hygiene Refresher Guidelines Published
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Please review the updated winter home-care checklist before Dec 01, 2026.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#eaf6ee]/70 p-4 text-xs text-slate-600">
          <Bell className="h-4 w-4 text-[#16845b]" />
          <span>You are receiving real-time schedule and assignment notifications from CareConnect.</span>
        </div>
      </div>
    </CaregiverLayout>
  );
}
