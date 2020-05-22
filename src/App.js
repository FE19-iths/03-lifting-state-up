import React from 'react';
import './App.css';
import VeggieList from './components/VeggieList';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1> Demo </h1>
        </header>
        <main>
            <VeggieList />
        </main>
        </div>
    );
}

export default App;
