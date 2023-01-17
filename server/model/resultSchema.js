//--------Model Schema ko controller me ja k import krty ha----------
const mongoose = require('mongoose');

//question model 
const resultModel = new mongoose.Schema({
    userName: { type: String },
    result: { type: Array, default: [] },
    attempts: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    archived: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },

});

// ab is ko ham export kr dy gy;// is ko sb sy phaly.... controller me import kry gy..;
// database ka name dia ha
module.exports = mongoose.model("Result", resultModel);