import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <Nav />
            </div>
        </header>
    );
};

export default Header;

