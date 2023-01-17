
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
// import to attempt number Result.js
export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
};



// import to result.js ...........
export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element) //value true or false
        .filter(i => i) // true value show ho gi bus
        .map(i => point) // true value k 10 10 point show hon gy
        .reduce((prev, curr) => prev + curr, 0); // total number ho sum ho jy gy
}

// pass and fail

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; //earn 50% marks
}

// Check user auth //agr userName ho ga to next page pr jy ga root
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.results.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

////////////////////////////////////////////////Consume API//////////////////////////////////////////////////
//in 2no function ko fetchApi  me import krna ha 

// --------------------------------- Get Server Data backend ---------------------------------- 
export async function getServerData(url, callback) {
    const data =await (await axios.get(url)).data;
    // console.log("Get Server Data", data)
    return callback ? callback(data): data;
}


// getServerData("http://localhost:8000/api/results")

// --------------------------------- Post Server Data backend ----------------------------------
export async function postServerData(url, result,  callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
// // gerServerData(`http://localhost:8000/api/results`)



