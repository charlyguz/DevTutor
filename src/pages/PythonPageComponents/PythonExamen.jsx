import React, { useState } from 'react';

function Examen({ preguntas, handleExamenSubmit }) {
    const [tiempoRestante, setTiempoRestante] = useState(60);

    const Pregunta = ({ pregunta }) => (
        <div>
            <p>{pregunta}</p>
            <input type="text" placeholder="Escribe tu respuesta aquí..." />
        </div>
    );

    const Temporizador = () => {
        useState(() => {
            if (tiempoRestante > 0) {
                setTimeout(() => setTiempoRestante(tiempoRestante - 1), 1000);
            }
        }, [tiempoRestante]);
    
        return <div>{tiempoRestante}</div>;
    };

    return (
        <div className="p-4 border rounded-lg my-2">
            <h2 className="text-xl">Examen</h2>
            {preguntas.map((pregunta, index) => <Pregunta key={index} pregunta={pregunta} />)}
            <Temporizador />
            <button onClick={handleExamenSubmit} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enviar Respuestas
            </button>
        </div>
    );
}

export default Examen;
