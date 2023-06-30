import React from 'react';
import { useParams } from 'react-router-dom';

export default function Examen() {
    const { curso } = useParams();

    return (
        <div>
            <h1>Estás en la prueba del curso {curso}</h1>
            {/* Aquí agregar la lógica del examen */}
        </div>
    );
}
