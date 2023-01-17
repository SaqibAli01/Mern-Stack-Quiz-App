import React, { useRef } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from './Redux/ResultReducer';

export default function Home() {

    const dispatch = useDispatch();
    const inputRef = useRef(null);


    const onStartQuiz = () =>{
        {inputRef?.current.value ? dispatch(setUserId(inputRef?.current.value)) :  alert("Enter User Name") }
        // dispatch(setUserId(inputRef?.current.value));
        // alert("Enter User Name")
    }


    return (
    <>
    <div className='main'>
    <h1> Quiz Application</h1>

    <ol>
    <li>You will be asked 10 questions one after another</li>
    <li>10 Point is awarded for the correct answer.</li>
    <li>Each questions has three option. You can choose only one</li>
    <li>You can review and change answers before the quiz finish</li>
    <li>The Result will be declared at the end of the quiz</li>
    </ol>

    <from id="form">
        <input  ref={inputRef} className="userId" type="text" placeholder='Username'/>
    </from>
        <div className='btn'>
            <Link to={`quiz`} className="links" onClick={onStartQuiz}>Start</Link>
        </div>
        

    </div>
    
    
    </>
  )
}
