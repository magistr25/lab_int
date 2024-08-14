import React from 'react';
import './App.css';
import Header from "./components/Header";
import StepGuide from "./components/StepGuide";
import Info from "./components/Info";
import Slider from "./components/Slider";

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
            <StepGuide />
            <Info />
            <Slider />
        </div>
    );
}

export default App;

