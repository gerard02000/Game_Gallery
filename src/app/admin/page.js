'use client'
import React, { useState, useEffect } from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

async function page() {
  const isClient = useClient();
  const session = await auth();

  if (!session) {
    await redirect('/auth/login');
    return null;
  }

  if (session.user.role !== 'ADMIN') {
    await redirect('/dashboard');
    return null;
  }

  async function sendNotification() {
    try {
      const response = await fetch('/api/sendNotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Mensaje de notificación',
          recipients: ['user1@example.com', 'user2@example.com'] // Lista de destinatarios
        })
      });

      if (response.ok) {
        alert('Notificación enviada correctamente');
      } else {
        throw new Error('Error al enviar la notificación');
      }
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
      alert('Error al enviar la notificación');
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">🔐 Admin panel</h1>
        <div className="bg-gray-800 text-white shadow-md rounded px-8 py-6 mb-4">
          <p className="text-lg mb-2">{session.user.name}</p>
          <p className="text-lg mb-2">{session.user.email}</p>
          <p className="text-lg mb-2">{session.user.role}</p>
          <img src={session.user.image} alt={session.user.name} className="w-32 h-32 rounded-full mx-auto" />
        </div>
        {/* Botón para enviar notificaciones */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendNotification}>
            Enviar notificación
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
