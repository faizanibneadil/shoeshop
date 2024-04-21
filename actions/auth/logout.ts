'use server'
import "server-only"

import { signOut } from "@/auth"
import { action } from "@/lib/safe-action"
import { z } from "zod"

export const logout = action(z.object({}), async () => {
    try {
        await signOut({ redirectTo: "/login" })
        return { success: "done.!" }
    } catch (error) {
        return { fail: "Something Went Wrong..." }
    }
})