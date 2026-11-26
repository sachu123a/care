import { Edit3, Eye, Plus, Search, Trash2, UserPlus } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyPeople() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Care Recipients"
        title="Elderly People Management"
        description="View and manage senior member profiles, family contacts, assigned caregivers, and subscription plans."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add Elderly Person</span>
          </button>
        }
      />

      {/* Search & Filters */}
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by elderly person name, family contact, or caregiver..."
            className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#16845b] focus:bg-white"
          />
        </div>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Plans</option>
          <option>Premium</option>
          <option>Standard</option>
          <option>Basic</option>
        </select>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Statuses</option>
          <option>Active Care</option>
          <option>Paused</option>
        </select>
      </div>

      {/* Elderly People Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Age / Gender</th>
                <th className="px-4 py-4">Phone</th>
                <th className="px-4 py-4">Address</th>
                <th className="px-4 py-4">Family Contact</th>
                <th className="px-4 py-4">Assigned Caregiver</th>
                <th className="px-4 py-4">Plan</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-4 py-4 text-slate-600">76 • Female</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0142</td>
                <td className="px-4 py-4 text-slate-600">742 Evergreen Terrace, Boston</td>
                <td className="px-4 py-4 text-slate-700">David Miller (Son)</td>
                <td className="px-4 py-4 font-medium text-[#16845b]">Sarah Jenkins, RN</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Premium
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Arthur Thompson</td>
                <td className="px-4 py-4 text-slate-600">81 • Male</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0131</td>
                <td className="px-4 py-4 text-slate-600">118 Beacon St, Brookline</td>
                <td className="px-4 py-4 text-slate-700">Claire Thompson (Daughter)</td>
                <td className="px-4 py-4 font-medium text-[#16845b]">Sarah Jenkins, RN</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Standard
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">George Henderson</td>
                <td className="px-4 py-4 text-slate-600">79 • Male</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0177</td>
                <td className="px-4 py-4 text-slate-600">89 Commonwealth Ave, Boston</td>
                <td className="px-4 py-4 text-slate-700">Laura Henderson (Wife)</td>
                <td className="px-4 py-4 font-medium text-[#16845b]">Daniel Cooper, CNA</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    Basic
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1.5">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Elderly Person Form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <UserPlus className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Add / Edit Elderly Person</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Full Name</label>
            <input type="text" placeholder="Senior full name" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Age</label>
            <input type="number" placeholder="75" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Gender</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Assign Caregiver</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Sarah Jenkins, RN</option>
              <option>Daniel Cooper, CNA</option>
              <option>Elena Rostova, LPN</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <button type="button" className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]">
              Save Elderly Profile
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
