import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    realTokenBackEnd: string;
  }

  interface Session {
    user: {
      id: string;
      realTokenBackEnd: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    realTokenBackEnd: string;
  }
}