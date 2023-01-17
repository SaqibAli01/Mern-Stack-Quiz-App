
import data, {answers} from '../Database/data';
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import axios from 'axios'
//redux action
import * as Action from '../Redux/QueReducer';
import { getServerData } from '../helper/Helper';

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch();

    const [getData, setData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setData(prev => ({ ...prev, isLoading: true })

        );


        //async function fetch backend dat
        const fetchData = async () => {
            try {
                let question = await data;

                //import to Helper.js
                // const q =await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data) => data);
                const q = await getServerData(`http://localhost:8000/api/results`);
                console.log("Data Get Server", q);
                console.log("Data Get archived", q[0].archived);
                





                // console.log("question",question)
                if (question.length > 0) {
                    setData(prev => ({ ...prev, isLoading: false }));
                    setData(prev => ({ ...prev, apiData: {question , answers} }));

                    //dispatch an action
                    dispatch(Action.startExamAction({question , answers}));
                }
                else {
                    throw new Error("No Question is available");
                    // console.log("No Question is available")
                }
            } catch (error) {
                console.log("Error", error);
                setData(prev => ({ ...prev, isLoading: false }));
                setData(prev => ({ ...prev, serverError: error }));
            }
        }
        fetchData()
    }, [dispatch]);

    return [getData, setData];

}

//move action next button dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log("Error Move Next Btn", error);
    }
}

//move action prev button dispatch function
export const PrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log("Error Move Prev Btn", error);
    }
}