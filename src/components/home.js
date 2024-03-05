// home.js
import React from 'react';

const HomePage = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-8 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-4xl font-bold sm:text-5xl">Gamer Gallery</h2>
                    <p className="mt-4 text-gray-300">
                        ¡Bienvenido a nuestra galería de videojuegos retro clásicos! Aquí encontrarás una colección de los juegos más icónicos de la historia, desde los días de los arcades hasta las consolas de los años 80 y 90.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-xl border border-gray-800 p-10 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/juego"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 text-pink-500 mx-auto mb-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <path d="M21 15l-5-5L5 21"></path>
                        </svg>
                        <h2 className="mt-2 text-xl font-bold text-white">Juegos Clásicos</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-800 p-10 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 text-pink-500 mx-auto mb-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 4v5l3 3-3 3v5"></path>
                        </svg>
                        <h2 className="mt-2 text-xl font-bold text-white">Próximamente Juegos Online</h2>
                        <p className="mt-1 text-sm text-gray-300">
                            {/* Contenido de la descripción */}
                        </p>
                    </a>
                </div>

                <div className="mt-12 text-center">
                    <a href="/auth/login" className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
