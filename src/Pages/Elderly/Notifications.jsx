import { Bell, CreditCard, Megaphone, Stethoscope, UserCheck, Users } from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function ElderlyNotifications() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Family Inbox"
        title="Notifications"
        description="Caregiver activity updates, medical appointment reminders, family notes, subscription reminders, and announcements."
      />

      <div className="space-y-4">
        <div className="flex items-start gap-4 rounded-2xl border border-[#16845b]/25 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#16845b]">Caregiver Update</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Sarah Jenkins, RN completed Morning Vitals &amp; Medication
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Blood pressure recorded at 122/78 mmHg. Morning Amlodipine 5 mg taken on schedule. • Today, 9:15 AM
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-sky-700">Medical Reminder</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Upcoming Cardiology Visit with Dr. Alan Patel
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Scheduled for November 28, 2026 at 10:30 AM at Boston Heart Clinic. Please bring medication list.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#16845b]">Family Notification</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              David Miller (Primary Contact) confirmed Saturday transport
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              &ldquo;I will pick Mom up at 9:45 AM for the Boston Heart Clinic appointment.&rdquo; • Yesterday
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-amber-700">Subscription Reminder</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Premium Plan active through December 31, 2026
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Shared coverage for Margaret Miller and family members will auto-renew on Jan 01, 2027.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-purple-700">General Announcement</span>
            <h2 className="mt-0.5 text-sm font-bold text-slate-900">
              Winter Wellness Tips from CareConnect Healthcare Team
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Stay warm, hydrated, and keep your emergency contacts updated for winter weather preparedness.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#eaf6ee]/70 p-4 text-xs text-slate-600">
          <Bell className="h-4 w-4 text-[#16845b]" />
          <span>Both the elderly member and family contacts see these same notifications on the shared account.</span>
        </div>
      </div>
    </ElderlyLayout>
  );
}
