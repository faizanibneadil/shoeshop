import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { prisma } from "./config/db"


export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
    callbacks: {
        session: async ({ newSession, session, token, user, trigger }) => {
            session.user.id = token?.sub as string
            console.log("SESSION", session)
            return session
        },
        jwt: async ({ account, token, user, profile, session, trigger }) => {
            console.log("TOKEN", token)
            return token
        },
        signIn: async ({ account, user, credentials, email, profile }) => {
            return true
        }
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
})