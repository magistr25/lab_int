import React from 'react';
import logo from '../assets/logo.png';

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img className="logo__icon" src={logo} alt="Logo"  />

        </div>
    );
};

export default Logo;
