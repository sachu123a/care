
import {
  Ambulance,
  Edit3,
  Hospital,
  Mail,
  PhoneCall,
  Stethoscope,
  UserCheck,
  Users,
} from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function EmergencyContacts() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Priority Safety Hub"
        title="Emergency Contacts"
        description="Immediate access to family contacts, your assigned caregiver, primary and secondary doctors, and emergency services."
      />

      {/* 6 Emergency Contact Categories */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {/* 1. Primary Family Contact */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-[#16845b]/30 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16845b] text-lg font-bold text-white">
                  DM
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                    1. Primary Family Contact
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">David Miller</h3>
                  <p className="text-xs font-medium text-slate-500">Son • Primary Care Decision Maker</p>
                </div>
              </div>
              <Users className="h-5 w-5 text-[#16845b]" />
            </div>

            <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <PhoneCall className="h-4 w-4 text-[#16845b]" />
                <span>+1 (617) 555-0199</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 text-[#16845b]" />
                <span>david.miller@email.com</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2.5">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Contact</span>
            </button>
          </div>
        </div>

        {/* 2. Secondary Family Contact */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                  RM
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Secondary Family Contact
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Rachel Miller</h3>
                  <p className="text-xs font-medium text-slate-500">Daughter • Backup Family Contact</p>
                </div>
              </div>
              <Users className="h-5 w-5 text-[#16845b]" />
            </div>

            <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <PhoneCall className="h-4 w-4 text-[#16845b]" />
                <span>+1 (617) 555-0124</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 text-[#16845b]" />
                <span>rachel.miller@email.com</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2.5">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Contact</span>
            </button>
          </div>
        </div>

        {/* 3. Assigned Caregiver */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-lg font-bold text-white">
                  SJ
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                    3. Assigned Caregiver
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Sarah Jenkins, RN</h3>
                  <p className="text-xs font-medium text-slate-500">Registered Nurse • On-Call Caregiver</p>
                </div>
              </div>
              <UserCheck className="h-5 w-5 text-[#16845b]" />
            </div>

            <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <PhoneCall className="h-4 w-4 text-[#16845b]" />
                <span>+1 (617) 555-0188</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 text-[#16845b]" />
                <span>sarah.jenkins@careconnect.health</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2.5">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Contact</span>
            </button>
          </div>
        </div>

        {/* 4. Primary Doctor */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                  <Stethoscope className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16845b]">
                    4. Primary Doctor
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Dr. Emily Ross, MD</h3>
                  <p className="text-xs font-medium text-slate-500">Primary Care Physician</p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <PhoneCall className="h-4 w-4 text-[#16845b]" />
                <span>+1 (617) 555-0310</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Hospital className="h-4 w-4 text-[#16845b]" />
                <span>Beacon Medical Center</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 text-[#16845b]" />
                <span>dr.ross@beaconmed.org</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2.5">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Contact</span>
            </button>
          </div>
        </div>

        {/* 5. Secondary Doctor */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf6ee] text-[#16845b]">
                  <Stethoscope className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    5. Secondary Doctor
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Dr. Alan Patel, MD</h3>
                  <p className="text-xs font-medium text-slate-500">Cardiology Specialist</p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2 rounded-xl bg-[#f6faf7] p-4 text-sm text-slate-700">
              <p className="flex items-center gap-2 font-bold text-slate-900">
                <PhoneCall className="h-4 w-4 text-[#16845b]" />
                <span>+1 (617) 555-0445</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Hospital className="h-4 w-4 text-[#16845b]" />
                <span>Boston Heart Clinic</span>
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Mail className="h-4 w-4 text-[#16845b]" />
                <span>apatel@bostonheart.org</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-2.5">
            <button
              type="button"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#116948]"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:border-[#16845b] hover:text-[#16845b]"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Edit Contact</span>
            </button>
          </div>
        </div>

        {/* 6. Emergency Services */}
        
      </div>

      {/* Emergency Contact Information Summary */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Emergency Contact Summary Sheet</h2>
        <p className="mt-1 text-xs text-slate-500">
          Shared reference card visible to Margaret Miller, all family members, and assigned caregiver Sarah Jenkins.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-xs font-semibold text-slate-500">Elderly Member</p>
            <p className="mt-1 font-bold text-slate-900">Margaret Miller (Age 76)</p>
            <p className="text-xs text-slate-600">Blood Group: O+ • Penicillin Allergy</p>
          </div>
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-xs font-semibold text-slate-500">Home Address</p>
            <p className="mt-1 font-bold text-slate-900">742 Evergreen Terrace</p>
            <p className="text-xs text-slate-600">Boston, MA 02115</p>
          </div>
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-xs font-semibold text-slate-500">Primary Family</p>
            <p className="mt-1 font-bold text-slate-900">David Miller (Son)</p>
            <p className="text-xs text-[#16845b] font-semibold">+1 (617) 555-0199</p>
          </div>
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-xs font-semibold text-slate-500">Caregiver &amp; Doctor</p>
            <p className="mt-1 font-bold text-slate-900">Sarah Jenkins / Dr. E. Ross</p>
            <p className="text-xs text-[#16845b] font-semibold">+1 (617) 555-0188</p>
          </div>
        </div>
      </div>
    </ElderlyLayout>
  );
}
