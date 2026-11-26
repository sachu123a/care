import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="bg-gradient-to-b from-[#eaf6ee] to-[#f6faf7] py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#16845b] shadow-sm">
            Contact CareConnect
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            We Are Here to Help Your Family
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Have questions about shared family accounts, caregiver verification, or subscription plans? Reach out anytime.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-bold text-slate-900">Phone Support</h2>
              <p className="mt-1 text-sm font-semibold text-[#16845b]">+1 (800) 555-2273</p>
              <p className="mt-1 text-xs text-slate-500">Available Monday – Sunday, 24/7 Care Desk</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-bold text-slate-900">Email Address</h2>
              <p className="mt-1 text-sm font-semibold text-[#16845b]">support@careconnect.health</p>
              <p className="mt-1 text-xs text-slate-500">Typical response within 2 business hours</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-bold text-slate-900">Head Office</h2>
              <p className="mt-1 text-sm text-slate-700">
                450 Wellness Avenue, Suite 200, Boston, MA 02115
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-[#16845b]" />
                <span>Mon – Sat: 8:00 AM – 8:00 PM EST</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
            <p className="mt-1 text-sm text-slate-600">
              Fill out the form below and our care coordination team will follow up shortly.
            </p>

            <form className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., David Miller"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., david.miller@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we support your family?"
                  className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Share details about your elderly care inquiry, caregiver application, or plan question..."
                  className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#16845b] focus:bg-white"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#116948]"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
