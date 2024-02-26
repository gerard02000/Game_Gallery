// home.js

const HomePage = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    {/* Título de la sección */}
                    <h2 className="text-3xl font-bold sm:text-4xl">Gamer Gallerey</h2>

                    {/* Descripción de la sección */}
                    <p className="mt-4 text-gray-300">
                        ¡Bienvenido a nuestra galería de videojuegos retro clásicos! Aquí encontrarás una colección de los juegos más icónicos de la historia, desde los días de los arcades hasta las consolas de los años 80 y 90.
                    </p>
                </div>

                {/* Grid para mostrar los elementos de marketing */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Elemento de marketing 1 */}
                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/juego"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>


                        <h2 className="mt-4 text-xl font-bold text-white">Juegos Clasicos</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    {/* Elemento de marketing 2 */}
                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        {/* SVG o imagen */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* Contenido del SVG */}
                        </svg>

                        {/* Título del elemento */}
                        <h2 className="mt-4 text-xl font-bold text-white">Proximamente Juegos Online</h2>

                        {/* Descripción del elemento */}
                        <p className="mt-1 text-sm text-gray-300">
                            {/* Contenido de la descripción */}
                        </p>
                    </a>

                    {/* Aquí puedes agregar más elementos de marketing si es necesario */}
                </div>

                {/* Botón de llamado a la acción */}
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
