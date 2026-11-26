import { CheckCircle2, Clock, Eye, FileText, Mail, Phone, ShieldCheck, XCircle } from 'lucide-react';
import AdminLayout from '../../Components/AdminLayout';
import PageHeader from '../../Components/PageHeader';

export default function CaregiverApprovals() {
  return (
    <AdminLayout>
      <PageHeader
        badge="Verification Center"
        title="Caregiver Verification & Approvals"
        description="Review caregiver qualifications, uploaded certificates, and approve or reject applications before platform access."
      />

      {/* Summary Tabs Overview */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-amber-800">Pending Applications</span>
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">4 Applications</p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-[#eaf6ee] p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-[#16845b]">Approved Caregivers</span>
            <CheckCircle2 className="h-5 w-5 text-[#16845b]" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">214 Approved</p>
        </div>

        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-rose-700">Rejected Applications</span>
            <XCircle className="h-5 w-5 text-rose-600" />
          </div>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">9 Rejected</p>
        </div>
      </div>

      {/* Section 1: Pending Applications */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Pending Applications (Awaiting Review)</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Application Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#16845b] text-xl font-bold text-white">
                  PN
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Priya Nair, RN</h3>
                  <p className="text-xs font-semibold text-[#16845b]">B.Sc Nursing • 9 Years Experience</p>
                  <p className="mt-0.5 text-xs text-slate-500">Applied: Nov 24, 2026</p>
                </div>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                Pending Verification
              </span>
            </div>

            <div className="mt-5 grid gap-2 rounded-xl bg-[#f6faf7] p-4 text-xs text-slate-700 sm:grid-cols-2">
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#16845b]" /> priya.nair@careconnect.health
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#16845b]" /> +1 (617) 555-0211
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold">Specialization:</span> Dementia, Alzheimer&apos;s &amp; Memory Care
              </p>
            </div>

            {/* Uploaded Certificate Preview */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-dashed border-[#16845b]/40 bg-[#eaf6ee]/60 p-3.5">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-[#16845b]" />
                <div>
                  <p className="text-xs font-bold text-slate-900">RN_State_License_PriyaNair.pdf</p>
                  <p className="text-[11px] text-slate-500">Verified format • 1.4 MB • Uploaded Nov 24</p>
                </div>
              </div>
              <button type="button" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm">
                <Eye className="h-3.5 w-3.5" />
                <span>Preview</span>
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Approve Caregiver</span>
              </button>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700"
              >
                <XCircle className="h-4 w-4" />
                <span>Reject</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
            </div>
          </div>

          {/* Application Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-700 text-xl font-bold text-white">
                  MB
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Michael Brooks, CNA</h3>
                  <p className="text-xs font-semibold text-[#16845b]">Certified Nursing Assistant • 6 Years Exp</p>
                  <p className="mt-0.5 text-xs text-slate-500">Applied: Nov 25, 2026</p>
                </div>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                Pending Verification
              </span>
            </div>

            <div className="mt-5 grid gap-2 rounded-xl bg-[#f6faf7] p-4 text-xs text-slate-700 sm:grid-cols-2">
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#16845b]" /> m.brooks@careconnect.health
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#16845b]" /> +1 (617) 555-0248
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold">Specialization:</span> Post-Surgery &amp; Mobility Recovery
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-dashed border-[#16845b]/40 bg-[#eaf6ee]/60 p-3.5">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-[#16845b]" />
                <div>
                  <p className="text-xs font-bold text-slate-900">CNA_Certificate_MichaelBrooks.pdf</p>
                  <p className="text-[11px] text-slate-500">Verified format • 980 KB • Uploaded Nov 25</p>
                </div>
              </div>
              <button type="button" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16845b] shadow-sm">
                <Eye className="h-3.5 w-3.5" />
                <span>Preview</span>
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Approve Caregiver</span>
              </button>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700"
              >
                <XCircle className="h-4 w-4" />
                <span>Reject</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Approved Caregivers & Rejected Applications */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#16845b]" />
            <h2 className="text-lg font-bold text-slate-900">Recently Approved Caregivers</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Sarah Jenkins, RN</p>
                <p className="text-xs text-slate-500">Geriatric &amp; Cardiac Care • Approved Oct 18, 2026</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Approved
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f6faf7] p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Daniel Cooper, CNA</p>
                <p className="text-xs text-slate-500">Mobility Support • Approved Nov 03, 2026</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Approved
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-rose-600" />
            <h2 className="text-lg font-bold text-slate-900">Rejected Applications</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Kevin Reed</p>
                <p className="text-xs text-slate-500">Expired certificate uploaded • Reviewed Nov 14, 2026</p>
              </div>
              <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">
                Rejected
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900">Laura Gomez</p>
                <p className="text-xs text-slate-500">Incomplete nursing license documentation • Nov 09, 2026</p>
              </div>
              <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">
                Rejected
              </span>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
