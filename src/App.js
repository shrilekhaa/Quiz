import React, { useState } from 'react';
import questions from './questions.js';
import { Question } from './Question';
import { Result } from './Result';

export default function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [missNum, setMissNum] = useState({ value: [1, 2, 3, 4] });
  let index;

  const handleAnswerOptionClick = (isCorrect, id_num, ans_id, ans_txt) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    console.log('id_num: ', id_num);
    index = missNum.value.indexOf(id_num + 1);
    if (index > -1) {
      missNum.value.splice(index, 1);
      setMissNum({ value: missNum.value });
    }
  };

  function handleClick() {
    setShowScore(true);
  }

  const changeSelected = (id_num, ans_txt) => {
    const filteredArray = questions.filter((ques) => ques.id === id_num);
    filteredArray[0].selected = ans_txt;
  };

  return (
    <div className="app">
      <div>
        {questions.map((question) => (
          <Question
            question={question}
            handleAnswerOptionClick={handleAnswerOptionClick}
            changeSelected={changeSelected}
            showScore={showScore}
          />
        ))}
        <hr></hr>
        <button className="result-button" onClick={handleClick}>
          Get Result!
        </button>
        <Result showScore={showScore} missNum={missNum} score={score} questions={questions} />
      </div>
    </div>
  );
}
