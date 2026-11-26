
import {
  AlertTriangle,
  HeartPulse,
  MapPin,
  Phone,
  Users,
  Pill,
  FileText,
  Activity,
} from 'lucide-react';

import CaregiverLayout from '../../Components/CaregiverLayout';
import PageHeader from '../../Components/PageHeader';

export default function MyElderlyPeople() {
  return (
    <CaregiverLayout>
      <PageHeader
        badge="Assigned Seniors"
        title="My Elderly People"
        description="View health summaries, medical records, medications, home addresses, and emergency contacts for every elderly person assigned to you."
      />

      <div className="space-y-8">

        {/* MARGARET MILLER */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          {/* Personal Information */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16845b] text-xl font-bold text-white">
                MM
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Margaret Miller
                </h2>
                <p className="text-sm font-medium text-[#16845b]">
                  Age 76 • Female • Premium Plan
                </p>
              </div>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Active Care
            </span>
          </div>

          {/* Contact Information */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-[#16845b]" />
              742 Evergreen Terrace, Boston, MA 02115
            </p>

            <p className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-[#16845b]" />
              +1 (617) 555-0142
            </p>
          </div>

          {/* Health Summary */}
          <div className="mt-5 rounded-xl bg-[#eaf6ee]/60 p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#16845b]">
              <HeartPulse className="h-4 w-4" />
              Health Information Summary
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
              Blood Group: O+ • Mild Hypertension &amp; Osteoarthritis •
              Allergies: Penicillin, Sulfa. Takes Amlodipine 5 mg at 8:00 AM.
            </p>
          </div>

          {/* Family and Emergency Contacts */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4 text-xs">
              <p className="flex items-center gap-1.5 font-bold text-slate-800">
                <Users className="h-3.5 w-3.5 text-[#16845b]" />
                Family Contact
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                David Miller (Son)
              </p>
              <p className="text-slate-600">+1 (617) 555-0199</p>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-xs">
              <p className="flex items-center gap-1.5 font-bold text-rose-700">
                <AlertTriangle className="h-3.5 w-3.5" />
                Emergency Contact
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                Dr. Emily Ross / 911
              </p>
              <p className="font-semibold text-rose-700">
                +1 (617) 555-0310
              </p>
            </div>
          </div>

          <div className="my-6 border-t border-slate-200"></div>

          {/* Medical Records */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#16845b]" />
              <h3 className="text-lg font-bold text-slate-900">
                Medical Records
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Medical Condition
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Hypertension
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Mild • Managed &amp; Stable
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Additional Condition
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Osteoarthritis
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Joint care monitoring
                </p>
              </div>

              <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
                <p className="text-xs font-semibold text-rose-600">
                  Known Allergies
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Penicillin, Sulfa
                </p>
                <p className="mt-1 text-xs text-rose-600">
                  Severe reaction — avoid
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Blood Group
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  O Positive (O+)
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Verified
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Latest Blood Pressure
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  122 / 78 mmHg
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Heart Rate: 72 bpm
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Last Checkup
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Nov 04, 2026
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Beacon Medical Center
                </p>
              </div>

            </div>
          </div>

          {/* Current Medications */}
          <div className="mt-7">
            <div className="mb-4 flex items-center gap-2">
              <Pill className="h-5 w-5 text-[#16845b]" />
              <h3 className="text-lg font-bold text-slate-900">
                Current Medications
              </h3>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-[#f6faf7] text-xs font-bold uppercase text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Medicine</th>
                    <th className="px-4 py-3">Dosage</th>
                    <th className="px-4 py-3">Timing</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Amlodipine
                    </td>
                    <td className="px-4 py-3 text-slate-600">5 mg</td>
                    <td className="px-4 py-3 font-medium text-[#16845b]">
                      8:00 AM
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Blood Pressure
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Vitamin D3 + Calcium
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      1000 IU / 500 mg
                    </td>
                    <td className="px-4 py-3 font-medium text-[#16845b]">
                      1:00 PM
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Bone Strength
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Atorvastatin
                    </td>
                    <td className="px-4 py-3 text-slate-600">10 mg</td>
                    <td className="px-4 py-3 font-medium text-[#16845b]">
                      9:00 PM
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Cholesterol
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ARTHUR THOMPSON */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          {/* Personal Information */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-700 text-xl font-bold text-white">
                AT
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Arthur Thompson
                </h2>
                <p className="text-sm font-medium text-[#16845b]">
                  Age 81 • Male • Standard Plan
                </p>
              </div>
            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Active Care
            </span>
          </div>

          {/* Contact Information */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-[#16845b]" />
              118 Beacon Street, Brookline, MA 02446
            </p>

            <p className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-[#16845b]" />
              +1 (617) 555-0131
            </p>
          </div>

          {/* Health Summary */}
          <div className="mt-5 rounded-xl bg-[#eaf6ee]/60 p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#16845b]">
              <HeartPulse className="h-4 w-4" />
              Health Information Summary
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
              Blood Group: A+ • Type 2 Diabetes &amp; Mild Knee Mobility
              Limitation • No known drug allergies. Uses walker during outdoor walks.
            </p>
          </div>

          {/* Family and Emergency Contacts */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4 text-xs">
              <p className="flex items-center gap-1.5 font-bold text-slate-800">
                <Users className="h-3.5 w-3.5 text-[#16845b]" />
                Family Contact
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                Claire Thompson (Daughter)
              </p>
              <p className="text-slate-600">+1 (617) 555-0144</p>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-xs">
              <p className="flex items-center gap-1.5 font-bold text-rose-700">
                <AlertTriangle className="h-3.5 w-3.5" />
                Emergency Contact
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                Dr. Marcus Bell / 911
              </p>
              <p className="font-semibold text-rose-700">
                +1 (617) 555-0490
              </p>
            </div>
          </div>

          <div className="my-6 border-t border-slate-200"></div>

          {/* Medical Records */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#16845b]" />
              <h3 className="text-lg font-bold text-slate-900">
                Medical Records
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Medical Condition
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Type 2 Diabetes
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Under regular monitoring
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Mobility Condition
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Knee Mobility Limitation
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Uses walker outdoors
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Known Allergies
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  None Known
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No known drug allergies
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Blood Group
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  A Positive (A+)
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Medical profile
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Health Monitoring
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Blood Glucose
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Regular monitoring required
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f6faf7] p-4">
                <p className="text-xs font-semibold text-slate-500">
                  Mobility Support
                </p>
                <p className="mt-1 font-bold text-slate-900">
                  Walking Assistance
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Walker for outdoor walks
                </p>
              </div>

            </div>
          </div>

          {/* Current Medications */}
          <div className="mt-7">
            <div className="mb-4 flex items-center gap-2">
              <Pill className="h-5 w-5 text-[#16845b]" />
              <h3 className="text-lg font-bold text-slate-900">
                Current Medications
              </h3>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-[#f6faf7] text-xs font-bold uppercase text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Medicine</th>
                    <th className="px-4 py-3">Dosage</th>
                    <th className="px-4 py-3">Timing</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Metformin
                    </td>
                    <td className="px-4 py-3 text-slate-600">500 mg</td>
                    <td className="px-4 py-3 font-medium text-[#16845b]">
                      8:00 AM
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Blood Sugar Control
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Vitamin B12
                    </td>
                    <td className="px-4 py-3 text-slate-600">500 mcg</td>
                    <td className="px-4 py-3 font-medium text-[#16845b]">
                      1:00 PM
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Vitamin Supplement
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </CaregiverLayout>
  );
}
