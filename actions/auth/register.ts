'use server'
import "server-only"
import { prisma } from "@/config/db";
import { action } from "@/lib/safe-action";
import { registerSchema } from "@/schema";

export const register = action(registerSchema, async (values) => {
    try {
        await prisma.user.create({
            data: {
                name: `${values.firstName} ${values.lastName}`,
                email: values.email
            }
        })
        return { success: "You are successfully registered." }
    } catch (error) {
        return { fail: "Something Went Wrong." }
    }

})