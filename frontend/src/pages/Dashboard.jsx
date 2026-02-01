import { dashboardContents } from "../constants/contents";

function Dashboard() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">
          Find the AI tool that boosts your learning
        </h1>
        <p className="mt-3 text-gray-600">
          Unlock your potential with AI-powered tools designed to help you excel
          academically and achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dashboardContents.map((item, index) => (
          <div
            key={item.id ?? index}
            className="
              flex items-start gap-4 p-5
              bg-white border border-gray-200 rounded-2xl
              hover:shadow-md transition-shadow cursor-pointer
            "
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
