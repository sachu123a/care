import {
  Activity,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  DollarSign,
  HeartHandshake,
  Stethoscope,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';
import StatCard from '../../Components/StatCard';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Overview"
        title="Admin Dashboard"
        description="Monitor platform users, caregiver approvals, care schedules, subscriptions, and monthly revenue."
        action={
          <Link
            to="/admin/caregiver-approvals"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <UserCheck className="h-4 w-4" />
            <span>Review 4 Approvals</span>
          </Link>
        }
      />

      {/* Top 6 Statistics Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Users"
          value="1,480"
          subtitle="+12.4% from last month"
          badge="Active Platform"
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Total Elderly People"
          value="620"
          subtitle="592 paired with caregivers"
          badge="95.5% Coverage"
          icon={<HeartHandshake className="h-6 w-6" />}
        />
        <StatCard
          title="Total Caregivers"
          value="214"
          subtitle="198 active • 16 on leave"
          badge="Verified Staff"
          icon={<UserCog className="h-6 w-6" />}
        />
        <StatCard
          title="Pending Caregiver Approvals"
          value="4"
          subtitle="Certificates awaiting review"
          badge="Action Required"
          icon={<UserCheck className="h-6 w-6" />}
        />
        <StatCard
          title="Active Subscriptions"
          value="584"
          subtitle="Basic: 142 • Standard: 286 • Premium: 156"
          badge="94% Renewal Rate"
          icon={<CreditCard className="h-6 w-6" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$38,420"
          subtitle="Up $3,180 vs prior month"
          badge="+9.0% Growth"
          icon={<DollarSign className="h-6 w-6" />}
        />
      </div>

      {/* Charts & Revenue Overview */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* User Growth Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">User Growth Overview</h2>
              <p className="text-xs text-slate-500">New Elderly &amp; Family and Caregiver registrations (2026)</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b]">
              <TrendingUp className="h-3.5 w-3.5" />
              +18.2% YoY
            </span>
          </div>

          <div className="mt-6 grid h-52 grid-cols-6 items-end gap-3 border-b border-slate-100 pb-3 sm:gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">180</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#eaf6ee] pt-6">
                <div className="h-20 rounded-t-xl bg-[#16845b]/70" />
              </div>
              <span className="text-xs font-medium text-slate-500">Jun</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">215</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#eaf6ee] pt-4">
                <div className="h-24 rounded-t-xl bg-[#16845b]/80" />
              </div>
              <span className="text-xs font-medium text-slate-500">Jul</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">240</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#eaf6ee] pt-3">
                <div className="h-28 rounded-t-xl bg-[#16845b]/85" />
              </div>
              <span className="text-xs font-medium text-slate-500">Aug</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">275</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#eaf6ee] pt-2">
                <div className="h-32 rounded-t-xl bg-[#16845b]/90" />
              </div>
              <span className="text-xs font-medium text-slate-500">Sep</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">310</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#eaf6ee] pt-1">
                <div className="h-36 rounded-t-xl bg-[#16845b]" />
              </div>
              <span className="text-xs font-medium text-slate-500">Oct</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-[#16845b]">348</span>
              <div className="w-full max-w-[44px] rounded-t-xl bg-[#16845b] shadow-sm">
                <div className="h-40 rounded-t-xl bg-[#16845b]" />
              </div>
              <span className="text-xs font-bold text-slate-900">Nov</span>
            </div>
          </div>
        </div>

        {/* Subscription Statistics & Revenue Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Subscription Statistics</h2>
          <p className="text-xs text-slate-500">Plan distribution &amp; monthly revenue</p>

          <div className="mt-5 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Standard Plan ($59/mo)</span>
                <span className="text-[#16845b]">286 (49%)</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full rounded-full bg-slate-100">
                <div className="h-2.5 w-[49%] rounded-full bg-[#16845b]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Premium Plan ($99/mo)</span>
                <span className="text-[#16845b]">156 (27%)</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full rounded-full bg-slate-100">
                <div className="h-2.5 w-[27%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Basic Plan ($29/mo)</span>
                <span className="text-slate-700">142 (24%)</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full rounded-full bg-slate-100">
                <div className="h-2.5 w-[24%] rounded-full bg-slate-400" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-[#eaf6ee] p-4">
            <p className="text-xs font-semibold text-[#16845b]">Monthly Revenue Overview</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-900">$38,420</p>
            <p className="mt-1 text-xs text-slate-600">
              Standard: $16,874 • Premium: $15,444 • Basic: $6,102
            </p>
          </div>
        </div>
      </div>

      {/* Pending Caregiver Approvals & Recent Registrations */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Pending Caregiver Approvals</h2>
            <Link
              to="/admin/caregiver-approvals"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
            >
              <span>View All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Michael Brooks, CNA</p>
                <p className="text-xs text-slate-500">6 Years Exp • Post-Surgery Recovery</p>
              </div>
              <Link
                to="/admin/caregiver-approvals"
                className="rounded-lg bg-[#16845b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#116948]"
              >
                Review
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Priya Nair, RN</p>
                <p className="text-xs text-slate-500">9 Years Exp • Dementia &amp; Memory Care</p>
              </div>
              <Link
                to="/admin/caregiver-approvals"
                className="rounded-lg bg-[#16845b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#116948]"
              >
                Review
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Hannah Alvarez, LPN</p>
                <p className="text-xs text-slate-500">5 Years Exp • Mobility &amp; Physiotherapy</p>
              </div>
              <Link
                to="/admin/caregiver-approvals"
                className="rounded-lg bg-[#16845b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#116948]"
              >
                Review
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Recent Registrations</h2>
            <Link
              to="/admin/users"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
            >
              <span>Manage Users</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Arthur &amp; Miller Family</p>
                <p className="text-xs text-slate-500">Elderly &amp; Family Shared Account • Nov 26, 2026</p>
              </div>
              <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Evelyn Carter &amp; Family</p>
                <p className="text-xs text-slate-500">Elderly &amp; Family Shared Account • Nov 25, 2026</p>
              </div>
              <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Priya Nair, RN</p>
                <p className="text-xs text-slate-500">Caregiver Application • Nov 24, 2026</p>
              </div>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities & Upcoming Medical Visits */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Recent Platform Activities</h2>
          <div className="mt-4 space-y-3.5 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
              <div>
                <p className="font-medium text-slate-800">
                  Caregiver <span className="font-bold">Sarah Jenkins</span> completed morning vitals check for Margaret Miller.
                </p>
                <p className="text-xs text-slate-500">18 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
              <div>
                <p className="font-medium text-slate-800">
                  Family Account <span className="font-bold">FAM-1042</span> renewed Premium Subscription ($99/mo).
                </p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
              <div>
                <p className="font-medium text-slate-800">
                  Weekly care schedule updated for Arthur Thompson by Care Coordinator.
                </p>
                <p className="text-xs text-slate-500">4 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Medical Visits</h2>
            <Link
              to="/admin/medical-visits"
              className="text-xs font-semibold text-[#16845b] hover:underline"
            >
              Manage Visits
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#16845b] shadow-sm">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Margaret Miller — Dr. Alan Patel</p>
                  <p className="text-xs text-slate-500">Boston Heart Clinic • Nov 28, 2026 at 10:30 AM</p>
                </div>
              </div>
              <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                Scheduled
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#16845b] shadow-sm">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">George Henderson — Dr. Sophia Lin</p>
                  <p className="text-xs text-slate-500">Metro General Hospital • Nov 29, 2026 at 02:00 PM</p>
                </div>
              </div>
              <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
