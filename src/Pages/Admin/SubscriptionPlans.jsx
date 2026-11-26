import { CheckCircle2, Edit3, Layers, Plus, Power, Trash2 } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function SubscriptionPlans() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Plan Configuration"
        title="Subscription Plans Management"
        description="Configure subscription tiers, pricing, billing duration, included care features, and plan activation status."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Plan</span>
          </button>
        }
      />

      {/* Plan Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Basic Plan</h2>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Active
              </span>
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900">
              $29 <span className="text-sm font-medium text-slate-500">/ Monthly</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Daily care schedule</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Basic caregiver support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Medical visit reminders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Emergency contact management</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]">
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Plan</span>
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
              <Power className="h-3.5 w-3.5" />
              <span>Deactivate</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete Plan">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border-2 border-[#16845b] bg-white p-6 shadow-md">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Standard Plan</h2>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Active • Popular
              </span>
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900">
              $59 <span className="text-sm font-medium text-slate-500">/ Monthly</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Dedicated caregiver assignment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Health record management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>AI Care Assistant &amp; priority alerts</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]">
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Plan</span>
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
              <Power className="h-3.5 w-3.5" />
              <span>Deactivate</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete Plan">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Premium Plan</h2>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Active
              </span>
            </div>
            <p className="mt-3 text-3xl font-extrabold text-slate-900">
              $99 <span className="text-sm font-medium text-slate-500">/ Monthly</span>
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Everything in Standard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Advanced caregiver support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Priority assistance &amp; family alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Enhanced care monitoring</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]">
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Plan</span>
            </button>
            <button type="button" className="inline-flex items-center justify-center gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
              <Power className="h-3.5 w-3.5" />
              <span>Deactivate</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Delete Plan">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Plan Form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <Layers className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Create or Modify Subscription Plan</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Plan Name</label>
            <input type="text" placeholder="e.g., Standard Plan" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Price ($)</label>
            <input type="number" placeholder="59" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Duration</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Monthly (30 Days)</option>
              <option>Quarterly (90 Days)</option>
              <option>Annual (365 Days)</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Status</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <label className="mb-1 block text-xs font-semibold text-slate-700">Plan Features (comma or line separated)</label>
            <textarea
              rows="3"
              placeholder="Dedicated caregiver assignment, Health record management, AI Care Assistant, Priority notifications"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]"
            />
          </div>
          <div className="flex gap-3 sm:col-span-2 lg:col-span-4">
            <button type="button" className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]">
              Save Plan Changes
            </button>
            <button type="button" className="rounded-xl border border-emerald-200 bg-[#eaf6ee] px-5 py-2.5 text-sm font-semibold text-[#16845b]">
              Activate Plan
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
