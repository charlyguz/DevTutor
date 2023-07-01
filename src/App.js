import React from "react";
import CourseCard from "./pages/main_page_components/CourseCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './common/footer';
import Header from './common/header';
import Main_page from './pages/main_page';
import PythonPage from './pages/PythonPage';
import JavaScriptPage from './pages/JavaScriptPage';
import Examen from './common/Examen';
import Algoritmos from "./pages/Algoritmos";
import IA from "./pages/IA";
import Nube from "./pages/Nube";
import CursoR from "./pages/CursoR";
import PythonTemario from "./pages/PythonPageComponents/PythonTemario";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/curso/python" element={<PythonPage />} />
          <Route path="/curso/javascript" element={<JavaScriptPage />} />
          <Route path="/curso/:curso" element={<Algoritmos />} />
          <Route path="/curso/ia" element={<IA />} />
          <Route path="/curso/nube" element={<Nube />} />
          <Route path="/curso/:curso" element={<CursoR />} />
          <Route path="/curso/:curso/Examen" element={<Examen />} />
          {/* <Route exact path="/" component={HomePage} /> Esto redirige a la página de inicio, que no has mencionado aún */}
          <Route path="/curso/python/temario" element={<PythonTemario />} />

        </Routes>
        <Footer className="mt-10"/>
      </div>
    </Router>
  );
}

export default App;



