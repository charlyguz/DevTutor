import React, { useState } from 'react';
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Subtema = ({ nombre, subtemas }) => {
    const [expandir, setExpandir] = useState(false);
    const handleExpandirClick = () => setExpandir(!expandir);
    const { curso } = useParams(); // Obtiene el curso actual de los parámetros de la ruta

    return (
        <div>
            <div onClick={handleExpandirClick} className="flex justify-between items-center bg-gray-300 rounded-md p-2 mt-2 cursor-pointer">
                {nombre}
                <ChevronDownIcon 
                    className={`h-5 w-5 text-blue-500 transform transition-transform duration-200 ${expandir ? 'rotate-180' : ''}`}
                />
            </div>
            <div className={`flex flex-col ${expandir ? '' : 'hidden'}`}>
                {subtemas.map((subtema, index) => 
                    <Link to={`/curso/${curso}/temario/${index}`} key={index} className="bg-gray-200 rounded-md p-2 mt-2 ml-4">
                        {subtema}
                    </Link>
                )}
            </div>
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
    const titulo = 'JavaScript';

    const niveles = [
        { 
            nivel: 'Básico', 
            temas: [
                {
                    nombre: 'Introducción a JavaScript', 
                    subtemas: ['Incorporación de JavaScript en un archivo HTML', 'Manipulación de elementos HTML mediante JavaScript']
                }, 
                {
                    nombre: 'Sintaxis y Variables',
                    subtemas: ['Sintaxis básica de JavaScript', 'Tipos de variables en JavaScript', 'Operaciones con variables en JavaScript']
                },
                {
                    nombre: 'Estructuras de Datos',
                    subtemas: ['Listas', 'Tuplas(Arrays)', 'Diccionarios(Objetos)', 'Sets en JavaScript']
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
                    subtemas: ['Try/Catch', 'Lanzamiento de excepciones', 'Excepciones personalizadas']
                },
                {
                    nombre: 'Programación Orientada a Objetos',
                    subtemas: ['Clases y objetos', 'Herencia', 'Polimorfismo']
                },
                {
                    nombre: 'Módulos y Paquetes',
                    subtemas: ['Uso de módulos', 'Gestión de dependencias con NPM', 'Modulos reutilizables', 'Publicación de paquetes']
                },
                {
                    nombre: 'Manejo de Archivos',
                    subtemas: ['Lectura de archivos locales', 'Escritura de archivos locales', 'Manipulación de datos en archivos']
                },
                {
                    nombre: 'Testeo',
                    subtemas: ['Introducción al testing en JavaScript', 'Herramientas de testing en JavaScript', 'Tipo de pruebas']
                }
            ], 
            desbloqueado: false 
        },
        { 
            nivel: 'Avanzado', //Actualizar el temario con JS en lugar de Python
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


