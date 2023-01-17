//create folder no 7 or ye product schema bania ha
//--------Model Schema ko controller me ja k import krty ha----------


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter User Name"],
        trim: true
    },
    attempts: {
        type: Number,
        required: [true, "Please Enter Attempt Question"],

    },
    obtainNo: {
        type: Number,
        required: [true, "Please Enter Obtain Number"],

    },
    totalMarks: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 Characters"],
    },
    result: {
        type: String,
        required: [true, "Please Enter Pass And Fail"],
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

//ab is ko ham export kr dy gy
//is ko sb sy phaly.... controller me import kry gy.."Product" is ko ham products ko get kis ha  productController me

module.exports = mongoose.model("Quiz", productSchema);


