import React, { useState } from 'react';
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Subtema = ({ nombre, subtemas }) => {
    const [expandir, setExpandir] = useState(false);
    const handleExpandirClick = () => setExpandir(!expandir);

    return (
        <div>
            <div onClick={handleExpandirClick} className="flex justify-between items-center bg-gray-300 rounded-md p-2 mt-2 cursor-pointer">
                {nombre}
                <ChevronDownIcon 
                    className={`h-5 w-5 text-blue-500 transform transition-transform duration-200 ${expandir ? 'rotate-180' : ''}`}
                />
            </div>
            {expandir && subtemas.map((subtema, index) => 
                <div key={index} className="bg-gray-200 rounded-md p-2 mt-2 ml-4">
                    {subtema}
                </div>
            )}
        </div>
    );
};

const Nivel = ({ nivel, temas, desbloqueado }) => {
    const [expandir, setExpandir] = useState(false);
    const handleExpandirClick = () => desbloqueado && setExpandir(!expandir);

    return (
        <div className="p-4 border rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h2 className="text-xl">{nivel}</h2>
                {desbloqueado ? <CheckCircleIcon className="h-6 w-6 text-green-500"/> : <LockClosedIcon className="h-6 w-6 text-red-500"/>}
                <ChevronDownIcon 
                    onClick={handleExpandirClick} 
                    className={`h-5 w-5 text-blue-500 transform transition-transform duration-200 ${expandir ? 'rotate-180' : ''}`}
                />
            </div>
            {expandir && temas.map((tema, index) => <Subtema key={index} {...tema} />)}
        </div>
    );
};

export default function PythonTemario() {
    const titulo = 'Python';

    const niveles = [
        { 
            nivel: 'Básico', 
            temas: [
                {
                    nombre: 'Introducción a Python', 
                    subtemas: ['Instalación', 'Uso del intérprete']
                }, 
                {
                    nombre: 'Sintaxis y Variables',
                    subtemas: ['Sintaxis básica', 'Tipos de variables', 'Operaciones con variables']
                },
                {
                    nombre: 'Estructuras de Datos',
                    subtemas: ['Listas', 'Tuplas', 'Diccionarios', 'Sets']
                },
                {
                    nombre: 'Control de Flujo',
                    subtemas: ['Sentencias if', 'Bucles for y while', 'Control de bucles']
                },
                {
                    nombre: 'Funciones',
                    subtemas: ['Definición de funciones', 'Argumentos y parámetros', 'Return']
                },
            ], 
            desbloqueado: true 
        },
        { 
            nivel: 'Intermedio', 
            temas: [
                {
                    nombre: 'Manejo de Excepciones',
                    subtemas: ['Try/Except', 'Elevación de excepciones', 'Excepciones personalizadas']
                },
                {
                    nombre: 'Programación Orientada a Objetos',
                    subtemas: ['Clases y objetos', 'Herencia', 'Polimorfismo']
                },
                {
                    nombre: 'Módulos y Paquetes',
                    subtemas: ['Uso de módulos', 'Creación de módulos', 'Paquetes']
                },
                {
                    nombre: 'Manejo de Archivos',
                    subtemas: ['Lectura de archivos', 'Escritura de archivos', 'Manejo de archivos con Pandas']
                },
                {
                    nombre: 'Testeo',
                    subtemas: ['Introducción a Unit Testing', 'Testeo de clases', 'Testeo de funciones']
                }
            ], 
            desbloqueado: false 
        },
        { 
            nivel: 'Avanzado', 
            temas: [
                {
                    nombre: 'Decoradores',
                    subtemas: ['Sintaxis de decoradores', 'Uso de decoradores', 'Decoradores con argumentos']
                },
                {
                    nombre: 'Meta-programación',
                    subtemas: ['Métodos mágicos', 'Metaclases']
                },
                {
                    nombre: 'Concurrencia y Paralelismo',
                    subtemas: ['Hilos', 'Procesos', 'Asyncio']
                },
                {
                    nombre: 'Expresiones Regulares',
                    subtemas: ['Sintaxis de regex', 'Uso de regex en Python', 'Grupos en regex']
                },
                {
                    nombre: 'Desarrollo Web con Django',
                    subtemas: ['Introducción a Django', 'Modelos', 'Vistas y plantillas', 'Despliegue de aplicaciones web']
                }
            ],
            desbloqueado: false 
        },
    ];

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl w-full">
                <h1 className="text-3xl mb-4">{titulo}</h1>
                {niveles.map((nivel, index) => <Nivel key={index} {...nivel} />)}
            </div>
        </div>
    );
};


