// folder create no 2 // app ki file ko get kia ha me 
const app = require('./app');

// ----------------import -----------database ko yaha get ki ha
const connectDatabase = require("./config/database");

//process.env.PORT is port ki value 4000 ay gi config.env file me .. or env file ko get kia ha me ny
const dotenv = require('dotenv');

//config.env file ko get kia D:\Mern Stack\Quiz App Mern Stack Project Three/server/config/config.env
dotenv.config({ path: '../server/config/config.env'});


// <------------------------------------connect to database ------------------------------------>
// connect to database function ko call ki ha me ny
connectDatabase()

app.listen(process.env.PORT, () => {
    console.log("-------------------------------------------------------------------------");
    console.log(`Server is working on http//localhost:${process.env.PORT}`)
    console.log("-------------------------------------------------------------------------")

});
