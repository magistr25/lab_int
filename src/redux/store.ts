import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import scrollReducer from './scrollSlice';

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        scroll: scrollReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
