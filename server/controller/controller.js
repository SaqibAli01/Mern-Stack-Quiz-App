//---------------Data.js import config ............


const catchAsyncError = require("../middleware/catchAsyncError");
const Quiz = require('../model/resultModel')

// --------------------import Model--------------------------
const Question = require('../model/questionSchema');
const Results = require("../model/resultSchema");
const ques = require("../config/data");

// console.log("Question.....................", ques);
// console.log("Answers.....................", ques.answers);

// --------------------End import Model--------------------------
// step 3 
exports.createResult = catchAsyncError(async (req, res, next) => {

    // req.body.user = req.user.id

    // const result = await Quiz.create(req.body);
    const result = await Quiz.create({
        name: req.body.name,
        attempts: req.body.attempts,
        obtainNo: req.body.obtainNo,
        totalMarks: req.body.totalMarks,
        result: req.body.result,
    });
    res.status(201).json({
        success: true,
        result
    });
});


//get question
exports.getQuestion = catchAsyncError( async ( req , res , next) => {
        try {
            const q  = await Question.find();
            res.json(q)
        } catch (error) {
            res.json({error})
        }

    // res.json("Questions Api Get Request");
});

//Post insert all Questions
exports.postQuestion = catchAsyncError( async ( req , res , next) => {
    // res.json("Questions Api Post Request");
    
    try {
    Question.insertMany({questions: ques, answers: ques.answers}, function(err,data){
        res.json({Message: "Data Saved Successful...! " })
    });
    
    } catch (error) {
        res.json({error})
    }

});

//Delete Questions
exports.deleteQuestion = catchAsyncError( async ( req , res , next) => {
    // res.json("Questions Api Delete Request");
    try {
        Question.deleteMany();
        res.json({Message: "Delete data successful....!"})
        
        } catch (error) {
            res.json({error})
        }
});


//get result
exports.getResult = catchAsyncError( async ( req , res , next) => {
    // res.json("Result Api Get Request");
    try {
        const r = await Results.find();
        res.json(r)
        
        } catch (error) {
            res.json({error})
        }
});

//Post all Result
exports.postResult = catchAsyncError( async ( req , res , next) => {
    // res.json("Result Api Post Request");
    try {
        const {userName, result, attempts, points, archived} = req.body;
        if (!userName && ! result) throw new Error("Data Not Provider...")
        
        Results.create({userName, result, attempts, points, archived}, function(err,data){
            res.json({Message: "Result Saved Successful...! "})
        });
        
        } catch (error) {
            console.log("Error........", error)
            res.json({error})
        }
});

//Delete Result
exports.deleteResult = catchAsyncError( async ( req , res , next) => {
    // res.json("Result Api Delete Request");
    try {
        await Results.deleteMany();
        res.json({Message: "Result delete Success full..."})
        
        } catch (error) {
            res.json({error})
        }
});