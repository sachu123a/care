import { Mail, MapPin, Phone, Save, ShieldCheck, UserCircle } from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyProfile() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Account Settings"
        title="Elderly & Family Profile"
        description="View Margaret Miller's personal information and update shared account details."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Personal Info Summary Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#16845b] text-3xl font-bold text-white shadow-sm">
              MM
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Margaret Miller</h2>
            <p className="text-sm font-medium text-[#16845b]">Shared Family Account • FAM-1042</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-semibold text-[#16845b]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Premium Plan Member
            </span>
          </div>

          <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
            <p className="flex items-center gap-2.5">
              <UserCircle className="h-4 w-4 text-[#16845b]" />
              <span>DOB: May 14, 1950 (Age 76) • Female</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-[#16845b]" />
              <span>+1 (617) 555-0142</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#16845b]" />
              <span>miller.family@email.com</span>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
              <span>742 Evergreen Terrace, Boston, MA 02115</span>
            </p>
          </div>
        </div>

        {/* Edit Profile Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-900">Edit Profile Information</h2>
          <p className="mt-1 text-xs text-slate-500">
            Keep personal and primary family contact details accurate for your caregiver and medical visits.
          </p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Elderly Person Full Name</label>
              <input
                type="text"
                defaultValue="Margaret Miller"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Date of Birth</label>
              <input
                type="date"
                defaultValue="1950-05-14"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Gender</label>
              <select
                defaultValue="Female"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              >
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (617) 555-0142"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Shared Account Email</label>
              <input
                type="email"
                defaultValue="miller.family@email.com"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Home Address</label>
              <input
                type="text"
                defaultValue="742 Evergreen Terrace, Boston, MA 02115"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Primary Family Contact</label>
              <input
                type="text"
                defaultValue="David Miller (Son)"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700">Primary Family Phone</label>
              <input
                type="tel"
                defaultValue="+1 (617) 555-0199"
                className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
              />
            </div>
            <div className="pt-2 sm:col-span-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <Save className="h-4 w-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </ElderlyLayout>
  );
}
