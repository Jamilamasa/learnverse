import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TypingAnimation from '../TypingAnimation';
import chatBot from '../../assets/chat.png';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: "Explain things like you're talking to a software professional with 2 years of experience."
};

const Chatbot = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container when chatLog changes
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatLog]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);

    sendMessage(inputValue);

    setInputValue('');
  }

  const sendMessage = (message) => {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": message }]
    };

    setIsLoading(true);

    axios.post("https://api.openai.com/v1/chat/completions", data, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    }).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }

  return (
    <>
      <button className={`${!show ? 'block' : 'hidden'} fixed bottom-[8em] p-4 right-1 rounded-full`} onClick={() => setShow(!show)}>
      <div className='fixed top-[70%] shadow p-3 rounded-md backdrop-blur-sm right-0 animate-bounce animate-delay-200 relative'>
  <img src={chatBot} className='w-[4em]' alt='' />
  <div className="border-4 border-blue-500 absolute top-0 left-0 right-0 bottom-0 rounded-md animate-pulse"></div>
</div>
      </button>

      <div className={`${show ? 'fixed' : 'hidden'}  bottom-[24vh] right-[1rem]`}>
       
        <div className="container mx-auto   max-w-[700px]">
          <div className="flex flex-col relative w-[80vw] rounded-lg   h-[70vh]  bg-[#141453]">
            <h1 className="bg-blue-60  0 text-white  rounded-lg  border-[2px] shadow-lg  text-center py-3 font-bold text-3xl">Insight Bridge    </h1>
            <h1 onClick={() => setShow(!show)} className=' bg-red-50 text-red-700 rounded-full px-2 py-1 text-2xl w-fit border-[3px] absolute font-extrabold right-0 top-[0vh] '>x</h1>
            <div ref={chatContainerRef} className="flex-grow p-6  backdrop-blur-sm  scroll-smooth delay-500 ease-in transition-all overflow-y-scroll">
              <div className="flex flex-col space-y-4">
                {chatLog.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${
                      message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
                    } rounded-lg p-4 max-w-md`}>
                      {message.message}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div key={chatLog.length} className="flex justify-start">
                    <div className="bg-gray-300  backdrop-blur-sm rounded-lg p-4 max-w-md">
                      <TypingAnimation />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex-none absolute w-full right-0 bottom-[-10vh] p-6  backdrop-blur-md  bg-[#141c4b]">
              <div className="flex rounded-lg gap-4  w-full ">
                <input
                  type="text"
                  className="flex-grow px-4 w-full  py-2   rounded-md border-[1px] border-gray-700 text-gray-800 focus:outline-none"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-cyan-500  text-white rounded-lg px-4 py-2 font-semibold focus:outline-none hover:bg-cyan-900 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
