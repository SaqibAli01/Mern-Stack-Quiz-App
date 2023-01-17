const express = require('express');

const { createResult, getQuestion, postQuestion, deleteQuestion, getResult, postResult, deleteResult } = require('../controller/controller');

const router = express.Router();

//create Post request
router.route('/result').post(createResult);


//question routes api
router.route('/questions').get(getQuestion);

//question routes Post api
router.route('/questions').post(postQuestion);

//question routes Delete api
router.route('/questions').delete(deleteQuestion);

// ----------------------Result-------------------------------------
//question routes api
router.route('/results').get(getResult);

//question routes Post api
router.route('/results').post(postResult);

//question routes Delete api
router.route('/results').delete(deleteResult);


module.exports = router;    