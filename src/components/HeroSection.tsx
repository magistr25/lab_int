import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/HeroSection.css';
import { triggerScroll } from '../redux/scrollSlice';

import heroBackground from '../assets/background.png';
import mobileBackground from '../assets/assetsMobile/backgroundMobile.png';
import textMobile from '../assets/assetsMobile/textMobile1.png';
import mobileBackgroundSmall from '../assets/assetsMobile/backgroundMobile2.png'; // Фон для устройств меньше 375px
import textMobileSmall from '../assets/assetsMobile/textMobile2.png'; // Текст для устройств меньше 375px

const HeroSection: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(triggerScroll());
    };

    return (
        <>
            <div className="hero-section hero-section__desktop">
                <img className="hero-section__image" src={heroBackground} alt="Hero Background"/>
                <button className="btn btn-custom" onClick={handleClick}>
                </button>
            </div>
            {/* Для планшетов */}
            <div className="hero-section__mobile">
                <img className="hero-section__image-mobile" src={mobileBackground} alt="Mobile Hero Background"/>
                <img className="group_textMobile" src={textMobile} alt="text"/>
                <button className="btn btn-custom-mobile" onClick={handleClick}>
                </button>
            </div>
            {/* Для устройств меньше 375px */}
            <div className="hero-section__mobile hero-section__mobile-small">
                <img className="hero-section__image-mobile-small" src={mobileBackgroundSmall} alt="Small Mobile Hero Background"/>
                <img className="group_textMobile-small" src={textMobileSmall} alt="text"/>
                <button className="btn btn-custom-mobile-small" onClick={handleClick}>
                </button>
            </div>
            {/* Для устройств меньше 320px */}
            <div className="hero-section__mobile hero-section__mobile-small">
                <img className="hero-section__image-mobile-small" src={mobileBackgroundSmall} alt="Small Mobile Hero Background"/>
                <img className="group_textMobile-small" src={textMobileSmall} alt="text"/>
                <button className="btn btn-custom-mobile-small" onClick={handleClick}>
                </button>
            </div>
        </>
    );
};

export default HeroSection;


