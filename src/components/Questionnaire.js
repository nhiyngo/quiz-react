import React from 'react';

const Questionnaire = ({ handleAnswer, data: { question, correct_answer, incorrect_answers } }) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return (
    <div className="text-center">
      <h3>CurrentQuestion</h3>
      <div className="p-4 border-b-2 border-solid border-gray-400">
        <h2 className="text-3xl text-center" dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {shuffledAnswers.map(answer => (
          <button
            className = {`${
              correct_answer === answer ? 'bg-teal-400': 'bg-white'} p-4 font-semibold rounded-lg shadow`}
            onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
