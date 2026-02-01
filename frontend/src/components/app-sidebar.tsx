import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  MessageCircle,
  Notebook,
  NotebookPen,
  Settings2,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Matalino",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Matalino",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Matalino",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Account",
      url: "#",
      icon: User,
      isActive: true,
      items: [
        { title: "Profile", url: "#" },
        { title: "Files", url: "#" },
        { title: "History", url: "#" },
      ],
    },
    {
      title: "Community Hub",
      url: "#",
      icon: MessageCircle,
      items: [
        { title: "Feed", url: "#" },
        { title: "Groups", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "Dashboard", url: "#", icon: Frame },
    { name: "Lessons", url: "#", icon: NotebookPen },
    { name: "Exams", url: "#", icon: Map },
    { name: "Notes", url: "#", icon: Notebook },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="cursor-pointer">
          <TeamSwitcher teams={data.teams} />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Wrap NavProjects to make its items appear clickable */}
        <div className="cursor-pointer">
          <NavProjects projects={data.projects} />
        </div>

        {/* Wrap NavMain to affect its menu items */}
        <div className="cursor-pointer">
          <NavMain items={data.navMain} />
        </div>
      </SidebarContent>

      <SidebarFooter>
        <div className="cursor-pointer">
          <NavUser user={data.user} />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}