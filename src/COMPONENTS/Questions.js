import React, { useState } from "react";
import {pageContext} from '../App'

const quizData = [
  {
    title: " What is 30 + 10.",
    A: "20",
    B: "30",
    C: "40",
    D: "50",
    Answer: "C",
  },
  {
    title: "What is use of useState in React.",
    A: "To store the data",
    B: "To create the data in random manner",
    C: "Both A and B",
    D: "None of the above",
    Answer: "A",
  },
  {
    title: "What does + stands for?",
    A: "Addition",
    B: "Substraction",
    C: "Multiplication",
    D: "Division",
    Answer: "A",
  },
];

export default function Questions() {
  const [index, setIndex] = useState(0);
  const [selectedOption,setSelectedOption] = useState("");

  const {setPage, score, setScore} = React.useContext(pageContext); 

  const next = () => {
    if(quizData[index].Answer===selectedOption)
    {
        setScore(score + 1);
    }
    setIndex(index + 1);
  };

  const optionSelected =(event)=>
  {
    setSelectedOption(event.target.value)
  }

  const finish = ()=>
  {
    if(quizData[index].Answer===selectedOption)
    {
        setScore(score + 1);
    }
    setPage("results");
  }
  return (
    <div className="d-flex flex-column ms-3 mt-4">
      <div>
        <h2>Q:{quizData[index].title}</h2>
      </div>
      <div className="d-flex flex-column mt-2">
        <div>
        <input type="radio" value="A" name="options" onChange={optionSelected}/>
        { quizData[index].A}
        </div>
        <div>
        <input type="radio" value="B" name="options" onChange={optionSelected}/>
        { quizData[index].B}
        </div>
        <div>
        <input type="radio" value="C" name="options" onChange={optionSelected}/>
        { quizData[index].C}
        </div>
        <div>
        <input type="radio" value="D" name="options" onChange={optionSelected}/>
        { quizData[index].D}
        </div>
      </div>
      <div className="mt-4">
        {(index === (quizData.length -1)) ? <button onClick={finish} className="btn btn-danger">Finish</button> : <button className="btn btn-primary" onClick={next}>Next</button>}
      </div>
    </div>
  );
}
