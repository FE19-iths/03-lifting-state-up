import React, { useState } from 'react';
import './App.css';
import VeggieList from './components/VeggieList';
import Bordered from './components/Bordered';
import Login from './components/Login';
import UserStatus from './components/UserStatus';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
        <header className="App-header">
            <h1>
                Demo
            </h1>
            <Login
                isLoggedIn={isLoggedIn}
                doLogIn={() => setIsLoggedIn(true)}
                doLogOut={() => setIsLoggedIn(false)} />
        </header>
        <main>
            <Bordered>
                <VeggieList />
            </Bordered>
            <Bordered> test </Bordered>
            <UserStatus isLoggedIn={isLoggedIn} />
        </main>
        </div>
    );
}

export default App;
