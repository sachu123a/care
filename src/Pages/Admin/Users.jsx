import { Edit3, Eye, Plus, Search, Trash2, UserPlus } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function UsersManagement() {
  return (
    <AdminLayout>
      <PageHeader
        badge="User Directory"
        title="Users Management"
        description="View, search, filter, and manage all Elderly & Family, Caregiver, and Admin accounts."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        }
      />

      {/* Search & Filters */}
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by user name, email, or ID..."
            className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#16845b] focus:bg-white"
          />
        </div>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Roles</option>
          <option>Elderly / Family</option>
          <option>Caregiver</option>
          <option>Admin</option>
        </select>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-5 py-4">ID</th>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Registration Date</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-5 py-4 font-semibold text-slate-700">USR-1001</td>
                <td className="px-5 py-4 font-bold text-slate-900">Margaret &amp; David Miller</td>
                <td className="px-5 py-4 text-slate-600">miller.family@email.com</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Elderly / Family
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">Oct 12, 2026</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
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
                <td className="px-5 py-4 font-semibold text-slate-700">USR-1002</td>
                <td className="px-5 py-4 font-bold text-slate-900">Sarah Jenkins, RN</td>
                <td className="px-5 py-4 text-slate-600">sarah.jenkins@careconnect.health</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                    Caregiver
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">Oct 18, 2026</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
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
                <td className="px-5 py-4 font-semibold text-slate-700">USR-1003</td>
                <td className="px-5 py-4 font-bold text-slate-900">Priya Nair, RN</td>
                <td className="px-5 py-4 text-slate-600">priya.nair@careconnect.health</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                    Caregiver
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">Nov 24, 2026</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
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
                <td className="px-5 py-4 font-semibold text-slate-700">USR-1004</td>
                <td className="px-5 py-4 font-bold text-slate-900">Dr. Eleanor Vance</td>
                <td className="px-5 py-4 text-slate-600">admin@careconnect.health</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700">
                    Admin
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">Sep 02, 2026</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
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
                <td className="px-5 py-4 font-semibold text-slate-700">USR-1005</td>
                <td className="px-5 py-4 font-bold text-slate-900">George Henderson</td>
                <td className="px-5 py-4 text-slate-600">henderson.care@email.com</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                    Elderly / Family
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    Inactive
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">Aug 19, 2026</td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
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

      {/* Add / Edit User Form Modal Preview */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <UserPlus className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Add / Edit User Account</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              placeholder="user@careconnect.health"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Role</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Elderly / Family</option>
              <option>Caregiver</option>
              <option>Admin</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Account Status</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Active</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex gap-3 sm:col-span-2 lg:col-span-4">
            <button
              type="button"
              className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#116948]"
            >
              Save User
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
