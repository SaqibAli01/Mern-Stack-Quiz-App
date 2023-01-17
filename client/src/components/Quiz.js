import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, PrevQuestion } from "./hooks/FetchQuestion";
import { PushAnswer } from './hooks/setResult';
// Redux store import 
import { useSelector, useDispatch } from 'react-redux';

import { Navigate } from "react-router-dom";


export default function Quiz() {

  const [check, setChecked] = useState(undefined)
  const state = useSelector(state => state);
  const result = useSelector(state => state.results.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("state", state)
    console.log("result", result)
    // console.log("queue", queue)
    // console.log("trace ", trace)
    // console.log("State",state);
    // console.log("questions",questions.queue);
  })

   

  const next = () => {
    // alert("Next");
    console.log("Next");
    if (trace < queue.length) {
      //update the value next btn by one using Next Btn
      dispatch(MoveNextQuestion());
      //AGR Already result ha to dubra update na ho
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }

      //reset the value of checked variable
      setChecked(undefined);
    }


  };

  const pre = () => {
    // alert("Pre");
    // console.log("Previous");
    if (trace > 0) {
      dispatch(PrevQuestion());
    }
   
  };


  //____________________________________________________

  function onChecked(check) {
    // console.log("check", check);
    setChecked(check)
  }
  //finish the exam after last question
  if (result.length && result.length >= queue.length) {
    // console.log("finish question")
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <>
      <div className="quiz_main">
        <h1>Quiz Application</h1>

        {/* display question */}
        <Questions onChecked={onChecked} />


        <div className="grid">
          {trace ?<button onClick={pre} className="next">Previous</button> :<div></div>}
          
          <button onClick={next} className="next">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
