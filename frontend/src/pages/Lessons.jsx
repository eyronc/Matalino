// lessons.jsx
// Place in: src/pages/lessons.jsx

import React from 'react';
import { lessonsContents, customLessons } from '../constants/contents';
import { Link } from 'react-router-dom';

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');

  :root {
    --bg: #f4f6fb; --white: #ffffff; --border: #edeef0;
    --blue: #0066FF; --navy: #002B6B; --text: #1e242c;
    --muted: #6c7787; --muted2: #414d60;
  }

  .lessons-page { min-height: 100vh; background: var(--bg); }
  .lessons-inner { padding: 44px 40px 80px; max-width: 1200px; margin: 0 auto; }

  /* Page header */
  .lessons-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 14px; border-radius: 100px;
    background: #e6f0ff; border: 1px solid #bfdbfe;
    font-family: 'Manrope', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--blue);
    margin-bottom: 16px;
  }
  .lessons-title {
    font-family: 'ABeeZee', sans-serif;
    font-size: clamp(36px, 5vw, 56px);
    color: var(--text); line-height: 1.1; margin: 0 0 12px;
  }
  .lessons-title em { color: var(--blue); font-style: italic; }
  .lessons-sub {
    font-family: 'Manrope', sans-serif; font-size: 14px;
    color: var(--muted2); margin: 0 0 48px; line-height: 1.65;
  }

  /* Section heads */
  .ls-section-head {
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border);
  }
  .ls-label {
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin: 0 0 5px;
  }
  .ls-title { font-family: 'ABeeZee', sans-serif; font-size: 22px; color: var(--text); margin: 0; }
  .ls-count { font-family: 'Manrope', sans-serif; font-size: 12px; color: var(--muted); }

  /* Grid */
  .lessons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  /* Lesson card */
  .lesson-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 24px; overflow: hidden;
    display: flex; flex-direction: column; cursor: pointer;
    transition: transform 0.25s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s, border-color 0.2s;
  }
  .lesson-card:hover {
    transform: translateY(-4px);
    box-shadow: 10px 25px 80px rgba(0,43,107,0.12);
    border-color: #bfdbfe;
  }

  .lesson-card-img {
    width: 100%; height: 160px;
    background: linear-gradient(135deg, #e6f0ff 0%, #dbeafe 100%);
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    transition: background 0.3s;
  }
  .lesson-card:hover .lesson-card-img {
    background: linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%);
  }
  .lesson-card-img img {
    width: 90px; height: 90px; object-fit: contain;
    position: relative; z-index: 1;
    transition: transform 0.3s cubic-bezier(.22,.68,0,1.2);
  }
  .lesson-card:hover .lesson-card-img img { transform: scale(1.12) rotate(-4deg); }
  .lesson-card-img-blob {
    position: absolute; width: 120px; height: 120px; border-radius: 50%;
    background: rgba(0,102,255,0.08); filter: blur(20px);
  }
  .lesson-card-idx {
    position: absolute; top: 12px; right: 12px;
    width: 28px; height: 28px; border-radius: 50%;
    background: rgba(255,255,255,0.9);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    color: var(--muted); backdrop-filter: blur(4px);
  }

  .lesson-card-body { padding: 20px 22px 22px; flex: 1; display: flex; flex-direction: column; }
  .lesson-name {
    font-family: 'ABeeZee', sans-serif; font-size: 17px; color: var(--text);
    margin: 0 0 8px; line-height: 1.3; transition: color 0.2s;
  }
  .lesson-card:hover .lesson-name { color: var(--blue); }
  .lesson-desc {
    font-family: 'Manrope', sans-serif; font-size: 13px; color: var(--muted2);
    line-height: 1.65; flex: 1; margin: 0;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  .lesson-btn {
    margin-top: 16px; padding: 10px 16px; border-radius: 12px;
    border: 1px solid var(--border); background: #f4f6fb; color: var(--muted);
    font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 700;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .lesson-card:hover .lesson-btn {
    background: var(--blue); border-color: var(--blue); color: #fff;
    box-shadow: 0 4px 14px rgba(0,102,255,0.25);
  }

  /* AI lesson card */
  .ai-lesson-card {
    background: var(--white); border: 1.5px solid #c4b5fd; border-radius: 24px;
    padding: 22px; display: flex; flex-direction: column; cursor: pointer;
    position: relative; overflow: hidden;
    transition: transform 0.25s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s, border-color 0.2s;
  }
  .ai-lesson-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #7c3aed, #ec4899, #7c3aed);
    background-size: 200%; animation: aiGrad 3s linear infinite;
  }
  @keyframes aiGrad { 0% { background-position: 0%; } 100% { background-position: 200%; } }
  .ai-lesson-card:hover {
    transform: translateY(-4px);
    box-shadow: 10px 25px 80px rgba(109,40,217,0.12);
    border-color: #a78bfa;
  }
  .ai-badge {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 100px;
    background: #7c3aed; color: #fff;
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 14px;
  }
  .ai-lesson-name {
    font-family: 'ABeeZee', sans-serif; font-size: 17px; color: var(--text); margin: 0 0 8px;
  }
  .ai-lesson-desc {
    font-family: 'Manrope', sans-serif; font-size: 13px; color: var(--muted2);
    line-height: 1.65; flex: 1; margin: 0;
  }
  .ai-lesson-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 18px; padding-top: 14px; border-top: 1px solid #ede9fe;
  }
  .ai-lesson-date { font-family: 'Manrope', sans-serif; font-size: 11px; color: var(--muted); }
  .ai-continue-btn {
    padding: 6px 14px; border-radius: 8px;
    border: 1px solid #c4b5fd; background: #f5f3ff; color: #7c3aed;
    font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 700;
    cursor: pointer; transition: all 0.2s;
  }
  .ai-continue-btn:hover { background: #7c3aed; color: #fff; border-color: #7c3aed; }

  /* AI section label */
  .ai-label-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .ai-dot { width: 7px; height: 7px; border-radius: 50%; background: #8b5cf6; animation: aiPulse 2s infinite; }
  @keyframes aiPulse {
    0%,100% { box-shadow: 0 0 0 3px rgba(139,92,246,0.2); }
    50%      { box-shadow: 0 0 0 5px rgba(139,92,246,0.08); }
  }
  .ai-label-text {
    font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: #7c3aed;
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
  .empty-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 24px; background: #7c3aed; color: #fff;
    border-radius: 100px; text-decoration: none;
    font-family: 'Manrope', sans-serif; font-size: 13px; font-weight: 700;
    transition: background 0.2s; box-shadow: 0 4px 12px rgba(124,58,237,0.3);
  }
  .empty-link:hover { background: #6d28d9; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.45s ease both; }
`;

export default function Lessons() {
  return (
    <div className="lessons-page">
      <style>{CSS}</style>
      <section className="lessons-inner">

        {/* Page header */}
        <div style={{ marginBottom: 48 }}>
          <span className="lessons-eyebrow">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
            Your Learning Hub
          </span>
          <h1 className="lessons-title">Learning <em>pathways.</em></h1>
          <p className="lessons-sub">Explore curated pathways and AI-generated lessons tailored to your learning journey.</p>
        </div>

        {/* ── Default Pathways ── */}
        <div style={{ marginBottom: 56 }}>
          <div className="ls-section-head">
            <div>
              <p className="ls-label">Curated</p>
              <h2 className="ls-title">Default pathways</h2>
            </div>
            <span className="ls-count">{lessonsContents.length} pathways</span>
          </div>

          <div className="lessons-grid">
            {lessonsContents.map((lesson, i) => (
              <div key={lesson.id ?? i} className="lesson-card fade-up" style={{ animationDelay: `${i * 55}ms` }}>
                <div className="lesson-card-img">
                  <span className="lesson-card-idx">{String(i + 1).padStart(2, '0')}</span>
                  <div className="lesson-card-img-blob" />
                  <img src={lesson.icon} alt={lesson.name} />
                </div>
                <div className="lesson-card-body">
                  <p className="lesson-name">{lesson.name}</p>
                  <p className="lesson-desc">{lesson.description}</p>
                  <Link to="/study" target="_blank" className="lesson-btn">
                    Explore pathway
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Custom AI Lessons ── */}
        <div>
          <div className="ls-section-head">
            <div>
              <div className="ai-label-row">
                <span className="ai-dot" />
                <span className="ai-label-text">AI-Powered</span>
              </div>
              <h2 className="ls-title">Custom lessons</h2>
            </div>
            {customLessons.length > 0 && <span className="ls-count">{customLessons.length} lessons</span>}
          </div>

          {customLessons.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h3 className="empty-title">No custom lessons yet</h3>
              <p className="empty-desc">Generate a personalized lesson from the dashboard to see it appear here.</p>
              <Link to="/" className="empty-link">
                Go to Dashboard
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="lessons-grid">
              {customLessons.map((lesson, i) => (
                <div key={lesson.id ?? i} className="ai-lesson-card fade-up" style={{ animationDelay: `${i * 55}ms` }}>
                  <span className="ai-badge">✦ AI Generated</span>
                  <h3 className="ai-lesson-name">{lesson.name}</h3>
                  <p className="ai-lesson-desc">{lesson.description}</p>
                  <div className="ai-lesson-footer">
                    <span className="ai-lesson-date">{lesson.createdAt}</span>
                    <button className="ai-continue-btn">Continue →</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}