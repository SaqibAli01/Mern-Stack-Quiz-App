import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// customHooks

import { useFetchQuestion } from "./hooks/FetchQuestion";

import data ,{answers} from "./Database/data";
import { updateResult } from "./hooks/setResult";

export default function Questions({ onChecked }) {

  // useSelector( state => console.log("sTATE ",state))  
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.results.result);
  
  const [{ isLoading, apiData, serverError }, setGetData] = useFetchQuestion();
  // useSelector(state=> console.log("Question State",state));
  //all question show 
  const questions = useSelector(state => state.questions.queue[state.questions.trace]); 
  // console.log("questions",questions)
  const dispatch = useDispatch()
  const question = data[0];
 

  useEffect(() => {
    dispatch(updateResult({ trace, checked }))

    // console.log("{trace, checked}", {trace, checked})
    // console.log(" isLoading",isLoading);
    // console.log(" apiData",apiData);
    // console.log(" serverError",serverError);
    // console.log(data);
    // console.log(questions);
    // console.log("trace", trace);

  }, [checked]);

  const onSelectHandler = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));

    // alert("ok");
    // console.log("Checked Radio Button", i);
    //call quiz props
  };

  if (isLoading) { return <h3>isLoading</h3> }
  if (serverError) { return <h3>{serverError || "is unknown error"}</h3> }



  return (
    <>
      <div className="questions">
        <h2>{questions?.Question}</h2>
        <div className="radio-btn">

          <ul key={questions?.id}>
            {questions?.options?.map((q, i) => (

              <li key={i}>
                <input
                  type="radio"
                  value={false}
                  name="options"
                  id={`q${i}-option`}
                  onChange={() => { onSelectHandler(i) }}
                />
                {/* {console.log("i.......", i)}
                {console.log("result[trace].......", result[trace])}
                {console.log("trace.......", trace)} */}

                <label htmlFor={`q${i}-option`} className="text-primary">{q}</label>
                <div className={`check ${result[i] == i ? 'checked' : ''}`}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
