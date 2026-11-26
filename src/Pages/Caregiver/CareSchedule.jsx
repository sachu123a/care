import { CalendarClock, CheckCircle2, Clock } from 'lucide-react';
import CaregiverLayout from '../../Components/CaregiverLayout';
import PageHeader from '../../Components/PageHeader';

export default function CaregiverCareSchedule() {
  return (
    <CaregiverLayout>
      <PageHeader
        badge="Shift Planner"
        title="Care Schedule"
        description="Your daily and upcoming care visits for assigned elderly individuals."
      />

      {/* Highlighted Today Cards */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-[#eaf6ee] p-5">
          <div className="flex items-center justify-between text-xs font-bold text-[#16845b]">
            <span>08:00 AM – 10:00 AM</span>
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <h2 className="mt-2 text-base font-bold text-slate-900">Margaret Miller</h2>
          <p className="mt-1 text-xs text-slate-700">Morning Vitals &amp; Medication</p>
          <span className="mt-3 inline-block rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            Completed
          </span>
        </div>

        <div className="rounded-2xl border-2 border-[#16845b] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold text-amber-700">
            <span>11:00 AM – 01:00 PM</span>
            <Clock className="h-4 w-4" />
          </div>
          <h2 className="mt-2 text-base font-bold text-slate-900">Arthur Thompson</h2>
          <p className="mt-1 text-xs text-slate-600">Assisted Walk &amp; Lunch Preparation</p>
          <span className="mt-3 inline-block rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
            Up Next
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600">
            <span>02:30 PM – 03:30 PM</span>
            <CalendarClock className="h-4 w-4 text-[#16845b]" />
          </div>
          <h2 className="mt-2 text-base font-bold text-slate-900">Margaret Miller</h2>
          <p className="mt-1 text-xs text-slate-600">Afternoon Mobility Walk &amp; Hydration</p>
          <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700">
            Scheduled
          </span>
        </div>
      </div>

      {/* Full Schedule Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-bold text-slate-900">Complete Weekly Care Schedule</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-6 py-4">Elderly Person</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Activity</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-6 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-6 py-4 text-slate-600">Nov 26, 2026</td>
                <td className="px-6 py-4 text-slate-600">08:00 AM – 10:00 AM</td>
                <td className="px-6 py-4 text-slate-700">Morning Vitals &amp; Medication</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-6 py-4 font-bold text-slate-900">Arthur Thompson</td>
                <td className="px-6 py-4 text-slate-600">Nov 26, 2026</td>
                <td className="px-6 py-4 text-slate-600">11:00 AM – 01:00 PM</td>
                <td className="px-6 py-4 text-slate-700">Assisted Walk &amp; Lunch Preparation</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    Up Next
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-6 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-6 py-4 text-slate-600">Nov 26, 2026</td>
                <td className="px-6 py-4 text-slate-600">02:30 PM – 03:30 PM</td>
                <td className="px-6 py-4 text-slate-700">Afternoon Mobility Walk &amp; Hydration</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    Scheduled
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-6 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-6 py-4 text-slate-600">Nov 27, 2026</td>
                <td className="px-6 py-4 text-slate-600">03:00 PM – 04:00 PM</td>
                <td className="px-6 py-4 text-slate-700">Weekly Medication Refill Review</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Upcoming
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CaregiverLayout>
  );
}
