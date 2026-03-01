// nav-projects.tsx  →  src/components/nav-projects.tsx

import { type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const CSS = `
  .np-group { padding: 0 8px; display: flex; flex-direction: column; gap: 2px; }

  .np-link {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    padding: 8px 10px !important;
    border-radius: 12px !important;
    font-family: 'Manrope', sans-serif !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #414d60 !important;
    text-decoration: none !important;
    transition: background 0.15s, color 0.15s !important;
  }
  .np-link:hover { background: #e6f0ff !important; color: #0066FF !important; }
  .np-link.np-active { background: #e6f0ff !important; color: #0066FF !important; }

  .np-icon {
    width: 30px; height: 30px;
    border-radius: 8px;
    background: #f4f6fb;
    border: 1px solid #edeef0;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.15s, border-color 0.15s;
    color: #6c7787;
  }
  .np-link:hover .np-icon,
  .np-link.np-active .np-icon {
    background: #dbeafe; border-color: #93c5fd; color: #0066FF;
  }
`;

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { pathname } = useLocation();

  return (
    <div className="np-group">
      <style>{CSS}</style>
      {projects.map((item) => {
        const active = pathname === item.url || pathname.startsWith(item.url + '/');
        return (
          <Link
            key={item.name}
            to={item.url}
            className={`np-link${active ? ' np-active' : ''}`}
          >
            <div className="np-icon">
              <item.icon size={14} />
            </div>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}