import React, { useState } from 'react';
import '../styles/Slider.css';

interface Testimonial {
    name: string;
    location: string;
    review: string;
    avatar: string;
}

let initialTestimonials: Testimonial[] = [
    {
        name: 'Константинов Михаил Павлович',
        location: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы...',
        avatar: '',
    },
    {
        name: 'Иван Иванов',
        location: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу',
        avatar: 'Ivan_Ivanov.png',
    },
    {
        name: 'Артем Корнилов',
        location: 'Самара',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
        avatar: 'Artem_Kornilov.png',
    },
    {
        name: 'Валентина Петрова',
        location: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу',
        avatar: '',
    },
    {
        name: 'Ольга Викторова',
        location: 'Самара',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
        avatar: '',
    },

];

const Slider: React.FC = () => {
    const itemsPerPage = 3; // Количество отображаемых карточек на одной странице
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Текущий индекс первой отображаемой карточки
    // Функция для обработки нажатия на кнопку "Предыдущая"
    const handlePrevClick = () => {
        // Если текущий индекс равен 0, то переходим к последней карточке
        // Иначе уменьшаем индекс на 1
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? initialTestimonials.length - 1 : prevIndex - 1
        );
    };

    // Функция для обработки нажатия на кнопку "Следующая"
    const handleNextClick = () => {
        // Если текущий индекс равен последнему элементу, то переходим к первой карточке
        // Иначе увеличиваем индекс на 1
        setCurrentIndex((prevIndex) =>
            prevIndex === initialTestimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Функция для обработки клика по точке-индикатору
    const handleDotClick = (index: number) => {
        // Устанавливаем индекс в зависимости от нажатой точки
        setCurrentIndex(index);
    };

    // Функция для получения видимых карточек в зависимости от текущего индекса
    const getVisibleTestimonials = () => {
        const startIndex = currentIndex; // Начальный индекс видимой карточки
        const endIndex = (currentIndex + itemsPerPage) % initialTestimonials.length; // Индекс последней видимой карточки

        // Если конец списка меньше начала,
        // нужно взять часть карточек с начала массива и часть с конца
        if (endIndex < startIndex) {
            return [
                ...initialTestimonials.slice(startIndex), // Берем от начала до конца массива
                ...initialTestimonials.slice(0, endIndex) // и дополняем до конца видимой группы
            ];
        }

        // Иначе просто возвращаем видимые карточки
        return initialTestimonials.slice(startIndex, startIndex + itemsPerPage);
    };

    // Видимые карточки определяются функцией getVisibleTestimonials
    // Кнопки управляют индексом текущей карточки
    // Точки-индикаторы отображают текущий индекс и позволяют перейти к нужной группе карточек

    return (
        <div className="slider-container">
            <div className="slider">
                <h1 className="slider__title">Отзывы</h1>
                <button className="slider__arrow-left" onClick={handlePrevClick}>
                    <img src="/arrow-left.png" alt="Previous" />
                </button>
                <button className="slider__arrow-right" onClick={handleNextClick}>
                    <img src="/arrow-right.png" alt="Next" />
                </button>
                <div className="slider__carousel">
                    <div className="slider__item-group">
                        {getVisibleTestimonials().map((testimonial, idx) => (
                            <div className="slider__item" key={idx}>
                                <div className="slider__card">
                                    <div className="slider__header">
                                        <div className="slider__avatar">
                                            <img src={testimonial.avatar ? testimonial.avatar : '/MockPhoto.png'} alt={testimonial.name} />
                                        </div>
                                        <div className="slider__info">
                                            <h3 className="slider__name">{testimonial.name}</h3>
                                            <p className="slider__location">{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <p className="slider__review">{testimonial.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider__dots">
                    {initialTestimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`slider__dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;

