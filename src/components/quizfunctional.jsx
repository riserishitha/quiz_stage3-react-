import { useState } from "react";
import Data from "./quizQuestion.json";
import { useNavigate } from "react-router-dom";

const Quizpage = () => {
  const [index, setIndex] = useState(0);
  const [allData, setallData] = useState({
    answered : 0,
    right : 0 , 
    failed :0,
    marks: 0
  })

  const Navi = useNavigate()

  // to go to the next question after clicking on the wanted btn
  const toNext = () => {
    let questions = index;
    if (questions === Data.length - 1) {
      setIndex(0);
    } else {
      setIndex(questions + 1);
    }
  };

  // to go to the previous question after clicking on the wanted btn
  const toBack = () => {
    let questions = index;

    if (questions === 0) {
      setIndex(Data.length - 1);
    } else {
      setIndex(questions - 1);
    }
  };

  // if you want to quit the quiz ...
  const quitbutton = () => {
    let questions = index;
    let toQuit = window.confirm("Are you sure you want to quit?");

    if (toQuit) {
      if (questions === Data.length - 1) {
        setIndex(0);
      } else {
        setIndex(questions + 1);
      }
      // +6;
    }
  };
let questions = index;
  const onclicking = (event) => {
    const questions = index;
    const optionselected = event.target.innerHTML;
    const mcq = Data[questions].answer;

    if (optionselected === mcq) {
      alert("right Answer");
      setallData({...allData,right:allData.right+1,answered:allData.answered+1,marks:allData.marks+1})
    } 
    
    else {
      alert("failed Answer");
      setallData({...allData,failed:allData.failed+1,answered:allData.answered+1,marks:allData.marks-1})
    }
  };
  return (
    <div className="main">
      <h1>Question</h1>
      <p className="series">{`${questions + 1} of ${
        Data.length
      }`}</p>
      <h3 className="ques">{Data[questions].question}</h3>
      <div className="option1">
        <p className="btn" onClick={(e)=>onclicking (e)}>{Data[questions].optionA}</p>
        <p className="btn" onClick={(e)=>onclicking (e)}>{Data[questions].optionB}</p>
      </div>
      <div className="option2">
        <p className="btn" onClick={(e)=>onclicking (e)}>{Data[questions].optionC}</p>
        <p className="btn" onClick={(e)=>onclicking (e)}>{Data[questions].optionD}</p>
      </div>
      <div className="options">
        <button className="last previous" onClick={toBack}>
          Previous
        </button>
        <button className="last next" onClick={toNext}>
          Next
        </button>
        <button className="last quit" onClick={quitbutton}>
          Quit
        </button>

        <button className="finish" onClick={()=> {Navi("/Results",{state : allData})}}>Finish</button>
      </div>
    </div>
  );
};

export default Quizpage;
