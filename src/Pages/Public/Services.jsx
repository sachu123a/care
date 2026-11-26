import {
  Activity,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  HeartHandshake,
  PhoneCall,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="bg-gradient-to-b from-[#eaf6ee] to-[#f6faf7] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#16845b] shadow-sm">
            Our Care Services
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            Comprehensive Support for Seniors &amp; Families
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Explore how CareConnect streamlines everyday assistance, clinical coordination, caregiver matching, and emergency preparedness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Personal Elderly Care</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Compassionate assistance with daily living activities, mobility exercises, nutrition support, and warm companionship at home.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Daily hygiene &amp; grooming support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Gentle mobility &amp; walk routines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Meal prep &amp; hydration tracking</span>
                </li>
              </ul>
            </div>
            <Link
              to="/register"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16845b] hover:underline"
            >
              <span>Request Personal Care</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                <Stethoscope className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Medical Assistance</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Stay on top of doctor visits, hospital checkups, and prescribed medication schedules with clear reminders for seniors and family.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Hospital &amp; clinic visit tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Doctor notes &amp; follow-up logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Medication timing coordination</span>
                </li>
              </ul>
            </div>
            <Link
              to="/register"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16845b] hover:underline"
            >
              <span>Coordinate Medical Visits</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                <CalendarClock className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Care Scheduling</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Structured daily care calendars so elderly individuals, family members, and caregivers always know what activity comes next.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Morning, afternoon &amp; evening slots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Completed vs. upcoming tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Admin-coordinated caregiver shifts</span>
                </li>
              </ul>
            </div>
            <Link
              to="/register"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16845b] hover:underline"
            >
              <span>Explore Scheduling</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                <Users className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Caregiver Support</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Verified nurses and geriatric specialists matched thoughtfully to each family and equipped with their own dedicated workspace.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Admin-verified credentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Clear elderly profile summaries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Direct family contact visibility</span>
                </li>
              </ul>
            </div>
            <Link
              to="/register"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16845b] hover:underline"
            >
              <span>Apply or Match Caregiver</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                <Activity className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Health Monitoring</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Centralized digital health records keeping blood group, allergies, chronic conditions, and recent checkups accessible anytime.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Allergies &amp; blood group badges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Active medication lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16845b]" />
                  <span>Checkup vitals &amp; doctor notes</span>
                </li>
              </ul>
            </div>
            <Link
              to="/elderly/health-records"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#16845b] hover:underline"
            >
              <span>Preview Health Records</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-rose-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <PhoneCall className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">Emergency Assistance</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                High-visibility SOS contact center listing primary &amp; secondary family contacts, assigned caregiver, doctors, and emergency services.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>Prominent red SOS action hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>6 structured emergency categories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-600" />
                  <span>Instant one-view phone directory</span>
                </li>
              </ul>
            </div>
            <Link
              to="/elderly/emergency-contacts"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:underline"
            >
              <span>View Emergency Hub</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
