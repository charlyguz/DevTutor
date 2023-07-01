import React, { useState, useEffect } from "react";
import {Configuration, OpenAIApi} from 'openai';

export default function PythonExamen({ handleExamenSubmit }) {
  const [tiempoRestante, setTiempoRestante] = useState(150);  // 2 minutos y medio en segundos
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const configuration = new Configuration({
      apiKey: "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",  
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    const fetchPregunta = async () => {
      try {
        const res = await openai.createCompletion({
          engine: "davinci-codex",
          prompt: 'Escribe una pregunta sobre el tema de instalacion de Python',  // Aquí se proporciona el tema
          max_tokens: 60,
        });
        console.log(res.data);
        setPregunta(res.data.choices[0].text.trim());
      } catch (err) {
        console.error(err);
      }
    };
    fetchPregunta();
  }, []);

  useEffect(() => {
    if (tiempoRestante > 0) {
        const timerId = setTimeout(() => setTiempoRestante(tiempoRestante - 1), 1000);
        return () => clearTimeout(timerId);  // Limpia el temporizador si el componente se desmonta
    }
  }, [tiempoRestante]);

  const handleRespuestaChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleExamenSubmitLocal = () => {
    handleExamenSubmit(respuesta);
    setRespuesta('');
  };

  return (
    <div className="p-4 border rounded-lg my-2">
      <h2 className="text-xl mb-4">Examen</h2>
      <div className="mb-4">
        <p className="mb-2 font-bold text-lg">Pregunta: {pregunta}</p>
        <input 
          type="text" 
          className="w-full p-2 border rounded"
          placeholder="Escribe tu respuesta aquí..." 
          value={respuesta} 
          onChange={handleRespuestaChange} 
        />
      </div>
      <div className="mb-2">{tiempoRestante}</div>
      <button onClick={handleExamenSubmitLocal} className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={tiempoRestante === 0}>
        Enviar Respuestas
      </button>
    </div>
  );
}


