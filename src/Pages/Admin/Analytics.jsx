import { BarChart3, CreditCard, DollarSign, HeartHandshake, Home, TrendingUp, UserCog, Users } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';
import StatCard from '../../Components/StatCard';

export default function Analytics() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Insights & Reports"
        title="Platform Analytics"
        description="Comprehensive insights on user growth, elderly demographics, caregiver capacity, family accounts, and subscription revenue."
      />

      {/* Core Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,480"
          subtitle="+18.2% vs last quarter"
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Elderly People"
          value="620"
          subtitle="Avg Age: 77.4 years"
          icon={<HeartHandshake className="h-6 w-6" />}
        />
        <StatCard
          title="Active Caregivers"
          value="214"
          subtitle="96% satisfaction score"
          icon={<UserCog className="h-6 w-6" />}
        />
        <StatCard
          title="Family Accounts"
          value="620"
          subtitle="Avg 3.2 members per account"
          icon={<Home className="h-6 w-6" />}
        />
      </div>

      {/* Revenue Overview & Subscription Distribution */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Revenue Overview</h2>
              <p className="text-xs text-slate-500">Annualized run rate &amp; monthly collections</p>
            </div>
            <DollarSign className="h-6 w-6 text-[#16845b]" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#eaf6ee] p-4">
              <p className="text-xs font-semibold text-[#16845b]">Monthly Revenue</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">$38,420</p>
              <p className="mt-1 text-xs text-slate-600">+9.0% month-over-month</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold text-slate-600">Projected Annual</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">$461,040</p>
              <p className="mt-1 text-xs text-slate-500">Based on 584 active plans</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Monthly Subscription Trends</p>
            <div className="grid grid-cols-6 items-end gap-3 pt-2">
              <div className="text-center">
                <div className="mx-auto h-16 w-8 rounded-t-lg bg-[#16845b]/50" />
                <p className="mt-1.5 text-[11px] font-medium text-slate-500">Jun</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-8 rounded-t-lg bg-[#16845b]/65" />
                <p className="mt-1.5 text-[11px] font-medium text-slate-500">Jul</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-24 w-8 rounded-t-lg bg-[#16845b]/75" />
                <p className="mt-1.5 text-[11px] font-medium text-slate-500">Aug</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-28 w-8 rounded-t-lg bg-[#16845b]/85" />
                <p className="mt-1.5 text-[11px] font-medium text-slate-500">Sep</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-32 w-8 rounded-t-lg bg-[#16845b]/95" />
                <p className="mt-1.5 text-[11px] font-medium text-slate-500">Oct</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-36 w-8 rounded-t-lg bg-[#16845b]" />
                <p className="mt-1.5 text-[11px] font-bold text-[#16845b]">Nov</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Distribution & User Growth */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Subscription Distribution</h2>
              <p className="text-xs text-slate-500">Breakdown across 584 active family subscriptions</p>
            </div>
            <CreditCard className="h-6 w-6 text-[#16845b]" />
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-800">Standard Plan ($59/mo)</span>
                <span className="text-[#16845b]">286 Families (49%)</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
                <div className="h-3 w-[49%] rounded-full bg-[#16845b]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-800">Premium Plan ($99/mo)</span>
                <span className="text-emerald-600">156 Families (27%)</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
                <div className="h-3 w-[27%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-slate-800">Basic Plan ($29/mo)</span>
                <span className="text-slate-600">142 Families (24%)</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-slate-100">
                <div className="h-3 w-[24%] rounded-full bg-slate-400" />
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-[#f6faf7] p-3.5">
              <TrendingUp className="h-5 w-5 text-[#16845b]" />
              <div>
                <p className="text-xs text-slate-500">Caregiver Ratio</p>
                <p className="text-sm font-bold text-slate-900">1 : 2.9 Seniors</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#f6faf7] p-3.5">
              <BarChart3 className="h-5 w-5 text-[#16845b]" />
              <div>
                <p className="text-xs text-slate-500">Schedule Completion</p>
                <p className="text-sm font-bold text-slate-900">97.4% On-Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
