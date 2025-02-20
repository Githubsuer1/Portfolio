import {NavLink} from 'react-router-dom'
import React from 'react';
import FlipCard from './Flipcard';

  const Projects = () => {

    return (
      <section className="min-h-screen h-full bg-white flex justify-center gap-2 p-4">

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-md'>
        <div 
          className="w-full max-w-sm h-82 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>To-do List Using MERN Stack</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p> Frontend: React.js, Redux Toolkit</p>
          <p> Backend: Node.js, Express.js</p>
          <p> Database: MongoDB</p>
          <p> State Management: Redux Toolkit</p>
          <h1 className='font-bold'> Key Features:</h1>
          <p>Add, edit, delete, and mark tasks as completed</p>
          <p>Fully responsive UI for all devices</p>
          <p>RESTful API integration for smooth functionality</p>
          <p>Redux Toolkit for efficient state management</p>
          <p>Express & MongoDB for a scalable backend</p>

          <strong>Live Demo: <NavLink to='https://todo-mern-kappa-dusky.vercel.app/'>Click Here</NavLink></strong>
        </div>

        <div 
          className="w-full max-w-sm h-84 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>MyOwnGPT</strong>
          <h1 className='font-bold'> Tech Stack:</h1>
          <p>Frontend: React.js, Tailwind CSS</p>
          <p>Backend: Node.js, Express.js</p>
          <p>API: Groq API</p>
          <h1 className='font-bold'> Key Features:</h1>
          <p>Making query like chatgpt </p>
          <p>Fully responsive UI for all devices</p>
          <p>RESTful API integration for smooth functionality</p>
          <p>Express for a scalable backend</p>

          <strong> Live Demo: <NavLink to='https://my-own-gpt-frontend.vercel.app/'>Live Demo</NavLink></strong>
        </div>

        <div 
          className="w-full max-w-sm h-82 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>Weather App Using public API</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p>Frontend: React.js, Tailwind CSS, Javascript</p>
          <h1 className='font-bold'>Key Features:</h1>
          <p>Fetch Weather with real time temprature</p>
          <p> Fully responsive UI for all devices</p>
          <p> API integration for smooth functionality</p>
          

          <strong> Live Demo: <NavLink to='https://githubsuer1.github.io/WeatherApp/'>Live Demo</NavLink></strong>
        </div>

        <div 
          className="w-full max-w-sm h-82 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>Calculator</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p>Frontend: React.js, Tailwind CSS</p>
          <h1 className='font-bold'>Key Features:</h1>
          <p>Calculate </p>
          <p>Fully responsive UI for all devices</p>
          <strong>Live Demo: <NavLink to='https://githubsuer1.github.io/Calculater/'>Live Demo</NavLink></strong>
        </div>

        <div 
          className="w-full max-w-sm h-84 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>Random Password Generator</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p> Frontend: React.js, Tailwind CSS</p>
          <h1 className='font-bold'>Key Features:</h1>
          <p>Fully responsive UI for all devices</p>
          <p>Generate password of any length having letter, special charector and symbols</p>

          <strong> Live Demo: <NavLink to='https://githubsuer1.github.io/PasswordGenerator/'>Live Demo</NavLink></strong>
        </div>


        <div className="w-full max-w-sm h-84 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1"
        >

          <strong>Currency Convertor</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p>Frontend: React.js, Tailwind CSS</p>
          <h1 className='font-bold'>Key Features:</h1>
          <p>Convert given currency into required form </p>
          <p>Fully responsive UI for all devices</p>
          <p>API integration for smooth functionality</p>

          <strong> Live Demo: <NavLink to='https://githubsuer1.github.io/Currencyconverter/'>Live Demo</NavLink></strong>
        </div>

        <div className="w-full max-w-sm h-84 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>BMI Index Generator</strong>
          <h1 className='font-bold'> Tech Stack:</h1>
          <p> Frontend: React.js, Tailwind CSS</p>
          <h1 className='font-bold'> Key Features:</h1>
          <p> Fully responsive UI for all devices</p>
          <p> </p>


          <strong>Live Demo: <NavLink to='https://githubsuer1.github.io/BMI-Generator/'>Live Demo</NavLink></strong>
        </div>

        <div 
          className="w-full max-w-sm h-84 shadow-2xl p-2.5 transition-all 
          duration-800 ease-in-out transform hover:scale-105 hover:bg-gray-900 
          hover:text-gray-200 cursor-pointer rounded flex flex-col gap-1">

          <strong>Tic Tac Toe</strong>
          <h1 className='font-bold'>Tech Stack:</h1>
          <p>Frontend: HTML, CSS, Javascript</p>
          <h1 className='font-bold'> Key Features:</h1>
          <p>Fully responsive UI for all devices</p>


          <strong> Live Demo: <NavLink to='#'>Live Demo</NavLink></strong>
        </div>

        
        </div>
        
      </section>
    );
  };
  
  export default Projects;
  