import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState, AppDispatch } from '../redux/store';
import {
    setName,
    setPhone,
    setAgreeChecked,
    setDisagreeChecked,
    setSubmitted,
    resetForm,
} from '../redux/formSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Form.css';

const Form: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const {
        name,
        phone,
        isAgreeChecked,
        isDisagreeChecked,
        isSubmitted,
        isNameValid,
        isPhoneValid,
    } = useSelector((state: RootState) => state.form);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setSubmitted(true));

        const url: string =''

        const isFormValid = isNameValid && isPhoneValid && (isAgreeChecked || isDisagreeChecked);

        if (isFormValid) {
            try {
                const response = await axios.post(url, {
                    name,
                    phone,
                    agree: isAgreeChecked,
                    disagree: isDisagreeChecked,
                });

                if (isAgreeChecked) {
                    alert('Форма успешно отправлена');
                    dispatch(resetForm());
                } else if (isDisagreeChecked) {
                    alert('Форма не может быть отправлена. Вы отказались от согласия.');
                    dispatch(setSubmitted(false)); // Разрешить повторную отправку
                }

                console.log('Server Response:', response.data);
            } catch (error) {
                console.error('Ошибка при отправке формы:', error);
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
                dispatch(setSubmitted(false)); // Разрешить повторную отправку
            }
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }
    };

    return (
        <div className="form">
            <h2 className="form-title">Отправь форму</h2>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="form__group">
                    <div className="form__input-wrapper">
                        <input
                            type="text"
                            className={`form__input ${isSubmitted ? (isNameValid ? 'valid' : 'invalid') : ''}`}
                            id="inputName"
                            placeholder=" "
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />
                        <label htmlFor="inputName" className="form__label--floating">Имя</label>
                        {isSubmitted && (
                            <div className="form__status">
                                {isNameValid ? (
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                ) : (
                                    <i className="bi bi-x-circle-fill text-danger"></i>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="form__group">
                    <div className="form__input-wrapper">
                        <input
                            type="text"
                            className={`form__input ${isSubmitted ? (isPhoneValid ? 'valid' : 'invalid') : ''}`}
                            id="inputPhone"
                            placeholder=" "
                            value={phone}
                            onChange={(e) => dispatch(setPhone(e.target.value))}
                        />
                        <label htmlFor="inputPhone" className="form__label--floating">Телефон</label>
                        {isSubmitted && (
                            <div className="form__status">
                                {isPhoneValid ? (
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                ) : (
                                    <i className="bi bi-x-circle-fill text-danger"></i>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="form__group">
                    <label className="form__label">
                        <input
                            type="checkbox"
                            className="form__checkbox"
                            id="gridAgree"
                            checked={isAgreeChecked}
                            onChange={(e) => dispatch(setAgreeChecked(e.target.checked))}
                        />
                        Согласен
                    </label>
                    <label className="form__label">
                        <input
                            type="checkbox"
                            className="form__checkbox"
                            id="gridDisagree"
                            checked={isDisagreeChecked}
                            onChange={(e) => dispatch(setDisagreeChecked(e.target.checked))}
                        />
                        Отказываюсь
                    </label>
                </div>

                <div className="form__group">
                    <div className="form__actions">
                        <button type="submit" className="form__button">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
