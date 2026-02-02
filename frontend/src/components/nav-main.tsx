import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton 
                  tooltip={item.title}
                  className="group hover:bg-gray-100 transition-all duration-200 rounded-lg cursor-pointer"
                >
                  {item.icon && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-gray-200 transition-colors duration-200">
                      <item.icon className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                  <span className="font-medium text-sm">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90 w-4 h-4 text-gray-400" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="ml-11 mt-1 space-y-0.5">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton 
                        asChild
                        className="hover:bg-indigo-50 hover:text-indigo-700 rounded-md transition-colors duration-200 cursor-pointer"
                      >
                        <Link to={subItem.url} className="text-sm py-1.5">
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}