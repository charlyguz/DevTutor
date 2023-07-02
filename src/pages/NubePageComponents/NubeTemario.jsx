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
    const titulo = 'Nube';

    const niveles = [
        { 
            nivel: 'Básico', 
            temas: [
                {
                    nombre: 'Introducción a la Programación en la Nube', 
                    subtemas: ['Definición y conceptos básicos', 'Modelos de servicio', 'Ventajas y beneficios de la programación en la nube', 'Principales proveedores de servicios en la nube']
                }, 
                {
                    nombre: 'Desarrollo de Aplicaciones en la Nube',
                    subtemas: ['Arquitectura de aplicaciones', 'Servicios de almacenamiento', 'Servicios de cómputo', 'Integración de servicios']
                },
                {
                    nombre: 'Seguridad en la Nube',
                    subtemas: ['Principios básicos', 'Autenticación y autorización de usuarios y servicios', 'Control de acceso y gestión de identidades', 'Auditoría y monitoreo de la seguridad en la nube']
                },
                {
                    nombre: 'Escalabilidad y Tolerancia a Fallos',
                    subtemas: ['Estrategias de escalabilidad en la nube', 'Tolerancia a fallos', 'Carga balanceada y distribución de tráfico']
                },
                {
                    nombre: 'DevOps y Despliegue Continuo en la Nube',
                    subtemas: ['Cultura y prácticas DevOps en el desarrollo de aplicaciones', 'Automatización de procesos de desarrollo y despliegue en la nube', 'Despliegue continuo y entrega continua', 'Herramientas y tecnologías para la gestión de la infraestructura como código (IaC)']
                },
            ], 
            desbloqueado: true 
        },
        { 
            nivel: 'Intermedio', //Actualizar el temario con Cloud en lugar de Python en intermedio y avanzado
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


