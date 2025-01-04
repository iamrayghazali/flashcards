import React, {useState, useEffect} from "react";
import OOPQuestions from "../assets/OOP-questions.json";
import FlashCardRotator from "./FlashCardRotator";

const QuestionContainer = ({moduleName}) => {
  const [questions, setQuestions] = useState([]);
  const [group, setGroup] = useState(""); // To store the group name
  const [groupQuestions, setGroupQuestions] = useState([]); // To store the questions for the group
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Added state

  const getQuestionsForGroup = (number) => {
    console.log("getQuestionsForGroup ", questions);
    const filteredQuestions = questions[number] || [];
    setGroupQuestions(filteredQuestions);
  }

  const loadQuestionBasedOnModule = (moduleName) => {
    switch (moduleName) {
      case "OOP":
        console.log("OOPQuestions", OOPQuestions);
        return setQuestions(OOPQuestions); // Ensure this is an array
      default:
        return setQuestions([]); // Empty array if module doesn't match
    }
  };

  const names = ["Java ecosystem", "Language features", "Type system", "Architecture", "Unit testing", "Databases"];

  const getGroupName = (number) => {
    const numberToInt = parseInt(number);
    switch (numberToInt) {
      case 1:
        setGroup("Java ecosystem");
        getQuestionsForGroup(1);
        break;
      case 2:
        setGroup("Language features");
        getQuestionsForGroup(2);
        break;
      case 3:
        setGroup("Type system");
        getQuestionsForGroup(3);
        break;
      case 4:
        setGroup("Architecture");
        getQuestionsForGroup(4);
        break;
      case 5:
        setGroup("Unit testing");
        getQuestionsForGroup(5);
        break;
      case 6:
        setGroup("Databases");
        getQuestionsForGroup(6);
        break;
      default:
        setGroup("Java ecosystem");
        getQuestionsForGroup(7);
        break;
    }
    setCurrentQuestionIndex(0); // Reset the current question index when the group changes
  };

  useEffect(() => {
    loadQuestionBasedOnModule(moduleName);
  }, [moduleName]);

  return (
    <>
      <div className="text-center m-5">
        {[1, 2, 3, 4, 5, 6].map((number, index) => (
          <button
            key={number}
            onClick={() => getGroupName(number)}
            className="m-2 bg-darkblue text-eggshell py-2 px-4 rounded-lg hover:bg-grey transition duration-300"
          >
            {`${index + 1} - ${names[number - 1]}`}
          </button>
        ))}
      </div>
      <div className="w-full h-3/4 bg-black felx justify-center items-center">

        <FlashCardRotator
          groupQuestions={groupQuestions}
          group={group}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      </div>
    </>
  );
};

export default QuestionContainer;