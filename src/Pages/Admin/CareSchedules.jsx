import { Calendar, CalendarClock, Edit3, Plus, Search, Trash2 } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function CareSchedules() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Scheduling"
        title="Care Schedule Management"
        description="Coordinate daily care routines, assign caregivers to time slots, and track schedule completion."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add Schedule</span>
          </button>
        }
      />

      {/* Search & Filters */}
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by elderly person, caregiver, or care activity..."
            className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
          />
        </div>
        <input
          type="date"
          defaultValue="2026-11-26"
          className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]"
        />
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Statuses</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Scheduled</option>
        </select>
      </div>

      {/* Calendar-style Weekly Layout */}
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#16845b]" />
            <h2 className="text-lg font-bold text-slate-900">Weekly Calendar Overview (Nov 23 – Nov 29, 2026)</h2>
          </div>
          <span className="rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b]">
            18 Active Shifts This Week
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#16845b]/30 bg-[#eaf6ee]/70 p-4">
            <p className="text-xs font-bold uppercase text-[#16845b]">Thu • Nov 26 (Today)</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">08:00 AM – 10:00 AM</p>
                <p className="text-xs text-slate-600">Margaret Miller • Morning Vitals</p>
              </div>
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">11:00 AM – 01:00 PM</p>
                <p className="text-xs text-slate-600">Arthur Thompson • Mobility Walk</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-600">Fri • Nov 27</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">09:00 AM – 11:00 AM</p>
                <p className="text-xs text-slate-600">George Henderson • Physiotherapy</p>
              </div>
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">03:00 PM – 05:00 PM</p>
                <p className="text-xs text-slate-600">Margaret Miller • Medication Check</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-600">Sat • Nov 28</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">08:30 AM – 10:30 AM</p>
                <p className="text-xs text-slate-600">Evelyn Carter • Memory Exercise</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
            <p className="text-xs font-bold uppercase text-slate-600">Sun • Nov 29</p>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white p-2.5 shadow-sm">
                <p className="text-xs font-bold text-slate-900">10:00 AM – 12:00 PM</p>
                <p className="text-xs text-slate-600">Margaret Miller • Meal &amp; Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedules Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-4">Elderly Person</th>
                <th className="px-4 py-4">Assigned Caregiver</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Start Time</th>
                <th className="px-4 py-4">End Time</th>
                <th className="px-4 py-4">Care Activity</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-4 py-4 text-slate-700">Sarah Jenkins, RN</td>
                <td className="px-4 py-4 text-slate-600">Nov 26, 2026</td>
                <td className="px-4 py-4 text-slate-600">08:00 AM</td>
                <td className="px-4 py-4 text-slate-600">10:00 AM</td>
                <td className="px-4 py-4 text-slate-700">Morning Vitals &amp; Medication</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Completed
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Schedule">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete Schedule">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Arthur Thompson</td>
                <td className="px-4 py-4 text-slate-700">Sarah Jenkins, RN</td>
                <td className="px-4 py-4 text-slate-600">Nov 26, 2026</td>
                <td className="px-4 py-4 text-slate-600">11:00 AM</td>
                <td className="px-4 py-4 text-slate-600">01:00 PM</td>
                <td className="px-4 py-4 text-slate-700">Assisted Walk &amp; Lunch Prep</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    Scheduled
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Schedule">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete Schedule">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">George Henderson</td>
                <td className="px-4 py-4 text-slate-700">Daniel Cooper, CNA</td>
                <td className="px-4 py-4 text-slate-600">Nov 27, 2026</td>
                <td className="px-4 py-4 text-slate-600">09:00 AM</td>
                <td className="px-4 py-4 text-slate-600">11:00 AM</td>
                <td className="px-4 py-4 text-slate-700">Physiotherapy &amp; Joint Exercise</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Upcoming
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Schedule">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete Schedule">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Schedule Form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <CalendarClock className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Add / Edit Care Schedule</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Elderly Person</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Margaret Miller</option>
              <option>Arthur Thompson</option>
              <option>George Henderson</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Assigned Caregiver</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Sarah Jenkins, RN</option>
              <option>Daniel Cooper, CNA</option>
              <option>Elena Rostova, LPN</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Date</label>
            <input type="date" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Start Time</label>
            <input type="time" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">End Time</label>
            <input type="time" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Care Activity</label>
            <input type="text" placeholder="e.g., Morning Vitals &amp; Breakfast" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <button type="button" className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]">
              Save Care Schedule
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
