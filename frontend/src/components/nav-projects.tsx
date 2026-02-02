import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton 
              asChild 
              className="group hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 rounded-lg cursor-pointer"
            >
              <Link to={item.url} className="flex items-center gap-3 px-3 py-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-200">
                  <item.icon className="w-4 h-4 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200" />
                </div>
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}