import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FormState {
    name: string;
    phone: string;
    isAgreeChecked: boolean;
    isDisagreeChecked: boolean;
    isSubmitted: boolean;
    isNameValid: boolean;
    isPhoneValid: boolean;
    submissionStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: FormState = {
    name: '',
    phone: '',
    isAgreeChecked: false,
    isDisagreeChecked: false,
    isSubmitted: false,
    isNameValid: false,
    isPhoneValid: false,
    submissionStatus: 'idle',
    error: null,
};

// Асинхронная санка для отправки формы
export const submitForm = createAsyncThunk(
    'form/submitForm',
    async (formData: { name: string; phone: string; agree: boolean; disagree: boolean }, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://URL', formData);
            return response.data;
        } catch (error) {
            return rejectWithValue('Ошибка при отправке формы');
        }
    }
);

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
        resetForm(state) {
            state.name = '';
            state.phone = '';
            state.isAgreeChecked = false;
            state.isDisagreeChecked = false;
            state.isSubmitted = false;
            state.isNameValid = false;
            state.isPhoneValid = false;
            state.submissionStatus = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.submissionStatus = 'pending';
                state.error = null;
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.submissionStatus = 'succeeded';
                state.isSubmitted = true;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.submissionStatus = 'failed';
                state.error = action.payload as string;
            });
    },
});

export const { setName, setPhone, setAgreeChecked, setDisagreeChecked, resetForm } = formSlice.actions;
export default formSlice.reducer;
