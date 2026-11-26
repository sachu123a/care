import { Award, Clock, Mail, MapPin, Phone, Save, ShieldCheck } from 'lucide-react';
import CaregiverLayout from '../../Components/CaregiverLayout';
import PageHeader from '../../Components/PageHeader';

export default function CaregiverProfile() {
  return (
    <CaregiverLayout>
      <PageHeader
        badge="Professional Profile"
        title="Caregiver Profile"
        description="View your verified credentials, specialization, contact details, and availability."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Summary Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#16845b] text-3xl font-bold text-white shadow-sm">
              SJ
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Sarah Jenkins, RN</h2>
            <p className="text-sm font-medium text-[#16845b]">Senior Geriatric Caregiver</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Admin Verified
            </span>
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
            <p className="flex items-center gap-2.5">
              <Award className="h-4 w-4 text-[#16845b]" />
              <span>B.Sc Nursing • 8 Years Experience</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 text-[#16845b]" />
              <span>Mon – Sat, 7:00 AM – 5:00 PM</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#16845b]" />
              <span>+1 (617) 555-0188</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#16845b]" />
              <span>sarah.jenkins@careconnect.health</span>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
              <span>220 Harbor View Rd, Boston, MA</span>
            </p>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-900">Edit Caregiver Profile</h2>
          <p className="mt-1 text-xs text-slate-500">
            Update your availability, contact phone, or specialization details.
          </p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Full Name</label>
              <input
                type="text"
                defaultValue="Sarah Jenkins, RN"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Qualification</label>
              <input
                type="text"
                defaultValue="B.Sc Nursing, Registered Nurse (RN)"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Experience</label>
              <input
                type="text"
                defaultValue="8 Years"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Specialization</label>
              <input
                type="text"
                defaultValue="Geriatric &amp; Cardiac Care"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (617) 555-0188"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                defaultValue="sarah.jenkins@careconnect.health"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Availability</label>
              <input
                type="text"
                defaultValue="Monday – Saturday, 7:00 AM – 5:00 PM"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div className="pt-2 sm:col-span-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <Save className="h-4 w-4" />
                <span>Save Caregiver Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </CaregiverLayout>
  );
}
