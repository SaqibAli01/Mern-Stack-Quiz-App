
import { createSlice } from "@reduxjs/toolkit";

//create reducer
export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [],
    trace: 0
  },

  reducers: {
    startExamAction: (state, action) => {
      let {question , answers} = action.payload
      return {
        ...state,
        queue: question,
        answers,
        // queue: action.payload
      }
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1
      }
    },

    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1
      }
    },
    resultAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0
      }
    }
  }
})
export const { startExamAction, moveNextAction, movePrevAction, resultAllAction } = questionReducer.actions;
export default questionReducer.reducer;



//  trace: 0 ----> jb ham next btn pr click pr gy to is me wo wali a jy gi
