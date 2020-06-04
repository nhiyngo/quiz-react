import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Questionnaire from './Questionnaire';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

      useEffect(() => {
    (async () => {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&category=14&type=multiple');

      setQuestions(response.data.results);
      setCurrentQuestion(response.data.results[0]);
    })();
  }, []);

  const handleAnswer = (answer) => {
    // check for the answer

    // show next question

    // update score if correct

  };

  return questions.length > 0 ? (
    <div className="container">
    {currentQuestion && (
      <Questionnaire data={currentQuestion} handleAnswer={handleAnswer} />
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
