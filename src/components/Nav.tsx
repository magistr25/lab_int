import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'; // Подключение пользовательских стилей, если необходимо

const Nav = () => {
    return (
        <nav className="nav justify-content-center bg-primary py-2">
            <ul className="nav__list d-flex justify-content-around">
                <li className="nav__item">
                    <NavLink
                        to="/how-it-works"
                        className={({ isActive }) =>
                            isActive ? "nav__link nav__link--active" : "nav__link"
                        }
                    >
                        Как это работает?
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/block-3"
                        className={({ isActive }) =>
                            isActive ? "nav__link nav__link--active" : "nav__link"
                        }
                    >
                        3-й блок
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            isActive ? "nav__link nav__link--active" : "nav__link"
                        }
                    >
                        Вопросы и ответы
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/form"
                        className={({ isActive }) =>
                            isActive ? "nav__link nav__link--active" : "nav__link"
                        }
                    >
                        Форма
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;




