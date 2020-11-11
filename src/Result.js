import React from 'react';

export const Result = ({ showScore, missNum, score, questions }) => {
  return (
    <>
      {showScore && missNum.value.length === 0 ? (
        <div className="score-segment">
          <b>
            You scored {score} out of {questions.length}.
          </b>
        </div>
      ) : showScore && missNum.value.length != 0 ? (
        <div>
          <b>All questions are mandatory. Please answer {missNum.value.join(',')} questions.</b>{' '}
        </div>
      ) : null}
    </>
  );
};
