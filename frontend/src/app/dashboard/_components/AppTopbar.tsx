import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AppTopbar() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 ">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-6 bg-gray-600" />

            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
                </Button>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-white">John Doe</span>
                </div>
            </div>
        </header>
    )
}