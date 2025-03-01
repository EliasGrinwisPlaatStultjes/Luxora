"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

export default function LoginPage() {
    const callbackUrl = '/dashboard';
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30">
            <Card className="w-[400px]">
                <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>
                        Sign in to your TravelPal account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className="space-y-4">
                            <div className="space-y-2">.
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="Enter your email" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" type="password" placeholder="Enter your password" />
                            </div>

                            {errorMessage && (
                                <p className="text-sm text-red-500">{errorMessage}</p>

                            )}

                            <input type="hidden" name="redirectTo" value={callbackUrl} />

                            <Button disabled={isPending} className="w-full" type="submit">
                                Sign In
                            </Button>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        <span className="text-muted-foreground">Don&apos;t have an account? </span>
                        <Link href="/register" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}