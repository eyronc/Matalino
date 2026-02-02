import React from "react";
import {
  examContents,
  customExamContents,
} from "../constants/contents";
import { Button } from "@/components/ui/button";

function Exams() {
  // Color mapping for each exam
  const examColors = {
    "DOST-SEI": {
      badge: "bg-blue-100",
      badgeText: "text-blue-600",
      badgeIcon: "text-blue-600",
      hoverBorder: "hover:border-blue-300",
      hoverShadow: "hover:shadow-blue-100/50",
      hoverText: "group-hover:text-blue-700",
      hoverButton: "group-hover:border-blue-500 group-hover:bg-blue-500",
      cornerAccent: "bg-blue-100",
      tag: "text-blue-700 bg-blue-50 border-blue-100"
    },
    "PMMA": {
      badge: "bg-amber-100",
      badgeText: "text-amber-700",
      badgeIcon: "text-amber-700",
      hoverBorder: "hover:border-amber-300",
      hoverShadow: "hover:shadow-amber-100/50",
      hoverText: "group-hover:text-amber-700",
      hoverButton: "group-hover:border-amber-600 group-hover:bg-amber-600",
      cornerAccent: "bg-amber-100",
      tag: "text-amber-800 bg-amber-50 border-amber-100"
    },
    "NSA": {
      badge: "bg-sky-100",
      badgeText: "text-sky-600",
      badgeIcon: "text-sky-600",
      hoverBorder: "hover:border-sky-300",
      hoverShadow: "hover:shadow-sky-100/50",
      hoverText: "group-hover:text-sky-700",
      hoverButton: "group-hover:border-sky-500 group-hover:bg-sky-500",
      cornerAccent: "bg-sky-100",
      tag: "text-sky-700 bg-sky-50 border-sky-100"
    },
    "UPCAT": {
      badge: "bg-red-100",
      badgeText: "text-red-900",
      badgeIcon: "text-red-900",
      hoverBorder: "hover:border-red-300",
      hoverShadow: "hover:shadow-red-100/50",
      hoverText: "group-hover:text-red-900",
      hoverButton: "group-hover:border-red-800 group-hover:bg-red-800",
      cornerAccent: "bg-red-100",
      tag: "text-red-900 bg-red-50 border-red-100"
    },
    "UPCAT Scholar Program": {
      badge: "bg-red-100",
      badgeText: "text-red-900",
      badgeIcon: "text-red-900",
      hoverBorder: "hover:border-red-300",
      hoverShadow: "hover:shadow-red-100/50",
      hoverText: "group-hover:text-red-900",
      hoverButton: "group-hover:border-red-800 group-hover:bg-red-800",
      cornerAccent: "bg-red-100",
      tag: "text-red-900 bg-red-50 border-red-100"
    },
    "DLSU": {
      badge: "bg-green-100",
      badgeText: "text-green-800",
      badgeIcon: "text-green-800",
      hoverBorder: "hover:border-green-400",
      hoverShadow: "hover:shadow-green-100/50",
      hoverText: "group-hover:text-green-800",
      hoverButton: "group-hover:border-green-700 group-hover:bg-green-700",
      cornerAccent: "bg-green-100",
      tag: "text-green-800 bg-green-50 border-green-100"
    },
    "FEU": {
      badge: "bg-emerald-100",
      badgeText: "text-emerald-600",
      badgeIcon: "text-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      hoverShadow: "hover:shadow-emerald-100/50",
      hoverText: "group-hover:text-emerald-700",
      hoverButton: "group-hover:border-emerald-500 group-hover:bg-emerald-500",
      cornerAccent: "bg-emerald-100",
      tag: "text-emerald-700 bg-emerald-50 border-emerald-100"
    }
  };

  // Default colors if exam not found in mapping
  const defaultColors = {
    badge: "bg-emerald-100",
    badgeText: "text-emerald-600",
    badgeIcon: "text-emerald-600",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-emerald-100/50",
    hoverText: "group-hover:text-emerald-700",
    hoverButton: "group-hover:border-emerald-500 group-hover:bg-emerald-500",
    cornerAccent: "bg-emerald-100",
    tag: "text-emerald-700 bg-emerald-50 border-emerald-100"
  };

  const getExamColors = (examName) => {
    return examColors[examName] || defaultColors;
  };

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm font-medium text-emerald-700">
            Exam Preparation Hub
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Entrance exams and{" "}
          <span className="text-emerald-600">
            scholarships
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Browse official entrance exams and AI-generated personalized
          reviewers.
        </p>
      </div>

      {/* ================= OFFICIAL EXAMS ================= */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Official exams
            </h2>
            <p className="mt-2 text-gray-600">
              Standardized exams and scholarship assessments in the Philippines.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span>{examContents.length} exams</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examContents.map((exam, index) => {
            const colors = getExamColors(exam.name);
            return (
              <div
                key={exam.id ?? index}
                className={`
                  group relative
                  bg-white border-2 border-gray-200 rounded-3xl
                  p-6 flex flex-col
                  ${colors.hoverBorder} hover:shadow-2xl ${colors.hoverShadow}
                  transition-all duration-300
                  overflow-hidden
                  cursor-pointer
                `}
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.cornerAccent} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Official badge */}
                <div className="relative flex items-center gap-2 mb-4">
                  <div className={`flex items-center justify-center w-8 h-8 ${colors.badge} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className={`w-4 h-4 ${colors.badgeIcon}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className={`text-xs font-bold ${colors.badgeText} uppercase tracking-wider`}>
                    Official
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className={`text-lg font-bold text-gray-900 ${colors.hoverText} transition-colors duration-300`}>
                    {exam.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                    {exam.description}
                  </p>
                </div>

                {/* Coverage tags */}
                {exam.coverage && exam.coverage.length > 0 && (
                  <div className="relative flex flex-wrap gap-2 mt-5">
                    {exam.coverage.slice(0, 3).map((subject, i) => (
                      <span
                        key={i}
                        className={`text-xs font-semibold ${colors.tag} px-3 py-1.5 rounded-full border`}
                      >
                        {subject}
                      </span>
                    ))}
                    {exam.coverage.length > 3 && (
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                        +{exam.coverage.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <div className="relative mt-6">
                  <Button
                    variant="outline"
                    className={`w-full rounded-full px-6 py-5 border-2 border-gray-200 ${colors.hoverButton} group-hover:text-white transition-all duration-300 font-semibold`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore exam
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CUSTOM (AI) EXAMS ================= */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                AI-Powered
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Custom exam reviewers
            </h2>
            <p className="mt-2 text-gray-600">
              AI-generated reviewers based on your target exam and weak areas.
            </p>
          </div>
          {customExamContents.length > 0 && (
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{customExamContents.length} reviewers</span>
            </div>
          )}
        </div>

        {customExamContents.length === 0 ? (
          <div className="relative overflow-hidden bg-purple-50 border-2 border-dashed border-purple-200 rounded-3xl p-12 text-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
                <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No custom reviewers yet
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Generate a personalized exam reviewer from the dashboard to see it appear here.
              </p>
              <Button className="rounded-full px-8 py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-500/30">
                <span className="flex items-center gap-2">
                  Go to Dashboard
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customExamContents.map((exam, index) => (
              <div
                key={exam.id ?? index}
                className="
                  group relative
                  bg-white
                  border-2 border-purple-200 rounded-3xl
                  p-6 flex flex-col
                  hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50
                  transition-all duration-300
                  overflow-hidden
                  cursor-pointer
                "
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                {/* Decorative gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"></div>

                {/* AI badge */}
                <div className="relative flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-500/50">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                    </svg>
                    AI-Generated
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {exam.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                    {exam.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative flex items-center justify-between mt-6 pt-6 border-t border-purple-100">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {exam.createdAt}
                  </span>

                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-2 border-2 border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 font-semibold text-sm"
                  >
                    Continue
                    <svg className="w-3.5 h-3.5 ml-1 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Exams;