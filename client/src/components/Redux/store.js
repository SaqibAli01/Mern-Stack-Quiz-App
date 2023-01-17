import {combineReducers , configureStore } from '@reduxjs/toolkit';

//call to reducer 
import questionReducer from './QueReducer'
import resultReducer from './ResultReducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    results: resultReducer,
})

//Create Store With Reducer
export default configureStore({reducer: rootReducer})