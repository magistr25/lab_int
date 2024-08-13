import React from 'react';
import './App.css';
import Header from "./components/Header";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="hero-section">
                <img src="background.png" alt="Hero Background" className="hero-section__image"/>
                <button className="btn btn-custom">
                    Проще простого!
                </button>
            </div>
            <>
            </>
        </div>
    );
}

export default App;

