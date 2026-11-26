import { AlertCircle, Camera, FileUp, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Register() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
            Create a CareConnect Account
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Join Our Trusted Care Community
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Choose between a shared Elderly Person / Family account or a dedicated Caregiver account.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Option 1: Elderly Person / Family Account */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                  Option 1 • Shared Account
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Elderly Person / Family Account
                </h2>
              </div>
            </div>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Elderly Person&apos;s Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Margaret Miller"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Gender
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Shared Account Email
                  </label>
                  <input
                    type="email"
                    placeholder="miller.family@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (617) 555-0142"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Home Address
                  </label>
                  <input
                    type="text"
                    placeholder="742 Evergreen Terrace, Boston, MA"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
              </div>

              <div className="rounded-xl bg-[#eaf6ee]/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                  Primary Family Contact Details
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Primary Family Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., David Miller"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none focus:border-[#16845b]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Family Relationship
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Son"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none focus:border-[#16845b]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Family Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (617) 555-0199"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none focus:border-[#16845b]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-700">
                      Family Contact Email
                    </label>
                    <input
                      type="email"
                      placeholder="david.miller@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm outline-none focus:border-[#16845b]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                Register Elderly &amp; Family Account
              </button>
            </form>
          </div>

          {/* Option 2: Caregiver Account */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                  Option 2 • Care Professional
                </span>
                <h2 className="text-xl font-bold text-slate-900">Caregiver Account</h2>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div>
                <p className="font-bold">Admin Verification Notice</p>
                <p className="mt-0.5 leading-relaxed">
                  All caregiver accounts require administrator review and certificate verification before activation and senior assignment.
                </p>
              </div>
            </div>

            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Sarah Jenkins, RN"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="sarah.jenkins@careconnect.health"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (617) 555-0188"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., B.Sc Nursing / CNA"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 7 Years"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Specialization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Geriatric &amp; Dementia Care"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="220 Harbor View Rd, Boston, MA"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#f6faf7] p-4 text-center transition hover:border-[#16845b]">
                  <FileUp className="h-6 w-6 text-[#16845b]" />
                  <span className="mt-2 text-xs font-semibold text-slate-800">
                    Upload Certificate / Document
                  </span>
                  <span className="mt-0.5 text-[11px] text-slate-500">PDF, JPG or PNG</span>
                  <input type="file" className="hidden" />
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-[#f6faf7] p-4 text-center transition hover:border-[#16845b]">
                  <Camera className="h-6 w-6 text-[#16845b]" />
                  <span className="mt-2 text-xs font-semibold text-slate-800">
                    Upload Profile Photo
                  </span>
                  <span className="mt-0.5 text-[11px] text-slate-500">Clear headshot</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Submit Caregiver Application</span>
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          Already registered on CareConnect?{' '}
          <Link to="/login" className="font-semibold text-[#16845b] hover:underline">
            Sign in to your account
          </Link>
        </p>
      </section>

      <Footer />
    </div>
  );
}
