import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MensajePrueba({ title }) {
    const formatCourseTitle = (text) => {
        if (text === 'estructurasdedatosyalgoritmos') {
            return 'Estructuras de Datos y Algoritmos';
        } 

        // Si no es el caso especial, simplemente retorna la cadena tal como está.
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    const location = useLocation();
    const navigate = useNavigate();
    const curso = formatCourseTitle(location.pathname.split('/')[2]); // Extrae el nombre del curso de la URL

    const handleClick = () => {
        navigate(`/curso/${curso}/Examen`);
    };

    

    return (
        <div className="flex flex-col justify-center items-center px-8 text-center bg-gray-700 text-white h-screen gap-y-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-6xl font-bold my-8 text-white">Bienvenido al curso de <span className="text-indigo-500">{curso}</span></h1>
                <p className="my-6 text-slate-50">
                    Vamos a realizarte un examen personalizado y, dependiendo de tus resultados, trazaremos un camino de aprendizaje ajustado a tus necesidades. Existen tres niveles: básico, intermedio y avanzado. Según tu puntaje, te asignaremos un nivel y liberaremos las clases y los cursos correspondientes para ti.
                </p>
                <h2 className="text-5xl font-bold my-8">¿Estás listo? ¡Comienza ahora!</h2>
                <button onClick={handleClick} className="bg-black text-white px-6 py-3 rounded hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Comenzar mi prueba ahora
                </button>
            </div>
        </div>
    );
};

