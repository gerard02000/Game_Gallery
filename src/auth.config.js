import Credentials from "@auth/core/providers/credentials"
import Google from "@auth/core/providers/google"
import GitHub from '@auth/core/providers/github'
import Twitch from '@auth/core/providers/twitch' // Importa el proveedor de autenticación de Twitch
import Discord from '@auth/core/providers/discord' // Importa el proveedor de autenticación de Discord
import bcrypt from 'bcryptjs'
import { prisma } from "@/lib/prisma"

export default {
    providers: [
        Google,
        GitHub,
        Twitch, // Agrega el proveedor de autenticación de Twitch
        Discord, // Agrega el proveedor de autenticación de Discord
        Credentials({
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                })

                if (user) {  // && user.emailVerified
                    const matchPassword = bcrypt.compare(credentials.password, user?.password)
                    if (matchPassword) return user
                } else {
                    return null
                }

            },
        }),
    ]
}