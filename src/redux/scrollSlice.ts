import { createSlice } from '@reduxjs/toolkit';

interface ScrollState {
    triggerScroll: boolean;
}

const initialState: ScrollState = {
    triggerScroll: false,
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        triggerScroll: (state) => {
            state.triggerScroll = true;
        },
        resetScroll: (state) => {
            state.triggerScroll = false;
        },
    },
});

export const { triggerScroll, resetScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
