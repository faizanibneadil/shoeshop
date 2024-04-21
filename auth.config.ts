import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { prisma } from "./config/db"

export default {
    trustHost: true,
    providers: [
        Credentials({
            authorize: async (credentials, req) => {
                console.log("credentials", credentials)
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                    select: { email: true, name: true, image: true }
                })

                if (!user?.email) return null

                return user
            }
        })
    ]
} satisfies NextAuthConfig