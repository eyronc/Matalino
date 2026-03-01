// exams.jsx
// Place in: src/pages/exams.jsx

import React from 'react';
import { examContents, customExamContents } from '../constants/contents';

const EXAM_COLORS = {
  'DOST-SEI':              { accent: '#0066FF', bg: '#e6f0ff', text: '#002B6B', border: '#bfdbfe' },
  'PMMA':                  { accent: '#f59e0b', bg: '#fffbeb', text: '#92400e', border: '#fcd34d' },
  'NSA':                   { accent: '#06b6d4', bg: '#ecfeff', text: '#0e7490', border: '#a5f3fc' },
  'UPCAT':                 { accent: '#ef4444', bg: '#fef2f2', text: '#991b1b', border: '#fca5a5' },
  'UPCAT Scholar Program': { accent: '#ef4444', bg: '#fef2f2', text: '#991b1b', border: '#fca5a5' },
  'DLSU':                  { accent: '#10b981', bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' },
  'FEU':                   { accent: '#34d399', bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' },
};
const DEFAULT_COLOR = { accent: '#0066FF', bg: '#e6f0ff', text: '#002B6B', border: '#bfdbfe' };

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');

  :root {
    --bg: #f4f6fb; --white: #ffffff; --border: #edeef0;
    --blue: #0066FF; --navy: #002B6B; --text: #1e242c;
    --muted: #6c7787; --muted2: #414d60;
  }

  .exams-page { min-height: 100vh; background: var(--bg); }
  .exams-inner { padding: 44px 40px 80px; max-width: 1200px; margin: 0 auto; }

  /* Page header */
  .exams-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px; border-radius: 100px;
    background: #ecfdf5; border: 1px solid #a7f3d0;
    font-family: 'Manrope', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; color: #065f46;
    margin-bottom: 16px;
  }
  .exams-title {
    font-family: 'ABeeZee', sans-serif;
    font-size: clamp(36px, 5vw, 56px);
    color: var(--text);
    line-height: 1.1;
    margin: 0 0 12px;
  }
  .exams-title em { color: var(--blue); font-style: italic; }
  .exams-sub {
    font-family: 'Manrope', sans-serif;
    font-size: 14px; color: var(--muted2);
    margin: 0 0 48px; line-height: 1.65;
  }

  /* Section heads */
  .exams-section-head {
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border);
  }
  .exams-section-label {
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin: 0 0 5px;
  }
  .exams-section-title {
    font-family: 'ABeeZee', sans-serif; font-size: 22px; color: var(--text); margin: 0;
  }
  .exams-count { font-family: 'Manrope', sans-serif; font-size: 12px; color: var(--muted); }

  /* Grid */
  .exams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
  }

  /* Card */
  .exam-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 22px;
    display: flex; flex-direction: column;
    cursor: pointer; position: relative; overflow: hidden;
    transition: transform 0.25s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s, border-color 0.2s;
  }
  .exam-card:hover {
    transform: translateY(-4px);
    box-shadow: 10px 25px 80px rgba(0,43,107,0.14);
    border-color: var(--c-border);
  }
  .exam-card-topline {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--c-accent); border-radius: 20px 20px 0 0;
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .exam-card:hover .exam-card-topline { transform: scaleX(1); }

  .exam-badge-row {
    display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;
  }
  .exam-badge {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 100px;
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .exam-dot { width: 8px; height: 8px; border-radius: 50%; opacity: 0.6; background: var(--c-accent); }

  .exam-name {
    font-family: 'ABeeZee', sans-serif; font-size: 18px;
    color: var(--text); margin: 0 0 8px; line-height: 1.2;
    transition: color 0.2s;
  }
  .exam-card:hover .exam-name { color: var(--c-accent); }

  .exam-desc {
    font-family: 'Manrope', sans-serif; font-size: 13px;
    color: var(--muted2); line-height: 1.6; flex: 1; margin: 0;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }

  .coverage-wrap { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 12px; }
  .coverage-tag {
    padding: 3px 9px; border-radius: 100px;
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 600;
    background: var(--c-bg); color: var(--c-text); border: 1px solid var(--c-border);
  }

  .exam-btn {
    width: 100%; margin-top: 16px; padding: 10px;
    border-radius: 12px; border: 1px solid var(--border);
    background: #f4f6fb; color: var(--muted);
    font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 700;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.2s;
  }
  .exam-card:hover .exam-btn {
    background: var(--c-accent); border-color: var(--c-accent); color: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  /* Empty state */
  .empty-state {
    background: #f9f7ff; border: 1.5px dashed #c4b5fd; border-radius: 24px;
    padding: 64px 32px; text-align: center;
  }
  .empty-icon {
    width: 64px; height: 64px; background: #fff; border-radius: 16px;
    box-shadow: 0 8px 24px rgba(139,92,246,0.15);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px; font-size: 28px;
  }
  .empty-title { font-family: 'ABeeZee', sans-serif; font-size: 22px; color: var(--text); margin: 0 0 8px; }
  .empty-desc {
    font-family: 'Manrope', sans-serif; font-size: 13px; color: var(--muted);
    margin: 0 auto 24px; max-width: 340px; line-height: 1.6;
  }
  .empty-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 24px; background: #7c3aed; color: #fff;
    border: none; border-radius: 100px;
    font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 700;
    cursor: pointer; transition: background 0.2s;
    box-shadow: 0 4px 12px rgba(124,58,237,0.3);
  }
  .empty-btn:hover { background: #6d28d9; }

  /* AI section label */
  .ai-label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .ai-dot {
    width: 7px; height: 7px; border-radius: 50%; background: #8b5cf6;
    animation: aiPulse 2s infinite;
  }
  @keyframes aiPulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(139,92,246,0.2); }
    50%      { box-shadow: 0 0 0 5px rgba(139,92,246,0.08); }
  }
  .ai-label-text {
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: #7c3aed;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.45s ease both; }
`;

function ExamCard({ exam, colors, delay = 0, isAI = false }) {
  const c = colors || DEFAULT_COLOR;
  return (
    <div
      className="exam-card fade-up"
      style={{ '--c-accent': c.accent, '--c-bg': c.bg, '--c-text': c.text, '--c-border': c.border, animationDelay: `${delay}ms` }}
    >
      <div className="exam-card-topline" />

      <div className="exam-badge-row">
        {isAI ? (
          <span className="exam-badge" style={{ background: '#7c3aed', color: '#fff' }}>✦ AI Generated</span>
        ) : (
          <span className="exam-badge" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>✓ Official</span>
        )}
        <span className="exam-dot" />
      </div>

      <div style={{ flex: 1 }}>
        <p className="exam-name">{exam.name}</p>
        <p className="exam-desc">{exam.description}</p>
      </div>

      {exam.coverage?.length > 0 && (
        <div className="coverage-wrap">
          {exam.coverage.slice(0, 3).map((s, i) => (
            <span key={i} className="coverage-tag">{s}</span>
          ))}
          {exam.coverage.length > 3 && (
            <span className="coverage-tag" style={{ background: '#f4f6fb', color: '#6c7787', border: '1px solid #edeef0' }}>
              +{exam.coverage.length - 3}
            </span>
          )}
        </div>
      )}

      <button className="exam-btn">
        {isAI ? 'Continue' : 'Explore exam'}
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}

export default function Exams() {
  return (
    <div className="exams-page">
      <style>{CSS}</style>
      <section className="exams-inner">

        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <span className="exams-eyebrow">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Exam Preparation
          </span>
          <h1 className="exams-title">Entrance exams &amp;<br /><em>scholarships.</em></h1>
          <p className="exams-sub">Browse official entrance exams and AI-generated personalized reviewers.</p>
        </div>

        {/* ── Official Exams ── */}
        <div style={{ marginBottom: 56 }}>
          <div className="exams-section-head">
            <div>
              <p className="exams-section-label">Official</p>
              <h2 className="exams-section-title">Standardized exams</h2>
            </div>
            <span className="exams-count">{examContents.length} exams</span>
          </div>
          <div className="exams-grid">
            {examContents.map((exam, i) => (
              <ExamCard key={exam.id ?? i} exam={exam} colors={EXAM_COLORS[exam.name]} delay={i * 50} />
            ))}
          </div>
        </div>

        {/* ── Custom AI Exams ── */}
        <div>
          <div className="exams-section-head">
            <div>
              <div className="ai-label-row">
                <span className="ai-dot" />
                <span className="ai-label-text">AI-Powered</span>
              </div>
              <h2 className="exams-section-title">Custom reviewers</h2>
            </div>
            {customExamContents.length > 0 && (
              <span className="exams-count">{customExamContents.length} reviewers</span>
            )}
          </div>

          {customExamContents.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h3 className="empty-title">No custom reviewers yet</h3>
              <p className="empty-desc">Generate a personalized exam reviewer from the dashboard.</p>
              <button className="empty-btn">
                Go to Dashboard
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="exams-grid">
              {customExamContents.map((exam, i) => (
                <ExamCard
                  key={exam.id ?? i}
                  exam={exam}
                  colors={{ accent: '#8b5cf6', bg: '#f5f3ff', text: '#5b21b6', border: '#c4b5fd' }}
                  delay={i * 50}
                  isAI
                />
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}