import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    name: string;
    phone: string;
    isAgreeChecked: boolean;
    isDisagreeChecked: boolean;
    isSubmitted: boolean;
    isNameValid: boolean;
    isPhoneValid: boolean;
}

const initialState: FormState = {
    name: '',
    phone: '',
    isAgreeChecked: false,
    isDisagreeChecked: false,
    isSubmitted: false,
    isNameValid: false,
    isPhoneValid: false,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
            state.isNameValid = action.payload.trim().length > 0;
        },
        setPhone(state, action: PayloadAction<string>) {
            const phoneRegex = /^[0-9]{10}$/;
            state.phone = action.payload;
            state.isPhoneValid = phoneRegex.test(action.payload);
        },
        setAgreeChecked(state, action: PayloadAction<boolean>) {
            state.isAgreeChecked = action.payload;
            if (action.payload) state.isDisagreeChecked = false;
        },
        setDisagreeChecked(state, action: PayloadAction<boolean>) {
            state.isDisagreeChecked = action.payload;
            if (action.payload) state.isAgreeChecked = false;
        },
        setSubmitted(state, action: PayloadAction<boolean>) {
            state.isSubmitted = action.payload;
        },
        resetForm(state) {
            state.name = '';
            state.phone = '';
            state.isAgreeChecked = false;
            state.isDisagreeChecked = false;
            state.isSubmitted = false;
            state.isNameValid = false;
            state.isPhoneValid = false;
        },
    },
});

export const { setName, setPhone, setAgreeChecked, setDisagreeChecked, setSubmitted, resetForm } = formSlice.actions;
export default formSlice.reducer;
