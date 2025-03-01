'use server';

import { AuthError } from 'next-auth';
import { signIn } from "@/app/actions/auth";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const user = await signIn('credentials', formData);
        return user;
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';

                default:
                    return "An error occurred. Please try again.";
            }
        }
        throw error;
    }
}