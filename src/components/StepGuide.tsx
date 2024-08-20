import React from 'react';
import '../styles/StepGuide.css';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';

const steps = [
    {
        icon: step1,
        title: 'Прочитай задание внимательно',
        description: 'Думаю у тебя не займет это больше двух-трех минут'
    },
    {
        icon: step2,
        title: 'Изучи весь макет заранее',
        description: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {
        icon: step3,
        title: 'Сделай хорошо',
        description: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
    },
    {
        icon: step4,
        title: 'Получай предложение',
        description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    }
];

const StepGuide = () => {
    return (
        <div className="step-guide">
            <h1 className="step-guide__title">Как это работает</h1>
            <div className="step-guide__steps">
                {steps.map((step, index) => (
                    <div key={index} className="step-guide__step">
                        <img className="step-guide__icon" src={step.icon} alt={step.title}/>
                        <div className="step-guide__info">
                            <p className="step-guide__step-title">{step.title}</p>
                            <p className="step-guide__step-description">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepGuide;
