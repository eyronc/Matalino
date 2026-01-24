import React from "react";
import {
  examContents,
  customExamContents,
} from "../constants/contents";
import { Button } from "@/components/ui/button";

function Exams() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-900">
          Entrance exams and scholarships
        </h1>
        <p className="mt-2 text-gray-600">
          Browse official entrance exams and AI-generated personalized
          reviewers.
        </p>
      </div>

      {/* ================= OFFICIAL EXAMS ================= */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Official exams
          </h2>
          <p className="mt-1 text-gray-600">
            Standardized exams and scholarship assessments in the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examContents.map((exam, index) => (
            <div
              key={exam.id ?? index}
              className="
                bg-white border border-gray-200 rounded-2xl
                p-6 flex flex-col
                hover:shadow-md transition-shadow
              "
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {exam.name}
              </h3>

              <p className="text-sm text-gray-600 mt-2 flex-1">
                {exam.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exam.coverage?.map((subject, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="mt-6 w-fit rounded-full px-6"
              >
                Explore
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CUSTOM (AI) EXAMS ================= */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Custom exam reviewers
          </h2>
          <p className="mt-1 text-gray-600">
            AI-generated reviewers based on your target exam and weak areas.
          </p>
        </div>

        {customExamContents.length === 0 ? (
          <p className="text-gray-500">
            No custom exam reviewers yet. Generate one from the dashboard to
            view it here.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customExamContents.map((exam, index) => (
              <div
                key={exam.id ?? index}
                className="
                  bg-white border border-gray-200 rounded-2xl
                  p-6 flex flex-col
                  hover:shadow-md transition-shadow
                "
              >
                {/* AI badge */}
                <span className="text-xs font-semibold uppercase text-indigo-600">
                  AI-generated
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mt-3">
                  {exam.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2 flex-1">
                  {exam.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-gray-400">
                    Generated {exam.createdAt}
                  </span>

                  <Button
                    variant="outline"
                    className="rounded-full px-6"
                  >
                    Continue
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
