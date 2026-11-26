import { HeartHandshake, Lock, Mail, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-5">
          <div className="flex flex-col justify-between bg-[#16845b] p-8 text-white lg:col-span-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
                Welcome Back to CareConnect
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-emerald-50">
                Sign in with your account credentials. Elderly individuals and their family members share one unified login to view schedules, medical visits, and emergency contacts together.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-4 text-xs leading-relaxed text-emerald-50">
              <p className="font-bold text-white">Shared Account Reminder</p>
              <p className="mt-1">
                Elderly Person &amp; Family share the same credentials. Caregivers and Administrators each log in with their own dedicated accounts.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">Sign In to Your Portal</h2>
            <p className="mt-1 text-sm text-slate-500">
              Select your account role and enter your login credentials.
            </p>

            {/* Visual Role Selection Options */}
            <div className="mt-6">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Select Account Role
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="flex flex-col items-center rounded-xl border-2 border-slate-200 bg-[#f6faf7] p-3.5 text-center transition peer-checked:border-[#16845b] peer-checked:bg-[#eaf6ee]">
                    <Users className="h-5 w-5 text-[#16845b]" />
                    <span className="mt-2 text-xs font-bold text-slate-900">
                      Elderly Person / Family
                    </span>
                    <span className="mt-0.5 text-[10px] text-slate-500">Shared Account</span>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input type="radio" name="role" className="peer sr-only" />
                  <div className="flex flex-col items-center rounded-xl border-2 border-slate-200 bg-[#f6faf7] p-3.5 text-center transition peer-checked:border-[#16845b] peer-checked:bg-[#eaf6ee]">
                    <UserCheck className="h-5 w-5 text-[#16845b]" />
                    <span className="mt-2 text-xs font-bold text-slate-900">Caregiver</span>
                    <span className="mt-0.5 text-[10px] text-slate-500">Separate Account</span>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input type="radio" name="role" className="peer sr-only" />
                  <div className="flex flex-col items-center rounded-xl border-2 border-slate-200 bg-[#f6faf7] p-3.5 text-center transition peer-checked:border-[#16845b] peer-checked:bg-[#eaf6ee]">
                    <ShieldCheck className="h-5 w-5 text-[#16845b]" />
                    <span className="mt-2 text-xs font-bold text-slate-900">Admin</span>
                    <span className="mt-0.5 text-[10px] text-slate-500">Separate Account</span>
                  </div>
                </label>
              </div>
            </div>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-[#16845b] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#16845b] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                Login
              </button>
            </form>

            {/* Quick Frontend Portal Previews */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f6faf7] p-4">
              <p className="text-xs font-semibold text-slate-700">
                Frontend Dashboard Previews (No Authentication Required):
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  to="/elderly/dashboard"
                  className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm ring-1 ring-slate-200 transition hover:bg-[#eaf6ee]"
                >
                  Open Elderly &amp; Family Dashboard
                </Link>
                <Link
                  to="/caregiver/dashboard"
                  className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm ring-1 ring-slate-200 transition hover:bg-[#eaf6ee]"
                >
                  Open Caregiver Dashboard
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm ring-1 ring-slate-200 transition hover:bg-[#eaf6ee]"
                >
                  Open Admin Dashboard
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don&apos;t have an account yet?{' '}
              <Link to="/register" className="font-semibold text-[#16845b] hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
