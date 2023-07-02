import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

function Clase({ videoUrl, handleExamenClick }) {
    const configuration = new Configuration({
        apiKey: "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",//Actualizar
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
              content:"Eres DevTutor y estas enfocado a resolver dudas sobre la instalacion de python que el usuario pueda tener donde preguntaste previamente si esta listo para instalar python",
            },
            ...chats,
          ],
          temperature: 1,
          max_tokens: 1000
        }).then((res) => {
          msgs.push(res.data.choices[0].message);
          setChats(msgs);
          setIsTyping(false);
        })
        .catch((error) => {
          console.log(error);
        });
      };
      
    const navigate = useNavigate();

    const handleIrExamenClick = () => {
        navigate('/examen');
    };
    const Video = () => (
        <div className="relative pt-56.25 w-full overflow-hidden px-32 bg-gray-200" style={{ height: '500px' }}>
            <iframe className="embed-responsive-item inset-0 h-full w-full" src="https://www.youtube.com/embed/1dMoE9Wsaaw" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );

    return (
        <div className="p-4 border rounded-lg my-2">
            <h2 className="text-xl">Clase</h2>
            <Video />
            <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-800 p-3">
                <div className="flex flex-col flex-grow w-full max-w-screen-lg bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div>
                        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <h1>Estas listo para instalar python?</h1>
                        </div>
                        </div>
                    </div>
                    {
                        chats && chats.length ? (
                            chats.map((chat, index) => (
                                <div key={index}>
                                    {chat.role === 'assistant' ? (
                                        <div className="flex w-full mt-2 space-x-3 max-w-xl">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
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
                        placeholder="Pregunta tu duda"
                        onChange={e => setMessage(e.target.value)}
                    ></input>
                    </form>
                </div>
                </div>
            </div>
            <button onClick={handleIrExamenClick} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ir al Examen
            </button>
        </div>
    );
}

export default Clase;
