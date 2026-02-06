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
  Sparkles,
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

const data = {
  user: {
    name: "Aaron",
    email: "aaron@matalino.app",
    avatar: "/avatars/user.jpg",
    role: "Pro Member",
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
      url: "/account",
      icon: User,
      isActive: true,
      items: [
        { title: "Profile", url: "/profile" },
        { title: "Files", url: "/files" },
        { title: "History", url: "/history" },
      ],
    },
    {
      title: "Community Hub",
      url: "/community",
      icon: MessageCircle,
      items: [
        { title: "Feed", url: "/feed" },
        { title: "Groups", url: "/groups" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings/general" },
        { title: "Team", url: "/settings/team" },
        { title: "Billing", url: "/settings/billing" },
        { title: "Limits", url: "/settings/limits" },
      ],
    },
  ],
  projects: [
    { name: "Dashboard", url: "/user-dashboard", icon: Frame },
    { name: "Lessons", url: "lessons", icon: NotebookPen },
    { name: "Exams", url: "exams", icon: Map },
    { name: "Notes", url: "notes", icon: Notebook },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-r border-gray-200 bg-white"
    >
      <SidebarHeader className="border-b border-gray-100 px-4 py-4">
        <div className="cursor-pointer transition-all hover:scale-[1.02] duration-200">
          <TeamSwitcher teams={data.teams} />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4 flex flex-col">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="px-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Access</span>
              </div>
            </div>
            <NavProjects projects={data.projects} />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center px-3">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="px-3 mb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Settings2 className="w-3.5 h-3.5" />
                <span>Manage</span>
              </div>
            </div>
            <NavMain items={data.navMain} />
          </div>
        </div>

        <div className="mt-auto pt-6 px-3">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 p-4 text-white shadow-lg">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl mb-3 backdrop-blur-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-white/80 mb-4 leading-relaxed">
                Unlock advanced features and unlimited access
              </p>
              <button className="w-full bg-white text-indigo-600 hover:bg-white/90 text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-50/80 via-indigo-50/40 to-purple-50/30 backdrop-blur-sm p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
          
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-100/60 via-purple-100/40 to-pink-100/30"></div>
            <div className="absolute inset-0 bg-linear-to-tl from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl"></div>
          </div>

          {/* Clickable NavUser Area */}
          <div className="relative z-10">
            <NavUser
              user={{
                name: data.user.name,
                email: data.user.email,
                avatar: "",
              }}
            />
          </div>

        </div>
      </SidebarFooter>


      <SidebarRail />
    </Sidebar>
  );
}
