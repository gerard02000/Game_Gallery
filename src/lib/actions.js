'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail, getUserById } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';




// Función para registrar un nuevo usuario
export async function register(formData) {
    const { name, email, password } = formData; // Desestructura los datos del formulario

    // Comprueba si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' };
    }

    try {
        // Encripta la contraseña 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Genera un ID único para la cuenta
        const providerAccountId = uuidv4();

        // Guarda las credenciales en la base de datos utilizando Prisma
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                accounts: {
                    create: {
                        provider: 'email',
                        type: 'email',
                        providerAccountId: providerAccountId
                    }
                }
            }
        });

        return { success: "Registro correcto" };
    } catch (error) {
        console.error('Error al registrar:', error);
        return { error: 'Error al registrar. Por favor, inténtalo de nuevo.' };
    }
}



// LOGIN credentials






export async function login(formData) {
    const { email, password } = formData;

    // Comprobamos si el usuario está registrado
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        if (user.role === 'ADMIN')
            await signIn('credentials', { email, password, redirectTo: '/admin' })
        else
            await signIn('credentials', { email, password, redirectTo: '/dashboard' })
        // return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }
}


// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: '/dashboard' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: '/dashboard' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN Discord
export async function loginDiscord() {
    try {
        await signIn('discord', { redirectTo: '/dashboard' })

    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN Twitch
export async function loginTwitch() {
    try {
        await signIn('twitch', { redirectTo: '/dashboard' })

    } catch (error) {
        console.log(error);
        throw error
    }
}




// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/dashboard' })
    } catch (error) {
        throw error
    }
}




export async function updatePartidaWithResult(userId, result) {
    try {
        // Verificamos si el userId está definido
        if (!userId) {
            throw new Error('ID de usuario no disponible.');
        }

        // Obtenemos el usuario con la información de la partida
        const usuario = await prisma.user.findUnique({
            where: { id: userId },
            include: { partidas: true } // Incluimos la relación con las partidas
        });

        // Verificamos si el usuario existe
        if (!usuario) {
            throw new Error('No se encontró el usuario en la base de datos');
        }

        // Verificamos si la partida existe para este usuario
        if (!usuario.partidas || usuario.partidas.length === 0) {
            throw new Error('El usuario no tiene partidas asociadas');
        }

        // Supongamos que estamos actualizando la primera partida encontrada
        const partidaId = usuario.partidas[0].id;

        // Actualizamos el resultado de la partida según el resultado del juego
        let dataToUpdate = {};

        if (result === 'victoria') {
            dataToUpdate.victorias = usuario.partidas[0].victorias + 1;
        } else if (result === 'derrota') {
            dataToUpdate.derrotas = usuario.partidas[0].derrotas + 1;
        } else {
            dataToUpdate.empates = usuario.partidas[0].empates + 1;
        }

        await prisma.partida.update({
            where: { id: partidaId },
            data: dataToUpdate,
        });
    } catch (error) {
        console.error('Error al actualizar la partida:', error);
        throw error;
    }
}
