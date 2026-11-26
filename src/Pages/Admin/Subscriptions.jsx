import { Ban, CheckCircle2, Clock, CreditCard, Edit3, Eye, Search, XCircle } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function Subscriptions() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Billing & Monitoring"
        title="Subscription Monitoring"
        description="Monitor every family account's active, expired, pending, and cancelled care subscriptions."
      />

      {/* Category Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-emerald-700">
            <span className="text-xs font-bold uppercase">Active Subscriptions</span>
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">584</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-amber-700">
            <span className="text-xs font-bold uppercase">Pending Payments</span>
            <Clock className="h-5 w-5" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">14</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-bold uppercase">Expired Subscriptions</span>
            <CreditCard className="h-5 w-5" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">22</p>
        </div>
        <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-rose-600">
            <span className="text-xs font-bold uppercase">Cancelled Subscriptions</span>
            <XCircle className="h-5 w-5" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">8</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by elderly person, family account ID, or contact..."
            className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
          />
        </div>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Plans</option>
          <option>Basic ($29)</option>
          <option>Standard ($59)</option>
          <option>Premium ($99)</option>
        </select>
        <select className="rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-[#16845b]">
          <option>All Payment Statuses</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
          <option>Refunded</option>
        </select>
      </div>

      {/* Section: Active & Monitored Subscriptions Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-4">
          <h2 className="text-base font-bold text-slate-900">All Family Subscriptions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-4 py-4">Elderly Person</th>
                <th className="px-4 py-4">Family Account</th>
                <th className="px-4 py-4">Family Contact</th>
                <th className="px-4 py-4">Plan</th>
                <th className="px-4 py-4">Amount</th>
                <th className="px-4 py-4">Start Date</th>
                <th className="px-4 py-4">Expiry Date</th>
                <th className="px-4 py-4">Payment</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Margaret Miller</td>
                <td className="px-4 py-4 font-semibold text-[#16845b]">FAM-1042</td>
                <td className="px-4 py-4 text-slate-600">David Miller</td>
                <td className="px-4 py-4 font-medium text-slate-800">Premium Plan</td>
                <td className="px-4 py-4 font-bold text-slate-900">$99/mo</td>
                <td className="px-4 py-4 text-slate-600">Jan 01, 2026</td>
                <td className="px-4 py-4 text-slate-600">Dec 31, 2026</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Paid</span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">Active</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="View Subscription">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="Edit Subscription">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Cancel Subscription">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Arthur Thompson</td>
                <td className="px-4 py-4 font-semibold text-[#16845b]">FAM-1043</td>
                <td className="px-4 py-4 text-slate-600">Claire Thompson</td>
                <td className="px-4 py-4 font-medium text-slate-800">Standard Plan</td>
                <td className="px-4 py-4 font-bold text-slate-900">$59/mo</td>
                <td className="px-4 py-4 text-slate-600">Mar 15, 2026</td>
                <td className="px-4 py-4 text-slate-600">Dec 15, 2026</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">Pending</span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">Active</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="View Subscription">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="Edit Subscription">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Cancel Subscription">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Helen Brooks</td>
                <td className="px-4 py-4 font-semibold text-[#16845b]">FAM-1019</td>
                <td className="px-4 py-4 text-slate-600">Samuel Brooks</td>
                <td className="px-4 py-4 font-medium text-slate-800">Basic Plan</td>
                <td className="px-4 py-4 font-bold text-slate-900">$29/mo</td>
                <td className="px-4 py-4 text-slate-600">Oct 01, 2025</td>
                <td className="px-4 py-4 text-slate-600">Oct 31, 2026</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">Overdue</span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700">Expired</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="View Subscription">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="Edit Subscription">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Cancel Subscription">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-[#f6faf7]/70">
                <td className="px-4 py-4 font-bold text-slate-900">Walter Hayes</td>
                <td className="px-4 py-4 font-semibold text-[#16845b]">FAM-1008</td>
                <td className="px-4 py-4 text-slate-600">Nina Hayes</td>
                <td className="px-4 py-4 font-medium text-slate-800">Standard Plan</td>
                <td className="px-4 py-4 font-bold text-slate-900">$59/mo</td>
                <td className="px-4 py-4 text-slate-600">Feb 10, 2026</td>
                <td className="px-4 py-4 text-slate-600">Sep 10, 2026</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Closed</span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">Cancelled</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-1">
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="View Subscription">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-slate-600 hover:text-[#16845b]" title="Edit Subscription">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button type="button" className="rounded-lg border border-slate-200 p-1.5 text-rose-600 hover:bg-rose-50" title="Cancel Subscription">
                      <Ban className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grouped Status Overview Sections */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Pending Payments Queue</h3>
          <p className="mt-1 text-xs text-slate-500">Families with upcoming invoice due dates</p>
          <div className="mt-4 space-y-2.5 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3">
              <span className="font-semibold text-slate-800">FAM-1043 • Arthur Thompson (Standard)</span>
              <span className="font-bold text-amber-800">$59 Due Dec 01</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3">
              <span className="font-semibold text-slate-800">FAM-1051 • Evelyn Carter (Basic)</span>
              <span className="font-bold text-amber-800">$29 Due Dec 03</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Expired &amp; Cancelled Summary</h3>
          <p className="mt-1 text-xs text-slate-500">Accounts requiring renewal follow-up</p>
          <div className="mt-4 space-y-2.5 text-xs">
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
              <span className="font-semibold text-slate-800">FAM-1019 • Helen Brooks (Expired)</span>
              <span className="font-bold text-slate-600">Ended Oct 31</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-rose-50 p-3">
              <span className="font-semibold text-slate-800">FAM-1008 • Walter Hayes (Cancelled)</span>
              <span className="font-bold text-rose-700">Ended Sep 10</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
