import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from "./components/Header";
import StepGuide from "./components/StepGuide";
import Info from "./components/Info";
import Slider from "./components/Slider";
import Questions from "./components/Questions";
import Text4 from "./components/Text4";
import Form from "./components/Form";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { RootState } from './redux/store';
import { resetScroll } from './redux/scrollSlice';

function App() {
    const dispatch = useDispatch();
    const triggerScroll = useSelector((state: RootState) => state.scroll.triggerScroll);

    useEffect(() => {
        // Прокрутка к началу страницы при загрузке/перезагрузке
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (triggerScroll) {
            const nextSection = document.getElementById('next-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
            dispatch(resetScroll()); // Сбросим состояние после выполнения прокрутки
        }
    }, [triggerScroll, dispatch]);

    return (
        <div className="app">
            <div className="hero-section">
                <Header/>
                <HeroSection />
            </div>
            <div id="next-section">
                <StepGuide />
                <Info />
                <Slider />
                <Questions />
                <Text4 />
                <Form />
                <Footer />
            </div>
        </div>
    );
}

export default App;
