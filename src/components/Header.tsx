import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import Logo from './Logo';
import Nav from './Nav';
import logoMenu from '../assets/assetsMobile/logoMenu.png';
import menuArrow from '../assets/assetsMobile/menuArrow.png';

const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                {isMobile ? (
                    <>
                        <div className={`hamburger ${menuOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMenu}>
                            <span className="hamburger__line"></span>
                            <span className="hamburger__line"></span>
                        </div>
                        {menuOpen && (
                            <div className="menu-overlay">
                                <nav className="mobile-nav">
                                    <div className="header__container">
                                        <div className="logo">
                                            <img className="logo__icon" src={logoMenu} alt="Icon" />
                                        </div>
                                        <button className="close-button" onClick={toggleMenu}>
                                            ×
                                        </button>
                                    </div>
                                    <ul>
                                        <li>
                                            <NavLink to="how-it-works" className="active-link">Как это работает
                                                <img src={menuArrow} alt="nav-button" />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="third-block" className="active-link">3-й блок
                                                <img src={menuArrow} alt="nav-button" />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="questions" className="active-link">Вопросы и ответы
                                                <img src={menuArrow} alt="nav-button" />
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="form" className="active-link">Форма
                                                <img src={menuArrow} alt="nav-button" />
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </>
                ) : (
                    <Nav />
                )}
            </div>
        </header>
    );
};

export default Header;

