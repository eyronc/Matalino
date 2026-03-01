import React from "react";
import { useQuery } from "@tanstack/react-query";
import LessonContents from "../components/subject-generated-contents";

function Lessons() {
   const { isPending, error, data } = useQuery({
    queryKey: ['lessonsData'],
    queryFn: () =>
      fetch('http://localhost:8081/api/courses/all').then((res) =>
        res.json(),
      ),
  })
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto space-y-20">
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
      <LessonContents data={data}/>
    </section>
  );
}

export default Lessons;