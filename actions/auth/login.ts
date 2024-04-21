'use server'
import "server-only";
import { signIn } from "@/auth";
import { action } from "@/lib/safe-action";
import { loginSchema } from "@/schema";

export const login = action(loginSchema, async (values) => {
    try {
        await signIn("credentials", { email: values.email, password: values.password, redirectTo: "/" });
        return { success: "Successful Login" }
    } catch (error) {
        return { fail: "Something Went Wrong." }
    }
})