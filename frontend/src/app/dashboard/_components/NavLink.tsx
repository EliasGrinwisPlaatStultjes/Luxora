"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Calendar, Home, Map, MessageSquare, Plane, Users } from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "My Trips", href: "/dashboard/trips", icon: Plane },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Explore", href: "/dashboard/explore", icon: Map },
    { name: "Friends", href: "/dashboard/friends", icon: Users },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
];

export default function NavLink() {
    const pathname = usePathname();

    return (
        <div className="space-y-1">
            {sidebarLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === link.href
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-muted"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        {link.name}
                    </Link>
                );
            })}
        </div>
    )
}