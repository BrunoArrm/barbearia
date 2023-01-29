import React, { useState } from 'react';
import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  
  const [ modo, setModo ] = useState("light");

  function alteraModo() {


    if ( modo === "light" ) {
        setModo("dark");
        console.log("Alterado para o modo " + modo);
    } else {
        setModo("light")
        console.log("Alterado para o modo " + modo )
    }

  }

  return (
    <>
      <Header 
        classe={modo}
        funcao={alteraModo}/>
      <Home 
        classe={modo}/> 
    </>
  );
}

export default App;
