import React from 'react';
import RockPaperScissors from '@/components/RockPaperScissors';
import { auth } from "@/auth"
import { redirect } from "next/navigation"

const GamePage = async () => {
    const session = await auth();

    if (!session) {
        redirect('/auth/login');
        return null; // Evita que se renderice el componente si no hay sesión
    }

    return (
        <>
            <RockPaperScissors />
        </>
    );
}

export default GamePage;
