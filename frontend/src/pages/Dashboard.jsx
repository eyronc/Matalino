import { dashboardContents } from "../constants/contents";

// Assign accent colors per card index for visual variety
const CARD_ACCENTS = [
  { dot: "bg-rose-500",    hover: "group-hover:bg-rose-50",    tag: "bg-rose-50 text-rose-600",    num: "text-rose-400" },
  { dot: "bg-sky-500",     hover: "group-hover:bg-sky-50",     tag: "bg-sky-50 text-sky-600",      num: "text-sky-400" },
  { dot: "bg-violet-500",  hover: "group-hover:bg-violet-50",  tag: "bg-violet-50 text-violet-600",num: "text-violet-400" },
  { dot: "bg-amber-500",   hover: "group-hover:bg-amber-50",   tag: "bg-amber-50 text-amber-600",  num: "text-amber-400" },
  { dot: "bg-emerald-500", hover: "group-hover:bg-emerald-50", tag: "bg-emerald-50 text-emerald-600", num: "text-emerald-400" },
  { dot: "bg-fuchsia-500", hover: "group-hover:bg-fuchsia-50", tag: "bg-fuchsia-50 text-fuchsia-600", num: "text-fuchsia-400" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="px-6 sm:px-10 pt-14 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400">
                AI-Powered Learning
              </span>
            </div>

            {/* Big heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Your <br />
              <span className="italic font-normal text-gray-400">Learning</span>{" "}
              <br />
              Toolkit.
            </h1>
          </div>

          {/* Right side descriptor */}
          <div className="max-w-xs">
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              AI tools designed to help you excel academically and achieve your goals — all in one place.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors duration-200">
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Subline stats bar */}
        <div className="flex flex-wrap gap-6 pt-5 text-xs text-gray-400 font-medium">
          <span><strong className="text-gray-700 text-sm">{dashboardContents.length}</strong> tools available</span>
          <span className="text-gray-200">|</span>
          <span><strong className="text-gray-700 text-sm">Free</strong> to use</span>
          <span className="text-gray-200">|</span>
          <span><strong className="text-gray-700 text-sm">AI-assisted</strong> learning</span>
        </div>
      </header>

      {/* ── Cards Grid ─────────────────────────────────────── */}
      <main className="px-6 sm:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {dashboardContents.map((item, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id ?? index}
                className={`group relative bg-white rounded-3xl p-6 border border-gray-100 cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-1 overflow-hidden ${accent.hover}`}
              >
                {/* Top row: number + dot accent */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-black tracking-widest ${accent.num} transition-colors`}>
                    {num}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${accent.dot} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${accent.tag.split(" ")[0]} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="mb-6">
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-800 transition-colors"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${accent.tag} transition-colors`}>
                    Explore
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Subtle bottom line accent */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${accent.dot} group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
              </div>
            );
          })}
        </div>

        {/* ── Footer CTA ──────────────────────────────────── */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400">
            Can't find what you're looking for?
          </p>
          <button className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-700 transition-colors">
              Request a feature
            </span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;