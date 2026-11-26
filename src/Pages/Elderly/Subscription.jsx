import { CheckCircle2, CreditCard, RefreshCw, Sparkles } from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlySubscription() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Shared Family Subscription"
        title="Subscription & Billing"
        description="Margaret Miller and connected family members share one subscription plan. Review plan benefits, expiry dates, and payment history."
      />

      {/* Current Subscription Details Card */}
      <div className="mb-8 rounded-2xl border border-[#16845b]/30 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
              <CreditCard className="h-7 w-7" />
            </div>
            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                Current Active Plan
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Premium Plan — $99 / month</h2>
              <p className="mt-1 text-sm text-slate-600">
                Shared Account: FAM-1042 • Covers Margaret Miller &amp; 3 Family Members
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#f6faf7] p-4 text-xs sm:grid-cols-3">
            <div>
              <p className="text-slate-500">Expiry Date</p>
              <p className="mt-1 font-bold text-slate-900">Dec 31, 2026</p>
            </div>
            <div>
              <p className="text-slate-500">Renewal Date</p>
              <p className="mt-1 font-bold text-[#16845b]">Jan 01, 2027</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#16845b] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#116948]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Renew Subscription</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Subscription Plans */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Basic Plan */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Basic Plan</h3>
            <p className="mt-1 text-xs text-slate-500">Essential daily scheduling &amp; emergency support</p>
            <p className="mt-5 text-4xl font-extrabold text-slate-900">
              $29<span className="text-sm font-medium text-slate-500">/month</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
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

          <div className="mt-7 space-y-2">
            <button
              type="button"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#16845b] hover:text-[#16845b]"
            >
              Downgrade Plan
            </button>
          </div>
        </div>

        {/* Standard Plan (Recommended) */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-[#16845b] bg-white p-7 shadow-lg">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Standard Plan</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-bold text-[#16845b]">
                <Sparkles className="h-3.5 w-3.5" />
                Recommended
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Dedicated caregiver &amp; AI Care Assistant</p>
            <p className="mt-5 text-4xl font-extrabold text-slate-900">
              $59<span className="text-sm font-medium text-slate-500">/month</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
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
                <span>AI Care Assistant</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Priority notifications</span>
              </li>
            </ul>
          </div>

          <div className="mt-7 space-y-2">
            <button
              type="button"
              className="w-full rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#116948]"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Premium Plan (Current Plan) */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-emerald-300 bg-[#eaf6ee]/40 p-7 shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Premium Plan</h3>
              <span className="rounded-full bg-[#16845b] px-3 py-1 text-xs font-bold text-white">
                Current Plan
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-600">Full priority support &amp; enhanced monitoring</p>
            <p className="mt-5 text-4xl font-extrabold text-slate-900">
              $99<span className="text-sm font-medium text-slate-500">/month</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
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
                <span>Priority assistance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Family notifications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                <span>Enhanced care monitoring</span>
              </li>
            </ul>
          </div>

          <div className="mt-7 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]"
            >
              Renew Plan
            </button>
            <button
              type="button"
              className="rounded-xl border border-[#16845b] bg-white px-4 py-2.5 text-sm font-semibold text-[#16845b]"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="text-lg font-bold text-slate-900">Payment History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-[#f6faf7] text-xs font-bold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-6 py-3.5">Invoice ID</th>
                <th className="px-6 py-3.5">Date</th>
                <th className="px-6 py-3.5">Plan</th>
                <th className="px-6 py-3.5">Amount</th>
                <th className="px-6 py-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-800">INV-2026-11</td>
                <td className="px-6 py-4 text-slate-600">Nov 01, 2026</td>
                <td className="px-6 py-4 font-medium text-slate-800">Premium Plan</td>
                <td className="px-6 py-4 font-bold text-slate-900">$99.00</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-slate-800">INV-2026-10</td>
                <td className="px-6 py-4 text-slate-600">Oct 01, 2026</td>
                <td className="px-6 py-4 font-medium text-slate-800">Premium Plan</td>
                <td className="px-6 py-4 font-bold text-slate-900">$99.00</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ElderlyLayout>
  );
}
