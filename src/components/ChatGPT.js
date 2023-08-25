import { useState } from "react";
import OpenAI from "openai";

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Chat GPT');

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true
  })

  const genResponse = async () => {
    try{
      const completedChat = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": input}]
      });
      setOutput(completedChat.choices[0].message.content);
    }catch(err){
      if (err instanceof OpenAI.APIError) {
        console.error(err.status);  // e.g. 401
        console.error(err.message); // e.g. The authentication token you passed was invalid...
        console.error(err.code);  // e.g. 'invalid_api_key'
        console.error(err.type);  // e.g. 'invalid_request_error'
      } else {
        // Non-API error
        console.log(err);
      }
    }
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
            {output}
          </p>
        </div>
      </section>
      <form onSubmit={(e) => {
        e.preventDefault();
        genResponse();
        }}>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea 
            id="chat" 
            rows="1" 
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
          ></textarea>
          <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}

export default ChatGPT;
