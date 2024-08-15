import React from 'react';
import './App.css';
import Header from "./components/Header";
import StepGuide from "./components/StepGuide";
import Info from "./components/Info";
import Slider from "./components/Slider";
import Questions from "./components/Questions";
import Text_4 from "./components/Text_4";
import Form from "./components/Form";
import Footer from "./components/Footer";


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
            <Text_4 />
            <Form />
            <Footer />
        </div>
    );
}

export default App;

