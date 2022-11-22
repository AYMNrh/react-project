import { Component, useState } from 'react';
import './App.css';
import Nav from './components/nav.js';
import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

function App() {
  const handleChange = event => {
    change(event.target.value);
  };
  const array = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
  const [theme, change]= useState('synthwave')
  const tt = 55 
  const [ttt, plus]= useState(tt)

  const TEXTS = [
    "Bonjour",
    "Hello",
    "Guten tag",
    "Hola"
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="App flex flex-col mt "  data-theme={theme}>
      <Nav/>
      <section className="App flex flex-col">
     <h1 className=' text-amber-500 animate-pulse '>vbsjkvbsv</h1>
     <p>it is what it is: {ttt}</p>
     <div className='flex flex-row self-center'>
    <button className='btn btn-primary w-32 self-center m-2' onClick={()=>{plus(ttt+1)}}>CLICK ME</button>
    <button className='btn btn-secondary w-24 self-center m-2' onClick={()=>{plus(tt)}}>RESET</button>
    <button className='btn btn-accent w-24 self-center m-2' onClick={()=>{change('cyberpunk')}}>Cyberpunk</button>
    <button className='btn btn-neutral w-24 self-center m-2' onClick={()=>{change('dark')}}>Dark</button>
    </div>
    <select onChange={handleChange} className="select select-secondary w-full max-w-xs self-center m-3" >
      {array.map( (theme)=>
        <option >{theme}</option>
      )}
      
    </select>
    </section>

    <section className="flex flex-col bg-primary h-44">

      <div className="avatar ml-24 ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-7">
          <img src="https://cdn.discordapp.com/attachments/783697965512523826/1008883516399947876/unknown.png" />
        </div>
      </div>
      
    </section>

    <section className="flex flex-col bg-primary ">

    <div className="hero bg-base-200 min min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img src="https://cdn.discordapp.com/attachments/591023396439982092/990758053232140338/unknown.png" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                  <div className=' flex justify-center'>
                    <h1 className=" flex text-5xl font-bold ">
                      <TextTransition className=' self-center' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>, I'm Aymen
                    </h1>
                    {/* <h1 className="text-5xl font-bold" >Aymen</h1> */}
                    {/* <h1 className="text-5xl font-bold" >
                      <TextTransition springConfig={presets.gentle}>
                        {TEXTS[index % TEXTS.length]}
                      </TextTransition>
                    </h1> */}
                  </div>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

    </section>

    </div>
  );
}

export default App;
