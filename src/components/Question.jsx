import {useEffect, useState} from "react";

const Question = ({question, showAnswer, setShowAnswer}) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (question) {
      setCurrentQuestion(question);
    }
  }, [question]);

  return (
    <div className="relative w-full h-56 perspective-1000">
        {currentQuestion ? (
          showAnswer ? (
            <div
              className="card-inner w-full h-full absolute backface-hidden transition-transform duration-500 transform group-hover:rotate-y-180 cursor-pointer bg-eggshell rounded-lg shadow-lg p-6 font-bold flex justify-center items-center"  onClick={() => setShowAnswer(!showAnswer)}>
              <p className="text-darkblue ">
                {currentQuestion.answer}
              </p>
            </div>
          ) : (
            <div className="card-inner w-full h-full absolute backface-hidden transition-transform duration-500 transform group-hover:rotate-y-180 cursor-pointer bg-eggshell rounded-lg shadow-lg p-6 font-bold text-2xl flex justify-center items-center" onClick={() => setShowAnswer(!showAnswer)}>
              <p className="text-darkblue ">
                {currentQuestion.question}
              </p>
            </div>
          )
        ) : (
          <p className="text-black">Loading...</p>
        )}
    </div>
  );
};

export default Question;