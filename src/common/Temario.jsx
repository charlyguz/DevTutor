import React, { useState } from 'react';
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useParams } from 'react-router-dom';

const Nivel = ({ nivel, temas, desbloqueado }) => {
    const [expandir, setExpandir] = useState(false);
    const handleExpandirClick = () => setExpandir(!expandir);

    return (
        <div className="p-4 border rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h2 className="text-xl">{nivel}</h2>
                {desbloqueado ? <CheckCircleIcon className="h-6 w-6 text-green-500"/> : <LockClosedIcon className="h-6 w-6 text-red-500"/>}
            </div>
            <button onClick={handleExpandirClick} className="text-blue-500">{expandir ? 'Contraer' : 'Expandir'}</button>
            {expandir && temas.map((tema, index) => <div key={index}>{tema}</div>)}
        </div>
    );
};

export default function Temario({ titulo, niveles }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl mb-4">{titulo}</h1>
            {niveles.map((nivel, index) => <Nivel key={index} {...nivel} />)}
        </div>
    );
};
