
import {
  FileCheck,
  UserRound,
  BriefcaseMedical,
  Upload,
  ShieldCheck,
  Clock,
  Info,
  CheckCircle2,
  FileText
} from "lucide-react";

import CaregiverLayout from "../../Components/CaregiverLayout";
import PageHeader from "../../Components/PageHeader";

export default function Verification() {
  return (
    <CaregiverLayout>
      <div className="min-h-screen space-y-6 bg-[#f6faf7] p-4 md:p-8">

        <PageHeader
          badge="Caregiver Verification"
          title="Professional Verification"
          description="Submit your personal and professional details for admin verification."
        />

        {/* Verification Status */}
        <div className="flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
              <Clock size={24} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                Verification Status
              </h2>
              <p className="text-sm text-gray-600">
                Your professional details have not been submitted yet.
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-amber-800">
            Not Submitted
          </span>
        </div>

        {/* Information */}
        <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <Info className="mt-1 shrink-0 text-blue-600" size={20} />

          <p className="text-sm leading-6 text-blue-800">
            Please provide accurate information and upload the required
            documents. The admin team will review your details before
            approving your caregiver account.
          </p>
        </div>

        {/* Personal Information */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">

          <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="rounded-xl bg-green-100 p-3 text-green-700">
              <UserRound size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Personal Information
              </h2>
              <p className="text-sm text-gray-500">
                Enter your basic personal details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Date of Birth *
              </label>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Address *
              </label>
              <textarea
                rows="3"
                placeholder="Enter your complete address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              ></textarea>
            </div>

          </div>
        </div>

        {/* Professional Information */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">

          <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="rounded-xl bg-green-100 p-3 text-green-700">
              <BriefcaseMedical size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Professional Information
              </h2>
              <p className="text-sm text-gray-500">
                Tell us about your qualifications and experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Qualification *
              </label>
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-green-600">
                <option value="">Select Qualification</option>
                <option>GNM Nursing</option>
                <option>BSc Nursing</option>
                <option>MSc Nursing</option>
                <option>Caregiver Certificate</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-green-600">
                <option value="">Select Specialization</option>
                <option>Elderly Care</option>
                <option>Patient Care</option>
                <option>Home Nursing</option>
                <option>Mobility Assistance</option>
                <option>Dementia Care</option>
                <option>General Caregiving</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Years of Experience *
              </label>
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-green-600">
                <option value="">Select Experience</option>
                <option>Fresher</option>
                <option>Less than 1 year</option>
                <option>1 - 3 years</option>
                <option>3 - 5 years</option>
                <option>5 - 10 years</option>
                <option>Above 10 years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Previous Workplace
              </label>
              <input
                type="text"
                placeholder="Enter previous hospital or workplace"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Professional Description
              </label>
              <textarea
                rows="4"
                placeholder="Describe your caregiving skills and experience..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600"
              ></textarea>
            </div>

          </div>
        </div>

        {/* Document Upload */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">

          <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="rounded-xl bg-green-100 p-3 text-green-700">
              <FileCheck size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Document Verification
              </h2>
              <p className="text-sm text-gray-500">
                Upload documents to verify your identity and qualifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Profile Photo */}
            <div className="rounded-xl border border-dashed border-gray-300 p-5">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <UserRound size={20} />
                <h3 className="font-semibold">Profile Photo *</h3>
              </div>

              <p className="mb-4 text-sm text-gray-500">
                Upload a recent passport-size photograph.
              </p>

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 hover:bg-green-100">
                <Upload size={18} />
                Choose Photo
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* ID Proof */}
            <div className="rounded-xl border border-dashed border-gray-300 p-5">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <ShieldCheck size={20} />
                <h3 className="font-semibold">Government ID Proof *</h3>
              </div>

              <p className="mb-4 text-sm text-gray-500">
                Upload Aadhaar, PAN card, or another valid ID.
              </p>

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 hover:bg-green-100">
                <Upload size={18} />
                Choose ID Document
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
              </label>
            </div>

            {/* Qualification Certificate */}
            <div className="rounded-xl border border-dashed border-gray-300 p-5">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <FileText size={20} />
                <h3 className="font-semibold">Qualification Certificate *</h3>
              </div>

              <p className="mb-4 text-sm text-gray-500">
                Upload your nursing or caregiver qualification certificate.
              </p>

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 hover:bg-green-100">
                <Upload size={18} />
                Choose Certificate
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
              </label>
            </div>

            {/* Experience Certificate */}
            <div className="rounded-xl border border-dashed border-gray-300 p-5">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <BriefcaseMedical size={20} />
                <h3 className="font-semibold">Experience Certificate</h3>
              </div>

              <p className="mb-4 text-sm text-gray-500">
                Upload your previous work experience certificate, if available.
              </p>

              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 hover:bg-green-100">
                <Upload size={18} />
                Choose Certificate
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
              </label>
            </div>

          </div>

          <p className="mt-5 text-xs text-gray-500">
            Accepted formats: PDF, JPG, JPEG and PNG.
          </p>
        </div>

        {/* Declaration */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-7">

          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Declaration
          </h2>

          <label className="flex items-start gap-3 text-sm leading-6 text-gray-600">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-green-600"
            />

            <span>
              I confirm that all the information and documents provided
              above are genuine and accurate. I understand that the admin
              team will review my application before verification approval.
            </span>
          </label>

        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-end gap-3 sm:flex-row">

          <button
            type="reset"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Clear Form
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#16845b] px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            <CheckCircle2 size={19} />
            Submit for Verification
          </button>

        </div>

        {/* Admin Review Note */}
        <div className="rounded-2xl bg-[#eaf6ee] p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-green-700" size={22} />

            <div>
              <h3 className="font-semibold text-green-900">
                Admin Review Process
              </h3>
              <p className="mt-1 text-sm leading-6 text-green-800">
                After submitting your details, the admin team will review
                your documents and professional information. Your
                verification status will be updated once the review is
                completed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </CaregiverLayout>
  );
}
