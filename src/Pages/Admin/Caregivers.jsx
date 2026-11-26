import { CheckCircle2, Edit3, Eye, Mail, Phone, Plus, Search, Trash2, UserPlus } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function Caregivers() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Care Professionals"
        title="Caregiver Management"
        description="Manage verified caregivers, specializations, availability, and assigned elderly individuals."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add Caregiver</span>
          </button>
        }
      />

      {/* Search & Filter */}
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search caregivers by name, specialization, or qualification..."
            className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#16845b] focus:bg-white"
          />
        </div>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Availability</option>
          <option>Available (Full-Time)</option>
          <option>Assigned / Busy</option>
          <option>On Leave</option>
        </select>
      </div>

      {/* Caregiver Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16845b] text-lg font-bold text-white">
                SJ
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Sarah Jenkins, RN</h2>
                <p className="text-xs font-semibold text-[#16845b]">B.Sc Nursing • 8 Years Exp</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified
            </span>
          </div>

          <div className="mt-5 space-y-2 text-xs text-slate-600">
            <p><span className="font-semibold text-slate-800">Specialization:</span> Geriatric &amp; Cardiac Care</p>
            <p><span className="font-semibold text-slate-800">Availability:</span> Mon – Sat, 7:00 AM – 5:00 PM</p>
            <p><span className="font-semibold text-slate-800">Assigned Elderly:</span> Margaret Miller, Arthur Thompson</p>
            <p className="flex items-center gap-1.5 pt-1">
              <Phone className="h-3.5 w-3.5 text-[#16845b]" /> +1 (617) 555-0188
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#16845b]" /> sarah.jenkins@careconnect.health
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#eaf6ee] py-2 text-xs font-semibold text-[#16845b] hover:bg-[#16845b] hover:text-white">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                DC
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Daniel Cooper, CNA</h2>
                <p className="text-xs font-semibold text-[#16845b]">Certified Nursing Asst • 6 Years Exp</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified
            </span>
          </div>

          <div className="mt-5 space-y-2 text-xs text-slate-600">
            <p><span className="font-semibold text-slate-800">Specialization:</span> Mobility &amp; Physical Support</p>
            <p><span className="font-semibold text-slate-800">Availability:</span> Mon – Fri, 8:00 AM – 6:00 PM</p>
            <p><span className="font-semibold text-slate-800">Assigned Elderly:</span> George Henderson</p>
            <p className="flex items-center gap-1.5 pt-1">
              <Phone className="h-3.5 w-3.5 text-[#16845b]" /> +1 (617) 555-0163
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#16845b]" /> daniel.cooper@careconnect.health
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#eaf6ee] py-2 text-xs font-semibold text-[#16845b] hover:bg-[#16845b] hover:text-white">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-lg font-bold text-white">
                ER
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Elena Rostova, LPN</h2>
                <p className="text-xs font-semibold text-[#16845b]">Licensed Practical Nurse • 10 Years</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified
            </span>
          </div>

          <div className="mt-5 space-y-2 text-xs text-slate-600">
            <p><span className="font-semibold text-slate-800">Specialization:</span> Memory &amp; Palliative Care</p>
            <p><span className="font-semibold text-slate-800">Availability:</span> Available Now</p>
            <p><span className="font-semibold text-slate-800">Assigned Elderly:</span> Evelyn Carter</p>
            <p className="flex items-center gap-1.5 pt-1">
              <Phone className="h-3.5 w-3.5 text-[#16845b]" /> +1 (617) 555-0155
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#16845b]" /> elena.rostova@careconnect.health
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#eaf6ee] py-2 text-xs font-semibold text-[#16845b] hover:bg-[#16845b] hover:text-white">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-lg border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Caregiver Form Section */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <UserPlus className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Add / Update Caregiver Profile</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Full Name</label>
            <input type="text" placeholder="Caregiver full name" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Qualification</label>
            <input type="text" placeholder="e.g., RN / CNA / LPN" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Experience</label>
            <input type="text" placeholder="e.g., 5 Years" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Specialization</label>
            <input type="text" placeholder="e.g., Geriatric Care" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Phone</label>
            <input type="tel" placeholder="+1 (617) 555-0100" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Email</label>
            <input type="email" placeholder="caregiver@careconnect.health" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <button type="button" className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]">
              Save Caregiver
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
