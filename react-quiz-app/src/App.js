import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const question = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(false);
  const [result, setResult] = useState(0);
  // console.log(question[0].answerOptions[0].answerText);
  // console.log(
  //   question[0].answerOptions.map((option) => {
  //     return option.answerText;
  //   })
  // );
  function handleClick(isCorrect) {
    if (isCorrect === true) setResult(result + 1);
    if (counter < question.length - 1) {
      setCounter((prev) => {
        return prev + 1;
      });
    } else setScore(true);
  }
  return (
    <div className="App">
      {score ? (
        <div className="container clear">
          You scored {result} out of {question.length}
        </div>
      ) : (
        <div className="container clear">
          <div className="que-container">
            <h1>
              Question {counter + 1}/{question.length}
            </h1>
            <p>{question[counter].questionText}</p>
          </div>
          <div className="ans-container">
            {question[counter].answerOptions.map((option) => {
              return (
                <button onClick={() => handleClick(option.isCorrect)}>
                  {option.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
