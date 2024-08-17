import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import {
    setName,
    setPhone,
    setAgreeChecked,
    setDisagreeChecked,
    resetForm,
    submitForm,
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
        isNameValid,
        isPhoneValid,
        submissionStatus,
        error,
    } = useSelector((state: RootState) => state.form);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isNameValid || !isPhoneValid || (!isAgreeChecked && !isDisagreeChecked)) {
            alert('Пожалуйста, заполните все поля корректно.');
            return;
        }

        if (isDisagreeChecked) {
            alert('Отправка невозможна без вашего согласия.');
            return;
        }

        // Отправляем форму через санку
        dispatch(submitForm({ name, phone, agree: isAgreeChecked, disagree: isDisagreeChecked }));
    };

    const handleClearName = () => {
        dispatch(setName(''));
    };

    const handleClearPhone = () => {
        dispatch(setPhone(''));
    };

    // Определение классов для input полей
    const nameInputClass = name.trim() === '' ? '' : isNameValid ? 'valid' : 'invalid';
    const phoneInputClass = phone.trim() === '' ? '' : isPhoneValid ? 'valid' : 'invalid';

    return (
        <div className="form-container">
            <div className="form">
                <h2 className="form-title">Отправь форму</h2>
                <form className="form__container" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <div className="form__input-wrapper">
                            <input
                                type="text"
                                className={`form__input ${nameInputClass}`}
                                id="inputName"
                                placeholder=" "
                                value={name}
                                onChange={(e) => dispatch(setName(e.target.value))}
                            />
                            <label htmlFor="inputName" className="form__label--floating">Имя</label>
                            <div className="form__status">
                                {isNameValid ? (
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                ) : name.trim() === '' ? null : (
                                    <i className="bi bi-x-circle-fill text-danger" onClick={handleClearName}></i>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form__group">
                        <div className="form__input-wrapper">
                            <input
                                type="text"
                                className={`form__input ${phoneInputClass}`}
                                id="inputPhone"
                                placeholder=" "
                                value={phone}
                                onChange={(e) => dispatch(setPhone(e.target.value))}
                            />
                            <label htmlFor="inputPhone" className="form__label--floating">Телефон</label>
                            <div className="form__status">
                                {isPhoneValid ? (
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                ) : phone.trim() === '' ? null : (
                                    <i className="bi bi-x-circle-fill text-danger" onClick={handleClearPhone}></i>
                                )}
                            </div>
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
                            <button type="submit" className="form__button" disabled={submissionStatus === 'pending'}>
                                {submissionStatus === 'pending' ? 'Отправка...' : 'Отправить'}
                            </button>
                        </div>
                    </div>
                </form>
                {submissionStatus === 'failed' && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Form;
