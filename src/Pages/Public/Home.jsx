import {
  Activity,
  ArrowRight,
  Award,
  Bell,
  Bot,
  CalendarClock,
  CheckCircle2,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCareImg from '../../assets/hero-care.jpg';
import familyCareImg from '../../assets/family-care.jpg';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf6ee] via-[#f6faf7] to-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#16845b]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Elderly Care &amp; Family Coordination
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Compassionate Care for a Better Tomorrow
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              CareConnect brings elderly individuals, their families, verified caregivers, and healthcare administrators together in one calm, organized platform—making daily schedules, medical visits, health records, and emergency support effortless.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#16845b] hover:text-[#16845b]"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6">
              <div>
                <p className="text-2xl font-bold text-[#16845b]">2,400+</p>
                <p className="text-xs font-medium text-slate-600">Families Connected</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#16845b]">580+</p>
                <p className="text-xs font-medium text-slate-600">Verified Caregivers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#16845b]">24/7</p>
                <p className="text-xs font-medium text-slate-600">Emergency Readiness</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <img
                src={heroCareImg}
                alt="Caregiver supporting an elderly couple in a warm living room"
                className="h-[360px] w-full rounded-xl object-cover sm:h-[440px]"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0 sm:w-72">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Verified Caregivers</p>
                  <p className="text-xs text-slate-500">Admin-approved certificates &amp; IDs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Holistic Elderly Care Services
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Every essential care workflow designed to keep seniors safe, comfortable, and connected to their loved ones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Personal Elderly Care</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Daily companionship, mobility support, meal assistance, and respectful personal routines tailored to each senior.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Medical Assistance</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Coordinated doctor appointments, hospital visit tracking, and timely medication reminders in one shared view.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <CalendarClock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Care Scheduling</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Clear daily and weekly calendars shared across the elderly person, family members, and assigned caregiver.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Caregiver Support</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Dedicated portal for qualified caregivers to manage assigned seniors, visits, schedules, and notifications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Health Monitoring</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Organized digital health records covering blood group, allergies, medications, checkups, and doctor notes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
              <PhoneCall className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Emergency Assistance</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              One-tap access to primary family contacts, assigned caregivers, primary doctors, and emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose CareConnect & How We Support Families */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f6faf7] p-2 shadow-md">
            <img
              src={familyCareImg}
              alt="Doctor and family members reviewing care plan with an elderly parent"
              className="h-[340px] w-full rounded-xl object-cover sm:h-[400px]"
            />
          </div>

          <div>
            <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
              Why Choose CareConnect
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Built Around Shared Family Peace of Mind
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Unlike fragmented tools, CareConnect gives the elderly person and their family members one shared account so everyone sees the exact same schedules, caregiver details, and health updates.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-xl bg-[#f6faf7] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16845b]" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">One Shared Elderly &amp; Family Account</h3>
                  <p className="text-xs text-slate-600">
                    Seniors and relatives log into the same unified dashboard with zero confusion or duplicated data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#f6faf7] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#16845b]" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Thorough Caregiver Verification</h3>
                  <p className="text-xs text-slate-600">
                    Every caregiver application is reviewed and approved by platform administrators before assignment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#f6faf7] p-4">
                <Bot className="mt-0.5 h-5 w-5 shrink-0 text-[#16845b]" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">AI Care Assistant &amp; Smart Reminders</h3>
                  <p className="text-xs text-slate-600">
                    Accessible assistant interface to help seniors check upcoming visits, medicines, and contacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How CareConnect Works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Simple Setup for Seniors and Families
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-sm font-bold text-white">
              01
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Create Shared Account</h3>
            <p className="mt-2 text-sm text-slate-600">
              Register once for the elderly person and add primary &amp; secondary family contacts.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-sm font-bold text-white">
              02
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Choose a Care Plan</h3>
            <p className="mt-2 text-sm text-slate-600">
              Select Basic, Standard, or Premium care coverage suited to your family’s needs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-sm font-bold text-white">
              03
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Get Verified Caregiver</h3>
            <p className="mt-2 text-sm text-slate-600">
              Admins match an approved, qualified caregiver specialized in your care requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-sm font-bold text-white">
              04
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Coordinate Daily Care</h3>
            <p className="mt-2 text-sm text-slate-600">
              Track schedules, medical appointments, health records, and alerts effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Our Features & How We Support Families */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#16845b]">
                <Award className="h-5 w-5" />
                <span>Platform Features</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Designed for Clarity &amp; Accessibility
              </h3>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Large readable typography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Dedicated SOS contact hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Digital health history</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Caregiver approval workflow</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Medical visit calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Real-time notification feed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#16845b]/20 bg-[#eaf6ee] p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#16845b]">
                <Bell className="h-5 w-5" />
                <span>Supporting Families</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Stay Close, Even From Afar
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Adult children and relatives often juggle work and distance while caring for aging parents. CareConnect keeps primary and secondary family members informed about completed care activities, upcoming hospital visits, and prescription updates on one shared dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/elderly/dashboard"
                  className="rounded-xl bg-[#16845b] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#116948]"
                >
                  Preview Family Dashboard
                </Link>
                <Link
                  to="/caregiver/dashboard"
                  className="rounded-xl border border-[#16845b]/30 bg-white px-4 py-2.5 text-xs font-semibold text-[#16845b] transition hover:bg-[#f6faf7]"
                >
                  Preview Caregiver Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Loved by Seniors, Families &amp; Caregivers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              &ldquo;Sharing one account with my mother makes coordinating her physiotherapy and cardiology visits effortless. The interface is calm and super easy for her to read.&rdquo;
            </p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-900">David Miller</p>
              <p className="text-xs text-slate-500">Primary Family Contact • Boston</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              &ldquo;Having my emergency contacts and daily care schedule in large, clear cards gives me genuine independence and peace of mind every day.&rdquo;
            </p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-900">Margaret Miller</p>
              <p className="text-xs text-slate-500">Elderly Member • Age 76</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              &ldquo;As a registered nurse, the Caregiver Portal lets me review assigned seniors, medical appointments, and family emergency contacts in seconds.&rdquo;
            </p>
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-900">Sarah Jenkins, RN</p>
              <p className="text-xs text-slate-500">Verified Senior Caregiver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plan Preview */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
              Subscription Plans
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Transparent Care Plans for Every Family
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              One shared subscription covers the elderly individual and their connected family members.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#f6faf7] p-7">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Basic Plan</h3>
                <p className="mt-1 text-xs text-slate-500">Essential daily care coordination</p>
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
              <Link
                to="/subscription"
                className="mt-8 block rounded-xl border border-[#16845b] px-4 py-3 text-center text-sm font-semibold text-[#16845b] transition hover:bg-[#16845b] hover:text-white"
              >
                View Basic Plan
              </Link>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border-2 border-[#16845b] bg-white p-7 shadow-lg">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Standard Plan</h3>
                  <span className="rounded-full bg-[#eaf6ee] px-3 py-1 text-xs font-bold text-[#16845b]">
                    Recommended
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Complete care &amp; AI assistance</p>
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
                    <span>AI Care Assistant &amp; priority alerts</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/subscription"
                className="mt-8 block rounded-xl bg-[#16845b] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#116948]"
              >
                Choose Standard Plan
              </Link>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#f6faf7] p-7">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Premium Plan</h3>
                <p className="mt-1 text-xs text-slate-500">Enhanced monitoring &amp; priority care</p>
                <p className="mt-5 text-4xl font-extrabold text-slate-900">
                  $99<span className="text-sm font-medium text-slate-500">/month</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
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
                    <span>Priority assistance &amp; family alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                    <span>Enhanced care monitoring</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/subscription"
                className="mt-8 block rounded-xl border border-[#16845b] px-4 py-3 text-center text-sm font-semibold text-[#16845b] transition hover:bg-[#16845b] hover:text-white"
              >
                View Premium Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
