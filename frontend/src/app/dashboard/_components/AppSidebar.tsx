import * as React from "react"

import { VersionSwitcher } from "@/app/dashboard/_components/VersionSwitcher";
import { SearchForm } from "@/app/dashboard/_components/SearchForm";
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { CalendarDays, Home, MapPin, Users } from "lucide-react";
import { NavUser } from "@/app/dashboard/_components/NavUser";

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "General",
            url: "#",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard",
                    icon: Home,
                    isActive: true,
                },
                {
                    title: "Itinerary",
                    url: "/dashboard/itinerary",
                    icon: CalendarDays,
                    isActive: false,
                    isNew: true,
                },
            ],
        },
        {
            title: "Discover",
            url: "#",
            items: [
                {
                    title: "Explore",
                    url: "/dashboard/explore",
                    icon: MapPin,
                    isActive: false,
                },
                {
                    title: "Friends",
                    url: "/dashboard/friends",
                    icon: Users,
                    isActive: false,
                }
            ]
        }
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="">
                <VersionSwitcher
                    versions={data.versions}
                    defaultVersion={data.versions[0]}
                />
                <SearchForm/>
            </SidebarHeader>
            <SidebarContent className="">
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="space-y-1">
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.isActive} className="h-full py-3">
                                            <a href={item.url}>
                                                <item.icon size={50} />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
