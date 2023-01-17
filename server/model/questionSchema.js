//--------Model Schema ko controller me ja k import krty ha----------

const mongoose = require('mongoose');

//question model 
const questionModel = new mongoose.Schema({
questions : { type: Array, default: []},
answers : { type: Array, default: []},
createdAt : { type: Date, default: Date.now},

});

// ab is ko ham export kr dy gy;// is ko sb sy phaly.... controller me import kry gy..;// "Product" is ko ham products ko get kis ha  productController me;
// database ka name dia ha
module.exports = mongoose.model("Questions", questionModel);