import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import logo from './logo.svg';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Presentation />
            </header>
        </div>
    );
};

export default App;
