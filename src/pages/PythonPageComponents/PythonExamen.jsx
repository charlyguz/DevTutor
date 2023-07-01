import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from 'openai';

export default function PythonExamen({ handleExamenSubmit }) {
  const [tiempoRestante, setTiempoRestante] = useState(150);  // 2 minutos y medio en segundos

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
      
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const chat = async (e, message) => {
    e.preventDefault();
    if(!message)return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({role:"user", content: message});
    setChats(msgs);
    setMessage("");
    await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role:"system",
            content:"Cuando el usuario indique que esta listo, realizaras una pregunta sobre la instalacion de python",
          },
          ...chats,
        ],
        temperature: 0.6,
        max_tokens: 800
      }).then((res) => {
        msgs.push(res.data.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (tiempoRestante > 0) {
        const timerId = setTimeout(() => setTiempoRestante(tiempoRestante - 1), 1000);
        return () => clearTimeout(timerId);  // Limpia el temporizador si el componente se desmonta
    }
  }, [tiempoRestante]);


  return (
    <div className="p-4 border rounded-lg my-2">
      <h2 className="text-xl mb-4">Examen</h2>
      <div className="mb-4">     
        <div className="mb-2">Tiempo restante: {tiempoRestante}</div>
        <p className="mb-2 font-bold text-lg">Pregunta: </p> 
        <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-800 p-3">
                <div className="flex flex-col flex-grow w-full max-w-screen-lg bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div>
                        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <h1>Menciona que estas listo para comenzar el examen.</h1>
                        </div>
                        </div>
                    </div>
                    {
                        chats && chats.length ? (
                            chats.map((chat, index) => (
                                <div key={index}>
                                    {chat.role === 'assistant' ? (
                                        <div className="flex w-full mt-2 space-x-3 max-w-xl">
                                            <div>
                                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                                    <p className={isTyping ? "" : "hide"}>
                                                        <p>{chat.content}</p>
                                                    </p>   
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end">
                                        <div>
                                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                            <p className="text-sm">{chat.content}</p>
                                            </div>
                                        </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : ""
                    }
                    {
                        isTyping ? (
                            <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                <div>
                                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                        <p className={isTyping ? "" : "hide"}>
                                            <i>{isTyping ? "Escribiendo..." : ""}</i>
                                        </p>   
                                    </div>
                                </div>
                            </div>
                        ) : ""
                    }
                </div>
                <div className="bg-gray-300 p-4">
                    <form onSubmit={e => chat(e, message)} >
                    <input
                        className="flex items-center h-10 w-full rounded px-3 text-sm"
                        type="text"
                        name='message'
                        value={message}
                        placeholder="Escribe tu respuesta"
                        onChange={e => setMessage(e.target.value)}
                    ></input>
                    <input type="submit" value="Enviar Respuestas"className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={tiempoRestante === 0}>
                    </input>
                    </form>
                </div>
                </div>
            </div>
      </div>
    </div>
  );
}


