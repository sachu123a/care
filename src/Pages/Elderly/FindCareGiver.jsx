
import {
  Search,
  MapPin,
  Star,
  Clock,
  Phone,
  UserRound,
  HeartPulse,
  ShieldCheck,
  BriefcaseMedical,
  CalendarDays
} from "lucide-react";

import ElderlyLayout from "../../Components/ElderlyLayout";
import PageHeader from "../../Components/PageHeader";

export default function FindCaregivers() {
  return (
    <ElderlyLayout>

      <div className="space-y-7">

        <PageHeader
          badge="Caregiver Services"
          title="Find Your Caregiver"
          description="Browse experienced caregivers and choose someone who matches your care needs."
        />

        {/* Search Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <h2 className="mb-4 text-lg font-bold text-slate-800">
            Search Caregivers
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search caregiver name"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#16845b]"
              />
            </div>

            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#16845b]">
              <option>All Specializations</option>
              <option>Elderly Care</option>
              <option>Patient Care</option>
              <option>Personal Care</option>
              <option>Mobility Assistance</option>
            </select>

            <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#16845b]">
              <option>All Availability</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Day Shift</option>
              <option>Night Shift</option>
            </select>

          </div>
        </div>

        {/* Caregiver Count */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Available Caregivers
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose a trusted professional for your daily care.
            </p>
          </div>

          <span className="rounded-full bg-[#eaf6ee] px-4 py-2 text-sm font-semibold text-[#16845b]">
            6 Caregivers Found
          </span>
        </div>

        {/* Caregiver Cards */}
        <div className="grid gap-5 xl:grid-cols-2">

          {/* Caregiver 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex flex-wrap items-start gap-4">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Johnson"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    Sarah Johnson
                  </h3>
                  <ShieldCheck className="h-4 w-4 text-[#16845b]" />
                </div>

                <p className="mt-1 text-sm text-[#16845b]">
                  Certified Elderly Caregiver
                </p>

                <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-400">(48 Reviews)</span>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Available
              </span>

            </div>

            <div className="my-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">

              <div>
                <p className="text-xs text-slate-400">Experience</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  8 Years
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Availability</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Full Time
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5" />
                  Boston
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Starting Rate</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  $20 / Hour
                </p>
              </div>

            </div>

            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">
                SPECIALIZATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Elderly Care
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Medication Support
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Personal Care
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#16845b] py-3 text-sm font-semibold text-white transition hover:bg-[#116b49]">
              Appoint Caregiver
            </button>

          </div>

          {/* Caregiver 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex flex-wrap items-start gap-4">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="David Wilson"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    David Wilson
                  </h3>
                  <ShieldCheck className="h-4 w-4 text-[#16845b]" />
                </div>

                <p className="mt-1 text-sm text-[#16845b]">
                  Professional Patient Caregiver
                </p>

                <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-slate-400">(36 Reviews)</span>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Available
              </span>

            </div>

            <div className="my-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">

              <div>
                <p className="text-xs text-slate-400">Experience</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  6 Years
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Availability</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Part Time
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5" />
                  Cambridge
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Starting Rate</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  $18 / Hour
                </p>
              </div>

            </div>

            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">
                SPECIALIZATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Patient Care
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Mobility Support
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Daily Assistance
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#16845b] py-3 text-sm font-semibold text-white transition hover:bg-[#116b49]">
              Appoint Caregiver
            </button>

          </div>

          {/* Caregiver 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex flex-wrap items-start gap-4">

              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Emily Brown"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    Emily Brown
                  </h3>
                  <ShieldCheck className="h-4 w-4 text-[#16845b]" />
                </div>

                <p className="mt-1 text-sm text-[#16845b]">
                  Senior Care Specialist
                </p>

                <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-400">(52 Reviews)</span>
                </div>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Available
              </span>

            </div>

            <div className="my-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">

              <div>
                <p className="text-xs text-slate-400">Experience</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  10 Years
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Availability</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Full Time
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5" />
                  Boston
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Starting Rate</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  $22 / Hour
                </p>
              </div>

            </div>

            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">
                SPECIALIZATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Senior Care
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Dementia Care
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Health Monitoring
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#16845b] py-3 text-sm font-semibold text-white transition hover:bg-[#116b49]">
              Appoint Caregiver
            </button>

          </div>

          {/* Caregiver 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex flex-wrap items-start gap-4">

              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Michael Davis"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800">
                    Michael Davis
                  </h3>
                  <ShieldCheck className="h-4 w-4 text-[#16845b]" />
                </div>

                <p className="mt-1 text-sm text-[#16845b]">
                  Home Care Assistant
                </p>

                <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.7</span>
                  <span className="text-slate-400">(29 Reviews)</span>
                </div>
              </div>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                Limited Slots
              </span>

            </div>

            <div className="my-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">

              <div>
                <p className="text-xs text-slate-400">Experience</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  5 Years
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Availability</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Day Shift
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-700">
                  <MapPin className="h-3.5 w-3.5" />
                  Brookline
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Starting Rate</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  $19 / Hour
                </p>
              </div>

            </div>

            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">
                SPECIALIZATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Home Care
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Daily Living Support
                </span>
                <span className="rounded-lg bg-[#eaf6ee] px-3 py-1.5 text-xs text-[#16845b]">
                  Companionship
                </span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#16845b] py-3 text-sm font-semibold text-white transition hover:bg-[#116b49]">
              Appoint Caregiver
            </button>

          </div>

        </div>

        {/* Information */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#ccebd9] bg-[#eaf6ee] p-5">
          <HeartPulse className="mt-1 h-5 w-5 shrink-0 text-[#16845b]" />
          <div>
            <h3 className="font-semibold text-[#126b49]">
              Choose the right care for you
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Review each caregiver's experience, specialization and
              availability before making an appointment. You can contact
              your family member if you need help choosing.
            </p>
          </div>
        </div>

      </div>

    </ElderlyLayout>
  );
}
