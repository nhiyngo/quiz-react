import React from 'react';

const Questionnaire = ({ handleAnswer, currentIndex, data: { question, correct_answer, incorrect_answers } }) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

  return (
    <div className="text-center">
      <h3>{`Question ${currentIndex}`}</h3>
      <div className="p-4 border-b-2 border-solid border-gray-400">
        <h2 className="text-3xl text-center" dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {shuffledAnswers.map(answer => (
          <button
            className="bg-white p-4 font-semibold rounded-lg shadow hover:shadow-xl focus:outline-none"
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
            type="submit"
          />
        ))}
      </div>
      <button className="bg-teal-900 text-white font-bold uppercase rounded px-10 py-4 mt-10" type="submit">
        Next Question
      </button>
    </div>
  );
};

export default Questionnaire;
