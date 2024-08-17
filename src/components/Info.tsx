import React from 'react';
import '../styles/Info.css';
import infoImage1 from '../assets/info.png';
import infoImage2 from '../assets/info2.png';

const Info: React.FC = () => {
    return (
        <div className="info">
            <div className="info__text">
                <h1 className="info__title">Круто, ты дошёл до третьего блока</h1>
                <p className="info__paragraph">
                    53% опрошенных пользовались кредитами из-за того, что не могли покрыть
                    <br /> непредвиденные расходы свыше 15 000 U+20BD.
                </p>
                <p className="info__paragraph">
                    Доступ к заработанным денгам помогает отказаться от кредитов и
                    <br /> экономить деньги на процентах и штрафах
                </p>
            </div>
            <div className="info__image-container">
                <img className="info__image info__image--front" src={infoImage1} alt="Info 1" />
                <img className="info__image info__image--back" src={infoImage2} alt="Info 2" />
            </div>
        </div>
    );
};

export default Info;
