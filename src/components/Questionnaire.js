import React from 'react';

const Questionnaire = ({
  handleAnswer,
  currentIndex,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => (
  <div className="flex flex-col">
    <h3 className="text-center">{`Question ${currentIndex}`}</h3>
    <div className="mt-5">
      <h2 className="text-xl text-center" dangerouslySetInnerHTML={{ __html: question }} />
    </div>
    <div className="grid grid-cols-2 gap-6 mt-8">
      {answers.map(answer => {
        const borderColor = showAnswers
          ? answer === correct_answer
            ? 'sm:border-teal-700'
            : 'sm:border-red-500'
          : 'sm:border-teal-500';

        const textColor = showAnswers
          ? answer === correct_answer
            ? 'text-teal-700'
            : 'text-red-500'
          : 'text-teal-900';

        return (
          <button
            className={` ${borderColor} ${textColor} bg-white p-4 font-semibold rounded-lg border focus:outline-none`}
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
            type="submit"
          />
        );
      })}
    </div>
    {showAnswers && (
      <button
        onClick={() => handleNextQuestion()}
        className="bg-teal-900 text-white font-bold uppercase rounded shadow px-10 py-4 mt-10 mx-auto focus:outline-none"
        type="submit"
      >
        Next Question
      </button>
    )}
  </div>
);

export default Questionnaire;
