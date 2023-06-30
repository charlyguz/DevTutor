import React from "react"
import CourseCard from "././main_page_components/CourseCard"

const courses = [
    { title: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", description: "Aprende Python desde cero. Un lenguaje de programación de alto nivel con una sintaxis fácil de leer.", level: "Básico", buttonText: "Empezar" },
    { title: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", description: "Descubre el lenguaje de programación del web. Ideal para desarrollar aplicaciones interactivas.", level: "Intermedio", buttonText: "Empezar" },
    { title: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", description: "Desarrolla interfaces de usuario modernas y eficientes con React, la biblioteca de JavaScript.", level: "Avanzado", buttonText: "Empezar" },
    { title: "Nube", image: "https://img.freepik.com/vector-gratis/ilustracion-alojamiento-sitio-web-degradado_23-2149247164.jpg?w=826&t=st=1688095865~exp=1688096465~hmac=f8cb1153685a7c3ef693594366df24c044f0cb0f9fdb97bbb53e0526715e0a09", description: "Entiende y aprovecha el poder de la computación en la nube para alojar y escalar aplicaciones.", level: "Básico", buttonText: "Empezar" },
    { title: "IA", image: "https://img.freepik.com/foto-gratis/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan_53876-129794.jpg?w=1380&t=st=1688095907~exp=1688096507~hmac=13008604774ca2aab6568b7ac065595a3cec70f5ee47798f98d93f26eb8bcb97", description: "Adéntrate en el fascinante mundo de la Inteligencia Artificial y aprende cómo puede transformar la tecnología.", level: "Intermedio", buttonText: "Empezar" },
    { title: "Estructuras de Datos y Algoritmos", image: "https://cdn-icons-png.flaticon.com/512/1172/1172245.png?w=826&t=st=1688095952~exp=1688096552~hmac=c7aa7505b1058e16f8d4a627cf86f209ba07ffd41ee8ac59e32e8dab1ccc6812", description: "Aprende los fundamentos de las estructuras de datos y los algoritmos para mejorar tu habilidad en la resolución de problemas.", level: "Avanzado", buttonText: "Empezar" },
];

export default function Main_page() {
    return (
        <div className="flex justify-center items-center h-screen my-8 mb-14">
            <div className="courses-container grid grid-cols-1 md:grid-cols-3 gap-4 justify-center max-w-screen-xl mx-auto">
                {courses.map((course, index) => (
                    <div className="w-full col-span-1 aspect-w-1 aspect-h-1"> {/* Agregada clase "aspect-w-1 aspect-h-1" */}
                        <CourseCard key={index} {...course} />
                    </div>
                ))}
            </div>
        </div>
    );
}

  
  



  
