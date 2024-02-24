import React from 'react';

function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white"> {/* Cambiado el color del texto a blanco */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-3">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">¡Bienvenido a la Era de los Videojuegos Retro!</h1>
          <p className="text-lg">
            ¡Bienvenido a nuestra galería de videojuegos retro clásicos! Aquí encontrarás una colección de los juegos más icónicos de la historia, desde los días de los arcades hasta las consolas de los años 80 y 90.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Revive la Emoción de los Videojuegos Clásicos</h2>
            <p className="text-lg mb-4">
              Soy Lorem Ipsum, tu guía virtual a través de este viaje nostálgico. Acompáñame mientras exploramos los mundos pixelados de Mario, los laberintos de Pac-Man y las batallas épicas de Street Fighter.
            </p>
            <p className="text-lg mb-4">
              ¿Estás listo para revivir la emoción de los juegos de antaño? ¡Entonces prepárate para sumergirte en la aventura!
            </p>
            <p className="text-lg">
              ¡Diviértete explorando nuestra galería y recuerda siempre que en el mundo de los videojuegos, la diversión nunca pasa de moda!
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/retro.jpg" alt="Retro gaming" className="max-w-full md:max-w-xl rounded-lg shadow-lg" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
