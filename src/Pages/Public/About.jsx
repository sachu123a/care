import { Award, Compass, Eye, Heart, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import familyCareImg from '../../assets/family-care.jpg';
import heroCareImg from '../../assets/hero-care.jpg';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6faf7] text-slate-800">
      <Navbar />

      <section className="bg-gradient-to-b from-[#eaf6ee] to-[#f6faf7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#16845b] shadow-sm">
                About CareConnect
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                Dignity, Safety, and Connection in Every Stage of Aging
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                CareConnect was created with a simple belief: elderly care works best when older adults, their families, and qualified caregivers stay connected through one clear, compassionate digital platform.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#116948]"
                >
                  Join CareConnect
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#16845b] hover:text-[#16845b]"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
              <img
                src={familyCareImg}
                alt="Doctor and family supporting an elderly loved one"
                className="h-80 w-full rounded-xl object-cover sm:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To simplify elderly care management by uniting shared family access, verified professional caregivers, medical visit coordination, and instant emergency preparedness in an intuitive, senior-friendly platform.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ee] text-[#16845b]">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              A world where every senior ages with comfort and autonomy, every caregiver feels supported with clear schedules, and every family has reassuring transparency over their loved one’s well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
              Our Core Values
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              What Guides Every Decision We Make
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-6">
              <Heart className="h-8 w-8 text-[#16845b]" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">Compassion</h3>
              <p className="mt-2 text-sm text-slate-600">
                Treating every elderly person with warmth, patience, and human dignity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-6">
              <ShieldCheck className="h-8 w-8 text-[#16845b]" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">Trust &amp; Safety</h3>
              <p className="mt-2 text-sm text-slate-600">
                Strict caregiver verification and transparent admin oversight on every profile.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-6">
              <Users className="h-8 w-8 text-[#16845b]" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">Family Unity</h3>
              <p className="mt-2 text-sm text-slate-600">
                One shared family account so relatives stay informed without friction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f6faf7] p-6">
              <Award className="h-8 w-8 text-[#16845b]" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">Accessibility</h3>
              <p className="mt-2 text-sm text-slate-600">
                High-contrast text, spacious layouts, and simple navigation built for seniors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elderly Care Matters */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={heroCareImg}
              alt="Smiling caregiver helping senior couple"
              className="h-72 w-full object-cover sm:h-80"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eaf6ee] px-3.5 py-1 text-xs font-semibold text-[#16845b]">
              <HeartHandshake className="h-4 w-4" />
              <span>Why Elderly Care Matters</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Caring for Those Who Cared for Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              As populations age, millions of families navigate complex daily routines—medication timing, specialist appointments, mobility assistance, and unexpected emergencies. Without coordinated support, seniors risk missed checkups and isolation while families experience overwhelming stress.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              CareConnect bridges that gap with structured care schedules, vetted professionals, shared health records, and immediate emergency visibility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
