import { cn } from "@/lib/utils";
import {
    Bell,
    Menu,
    Plane,
    Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLink from "@/app/dashboard/_components/NavLink";
import LogoutButton from "@/app/(auth)/_components/LogoutButton";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-muted/30">
            {/* Top Bar */}
            <header className="h-16 border-b bg-background fixed top-0 left-0 right-0 z-50">
                <div className="h-full flex items-center px-4 gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <Menu className="h-5 w-5"/>
                    </Button>

                    <div className="flex items-center gap-2 font-semibold">
                        <Plane className="h-5 w-5"/>
                        <span>TravelPal</span>
                    </div>

                    <div className="ml-auto flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5"/>
                        </Button>

                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                                    alt="Avatar"
                                    className="rounded-full w-8 h-8 cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4"/>
                                    <span>Settings</span>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <LogoutButton />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-16 bottom-0 w-64 border-r bg-background transition-transform z-40",
                )}
            >
                <nav className="h-full py-4 px-3">
                    <NavLink/>
                </nav>
            </aside>

            {/* Main Content */}
            <main
                className={cn(
                    "pt-16 transition-all duration-300",
                    "ml-64"
                )}
            >
                <div className="container mx-auto p-6">{children}</div>
            </main>
        </div>
    );
}