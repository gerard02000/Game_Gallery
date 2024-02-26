'use client'
// RockPaperScissors.js
import { useState } from 'react';
import { updateJuego } from '@/lib/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';

function RockPaperScissors() {
    const [resultado, setResultado] = useState("");
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [gameResult, setGameResult] = useState("");

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

    const handleUserSelection = (choice) => {
        setUserChoice(choice);
        const computerChoice = generateComputerChoice();
        setComputerChoice(computerChoice);
        const result = determineGameResult(choice, computerChoice);
        setGameResult(result);

        // Actualizar las estadísticas del juego en la base de datos
        updateGameStats(result);
    };

    const updateGameStats = async (result) => {
        try {
            // Lógica para obtener userId (probablemente a través de la sesión de autenticación)
            const userId = 'user_id'; // Reemplaza 'user_id' con el ID de usuario real

            let fieldToUpdate;
            if (result === 'victoria') {
                fieldToUpdate = 'victorias';
            } else if (result === 'derrota') {
                fieldToUpdate = 'derrotas';
            } else if (result === 'empate') {
                fieldToUpdate = 'empates';
            } else {
                throw new Error('Resultado no válido');
            }

            // Actualiza las estadísticas del juego en la base de datos
            await updateJuego(userId, fieldToUpdate);
        } catch (error) {
            console.error('Error al actualizar el juego:', error);
            // Manejar el error aquí si es necesario
        }
    };

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">Juego de Piedra, Papel y Tijeras</h1>
            <div className="flex justify-center space-x-4 mb-8">
                <button onClick={() => handleUserSelection('piedra')} className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandRock} />
                </button>
                <button onClick={() => handleUserSelection('papel')} className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandPaper} />
                </button>
                <button onClick={() => handleUserSelection('tijeras')} className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                    <FontAwesomeIcon icon={faHandScissors} />
                </button>
            </div>
            <div>
                {resultado && <p className={`text-lg ${tipo}`}>{resultado}</p>}
                <p>Tu elección: {userChoice}</p>
                <p>Elección de la computadora: {computerChoice}</p>
                <p>Resultado del juego: {gameResult}</p>
            </div>
        </div>
    );
}

export default RockPaperScissors;
