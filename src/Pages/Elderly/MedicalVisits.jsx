
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Stethoscope,
  Plus,
  ClipboardList,
  UserRound
} from 'lucide-react';

import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyMedicalVisits() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Doctor Appointments"
        title="Medical Visits"
        description="Track upcoming and completed doctor consultations, hospital locations, and visit notes."
      />

      {/* Add Medical Visit Form */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
            <ClipboardList className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Add Medical Visit
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter the doctor appointment details below.
            </p>
          </div>
        </div>

        <form className="grid gap-5 md:grid-cols-2">

          {/* Doctor Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Doctor Name
            </label>
            <div className="relative">
              <UserRound className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter doctor name"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          {/* Specialization */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Specialization
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Cardiologist"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          {/* Hospital Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Hospital / Clinic Name
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter hospital or clinic name"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Appointment Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="date"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          {/* Appointment Time */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Appointment Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="time"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>
          </div>

          {/* Visit Status */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Visit Status
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            >
              <option>Upcoming</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          {/* Visit Purpose */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Visit Purpose
            </label>
            <input
              type="text"
              placeholder="e.g. Routine checkup, ECG, Blood test"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          {/* Visit Notes */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Visit Notes
            </label>
            <textarea
              rows="3"
              placeholder="Enter additional appointment notes..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-3 md:col-span-2">
            <button
              type="reset"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Clear
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <Plus className="h-4 w-4" />
              Save Medical Visit
            </button>
          </div>

        </form>
      </section>

      {/* Completed Medical Visits */}
      <section className="mt-8 space-y-4">

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-slate-900">
            Completed Medical Visits
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">

            <table className="w-full text-left text-sm">

              <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-5 py-4">Doctor Name</th>
                  <th className="px-5 py-4">Hospital</th>
                  <th className="px-5 py-4">Appointment Date</th>
                  <th className="px-5 py-4">Time</th>
                  <th className="px-5 py-4">Purpose</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                <tr className="hover:bg-[#f6faf7]/70">
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Dr. Emily Ross
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Beacon Medical Center
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Nov 04, 2026
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    09:30 AM
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Annual Flu Vaccine &amp; Vitals
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-[#f6faf7]/70">
                  <td className="px-5 py-4 font-bold text-slate-900">
                    Dr. Alan Patel
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Boston Heart Clinic
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    Oct 12, 2026
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    11:00 AM
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Blood Pressure Medication Adjustment
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </div>
      </section>

    </ElderlyLayout>
  );
}
