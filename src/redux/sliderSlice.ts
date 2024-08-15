import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

