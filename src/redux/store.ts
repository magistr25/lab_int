import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import scrollReducer from './scrollSlice';
import formReducer from './formSlice';

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        scroll: scrollReducer,
        form: formReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
