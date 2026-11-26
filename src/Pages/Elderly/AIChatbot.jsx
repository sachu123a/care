import { Bot, Send, Sparkles, User } from 'lucide-react';
import ElderlyLayout from '../../Components/ElderlyLayout';
import PageHeader from '../../Components/PageHeader';

export default function AIChatbot() {
  return (
    <ElderlyLayout>
      <PageHeader
        badge="24/7 Care Guide"
        title="AI Care Assistant"
        description="Ask helpful questions about your daily care schedule, doctor visits, medications, caregiver, and emergency contacts."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Suggested Questions Panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-[#16845b]">
            <Sparkles className="h-5 w-5" />
            <h2 className="text-base font-bold text-slate-900">Suggested Questions</h2>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Quick topics tailored for Margaret Miller&apos;s care profile:
          </p>

          <div className="mt-4 space-y-2.5">
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#16845b] hover:bg-[#eaf6ee] hover:text-[#16845b]"
            >
              What is my next care schedule?
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#16845b] hover:bg-[#eaf6ee] hover:text-[#16845b]"
            >
              When is my next medical visit?
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#16845b] hover:bg-[#eaf6ee] hover:text-[#16845b]"
            >
              How can I contact my caregiver?
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#16845b] hover:bg-[#eaf6ee] hover:text-[#16845b]"
            >
              What medicines should I remember?
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 bg-[#f6faf7] px-4 py-3 text-left text-sm font-medium text-slate-800 transition hover:border-[#16845b] hover:bg-[#eaf6ee] hover:text-[#16845b]"
            >
              What are my emergency contacts?
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
          {/* Chat Header */}
          <div className="flex items-center gap-3 border-b border-slate-100 bg-[#eaf6ee]/60 px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16845b] text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">CareConnect Assistant</h2>
              <p className="text-xs text-[#16845b]">Friendly Elder Care Helper • Online</p>
            </div>
          </div>

          {/* Chat Message Bubbles */}
          <div className="space-y-5 p-6">
            {/* Bot Welcome Message */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#16845b] text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-lg rounded-2xl rounded-tl-none bg-[#eaf6ee] p-4 text-sm leading-relaxed text-slate-800">
                <p className="font-semibold text-[#16845b]">Hello Margaret &amp; Miller Family!</p>
                <p className="mt-1">
                  I am your CareConnect Care Assistant. How can I help you today? You can ask me about today&apos;s care routine, upcoming doctor visits, medicines, or emergency phone numbers.
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start justify-end gap-3">
              <div className="max-w-md rounded-2xl rounded-tr-none bg-[#16845b] p-4 text-sm text-white">
                What is my next care schedule and when is my next medical visit?
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
                <User className="h-4 w-4" />
              </div>
            </div>

            {/* Bot Reply */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#16845b] text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-lg rounded-2xl rounded-tl-none bg-[#eaf6ee] p-4 text-sm leading-relaxed text-slate-800">
                <p>
                  <span className="font-bold">Next Care Schedule:</span> Today at <span className="font-semibold">2:30 PM – 3:30 PM</span> for an Afternoon Mobility Walk &amp; Hydration Check with Sarah Jenkins, RN.
                </p>
                <p className="mt-2">
                  <span className="font-bold">Next Medical Visit:</span> <span className="font-semibold">November 28, 2026 at 10:30 AM</span> with Dr. Alan Patel at Boston Heart Clinic.
                </p>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <form className="flex items-center gap-3 border-t border-slate-100 bg-[#f6faf7] p-4">
            <input
              type="text"
              placeholder="Type your question here..."
              className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#16845b]"
            />
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[#16845b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#116948]"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </ElderlyLayout>
  );
}
