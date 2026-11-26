import { HeartHandshake, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-white">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                Care<span className="text-[#16845b]">Connect</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Connecting elderly individuals, families, verified caregivers, and care administrators on one trusted healthcare platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/" className="transition hover:text-[#16845b]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-[#16845b]">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-[#16845b]">Our Services</Link>
              </li>
              <li>
                <Link to="/subscription" className="transition hover:text-[#16845b]">Subscription Plans</Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-[#16845b]">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Portals
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <Link to="/login" className="transition hover:text-[#16845b]">Member Login</Link>
              </li>
              <li>
                <Link to="/register" className="transition hover:text-[#16845b]">Create Account</Link>
              </li>
              <li>
                <Link to="/elderly/dashboard" className="transition hover:text-[#16845b]">Elderly &amp; Family Portal</Link>
              </li>
              <li>
                <Link to="/caregiver/dashboard" className="transition hover:text-[#16845b]">Caregiver Portal</Link>
              </li>
              <li>
                <Link to="/admin/dashboard" className="transition hover:text-[#16845b]">Admin Portal</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>+1 (800) 555-2273</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>support@careconnect.health</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#16845b]" />
                <span>450 Wellness Avenue, Suite 200, Boston, MA 02115</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; 2026 CareConnect Healthcare Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-[#16845b]">Privacy Policy</Link>
            <Link to="/services" className="hover:text-[#16845b]">Care Standards</Link>
            <Link to="/contact" className="hover:text-[#16845b]">24/7 Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
