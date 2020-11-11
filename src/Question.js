import React from 'react';

export const Question = ({ question, handleAnswerOptionClick, changeSelected, showScore }) => {
  return (
    <div key={question.id}>
      <div className="question-segment">
        <div className="question-count">
          <span className="set-color">
            <b style={{ color: showScore && question.selected === '' ? 'yellow' : '' }}>QUESTION {question.id + 1}</b>
          </span>
        </div>
        <div className="question-text">
          <b>{question.questionText}</b>
        </div>
      </div>
      <div className="answer-segment">
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={(e) => {
              handleAnswerOptionClick(answerOption.isCorrect, question.id, answerOption.id, answerOption.answerText);
              changeSelected(question.id, answerOption.answerText);
            }}
            style={{ backgroundColor: question.selected === answerOption.answerText ? 'green' : '' }}
          >
            <span>{answerOption.answerText}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
