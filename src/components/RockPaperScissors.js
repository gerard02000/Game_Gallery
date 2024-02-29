'use client'; // Marca el componente como del lado del cliente
// RockPaperScissors.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';

function RockPaperScissors() {
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
    };

    return (
        <div className="text-center bg-gray-900 min-h-screen text-white flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-8">Juego de Piedra, Papel y Tijeras</h1>
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
