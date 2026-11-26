import { Award, Calendar, CheckCircle2, Clock, Mail, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function MyCaregiver() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Assigned Caregiver"
        title="My Caregiver"
        description="View your verified caregiver's qualifications, schedule availability, and direct contact details."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#16845b] text-3xl font-bold text-white shadow-sm">
                SJ
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Admin Verified Caregiver</span>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Sarah Jenkins, RN</h2>
                <p className="text-sm font-medium text-[#16845b]">Senior Geriatric Care Specialist</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Caregiver</span>
              </button>
              <Link
                to="/elderly/care-schedule"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#16845b] hover:text-[#16845b]"
              >
                <Calendar className="h-4 w-4" />
                <span>View Shifts</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Qualification</p>
              <p className="mt-1 text-base font-bold text-slate-900">B.Sc Nursing, Registered Nurse (RN)</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Experience</p>
              <p className="mt-1 text-base font-bold text-slate-900">8 Years in Elderly Care</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Specialization</p>
              <p className="mt-1 text-base font-bold text-slate-900">Geriatric, Cardiac &amp; Medication Support</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Availability</p>
              <p className="mt-1 text-base font-bold text-[#16845b]">Mon – Sat • 7:00 AM – 5:00 PM</p>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-6">
            <h3 className="text-base font-bold text-slate-900">Contact Details</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Phone className="h-5 w-5 text-[#16845b]" />
                <div>
                  <p className="text-xs text-slate-500">Phone Number</p>
                  <p className="text-sm font-bold text-slate-900">+1 (617) 555-0188</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Mail className="h-5 w-5 text-[#16845b]" />
                <div>
                  <p className="text-xs text-slate-500">Email Address</p>
                  <p className="text-sm font-bold text-slate-900">sarah.jenkins@careconnect.health</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Care Summary Panel */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#16845b]">
              <Award className="h-5 w-5" />
              <h3 className="text-base font-bold text-slate-900">Caregiver Highlights</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>CPR &amp; First Aid Certified (Valid 2027)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>Blood Pressure &amp; Diabetes Monitoring</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>Assigned to Margaret Miller since Jan 2026</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#16845b]/20 bg-[#eaf6ee] p-6">
            <div className="flex items-center gap-2 text-[#16845b]">
              <Clock className="h-5 w-5" />
              <h3 className="text-base font-bold text-slate-900">Next Visit</h3>
            </div>
            <p className="mt-2 text-sm font-bold text-slate-900">Today at 02:30 PM</p>
            <p className="mt-1 text-xs text-slate-600">Afternoon Mobility Walk &amp; Hydration Check</p>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#116948]"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Send Note to Caregiver</span>
            </button>
          </div>
        </div>
      </div>
    </ElderlyLayout>
  );
}
