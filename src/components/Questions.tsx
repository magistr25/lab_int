import React, { useState } from 'react';
import '../styles/Questions.css';

interface QuestionItemProps {
    question: string;
    answer?: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="question-item">
            <div className="question-header" onClick={toggleOpen}>
                <h3>{question}</h3>
                <button onClick={toggleOpen}>{isOpen ? '×' : '+'}</button>
            </div>
            {answer && (
                <div className={`question-answer ${isOpen ? 'open' : ''}`}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Questions: React.FC = () => {
    return (
        <div className="questions-container">
            <h2 className="questions-title">Вопросы</h2>
            <div className="questions-content">
                <QuestionItem question="Подтверждено: сознание наших соотечественников не замутнено пропагандой?" />
                <QuestionItem question="Прототип нового сервиса - это как трубный призыв?" />
                <QuestionItem
                    question="Частокол на границе продолжает удивлять?"
                    answer="В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий."
                />
                <QuestionItem question="Очевидцы сообщают, что слышали грохот грома градущих изменений?" />
                <QuestionItem question="И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?" />
                <QuestionItem question="Нынче никто не может себе позволить инициировать треск разлетающихся скреп?" />
                <QuestionItem question="Высококачественный прототип будущего проекта обнадёживает?" />
            </div>
        </div>
    );
};

export default Questions;

