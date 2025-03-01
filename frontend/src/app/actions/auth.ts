import NextAuth from "next-auth";
import { authConfig } from "../../../auth.config";
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from "@/api/authService";
import { useUserStore } from "@/store/userStore";
import { User } from "@/types/user";

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    const user = await getUser(email, password);

                    if (!user) {
                        console.log('User not found');
                        return null;
                    }

                    console.log('User found:', user);
                    const state = useUserStore.getState() as { setUser: (user: User) => void };
                    state.setUser(user);

                    return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ]
});
