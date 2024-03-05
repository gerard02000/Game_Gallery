
import { prisma } from '@/lib/prisma'

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });
    return user;
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    return null;
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });
    return user;
  } catch (error) {
    console.error('Error al obtener usuario por correo electrónico:', error);
    return null;
  }
}


export async function getPartidasInfoByUserId(userId) {
  try {
    // Obtener la información de partidas del usuario utilizando su ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { partidas: true },
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Calcular el conteo de partidas, victorias, derrotas y empates
    let victorias = 0;
    let derrotas = 0;
    let empates = 0;
    user.partidas.forEach(partida => {
      if (partida.resultado === 'victoria') {
        victorias++;
      } else if (partida.resultado === 'derrota') {
        derrotas++;
      } else {
        empates++;
      }
    });

    return {
      partidasCount: user.partidas.length,
      victorias,
      derrotas,
      empates
    };
  } catch (error) {
    console.error('Error al obtener la información de partidas del usuario:', error);
    return { partidasCount: 0, victorias: 0, derrotas: 0, empates: 0 };
  }
}
