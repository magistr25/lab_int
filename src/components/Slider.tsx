import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { nextSlide, prevSlide, setSlideIndex } from '../redux/sliderSlice';
import '../styles/Slider.css';

const Slider: React.FC = () => {
    const itemsPerPage = 3;
    const dispatch: AppDispatch = useDispatch();
    const { data, currentIndex } = useSelector((state: RootState) => state.slider);

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
                        {getVisibleData().map((data, idx) => (
                            <div className="slider__item" key={idx}>
                                <div className="slider__card">
                                    <div className="slider__header">
                                        <div className="slider__avatar">
                                            <img src={data.avatar ? data.avatar : '/MockPhoto.png'} alt={data.name} />
                                        </div>
                                        <div className="slider__info">
                                            <h3 className="slider__name">{data.name}</h3>
                                            <p className="slider__location">{data.location}</p>
                                        </div>
                                    </div>
                                    <p className="slider__review">{data.review}</p>
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
