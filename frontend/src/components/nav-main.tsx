// nav-main.tsx  →  src/components/nav-main.tsx

import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CSS = `
  .nm-group { padding: 0 8px; display: flex; flex-direction: column; gap: 2px; }

  .nm-trigger {
    all: unset;
    box-sizing: border-box;
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    width: 100% !important;
    padding: 8px 10px !important;
    border-radius: 12px !important;
    cursor: pointer !important;
    transition: background 0.15s, color 0.15s !important;
    color: #414d60 !important;
    font-family: 'Manrope', sans-serif !important;
  }
  .nm-trigger:hover { background: #e6f0ff !important; color: #0066FF !important; }
  .nm-trigger[data-state="open"] { background: #e6f0ff !important; color: #0066FF !important; }

  .nm-icon {
    width: 30px; height: 30px;
    border-radius: 8px;
    background: #f4f6fb;
    border: 1px solid #edeef0;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.15s, border-color 0.15s;
    color: #6c7787;
  }
  .nm-trigger:hover .nm-icon,
  .nm-trigger[data-state="open"] .nm-icon {
    background: #dbeafe; border-color: #93c5fd; color: #0066FF;
  }

  .nm-text {
    font-size: 13px; font-weight: 600; flex: 1; color: inherit;
  }

  .nm-chevron {
    color: #b0b8c4; flex-shrink: 0;
    transition: transform 0.2s, color 0.2s;
  }
  .nm-trigger[data-state="open"] .nm-chevron {
    transform: rotate(90deg); color: #0066FF;
  }

  .nm-subs {
    margin: 2px 0 4px; padding: 0 0 0 40px;
    list-style: none; display: flex; flex-direction: column; gap: 1px;
  }
  .nm-sub-link {
    display: flex; align-items: center; gap: 8px;
    padding: 6px 10px; border-radius: 8px;
    font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 500;
    color: #6c7787; text-decoration: none;
    transition: background 0.15s, color 0.15s;
  }
  .nm-sub-link::before {
    content: ''; width: 4px; height: 4px; border-radius: 50%;
    background: #d1d8e0; flex-shrink: 0; transition: background 0.15s;
  }
  .nm-sub-link:hover { background: #e6f0ff; color: #0066FF; }
  .nm-sub-link:hover::before { background: #0066FF; }
`;

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: { title: string; url: string }[];
  }[];
}) {
  return (
    <div className="nm-group">
      <style>{CSS}</style>
      {items.map((item) => (
        <Collapsible key={item.title} defaultOpen={item.isActive}>
          <CollapsibleTrigger className="nm-trigger">
            {item.icon && (
              <div className="nm-icon">
                <item.icon size={14} />
              </div>
            )}
            <span className="nm-text">{item.title}</span>
            <ChevronRight size={13} className="nm-chevron" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="nm-subs">
              {item.items?.map((sub) => (
                <li key={sub.title}>
                  <Link to={sub.url} className="nm-sub-link">{sub.title}</Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}