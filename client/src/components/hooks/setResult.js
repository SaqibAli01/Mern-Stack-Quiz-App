//redux action
import { postServerData } from '../helper/Helper';
import * as Action from '../Redux/ResultReducer';

export const PushAnswer = (result) => async (dispatch) => {
  
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error)
  }
}

export const updateResult = (index) => async(dispatch) => {
 
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error)
  }

}

// ...........................insert user result data ........................
export const  usePublishResult = (resultData) => {
  const {result , userName} = resultData;
  const postData = async () => {
    try {
      if (result !==[] && !userName) throw new Error("Could not get Result");
      await postServerData("http://localhost:8000/api/results", resultData ,data => data)
        
      
    } catch (error) {
      console.log(error)
    }
  }
  postData();
}