import React, { useEffect, useMemo, useState } from 'react';
import arrayShuffle from 'array-shuffle';
import arrowleft from '../../assets/Group (1).svg';
import alarm from '../../assets/mdi_alarm-clock.svg';
import { Link } from 'react-router-dom';

const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalQuestion, setFinalQuestion] = useState([]);
  const [progress, setProgress] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null)); // Initialize an array to store selected answers for each question
  const [scores, setScores] = useState(Array(10).fill(0)); // Initialize an array to store scores for each question

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(url)).json();
      const reviewedQuestions = data?.results?.map((question) => {
        return { ...question, selected: null };
      });
      setFinalQuestion(reviewedQuestions);
    };

    fetchData();
  }, []);

  const finalOptions = useMemo(
    () =>
      finalQuestion[currentQuestion]?.incorrect_answers
        ? arrayShuffle([
            ...finalQuestion[currentQuestion]?.incorrect_answers,
            finalQuestion[currentQuestion]?.correct_answer,
          ])
        : [],
    [currentQuestion, finalQuestion]
  );

  const handleOptionClick = (answer) => {
    // Create a new array to update selected answers for the current question
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateTotal = () => {
    const totalScore = scores.reduce((total, score) => total + score, 0);
    return totalScore ;
  };

  const handleNextQuestion = () => {
    // Update the scores array based on the selected answer for the current question
    const newScores = [...scores];
    newScores[currentQuestion] = selectedAnswers[currentQuestion] === finalQuestion[currentQuestion].correct_answer ? 1 : 0;
    setScores(newScores);

    // Move to the next question
    setCurrentQuestion((prev) => (prev + 1 >= finalQuestion.length ? 0 : prev + 1));
    setProgress(progress + 1);
  };

  const handlePreviousQuestion = () => {
    // Move to the previous question
    setCurrentQuestion((prev) => (prev === 0 ? finalQuestion.length - 1 : prev - 1));
    setProgress(progress - 1);
  };

  const renderAnswerOptions = () => {
    return finalOptions.map((answer, index) => {
      let letter = String.fromCharCode(65 + index); // Convert index to letter (A, B, C, ...)
      return (
        <li
          key={index}
          className={`py-4 px-3 rounded-md shadow-md hover:bg-[#67949E] hover:text-white ${
            selectedAnswers[currentQuestion] === answer && "bg-[#67949E] text-white"
          }`}
          onClick={() => handleOptionClick(answer)}
        >
          <span className="flex items-center gap-3 transition-all duration-750">
            <p className="font-semibold">{letter}.</p>
            <p>{answer}</p>
          </span>
        </li>
      );
    });
  };

  return (
    <>
      <div className="bg-[#67949E] h-screen relative">
        <div className="flex justify-between flex-col py-3 px-2 gap-3">
          <span className="flex gap-3">
            <Link to="/">

                   <img src={arrowleft} alt="" />
            </Link>
         
            <p className="text-white">Assessment</p>
          </span>
          <div className="flex  justify-between">
            <h1 className="text-white font-bold">General Knowledege</h1>
            <span className="flex gap-2 items-center text-white font-bold">
              <img src={alarm} className="" alt="" />
              <p>15:30</p>
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-[5px]">
            <div
              className="bg-[#1A3B42] h-[5px] rounded-full"
              style={{ width: `${(progress / finalQuestion.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="h-[82%] absolute bottom-0 z-10 w-full py-6 bg-white rounded-l-lg rounded-r-lg">
          <div>
            <div className="flex flex-col px-[2%] py-2 ">
              <p className="font-medium text-lg">
                Q. {`${currentQuestion + 1}/${finalQuestion.length}`}
              </p>
              <span className="font-medium text-xl pr-3">
                {finalQuestion[currentQuestion]?.question}
              </span>
            </div>
            <ul className="px-[2%] py-2 flex flex-col gap-3 md:gap-10 ">
              {renderAnswerOptions()}
            </ul>
          </div>
          <div className="flex w-full justify-between items-center absolute bottom-5 p-0 px-[2%] ">
            <button
              className="text-[#67949E]  px-10 py-3 border-2 border-[#67949E] rounded-lg font-semibold"
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
            {currentQuestion + 1 !== finalQuestion.length ? (
              <button
                className="text-white px-10 py-3 border-2 border-[#67949E] rounded-lg font-semibold bg-[#67949E]"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            ) : (
              <button
                className="text-[#67949E]  px-10 py-3 shadow-lg rounded-lg font-semibold"
                onClick={() => {
                  alert(`Total Score: ${calculateTotal()}`);
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
