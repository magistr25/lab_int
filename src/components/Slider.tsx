import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { nextSlide, prevSlide, setSlideIndex } from '../redux/sliderSlice';
import { useSwipeable } from 'react-swipeable';
import '../styles/Slider.css';
import defaultAvatar from '../assets/MockPhoto.png';
import arrowLeft from '../assets/arrow-left.png';
import arrowRight from '../assets/arrow-right.png';

const Slider: React.FC = () => {
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const dispatch: AppDispatch = useDispatch();
    const { data, currentIndex } = useSelector((state: RootState) => state.slider);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const handlePrevClick = () => {
        dispatch(prevSlide());
    };

    const handleNextClick = () => {
        dispatch(nextSlide());
    };

    const handleDotClick = (index: number) => {
        dispatch(setSlideIndex(index));
    };

    const getVisibleData = () => {
        const startIndex = currentIndex;
        const endIndex = (currentIndex + itemsPerPage) % data.length;

        if (endIndex < startIndex) {
            return [
                ...data.slice(startIndex),
                ...data.slice(0, endIndex),
            ];
        }

        return data.slice(startIndex, startIndex + itemsPerPage);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextClick,
        onSwipedRight: handlePrevClick,
        preventScrollOnSwipe: true,
        trackMouse: true, // Поддержка свайпа при помощи мыши на десктопах
    });

    return (
        <div className="slider-container" {...swipeHandlers}>
            <div className="slider">
                <h1 className="slider__title">Отзывы</h1>
                {itemsPerPage === 3 && (
                    <>
                        <button className="slider__arrow-left" onClick={handlePrevClick}>
                            <img src={arrowLeft} alt="Previous" />
                        </button>
                        <button className="slider__arrow-right" onClick={handleNextClick}>
                            <img src={arrowRight} alt="Next" />
                        </button>
                    </>
                )}
                <div className="slider__carousel">
                    <div className="slider__item-group">
                        {getVisibleData().map((item, idx) => (
                            <div className="slider__item" key={idx}>
                                <div className="slider__card">
                                    <div className="slider__header">
                                        <div className="slider__avatar">
                                            <img src={item.avatar ? item.avatar : defaultAvatar} alt={item.name} />
                                        </div>
                                        <div className="slider__info">
                                            <h3 className="slider__name">{item.name}</h3>
                                            <p className="slider__location">{item.location}</p>
                                        </div>
                                    </div>
                                    <p className="slider__review">{item.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slider__dots">
                    {data.map((_, index) => (
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
