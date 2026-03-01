// app-sidebar.tsx
// Place in: src/components/app-sidebar.tsx

import {
  AudioWaveform, Command, GalleryVerticalEnd, Map,
  MessageCircle, Notebook, NotebookPen, Settings2,
  User, Sparkles, LayoutDashboard, Crown,
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar, SidebarContent, SidebarFooter,
  SidebarHeader, SidebarRail,
} from '@/components/ui/sidebar';

/* ─── static data ─────────────────────────────────────────── */
const teams = [
  { name: 'Matalino', logo: GalleryVerticalEnd, plan: 'Enterprise' },
  { name: 'Matalino', logo: AudioWaveform,       plan: 'Startup'    },
  { name: 'Matalino', logo: Command,             plan: 'Free'       },
];

const navMain = [
  {
    title: 'Account', url: '/account', icon: User, isActive: true,
    items: [
      { title: 'Profile',  url: '/profile'  },
      { title: 'Files',    url: '/files'    },
      { title: 'History',  url: '/history'  },
    ],
  },
  {
    title: 'Community Hub', url: '/community', icon: MessageCircle,
    items: [
      { title: 'Feed',   url: '/feed'   },
      { title: 'Groups', url: '/groups' },
    ],
  },
  {
    title: 'Settings', url: '/settings', icon: Settings2,
    items: [
      { title: 'General', url: '/settings/general' },
      { title: 'Team',    url: '/settings/team'    },
      { title: 'Billing', url: '/settings/billing' },
      { title: 'Limits',  url: '/settings/limits'  },
    ],
  },
];

const projects = [
  { name: 'Dashboard', url: '/user-dashboard', icon: LayoutDashboard },
  { name: 'Lessons',   url: 'lessons',          icon: NotebookPen     },
  { name: 'Exams',     url: 'exams',            icon: Map             },
  { name: 'Notes',     url: 'notes',            icon: Notebook        },
];

/* ─── styles ──────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');

  [data-sidebar="sidebar"] {
    background: #ffffff !important;
    border-right: 1px solid #edeef0 !important;
  }

  .sb-label {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    margin-bottom: 4px;
  }
  .sb-label span {
    font-family: 'Manrope', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #6c7787;
    white-space: nowrap;
  }
  .sb-label .sb-line {
    flex: 1;
    height: 1px;
    background: #edeef0;
  }

  .sb-upgrade {
    margin: 0 10px;
    border-radius: 20px;
    padding: 18px;
    background: linear-gradient(135deg, #e6f0ff 0%, #dbeafe 100%);
    border: 1px solid #bfdbfe;
    position: relative;
    overflow: hidden;
  }
  .sb-upgrade::before {
    content: '';
    position: absolute;
    top: -24px; right: -24px;
    width: 80px; height: 80px;
    background: radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .sb-upgrade-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    background: #0066FF;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px;
    color: #fff;
    box-shadow: 0 4px 12px rgba(0,102,255,0.3);
  }
  .sb-upgrade h4 {
    font-family: 'ABeeZee', sans-serif;
    font-size: 14px;
    color: #002b6b;
    margin: 0 0 4px;
  }
  .sb-upgrade p {
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    color: #414d60;
    margin: 0 0 14px;
    line-height: 1.5;
  }
  .sb-upgrade-btn {
    width: 100%;
    padding: 9px;
    background: #0066FF;
    border: none;
    border-radius: 100px;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    box-shadow: 0 4px 12px rgba(0,102,255,0.25);
  }
  .sb-upgrade-btn:hover {
    background: #0052cc;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0,102,255,0.35);
  }
`;

/* ─── component ───────────────────────────────────────────── */
export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <style>{CSS}</style>

      {/* ── Header ── */}
      <SidebarHeader style={{ padding: '16px 12px', borderBottom: '1px solid #edeef0' }}>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>

      {/* ── Content ── */}
      <SidebarContent style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Quick Access */}
        <div>
          <div className="sb-label">
            <Sparkles size={9} color="#6c7787" />
            <span>Quick Access</span>
            <div className="sb-line" />
          </div>
          <NavProjects projects={projects} />
        </div>

        {/* Manage */}
        <div>
          <div className="sb-label">
            <Settings2 size={9} color="#6c7787" />
            <span>Manage</span>
            <div className="sb-line" />
          </div>
          <NavMain items={navMain} />
        </div>

        {/* Upgrade card */}
        <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
          <div className="sb-upgrade">
            <div className="sb-upgrade-icon">
              <Crown size={16} />
            </div>
            <h4>Upgrade to Pro</h4>
            <p>Unlock AI tutoring, unlimited exams &amp; advanced analytics.</p>
            <button className="sb-upgrade-btn">
              <Sparkles size={12} />
              Upgrade Now
            </button>
          </div>
        </div>
      </SidebarContent>

      {/* ── Footer: NavUser handles its own dropdown + logout ── */}
      {/* NO onClick here — logout only fires inside the dropdown */}
      <SidebarFooter style={{ padding: '8px' }}>
        <NavUser user={{ name: '', email: '', avatar: '' }} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}