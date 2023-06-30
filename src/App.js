import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './common/footer';
import Header from './common/header';
import Main_page from './pages/main_page';
import PythonPage from './pages/PythonPage'; // Importa la página del curso Python
import JavaScriptPage from './pages/JavaScriptPage'; // Importa la página del curso JavaScript


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/curso/python" element={<PythonPage />} /> // Ruta de la página del curso Python
          <Route path="/curso/javascript" element={<JavaScriptPage />} /> // Ruta de la página del curso JavaScript
          // Agrega las rutas de las demás páginas del curso...
        </Routes>
        <Footer className="mt-10"/>
      </div>
    </Router>
  );
}

export default App;


