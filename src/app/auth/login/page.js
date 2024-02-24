import React from 'react';
import LoginForm from '@/components/login-form';
import OAuthForm from '@/components/oauth-form';

// Definición de los mensajes de error
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesión. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");

function page({ searchParams }) {
  const { error } = searchParams;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900"> {/* Aplicar color de fondo al cuerpo de la página */}
      <div className="relative p-4 w-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="p-5">
            <h3 className="text-2xl mb-0.5 font-medium"></h3>
            <p className="mb-4 text-sm font-normal text-gray-800"></p>
            <div className="text-center">
              <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">Login to your account</p>
              <p className="mt-2 text-sm leading-4 text-slate-600">You must be logged in to perform this action.</p>
            </div>
            <div className="mt-7 flex flex-col gap-2">
              <OAuthForm /> {/* Agrega el componente OAuthForm */}
            </div>
            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
              <div className="h-px w-full bg-slate-200"></div>
              OR
              <div className="h-px w-full bg-slate-200"></div>
            </div>
            <LoginForm /> {/* Agrega el componente LoginForm */}
            <div className="mt-6 text-center text-sm text-slate-600">
              Don't have an account?
              <a href="/auth/register" className="font-medium text-[#4285f4]">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
