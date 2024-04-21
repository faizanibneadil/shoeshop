import { NextResponse } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

const unauthorizedRoutes = ['/login', '/register']
const publicRoutes = ['/', '/categories']

export default auth((req) => {
    const isAuthorized = !!req.auth
    console.log("ROUTE:", req.nextUrl.pathname)

    if (isAuthorized && unauthorizedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }

    if (!isAuthorized && publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.next()
    }

    if (!isAuthorized && !unauthorizedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    if (req.nextUrl.pathname.startsWith("/api/auth")) {
        return NextResponse.next()
    }

    return NextResponse.next()
})

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}