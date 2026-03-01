import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// ─── Mock data (replace with real data source) ───────────────────────────────
const defaultNotes = [
  {
    id: 1,
    title: "UPCAT Review — Science",
    subject: "Biology",
    preview: "Mitosis vs meiosis: Mitosis produces two identical daughter cells for growth and repair. Meiosis produces four genetically diverse cells for sexual reproduction...",
    updatedAt: "2 hours ago",
    words: 342,
    color: "blue",
  },
  {
    id: 2,
    title: "Math Formulas — Algebra",
    subject: "Mathematics",
    preview: "Quadratic formula: x = (−b ± √(b²−4ac)) / 2a. Discriminant: if b²−4ac > 0, two real roots; = 0, one real root; < 0, no real roots...",
    updatedAt: "Yesterday",
    words: 215,
    color: "emerald",
  },
  {
    id: 3,
    title: "Philippine History Timeline",
    subject: "Social Studies",
    preview: "Pre-colonial period → Spanish colonization (1565) → American period (1898) → Commonwealth (1935) → WWII Japanese occupation → Independence (1946)...",
    updatedAt: "3 days ago",
    words: 580,
    color: "amber",
  },
  {
    id: 4,
    title: "English — Literary Devices",
    subject: "English",
    preview: "Metaphor, simile, personification, hyperbole, alliteration, onomatopoeia, irony, foreshadowing, flashback, symbolism — with examples from Philippine literature...",
    updatedAt: "1 week ago",
    words: 460,
    color: "rose",
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────
const NOTE_COLORS = {
  blue: {
    dot: "bg-sky-500",
    badge: "bg-sky-50 text-sky-700 border-sky-100",
    hoverBorder: "hover:border-sky-300",
    hoverShadow: "hover:shadow-sky-100/50",
    hoverText: "group-hover:text-sky-700",
    hoverBtn: "group-hover:border-sky-500 group-hover:bg-sky-500",
    corner: "bg-sky-100",
    tag: "bg-sky-50 text-sky-700 border-sky-100",
    line: "from-sky-400 to-sky-600",
  },
  emerald: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-emerald-100/50",
    hoverText: "group-hover:text-emerald-700",
    hoverBtn: "group-hover:border-emerald-500 group-hover:bg-emerald-500",
    corner: "bg-emerald-100",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-100",
    line: "from-emerald-400 to-emerald-600",
  },
  amber: {
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    hoverBorder: "hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-100/50",
    hoverText: "group-hover:text-amber-700",
    hoverBtn: "group-hover:border-amber-500 group-hover:bg-amber-500",
    corner: "bg-amber-100",
    tag: "bg-amber-50 text-amber-700 border-amber-100",
    line: "from-amber-400 to-amber-600",
  },
  rose: {
    dot: "bg-rose-500",
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    hoverBorder: "hover:border-rose-300",
    hoverShadow: "hover:shadow-rose-100/50",
    hoverText: "group-hover:text-rose-700",
    hoverBtn: "group-hover:border-rose-500 group-hover:bg-rose-500",
    corner: "bg-rose-100",
    tag: "bg-rose-50 text-rose-700 border-rose-100",
    line: "from-rose-400 to-rose-600",
  },
  violet: {
    dot: "bg-violet-500",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    hoverBorder: "hover:border-violet-300",
    hoverShadow: "hover:shadow-violet-100/50",
    hoverText: "group-hover:text-violet-700",
    hoverBtn: "group-hover:border-violet-500 group-hover:bg-violet-500",
    corner: "bg-violet-100",
    tag: "bg-violet-50 text-violet-700 border-violet-100",
    line: "from-violet-400 to-violet-600",
  },
};

const AI_COLORS = ["blue", "emerald", "amber", "rose", "violet"];

// ─── Note Card ────────────────────────────────────────────────────────────────
function NoteCard({ note, colorKey, isAI = false }) {
  const c = NOTE_COLORS[colorKey] || NOTE_COLORS.blue;

  return (
    <div
      className={`
        group relative
        bg-white border-2 border-gray-200 rounded-3xl
        p-6 flex flex-col
        ${c.hoverBorder} hover:shadow-2xl ${c.hoverShadow}
        transition-all duration-300
        overflow-hidden cursor-pointer
      `}
    >
      {/* Shimmer on hover */}
      {isAI && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      )}

      {/* Decorative top line (AI notes) */}
      {isAI && (
        <div className={`absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r ${c.line}`} />
      )}

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${c.corner} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Header row */}
      <div className="relative flex items-start justify-between mb-4 gap-3">
        <div className="flex items-center gap-2">
          {isAI ? (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border bg-linear-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-300/40`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
              </svg>
              AI Note
            </span>
          ) : (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${c.badge}`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
              My Note
            </span>
          )}
        </div>
        {/* Dot indicator */}
        <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${c.dot} opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300`} />
      </div>

      {/* Title + subject */}
      <div className="relative flex-1 mb-4">
        <h3 className={`text-lg font-bold text-gray-900 ${c.hoverText} leading-snug transition-colors duration-300 mb-1`}
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          {note.title}
        </h3>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.tag}`}>
          {note.subject}
        </span>
        <p className="text-sm text-gray-500 leading-relaxed mt-3 line-clamp-3">
          {note.preview}
        </p>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {note.updatedAt}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            {note.words} words
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          className={`rounded-full px-4 py-1.5 border-2 border-gray-200 ${c.hoverBtn} group-hover:text-white transition-all duration-300 font-semibold text-xs`}
        >
          Open
          <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-300 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Notes() {
  const [search, setSearch] = useState("");
  const aiNotes = []; // Replace with real AI notes data

  const filtered = defaultNotes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto space-y-20">

      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
          </svg>
          <span className="text-sm font-medium text-emerald-700">
            Notes & Summaries
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Your{" "}
          <span className="text-emerald-600 italic">notes,</span>
          <br />
          all in one place.
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Write, review, and organize your study notes — or let AI generate smart summaries from your lessons.
        </p>

        {/* Search + New Note row */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-full focus:outline-none focus:border-emerald-400 bg-white text-gray-700 placeholder-gray-400 transition-colors"
            />
          </div>
          <Button className="rounded-full px-6 py-2.5 bg-gray-900 hover:bg-gray-700 text-white font-semibold text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
            New Note
          </Button>
        </div>
      </div>

      {/* ── My Notes ────────────────────────────────────────── */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              My notes
            </h2>
            <p className="mt-2 text-gray-600">
              Notes you've written during your study sessions.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span>{filtered.length} notes</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="relative overflow-hidden bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
            <p className="text-gray-500 font-medium">No notes match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((note, i) => (
              <NoteCard
                key={note.id}
                note={note}
                colorKey={note.color}
                isAI={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── AI-Generated Notes ──────────────────────────────── */}
      <div className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                AI-Powered
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              AI-generated notes
            </h2>
            <p className="mt-2 text-gray-600">
              Smart summaries generated from your lessons and exam reviewers.
            </p>
          </div>
          {aiNotes.length > 0 && (
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>{aiNotes.length} notes</span>
            </div>
          )}
        </div>

        {aiNotes.length === 0 ? (
          <div className="relative overflow-hidden bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-3xl p-12 text-center">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
                <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No AI notes yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Generate a lesson or exam reviewer and save it as a note to see it here.
              </p>
              <Button className="rounded-full px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/30 flex items-center gap-2 mx-auto">
                Go to Dashboard
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Button>
            </div>
            {/* Blur orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiNotes.map((note, i) => (
              <NoteCard
                key={note.id}
                note={note}
                colorKey={AI_COLORS[i % AI_COLORS.length]}
                isAI={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Footer CTA ──────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-400">
          Need to organize more?
        </p>
        <button className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
          <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-700 transition-colors">
            Request a feature
          </span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </section>
  );
}

export default Notes;