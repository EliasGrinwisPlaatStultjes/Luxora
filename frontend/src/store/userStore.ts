import { User } from "@/types/user";
import { create } from "zustand/react";

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}))
