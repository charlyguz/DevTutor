import { Link } from "react-router-dom";

export default function CourseCard({ title, description, image, level, buttonText }) {
  return (
    <div className="course-card p-4 m-4 text-white rounded-lg font-sans text-justify flex flex-col w-80 h-full bg-slate-800">
      <div className="w-24 h-24 relative mx-auto">
        <img className="course-image" src={image} alt="Imagen del curso" />
      </div>
      <h2 className="course-title text-4xl font-bold my-5 mx-auto">{title}</h2>
      <p className="course-description my-2">{description}</p>
      <p className="course-level">Nivel: {level}</p>
      <div className="flex justify-center mt-auto">
        <Link to={`/curso/${title.toLowerCase().replace(/\s/g, '')}`} className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}




