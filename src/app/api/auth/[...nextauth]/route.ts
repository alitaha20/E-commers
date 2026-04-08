import { nextAuthOptions } from "@/lib/nextauth.config"
import NextAuth from "next-auth"

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }