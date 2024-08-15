import React from 'react';
import '../styles/Form.css';

const Form = () => {
    return (
        <div className="form">
            <h2 className="form-title">Отправь форму</h2>
            <div className="form__container">
                <div className="form__group">
                    <input type="text" className="form__input" id="inputName" placeholder="Имя"/>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" id="inputPhone" placeholder="Телефон"/>
                </div>
                <div className="form__group">

                        <label className="form__label">
                            <input type="checkbox" className="form__checkbox" id="gridAgree"/>
                            Согласен
                        </label>
                        <label className="form__label">
                            <input type="checkbox" className="form__checkbox" id="gridDisagree"/>
                            Отказываюсь
                        </label>

                </div>
                <div className="form__group">
                    <div className="form__actions">
                        <button type="submit" className="form__button">Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;

