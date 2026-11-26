import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Subscription() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="bg-gradient-to-b from-[#eaf6ee] to-[#f6faf7] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#16845b] shadow-sm">
            Subscription Plans
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, Shared Family Care Plans
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Every subscription covers one elderly person and all connected family members under one shared account.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Basic Plan</h2>
              <p className="mt-1 text-sm text-slate-500">
                Essential scheduling &amp; emergency coordination
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$29</span>
                <span className="text-sm text-slate-500">/ month</span>
              </div>

              <ul className="mt-7 space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Daily care schedule</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Basic caregiver support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Medical visit reminders</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Emergency contact management</span>
                </li>
              </ul>
            </div>

            <Link
              to="/register"
              className="mt-8 block rounded-xl border border-[#16845b] px-5 py-3 text-center text-sm font-semibold text-[#16845b] transition hover:bg-[#16845b] hover:text-white"
            >
              Get Started with Basic
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#16845b] bg-white p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Standard Plan</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-bold text-[#16845b]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recommended
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Dedicated caregiver, health records &amp; AI Care Assistant
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$59</span>
                <span className="text-sm text-slate-500">/ month</span>
              </div>

              <ul className="mt-7 space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Dedicated caregiver assignment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Health record management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>AI Care Assistant</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Priority notifications</span>
                </li>
              </ul>
            </div>

            <Link
              to="/register"
              className="mt-8 block rounded-xl bg-[#16845b] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
            >
              Get Started with Standard
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Premium Plan</h2>
              <p className="mt-1 text-sm text-slate-500">
                Maximum support &amp; enhanced care monitoring
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$99</span>
                <span className="text-sm text-slate-500">/ month</span>
              </div>

              <ul className="mt-7 space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Everything in Standard</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Advanced caregiver support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Priority assistance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Family notifications</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#16845b]" />
                  <span>Enhanced care monitoring</span>
                </li>
              </ul>
            </div>

            <Link
              to="/register"
              className="mt-8 block rounded-xl border border-[#16845b] px-5 py-3 text-center text-sm font-semibold text-[#16845b] transition hover:bg-[#16845b] hover:text-white"
            >
              Get Started with Premium
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#16845b]/20 bg-[#eaf6ee] p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 shrink-0 text-[#16845b]" />
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Already have an Elderly &amp; Family account?
              </h3>
              <p className="text-xs text-slate-600">
                Manage or upgrade your active plan directly inside your shared dashboard.
              </p>
            </div>
          </div>
          <Link
            to="/elderly/subscription"
            className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#116948]"
          >
            View Family Subscription Portal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
