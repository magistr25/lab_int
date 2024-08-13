import React from 'react';
import '../styles/Nav.css'; // Подключение пользовательских стилей, если необходимо

const Nav = () => {
    return (
        <nav className="nav justify-content-center bg-primary py-2">
            <ul className="nav__list d-flex justify-content-around">
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Как это работает?
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        3-й блок
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                       Вопросы и ответы
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Форма
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

