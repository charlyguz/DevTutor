import React from 'react';

function Clase({ videoUrl, handleExamenClick }) {
    const Video = () => (
        <div className="relative pt-56.25 w-full overflow-hidden">
            <iframe className="absolute top-0 left-0 w-full h-full" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );

    const Chat = () => (
        <div className="mt-4 border border-gray-300 p-4 rounded-lg">
            {/* Aquí se conectará con OpenAI */}
            <div className="text-gray-500 mb-4">
                {/* Aquí se mostrarán las respuestas de la API */}
                <p>Respuestas de la API...</p>
            </div>
            <input type="text" placeholder="Haz una pregunta..." className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
    );

    return (
        <div className="p-4 border rounded-lg my-2">
            <h2 className="text-xl">Clase</h2>
            <Video />
            <Chat />
            <button onClick={handleExamenClick} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ir al Examen
            </button>
        </div>
    );
}

export default Clase;
