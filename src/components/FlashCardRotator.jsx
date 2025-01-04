import { useEffect, useState } from "react";
import Question from "./Question.jsx";

const FlashCardRotator = ({ groupQuestions, group, currentQuestionIndex, setCurrentQuestionIndex }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const addIndexToQuestions = () => {
    const addedIndexedQuestions = groupQuestions.map((question, index) => {
      return {
        ...question,
        index
      };
    });
    setQuestions(addedIndexedQuestions);
  };

  const getCurrentQuestionFromId = (currentQuestionIndex) => {
    console.log('getCurrentQuestionFromIndex1', currentQuestionIndex);
    const result = questions.filter((question) => question.index === currentQuestionIndex);
    console.log('getCurrentQuestionFromId result', result[0]);
    setCurrentQuestion(result[0]);
    return result[0];
  };

  useEffect(() => {
    addIndexToQuestions();
  }, [groupQuestions]);

  useEffect(() => {
    if (questions.length > 0) {
      getCurrentQuestionFromId(currentQuestionIndex);
    }
  }, [currentQuestionIndex, questions, currentQuestion]);

  return (
    <div className="m-10 w-1/2  border-2 border-darkblue bg-blue-800 shadow-lg rounded-lg p-8">
      <h1 className="text-darkblue text-1xl font-light mb-6">{group}</h1>
      {currentQuestion ? (
        <>
          <Question question={currentQuestion} showAnswer={showAnswer} setShowAnswer={setShowAnswer}/>
          <div className="flex justify-between mt-6">
            <button
              className="bg-darkblue text-eggshell py-2 px-4 rounded-lg hover:bg-grey shadow-md transition duration-300"
              onClick={() => {
                setCurrentQuestionIndex((prevIndex) => (prevIndex === 0 ? groupQuestions.length - 1 : prevIndex - 1));
                setShowAnswer(false);
              }}
            >
              Previous
            </button>
            <button
              className="bg-darkblue text-eggshell py-2 px-4 rounded-lg hover:bg-grey shadow-md transition duration-300"
              onClick={() => {
                setCurrentQuestionIndex((prevIndex) => (prevIndex + 1 === groupQuestions.length ? 0 : prevIndex + 1));
                setShowAnswer(false);
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-grey">Select group!</p>
      )}
    </div>
  );
};

export default FlashCardRotator;