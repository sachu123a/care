import { Bell, CheckCircle2, CreditCard, Stethoscope, UserCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function AdminNotifications() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Alerts & Activity"
        title="Admin Notifications"
        description="Stay updated on new user registrations, caregiver applications, subscription renewals, payments, and medical visit reminders."
        action={
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
          >
            Mark All as Read
          </button>
        }
      />

      <div className="space-y-4">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[#16845b]/25 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-amber-700">New Caregiver Application</span>
              <h2 className="text-sm font-bold text-slate-900">
                Michael Brooks, CNA submitted certificates for verification
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">12 minutes ago • Caregiver Approvals Queue</p>
            </div>
          </div>
          <Link
            to="/admin/caregiver-approvals"
            className="shrink-0 rounded-xl bg-[#16845b] px-4 py-2 text-xs font-semibold text-white hover:bg-[#116948]"
          >
            Review Application
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-[#16845b]">New User Registration</span>
              <h2 className="text-sm font-bold text-slate-900">
                Arthur Thompson &amp; Claire Thompson created a shared Family Account (FAM-1043)
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">1 hour ago • Elderly &amp; Family Portal</p>
            </div>
          </div>
          <Link
            to="/admin/family-accounts"
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
          >
            View Family
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-emerald-700">Caregiver Approval Notification</span>
              <h2 className="text-sm font-bold text-slate-900">
                Elena Rostova, LPN was approved and activated on the platform
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">3 hours ago • Verified Caregivers</p>
            </div>
          </div>
          <Link
            to="/admin/caregivers"
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
          >
            View Profile
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-[#16845b]">Subscription Renewal &amp; Payment</span>
              <h2 className="text-sm font-bold text-slate-900">
                Payment of $99.00 received from Miller Family (FAM-1042) for Premium Plan renewal
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">Yesterday at 4:20 PM • Billing</p>
            </div>
          </div>
          <Link
            to="/admin/subscriptions"
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
          >
            View Billing
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-sky-700">Medical Visit Reminder</span>
              <h2 className="text-sm font-bold text-slate-900">
                Margaret Miller has an upcoming cardiology checkup at Boston Heart Clinic on Nov 28
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">Yesterday at 9:00 AM • Medical Visits</p>
            </div>
          </div>
          <Link
            to="/admin/medical-visits"
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
          >
            View Visits
          </Link>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#eaf6ee]/70 p-4 text-xs text-slate-700">
          <Bell className="h-4 w-4 text-[#16845b]" />
          <span>System alerts are automatically synced across Admin, Caregiver, and Family dashboards.</span>
        </div>
      </div>
    </AdminLayout>
  );
}
