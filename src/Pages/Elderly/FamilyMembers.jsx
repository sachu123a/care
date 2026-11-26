import { Edit3, Eye, Mail, Phone, Plus, ShieldCheck, Trash2, UserPlus } from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function FamilyMembers() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="Shared Family Circle"
        title="Family Members"
        description="Manage family members connected to Margaret Miller's shared CareConnect account."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
          >
            <Plus className="h-4 w-4" />
            <span>Add Family Member</span>
          </button>
        }
      />

      {/* Family Members Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Primary Family Contact */}
        <div className="rounded-2xl border-2 border-[#16845b] bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16845b] text-lg font-bold text-white">
                DM
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">David Miller</h2>
                <p className="text-xs font-medium text-slate-500">Son</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#eaf6ee] px-2.5 py-1 text-[11px] font-bold text-[#16845b]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Primary Contact
            </span>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#16845b]" />
              <span>+1 (617) 555-0199</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#16845b]" />
              <span>david.miller@email.com</span>
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#f6faf7] py-2 text-xs font-semibold text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b]">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Family Member">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Remove Family Member">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Secondary Family Contact */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                RM
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Rachel Miller</h2>
                <p className="text-xs font-medium text-slate-500">Daughter</p>
              </div>
            </div>
            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-bold text-sky-700">
              Secondary Contact
            </span>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#16845b]" />
              <span>+1 (617) 555-0124</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#16845b]" />
              <span>rachel.miller@email.com</span>
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#f6faf7] py-2 text-xs font-semibold text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b]">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Family Member">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Remove Family Member">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Additional Family Member */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-lg font-bold text-white">
                RM
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Robert Miller</h2>
                <p className="text-xs font-medium text-slate-500">Spouse</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
              Family Member
            </span>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#16845b]" />
              <span>+1 (617) 555-0142</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#16845b]" />
              <span>robert.miller@email.com</span>
            </p>
          </div>

          <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
            <button type="button" className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#f6faf7] py-2 text-xs font-semibold text-slate-700 hover:bg-[#eaf6ee] hover:text-[#16845b]">
              <Eye className="h-3.5 w-3.5" />
              <span>View Details</span>
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:border-[#16845b] hover:text-[#16845b]" title="Edit Family Member">
              <Edit3 className="h-4 w-4" />
            </button>
            <button type="button" className="rounded-xl border border-slate-200 p-2 text-rose-600 hover:bg-rose-50" title="Remove Family Member">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Family Member Form */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <UserPlus className="h-5 w-5 text-[#16845b]" />
          <h2 className="text-lg font-bold text-slate-900">Add or Edit Family Member</h2>
        </div>

        <form className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Full Name</label>
            <input type="text" placeholder="e.g., Emily Miller" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Relationship</label>
            <input type="text" placeholder="e.g., Granddaughter" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Phone Number</label>
            <input type="tel" placeholder="+1 (617) 555-0115" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Email</label>
            <input type="email" placeholder="emily@email.com" className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-700">Designation</label>
            <select className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-3.5 py-2.5 text-sm outline-none focus:border-[#16845b]">
              <option>Primary Family Contact</option>
              <option>Secondary Family Contact</option>
              <option>Family Member</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <button type="button" className="rounded-xl bg-[#16845b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#116948]">
              Save Family Member
            </button>
          </div>
        </form>
      </div>
    </ElderlyLayout>
  );
}
