
import {
  Activity,
  AlertCircle,
  Droplet,
  FileText,
  HeartPulse,
  Pill,
  Plus,
  Trash2,
  Calendar,
  UserRound,
  ClipboardList,
} from 'lucide-react';

import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function HealthRecords() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Medical Profile"
        title="Health Records"
        description="Manage medical information, medications, health history, checkups, and doctor notes."
      />

      {/* Medical Summary */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Blood Group</span>
            <Droplet className="h-5 w-5 text-rose-600" />
          </div>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">O+</p>
          <p className="mt-1 text-xs text-slate-500">O Positive • Verified</p>
        </div>

        <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-rose-700">Allergies</span>
            <AlertCircle className="h-5 w-5 text-rose-600" />
          </div>
          <p className="mt-2 text-lg font-bold text-slate-900">Penicillin, Sulfa</p>
          <p className="mt-1 text-xs text-rose-700">Severe reaction — avoid</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Medical Conditions</span>
            <HeartPulse className="h-5 w-5 text-[#16845b]" />
          </div>
          <p className="mt-2 text-base font-bold text-slate-900">Mild Hypertension, Osteoarthritis</p>
          <p className="mt-1 text-xs text-[#16845b]">Managed &amp; Stable</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500">Latest Vitals</span>
            <Activity className="h-5 w-5 text-[#16845b]" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">122 / 78</p>
          <p className="mt-1 text-xs text-slate-500">BP mmHg • Heart Rate 72 bpm</p>
        </div>
      </div>

      {/* Add Health Record Form */}
      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-[#eaf6ee] p-3">
            <Plus className="h-5 w-5 text-[#16845b]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Add Health Record</h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter new medical information below.
            </p>
          </div>
        </div>

        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Record Type
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#16845b]">
                <option>Select record type</option>
                <option>Medication</option>
                <option>Medical Condition</option>
                <option>Allergy</option>
                <option>Health Checkup</option>
                <option>Doctor Note</option>
                <option>Blood Test</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Record Title
              </label>
              <input
                type="text"
                placeholder="Enter record name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Date
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Doctor / Hospital
              </label>
              <input
                type="text"
                placeholder="Enter doctor or hospital name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Medication / Dosage (if applicable)
              </label>
              <input
                type="text"
                placeholder="Example: Amlodipine 5 mg"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#16845b]">
                <option>Select status</option>
                <option>Active</option>
                <option>Completed</option>
                <option>Discontinued</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description / Medical Notes
            </label>
            <textarea
              rows="4"
              placeholder="Enter additional medical details..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            ></textarea>
          </div>

          <div className="flex flex-wrap justify-end gap-3">
            <button
              type="reset"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#116b49]"
            >
              <Plus size={17} />
              Add Record
            </button>
          </div>
        </form>
      </div>

      {/* Current Medications */}
      <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-[#16845b]" />
            <h2 className="text-lg font-bold text-slate-900">Current Medications</h2>
          </div>
          <span className="rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-bold text-[#16845b]">
            3 Medications
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-6 py-3.5">Medication Name</th>
                <th className="px-6 py-3.5">Dosage</th>
                <th className="px-6 py-3.5">Timing</th>
                <th className="px-6 py-3.5">Prescribed For</th>
                <th className="px-6 py-3.5">Doctor</th>
                <th className="px-6 py-3.5">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Amlodipine</td>
                <td className="px-6 py-4 text-slate-700">5 mg Tablet</td>
                <td className="px-6 py-4 font-semibold text-[#16845b]">Once daily (8:00 AM)</td>
                <td className="px-6 py-4 text-slate-600">Blood Pressure Control</td>
                <td className="px-6 py-4 text-slate-600">Dr. Alan Patel</td>
                <td className="px-6 py-4">
                  <button type="button" className="rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete Amlodipine">
                    <Trash2 size={17} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Vitamin D3 + Calcium</td>
                <td className="px-6 py-4 text-slate-700">1000 IU / 500 mg</td>
                <td className="px-6 py-4 font-semibold text-[#16845b]">After Lunch (1:00 PM)</td>
                <td className="px-6 py-4 text-slate-600">Bone &amp; Joint Strength</td>
                <td className="px-6 py-4 text-slate-600">Dr. Emily Ross</td>
                <td className="px-6 py-4">
                  <button type="button" className="rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete Vitamin D3 and Calcium">
                    <Trash2 size={17} />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Atorvastatin</td>
                <td className="px-6 py-4 text-slate-700">10 mg Tablet</td>
                <td className="px-6 py-4 font-semibold text-[#16845b]">Bedtime (9:00 PM)</td>
                <td className="px-6 py-4 text-slate-600">Cholesterol Maintenance</td>
                <td className="px-6 py-4 text-slate-600">Dr. Alan Patel</td>
                <td className="px-6 py-4">
                  <button type="button" className="rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete Atorvastatin">
                    <Trash2 size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Medical History */}
      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Medical History &amp; Checkups</h2>
            </div>
            <button type="button" className="rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete medical history">
              <Trash2 size={17} />
            </button>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <div className="flex flex-wrap justify-between gap-2 text-xs font-bold text-[#16845b]">
                <span>Nov 04, 2026</span>
                <span>Beacon Medical Center</span>
              </div>
              <p className="mt-1 font-bold text-slate-900">Annual Wellness &amp; Flu Vaccination</p>
              <p className="mt-1 text-xs text-slate-600">
                BP: 122/78 • Glucose (Fasting): 96 mg/dL • Weight stable at 142 lbs.
              </p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4">
              <div className="flex flex-wrap justify-between gap-2 text-xs font-bold text-[#16845b]">
                <span>Oct 12, 2026</span>
                <span>Boston Heart Clinic</span>
              </div>
              <p className="mt-1 font-bold text-slate-900">ECG &amp; Cardiac Review</p>
              <p className="mt-1 text-xs text-slate-600">
                Normal sinus rhythm. Continue current dosage of Amlodipine 5 mg.
              </p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4">
              <div className="flex flex-wrap justify-between gap-2 text-xs font-bold text-slate-500">
                <span>2019</span>
                <span>Past Surgical History</span>
              </div>
              <p className="mt-1 font-bold text-slate-900">Right Knee Arthroscopy</p>
              <p className="mt-1 text-xs text-slate-600">Full recovery; occasional mild winter stiffness.</p>
            </div>
          </div>
        </div>

        {/* Doctor Notes */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Doctor Notes</h2>
            </div>
            <button type="button" className="rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label="Delete doctor notes">
              <Trash2 size={17} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#16845b]/20 bg-[#eaf6ee]/60 p-4">
              <p className="text-xs font-bold text-[#16845b]">Dr. Emily Ross • Nov 04, 2026</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                "Margaret is responding very well to daily 20-minute guided walks and low-sodium home meals. Keep hydration consistent throughout the afternoon."
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
              <p className="text-xs font-bold text-slate-600">Dr. Alan Patel • Oct 12, 2026</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                "Blood pressure readings logged by caregiver Sarah Jenkins show steady improvement. Next follow-up ECG scheduled for November 28."
              </p>
            </div>
          </div>
        </div>
      </div>
    </ElderlyLayout>
  );
}
