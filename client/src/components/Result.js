import React, { useEffect } from 'react'
import ResultTable from './ResultTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetResultAction } from './Redux/ResultReducer';
import { resultAllAction } from './Redux/QueReducer';
import { attempts_Number, earnPoints_Number, flagResult } from './helper/Helper';
import { CheckUserExist } from './helper/Helper';
import { usePublishResult } from './hooks/setResult';



export default function Result() {



    const dispatch = useDispatch();

    const { questions: { queue, answers }, results: { result, userId } } = useSelector(state => state);
    useEffect(() => {
        // console.log("result ....: ", result);
        // console.log("attempts ....: ", attempts);
        // console.log("earnPoints ....: ", earnPoints);
        // console.log("Pass Or Fail ....: ", flag);
    });

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);



    //pass or fail
    const flag = flagResult(totalPoints, earnPoints);
    const onClickedRestart = () => {
        // console.log("Restart");
        dispatch(resultAllAction());
        dispatch(resetResultAction());
    }

    const userName = useSelector(state => state.results.userId)
    // const userName = useSelector(state => console.log("UserID", state.results.userId))
    // console.log("CheckUserExist", CheckUserExist.auth)

    //store result 
    usePublishResult({ result, userName: userId, attempts, points: earnPoints, archived: flag ? "Passed" : "Fail" });
    // console.log({ result, userName: userId, attempts, points: earnPoints, archived: flag ? "Passed" : "Fail" });

    return (
        <>
            <div className='main_class'>
                <h1>Quiz Application</h1>

                <div className='res_tb'>
                    <span>userName</span>
                    <span>{userName}</span>
                </div>

                <div className='res_tb'>
                    <span>Total Questions</span>
                    <span> {queue.length || 0}</span>
                </div>

                <div className='res_tb'>
                    <span>Total Attempts</span>
                    <span> {attempts || 0}</span>
                </div>

                <div className='res_tb'>
                    <span>Total Obtain Marks</span>
                    <span> {earnPoints || 0}</span>
                </div>

                <div className='res_tb'>
                    <span>Total Quiz Point</span>
                    <span> {totalPoints || 0}</span>
                </div>

                <div className='res_tb'>
                    <span>Quiz Result</span>
                    <span style={{ color: `${flag ? "green" : "red"}` }}>{flag ? "Passed " : "Failed"}</span>
                </div>
                <div className='btn' >
                    <Link to={`/`} onClick={onClickedRestart} className="links">Restart</Link>
                </div>
            </div>
            <ResultTable />


        </>
    )
}
