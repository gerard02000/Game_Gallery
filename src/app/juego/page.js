import React from 'react';
import RockPaperScissors from '@/components/RockPaperScissors';
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getPartidasInfoByUserId } from '@/lib/data';

const GamePage = () => {
    const getSession = async () => {
        const session = await auth();
        return session;
    };

    const renderRockPaperScissors = async () => {
        const session = await getSession();

        if (!session) {
            redirect('/auth/login');
        } else {
            // Obtener el userId de la sesión
            const userId = session.userId;

            const partidasInfo = await getPartidasInfoByUserId(userId);

            return <RockPaperScissors session={session} partidasInfo={partidasInfo} />;
        }
    };

    return (
        <>
            {renderRockPaperScissors()}
        </>
    );
}

export default GamePage;