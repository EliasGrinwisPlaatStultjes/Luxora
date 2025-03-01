import { LogOut } from "lucide-react";
import { signOut } from "@/app/actions/auth";

export default function LogoutButton() {
    const handleSignOut = async () => {
        'use server';
        await signOut({ redirectTo: "/login" });
    };

    return (
        <button onClick={handleSignOut} className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
        </button>
    );
}