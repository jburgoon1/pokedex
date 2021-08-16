import React from 'react'
import logo from './logo.svg';
import './App.css';
import pokedex from './pokedex'
import Pokecard from './pokecard';

function App() {
  return (
    <div className="App">
      <Pokecard pokedex={pokedex}/>
    </div>
  );
}

export default App;
