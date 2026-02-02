import { dashboardContents } from "../constants/contents";

function Dashboard() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-indigo-700">
            AI-Powered Learning
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Find the AI tool that{" "}
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            boosts your learning
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Unlock your potential with AI-powered tools designed to help you excel
          academically and achieve your goals.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardContents.map((item, index) => (
          <div
            key={item.id ?? index}
            className="
              group relative flex items-start gap-5 p-6
              bg-white border border-gray-200 rounded-3xl
              hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50
              transition-all duration-300 cursor-pointer
              overflow-hidden
            "
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-3xl"></div>
            
            {/* Icon Container */}
            <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <img
                src={item.icon}
                alt={item.name}
                className="w-7 h-7 object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="relative flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.description}
              </p>
              
              {/* Arrow Icon */}
              <div className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore</span>
                <svg 
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          Can't find what you're looking for?{" "}
          <button className="text-indigo-600 hover:text-indigo-700 font-medium underline decoration-2 underline-offset-2">
            Request a feature
          </button>
        </p>
      </div>
    </section>
  );
}

export default Dashboard;