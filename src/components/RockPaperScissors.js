'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { updatePartidaWithResult } from '@/lib/actions';

function RockPaperScissors({ session }) {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [gameResult, setGameResult] = useState("");
    const [partidaId, setPartidaId] = useState(null);
    const [partidasCount, setPartidasCount] = useState(1);
    const [victorias, setVictorias] = useState(0);
    const [derrotas, setDerrotas] = useState(0);
    const [empates, setEmpates] = useState(0);

    useEffect(() => {
        const fetchPartidasInfo = async () => {
            try {
                if (session && session.user) {
                    // Llamar a la función para obtener información de partidas
                    const partidasInfo = await getPartidasInfoByUserId(session.userId);
                    setPartidasCount(partidasInfo.partidasCount);
                    setVictorias(partidasInfo.victorias);
                    setDerrotas(partidasInfo.derrotas);
                    setEmpates(partidasInfo.empates);

                    // Asignar el ID de la nueva partida
                    const numeroPartida = partidasInfo.partidasCount + 1;
                    setPartidaId(numeroPartida);

                } else {
                    console.error('ID de usuario no disponible en la sesión.');
                }
            } catch (error) {
                console.error('Error al obtener información de partidas:', error);
            }
        };
        fetchPartidasInfo();
    }, [session]);

    const generateComputerChoice = () => {
        const choices = ['piedra', 'papel', 'tijeras'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const determineGameResult = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'empate';
        } else if (
            (userChoice === 'piedra' && computerChoice === 'tijeras') ||
            (userChoice === 'papel' && computerChoice === 'piedra') ||
            (userChoice === 'tijeras' && computerChoice === 'papel')
        ) {
            return 'victoria';
        } else {
            return 'derrota';
        }
    };

    const handleUserSelection = async (choice) => {
        setUserChoice(choice);
        const computerChoice = generateComputerChoice();
        setComputerChoice(computerChoice);

        const result = determineGameResult(choice, computerChoice);
        setGameResult(result);

        try {
            if (session && session.userId) {
                // Llamar a la función para actualizar la partida
                const updatedPartidaId = await updatePartidaWithResult(session.userId, result, partidaId);
                console.log('Partida actualizada con ID:', updatedPartidaId);
            } else {
                console.error('ID de usuario no disponible.');
            }
        } catch (error) {
            console.error('Error al actualizar la partida:', error);
        }
    };

    return (
        <div className="text-center bg-gray-900 min-h-screen text-white flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-8">Juego de Piedra, Papel y Tijeras</h1>
            <p className="text-xl mb-4">Partida número: {partidaId}</p>
            <p className="text-xl mb-4">Partidas jugadas: {partidasCount}</p>
            <p className="text-xl mb-4">Victorias: {victorias}</p>
            <p className="text-xl mb-4">Derrotas: {derrotas}</p>
            <p className="text-xl mb-4">Empates: {empates}</p>
            <div className="flex justify-center space-x-4 mb-8">
                <button onClick={() => handleUserSelection('piedra')} className="py-4 px-6 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandRock} className="text-4xl" />
                </button>
                <button onClick={() => handleUserSelection('papel')} className="py-4 px-6 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandPaper} className="text-4xl" />
                </button>
                <button onClick={() => handleUserSelection('tijeras')} className="py-4 px-6 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandScissors} className="text-4xl" />
                </button>
            </div>
            <div>
                <p className="text-xl">Tu elección: {userChoice}</p>
                <p className="text-xl">Elección de la computadora: {computerChoice}</p>
                <p className="text-2xl mt-4">Resultado del juego: {gameResult}</p>
            </div>
        </div>
    );
}

export default RockPaperScissors;
