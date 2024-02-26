'use client'
// LoginForm.js

import { useState } from 'react';
import { login } from '@/lib/actions';
import Button from '@/components/button-form';

function LoginForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        const message = await login(data); // Server action
        if (message?.success) {
            setTipo('success');
            setResultado(message.success);
        } else if (message?.error) {
            setTipo('error');
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className='credentials'>
            <div>
                <label>Email
                    <input type='email' name='email' placeholder="jose@mail.com" className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" />
                </label>
            </div>
            <div>
                <label>Contraseña
                    <input type="password" name='password' placeholder="******" className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" />
                </label>
            </div>
            <p className={`info ${tipo}`}>{resultado}</p>
            <Button title="Iniciar sesión" />
        </form>
    );
}

export default LoginForm;
