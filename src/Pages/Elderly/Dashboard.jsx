import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Bot,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  PhoneCall,
  Stethoscope,
  UserCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyDashboard() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Shared Family Account • FAM-1042"
        title="Welcome Back, Margaret & Miller Family"
        description="View Margaret's daily care schedule, assigned caregiver, upcoming doctor visits, and emergency contacts in one shared dashboard."
        action={
          <Link
            to="/elderly/ai-chatbot"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Bot className="h-4 w-4" />
            <span>Ask AI Care Assistant</span>
          </Link>
        }
      />

     

      {/* Top Row: Elderly Profile, Assigned Caregiver, Current Subscription */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16845b] text-xl font-bold text-white">
              MM
            </div>
            <div>
              <span className="rounded-full bg-[#eaf6ee] px-2.5 py-0.5 text-xs font-semibold text-[#16845b]">
                Elderly Profile
              </span>
              <h2 className="mt-1 text-lg font-bold text-slate-900">Margaret Miller</h2>
              <p className="text-xs text-slate-500">Age 76 • Blood Group O+ • Boston, MA</p>
            </div>
          </div>
          <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-xs text-slate-700">
            <p><span className="font-semibold">Shared Login:</span> miller.family@email.com</p>
            <p><span className="font-semibold">Primary Family:</span> David Miller (Son)</p>
            <p><span className="font-semibold">Address:</span> 742 Evergreen Terrace, Boston</p>
          </div>
          <Link
            to="/elderly/profile"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
          >
            <span>View Full Profile</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
              Assigned Caregiver
            </span>
            <UserCheck className="h-5 w-5 text-[#16845b]" />
          </div>
          <div className="mt-4 flex items-center gap-3.5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
              SJ
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Sarah Jenkins, RN</h2>
              <p className="text-xs text-slate-500">B.Sc Nursing • 8 Years Experience</p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-slate-600">
            <p><span className="font-semibold text-slate-800">Specialization:</span> Geriatric &amp; Cardiac Care</p>
            <p><span className="font-semibold text-slate-800">Availability:</span> Mon – Sat, 7:00 AM – 5:00 PM</p>
            <p><span className="font-semibold text-slate-800">Phone:</span> +1 (617) 555-0188</p>
          </div>
          <Link
            to="/elderly/my-caregiver"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
          >
            <span>View Caregiver Details</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
              Current Subscription
            </span>
            <CreditCard className="h-5 w-5 text-[#16845b]" />
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-slate-900">Premium Plan</h2>
          <p className="text-sm font-semibold text-[#16845b]">$99 / month • Shared Family Coverage</p>
          <div className="mt-4 rounded-xl bg-[#eaf6ee] p-3.5 text-xs text-slate-700">
            <p><span className="font-semibold">Status:</span> Active</p>
            <p className="mt-1"><span className="font-semibold">Next Renewal:</span> Dec 31, 2026</p>
          </div>
          <Link
            to="/elderly/subscription"
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#16845b] hover:underline"
          >
            <span>Manage Plan &amp; Billing</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Middle Row: Today's Care Schedule & Upcoming Medical Appointments */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Today&apos;s Care Schedule</h2>
            </div>
            <Link to="/elderly/care-schedule" className="text-xs font-semibold text-[#16845b] hover:underline">
              Full Schedule
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-[#eaf6ee]/70 p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Morning Vitals &amp; Medication</p>
                <p className="text-xs text-slate-600">08:00 AM – 10:00 AM • Sarah Jenkins, RN</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Afternoon Mobility Walk &amp; Hydration</p>
                <p className="text-xs text-slate-600">02:30 PM – 03:30 PM • Sarah Jenkins, RN</p>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Upcoming
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Evening Blood Pressure &amp; Dinner Prep</p>
                <p className="text-xs text-slate-600">06:00 PM – 07:00 PM • Sarah Jenkins, RN</p>
              </div>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                Scheduled
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Upcoming Medical Appointments</h2>
            </div>
            <Link to="/elderly/medical-visits" className="text-xs font-semibold text-[#16845b] hover:underline">
              All Visits
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-900">Dr. Alan Patel (Cardiologist)</p>
                <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                  Nov 28, 2026
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600">Boston Heart Clinic • 10:30 AM</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Purpose: Routine Cardiac &amp; ECG Checkup</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-[#f6faf7] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-slate-900">Dr. Emily Ross (Primary Physician)</p>
                <span className="rounded-full bg-[#eaf6ee] px-2.5 py-1 text-xs font-semibold text-[#16845b]">
                  Dec 05, 2026
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600">Beacon Medical Center • 09:00 AM</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Purpose: Quarterly Blood Sugar &amp; Wellness Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Family Members Overview & Recent Notifications */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Family Members Overview</h2>
            </div>
            <Link to="/elderly/family-members" className="text-xs font-semibold text-[#16845b] hover:underline">
              Manage Family
            </Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#f6faf7] p-3.5">
              <p className="text-sm font-bold text-slate-900">David Miller</p>
              <p className="text-xs text-[#16845b] font-semibold">Son • Primary Contact</p>
              <p className="mt-1 text-xs text-slate-500">+1 (617) 555-0199</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-3.5">
              <p className="text-sm font-bold text-slate-900">Rachel Miller</p>
              <p className="text-xs text-slate-600 font-semibold">Daughter • Secondary Contact</p>
              <p className="mt-1 text-xs text-slate-500">+1 (617) 555-0124</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#16845b]" />
              <h2 className="text-lg font-bold text-slate-900">Recent Notifications</h2>
            </div>
            <Link to="/elderly/notifications" className="text-xs font-semibold text-[#16845b] hover:underline">
              View All
            </Link>
          </div>
          <div className="mt-4 space-y-2.5 text-xs">
            <div className="rounded-xl bg-[#eaf6ee]/70 p-3">
              <p className="font-bold text-slate-900">Morning Vitals Recorded</p>
              <p className="text-slate-600">Sarah Jenkins logged normal BP (122/78) at 9:15 AM today.</p>
            </div>
            <div className="rounded-xl bg-[#f6faf7] p-3">
              <p className="font-bold text-slate-900">Cardiology Appointment Reminder</p>
              <p className="text-slate-600">Visit with Dr. Alan Patel scheduled for Nov 28 at 10:30 AM.</p>
            </div>
          </div>
        </div>
      </div>
    </ElderlyLayout>
  );
}
