'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
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


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/dashboard' })
    } catch (error) {
        throw error
    }
}








// Función para actualizar los juegos del usuario
export const updateJuego = async (userId, fieldToUpdate) => {
    try {
        let updatedUserData;

        // Verifica qué campo se va a actualizar
        if (fieldToUpdate === 'victorias') {
            updatedUserData = { victorias: { increment: 1 } };
        } else if (fieldToUpdate === 'derrotas') {
            updatedUserData = { derrotas: { increment: 1 } };
        } else if (fieldToUpdate === 'empates') {
            updatedUserData = { empates: { increment: 1 } };
        } else {
            throw new Error('Campo no válido');
        }

        // Actualiza los juegos del usuario utilizando Prisma
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updatedUserData,
        });

        console.log(`Se actualizó el campo ${fieldToUpdate} del juego del usuario ${userId}`);

        return updatedUser; // Retorna el usuario actualizado si es necesario
    } catch (error) {
        console.error('Error al actualizar el juego:', error);
        throw error; // Propaga el error para manejarlo donde se llame a esta función
    }
};
