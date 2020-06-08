import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Questionnaire from './Questionnaire';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple'
      );

      const questions = response.data.results.map(question => ({
        ...question,
        answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5),
      }));

      setQuestions(questions);
    })();
  }, []);

  const handleAnswer = answer => {
    // prevent double clicking answers
    if (!showAnswers) {
      // check for the answer
      if (answer === questions[currentIndex].correct_answer) {
        // increase the score
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handleRestart = () => {
    setQuestions([]);
    // setScore(0);
  };

  return questions.length > 0 ? (
    <div className="quiz-container">
      {currentIndex >= questions.length ? (
        <div className="text-center bg-white rounded-lg overflow-hidden bg-teal-900">
          <h4 className="text-3xl uppercase text-white py-4">Congratulations!</h4>
          <div className="bg-white p-6 text-black font-normal text-lg">
            <p>You have completed the quiz.</p>
            <p>
              You got {score} out of {questions.length} questions right.
            </p>
            <button
              button
              onClick={handleRestart}
              className="bg-teal-900 text-white font-bold uppercase rounded shadow px-10 py-3 mt-6 focus:outline-none"
              type="submit"
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <Questionnaire
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          currentIndex={`${currentIndex + 1}/${questions.length}`}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl">Loading questions...</h2>
  );
};

export default App;

// useEffect(()=> {
//   fetch('https://opentdb.com/api.php?amount=10&category=11')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// },[]);
