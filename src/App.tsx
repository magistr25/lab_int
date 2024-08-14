import React from 'react';
import './App.css';
import Header from "./components/Header";
import StepGuide from "./components/StepGuide";
import Info from "./components/Info";
import Slider from "./components/Slider";
import Questions from "./components/Questions";

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="hero-section">
                <img className="hero-section__image" src="/background.png" alt="Hero Background" />
                <button className="btn btn-custom">
                    Проще простого!
                </button>
            </div>
            <StepGuide />
            <Info />
            <Slider />
            <Questions />
        </div>
    );
}

export default App;

