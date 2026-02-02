import React from "react";
import { lessonsContents, customLessons } from "../constants/contents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Lessons() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-full mb-6">
          <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          <span className="text-sm font-medium text-indigo-700">
            Your Learning Hub
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Learning{" "}
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            pathways
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Explore curated pathways and AI-generated lessons tailored to your
          learning journey.
        </p>
      </div>

      {/* ================= DEFAULT PATHWAYS ================= */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Default pathways
            </h2>
            <p className="mt-2 text-gray-600">
              Curated learning paths covering essential topics and skills.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span>{lessonsContents.length} pathways</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessonsContents.map((lesson, index) => (
            <div
              key={lesson.id ?? index}
              className="
                group relative
                bg-white border border-gray-200 rounded-3xl
                p-7 flex flex-col
                hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-all duration-300 rounded-3xl pointer-events-none"></div>

              {/* Pathway badge */}
              <div className="relative flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                  Pathway {index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="relative flex justify-center my-6 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-indigo-400/20 blur-2xl rounded-full"></div>
                <img
                  src={lesson.icon}
                  alt={lesson.name}
                  className="relative w-36 h-36 object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {lesson.name}
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed flex-1 line-clamp-3">
                  {lesson.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative mt-6">
                <Button
                  variant="outline"
                  className="w-full rounded-full px-6 py-5 border-2 border-gray-200 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 font-semibold"
                >
                  <Link to="/study" target="_blank" className="flex items-center justify-center gap-2">
                    Explore pathway
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CUSTOM (AI) LESSONS ================= */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                AI-Powered
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Custom lessons
            </h2>
            <p className="mt-2 text-gray-600">
              Lessons generated by AI based on your goals and preferences.
            </p>
          </div>
          {customLessons.length > 0 && (
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{customLessons.length} lessons</span>
            </div>
          )}
        </div>

        {customLessons.length === 0 ? (
          <div className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-dashed border-indigo-200 rounded-3xl p-12 text-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
                <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No custom lessons yet
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Generate a personalized lesson from the dashboard to see it appear here.
              </p>
              <Button className="rounded-full px-8 py-5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/50">
                <Link to="/" className="flex items-center gap-2">
                  Go to Dashboard
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customLessons.map((lesson, index) => (
              <div
                key={lesson.id ?? index}
                className="
                  group relative
                  bg-linear-to-br from-white to-indigo-50/30
                  border-2 border-indigo-100 rounded-3xl
                  p-7 flex flex-col
                  hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-200/50
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                {/* AI badge */}
                <div className="relative flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/50">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                    </svg>
                    AI-Generated
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                    {lesson.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                    {lesson.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative flex items-center justify-between mt-6 pt-6 border-t border-indigo-100">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lesson.createdAt}
                  </span>

                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 border-2 border-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 font-semibold text-sm"
                  >
                    Continue
                    <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Lessons;