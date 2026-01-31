"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {useDispatch}  from 'react-redux';
import {setPage} from '../features/page/PageSlicer';

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const dispatch = useDispatch();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item,index) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a onClick={() => dispatch(setPage(index))} >
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
