
import {
  Calendar,
  CheckCircle2,
  Clock,
  Plus,
  Pencil,
  Trash2,
  UserRound,
  ClipboardList
} from 'lucide-react';

import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyCareSchedule() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Daily & Weekly Routine"
        title="Care Schedule"
        description="View your calendar, upcoming caregiver visits, and completed daily care activities."
      />

      {/* Add Schedule Button */}
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-[#16845b] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#116948]"
        >
          <Plus className="h-5 w-5" />
          Add New Schedule
        </button>
      </div>

      {/* Add Schedule Form */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
            <ClipboardList className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Add Care Schedule
            </h2>
            <p className="text-sm text-slate-500">
              Enter the details of the new care activity.
            </p>
          </div>
        </div>

        <form className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Activity Name
            </label>
            <input
              type="text"
              placeholder="Enter activity name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Caregiver Name
            </label>
            <div className="relative">
              <UserRound className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter caregiver name"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Schedule Date
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Schedule Status
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            >
              <option>Upcoming</option>
              <option>Scheduled</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Start Time
            </label>
            <input
              type="time"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              End Time
            </label>
            <input
              type="time"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Activity Description
            </label>
            <textarea
              rows="3"
              placeholder="Enter activity details..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          <div className="flex flex-wrap justify-end gap-3 md:col-span-2">
            <button
              type="reset"
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#116948]"
            >
              <Plus className="h-4 w-4" />
              Save Schedule
            </button>
          </div>
        </form>
      </div>

      {/* Calendar View */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#16845b]" />
            <h2 className="text-lg font-bold text-slate-900">
              Calendar View — November 2026
            </h2>
          </div>

          <span className="w-fit rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b]">
            Caregiver: Sarah Jenkins, RN
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border-2 border-[#16845b] bg-[#eaf6ee]/60 p-4">
            <p className="text-xs font-bold uppercase text-[#16845b]">
              Thu, Nov 26 • Today
            </p>
            <p className="mt-2 text-sm font-bold text-slate-900">
              08:00 AM — Morning Vitals
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              02:30 PM — Mobility Walk
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              06:00 PM — Dinner &amp; Meds
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              Fri, Nov 27
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              08:00 AM — Morning Check
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              03:00 PM — Medication Check
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              Sat, Nov 28
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              09:30 AM — Clinic Escort
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              04:00 PM — Rest &amp; Hydration
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-500">
              Sun, Nov 29
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-800">
              10:00 AM — Meal &amp; Wellness
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Schedules vs Completed Activities */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Upcoming Schedules */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#16845b]" />
            <h2 className="text-lg font-bold text-slate-900">
              Upcoming Schedules
            </h2>
          </div>

          <div className="mt-4 space-y-4">

            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#16845b]">
                  Nov 26, 2026 • 02:30 PM – 03:30 PM
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  Upcoming
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-slate-900">
                Afternoon Mobility Walk &amp; Hydration
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Caregiver: Sarah Jenkins, RN
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#16845b]">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
                <button type="button" className="flex items-center gap-1 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#16845b]">
                  Nov 26, 2026 • 06:00 PM – 07:00 PM
                </span>
                <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  Scheduled
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-slate-900">
                Evening Blood Pressure &amp; Dinner Prep
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Caregiver: Sarah Jenkins, RN
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#16845b]">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
                <button type="button" className="flex items-center gap-1 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#16845b]">
                  Nov 27, 2026 • 03:00 PM – 04:00 PM
                </span>
                <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  Scheduled
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-slate-900">
                Weekly Medication Refill Review
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Caregiver: Sarah Jenkins, RN
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#16845b]">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
                <button type="button" className="flex items-center gap-1 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Completed Activities */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Completed Activities
            </h2>
          </div>

          <div className="mt-4 space-y-4">

            <div className="rounded-2xl border border-emerald-100 bg-[#eaf6ee]/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-700">
                  Nov 26, 2026 • 08:00 AM – 10:00 AM
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Completed
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-slate-900">
                Morning Vitals &amp; Medication
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Caregiver: Sarah Jenkins, RN • BP: 122/78 mmHg
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#16845b]">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
                <button type="button" className="flex items-center gap-1 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-[#eaf6ee]/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-700">
                  Nov 25, 2026 • 04:00 PM – 05:30 PM
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Completed
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-slate-900">
                Light Physiotherapy &amp; Stretching
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Caregiver: Sarah Jenkins, RN • Session completed smoothly
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#16845b]">
                  <Pencil className="h-3.5 w-3.5" /> Edit
                </button>
                <button type="button" className="flex items-center gap-1 rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </ElderlyLayout>
  );
}
