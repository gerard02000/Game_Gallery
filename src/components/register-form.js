'use client'; // Marcar el componente como cliente

import { useState } from 'react';
import { register } from '@/lib/actions';
import { redirect } from 'next/navigation';
import Button from '@/components/button-form';

function RegisterForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        const message = await register(data); // Enviar datos al servidor
        if (message.success) {
            setTipo('success');
            setResultado(message.success);
            // Redirige al usuario al inicio de sesión después de un registro exitoso
            redirect('/auth/login');
        } else {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className='credentials'>
            <div>
                <label>Nombre
                    <input type='text' name='name' placeholder="José García" className="block border border-grey-light w-full p-3 rounded mb-4" />
                </label>
                <label>Email
                    <input type='email' name='email' placeholder="jose@mail.com" className="block border border-grey-light w-full p-3 rounded mb-4" />
                </label>
                <label>Contraseña
                    <input type="password" name='password' placeholder="******" className="block border border-grey-light w-full p-3 rounded mb-4" />
                </label>
                <p className={`info ${tipo}`}>{resultado}</p>
            </div>
            <Button title="Crear cuenta" />
        </form>
    );
}

export default RegisterForm;