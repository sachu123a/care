import { Ban, CreditCard, Edit3, Eye, HeartHandshake, Plus, Trash2, UserPlus, Users } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function FamilyAccounts() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Shared Accounts"
        title="Family Accounts Management"
        description="Each family account connects one elderly person with their primary and secondary family members under one shared login."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Create Family Account</span>
          </button>
        }
      />

      {/* Family Accounts Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-4">Family ID</th>
                <th className="px-4 py-4">Elderly Person</th>
                <th className="px-4 py-4">Primary Contact</th>
                <th className="px-4 py-4">Members</th>
                <th className="px-4 py-4">Contact Phone</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Plan</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-[#16845b]">FAM-1042</td>
                <td className="px-4 py-4 font-semibold text-slate-900">Margaret Miller</td>
                <td className="px-4 py-4 text-slate-700">David Miller (Son)</td>
                <td className="px-4 py-4 font-semibold text-slate-700">4 Members</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0199</td>
                <td className="px-4 py-4 text-slate-600">miller.family@email.com</td>
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
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View Account">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Account">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Deactivate Account">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-[#16845b]">FAM-1043</td>
                <td className="px-4 py-4 font-semibold text-slate-900">Arthur Thompson</td>
                <td className="px-4 py-4 text-slate-700">Claire Thompson (Daughter)</td>
                <td className="px-4 py-4 font-semibold text-slate-700">3 Members</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0144</td>
                <td className="px-4 py-4 text-slate-600">thompson.home@email.com</td>
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
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View Account">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Account">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Deactivate Account">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-[#16845b]">FAM-1044</td>
                <td className="px-4 py-4 font-semibold text-slate-900">Evelyn Carter</td>
                <td className="px-4 py-4 text-slate-700">Marcus Carter (Nephew)</td>
                <td className="px-4 py-4 font-semibold text-slate-700">2 Members</td>
                <td className="px-4 py-4 text-slate-600">+1 (617) 555-0172</td>
                <td className="px-4 py-4 text-slate-600">carter.family@email.com</td>
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
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="View Account">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Account">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Deactivate Account">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Family Account Inspector + Member Management */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2.5 text-[#16845b]">
            <HeartHandshake className="h-5 w-5" />
            <h2 className="text-base font-bold text-slate-900">Elderly Person Details (FAM-1042)</h2>
          </div>
          <div className="mt-4 space-y-2.5 text-sm">
            <p><span className="font-semibold text-slate-700">Name:</span> Margaret Miller</p>
            <p><span className="font-semibold text-slate-700">Age / Gender:</span> 76 • Female</p>
            <p><span className="font-semibold text-slate-700">Assigned Caregiver:</span> Sarah Jenkins, RN</p>
            <p><span className="font-semibold text-slate-700">Address:</span> 742 Evergreen Terrace, Boston, MA</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button type="button" className="rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]">
              Edit Account Info
            </button>
            <button type="button" className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-100">
              Deactivate Account
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#16845b]">
              <Users className="h-5 w-5" />
              <h2 className="text-base font-bold text-slate-900">Family Members (4)</h2>
            </div>
            <button type="button" className="inline-flex items-center gap-1 rounded-lg bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
              <UserPlus className="h-3.5 w-3.5" />
              <span>Add Member</span>
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-[#f6faf7] p-3">
              <div>
                <p className="text-sm font-bold text-slate-900">David Miller</p>
                <p className="text-xs text-slate-500">Son • Primary Family Contact</p>
              </div>
              <button type="button" className="text-rose-600 hover:text-rose-700" title="Remove Member">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#f6faf7] p-3">
              <div>
                <p className="text-sm font-bold text-slate-900">Rachel Miller</p>
                <p className="text-xs text-slate-500">Daughter • Secondary Contact</p>
              </div>
              <button type="button" className="text-rose-600 hover:text-rose-700" title="Remove Member">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-[#16845b]">
            <CreditCard className="h-5 w-5" />
            <h2 className="text-base font-bold text-slate-900">Subscription Information</h2>
          </div>
          <div className="mt-4 rounded-xl bg-[#eaf6ee] p-4">
            <p className="text-xs font-semibold uppercase text-[#16845b]">Current Plan</p>
            <p className="mt-1 text-xl font-extrabold text-slate-900">Premium Plan ($99/mo)</p>
            <p className="mt-1 text-xs text-slate-600">Start: Jan 01, 2026 • Expires: Dec 31, 2026</p>
            <p className="mt-1 text-xs font-semibold text-emerald-700">Payment Status: Paid</p>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-xl border border-[#16845b] px-4 py-2 text-xs font-semibold text-[#16845b] hover:bg-[#16845b] hover:text-white"
          >
            View Full Subscription History
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
