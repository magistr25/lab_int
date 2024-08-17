import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/HeroSection.css';
import { triggerScroll } from '../redux/scrollSlice';
import heroBackground from '../assets/background.png'; // Импорт изображения

const HeroSection: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(triggerScroll());
    };

    return (
        <div className="hero-section">
            <img className="hero-section__image" src={heroBackground} alt="Hero Background" />
            <button className="btn btn-custom" onClick={handleClick}>
                {/* Кнопка */}
            </button>
        </div>
    );
};

export default HeroSection;
