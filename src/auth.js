import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"
import { getUserById } from "@/lib/data"
import authConfig from "@/auth.config"

export const options = {
    session: { strategy: 'jwt' },
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/logout',
        error: '/auth/error'
    },
    callbacks: {
        async session({ session, token }) {
            if (!session.user) {
                session.user = {};
            }

            if (token && token.sub) {
                const user = await getUserById(token.sub);
                if (user) {
                    session.user.role = token.role;
                    session.userId = user.id;
                }
            }

            // Verificar si el usuario es administrador
            if (session.user.role !== 'ADMIN') {
                session.user.role = null; // Limpiar el rol para no conceder acceso
            }

            return session;
        },
        async jwt({ token }) {
            if (!token || !token.sub) return token;

            const user = await getUserById(token.sub)
            if (!user) return token;

            token.role = user?.role
            return token
        }
    },
}


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({ ...options, ...authConfig });
