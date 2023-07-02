import React, { useState } from "react";
import {Configuration, OpenAIApi} from 'openai';
import { useParams } from 'react-router-dom';

export default function Examen() {
    const { curso } = useParams();
    const configuration = new Configuration({
        apiKey: "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",//Actualizar!!!!
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
              content:`Eres DevTutor, ayudas al usuario a aprender ${curso} y aplicarás un examen de prueba 
              al iniciar para evaluar su nivel de conocimiento en básico, intermedio o avanzado y con base en lo obtenido, aplicar un curso de acuerdo al nivel.`,
            },
            ...chats,
          ],
          temperature: 1,
          max_tokens: 400
        }).then((res) => {
          msgs.push(res.data.choices[0].message);
          //console.log(res);
          setChats(msgs);
          setIsTyping(false);
        })
        .catch((error) => {
          console.log(error);
        });
      };
      
        return (
          <body className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
            <div className="flex flex-col flex-grow w-full max-w-screen-lg bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                    <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <h1>Bienvenido! Estás en la prueba del curso de {curso}</h1>
                    </div>
                    </div>
                </div>
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                    <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <h1>Listo para tu examen de prueba?</h1>
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
                </form>
              </div>
            </div>
          </body>
        );
}
