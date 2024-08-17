import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IvanIvanovAvatar from '../assets/Ivan_Ivanov.png';
import ArtemKornilovAvatar from '../assets/Artem_Kornilov.png';

interface Data {
    name: string;
    location: string;
    review: string;
    avatar: string;
}

interface SliderState {
    data: Data[];
    currentIndex: number;
}

const initialState: SliderState = {
    data: [
        {
            name: 'Константинов Михаил Павлович',
            location: 'Санкт-Петербург',
            review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы...',
            avatar: '', // Отсутствует аватар
        },
        {
            name: 'Иван Иванов',
            location: 'Санкт-Петербург',
            review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу',
            avatar: IvanIvanovAvatar,
        },
        {
            name: 'Артем Корнилов',
            location: 'Самара',
            review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
            avatar: ArtemKornilovAvatar,
        },
        {
            name: 'Валентина Петрова',
            location: 'Санкт-Петербург',
            review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своей стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу',
            avatar: '', // Отсутствует аватар
        },
        {
            name: 'Ольга Викторова',
            location: 'Самара',
            review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
            avatar: '', // Отсутствует аватар
        },
    ],
    currentIndex: 0,
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        nextSlide: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.data.length;
        },
        prevSlide: (state) => {
            state.currentIndex =
                (state.currentIndex - 1 + state.data.length) % state.data.length;
        },
        setSlideIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload;
        },
    },
});

export const { nextSlide, prevSlide, setSlideIndex } = sliderSlice.actions;
export default sliderSlice.reducer;
