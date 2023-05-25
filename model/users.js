const mongoose = require('mongoose');

const schemaa = mongoose.Schema({

    stuname: {
        type : String,
        required : true
    },
    department: {
        type : String,
        required : true
    },
    salary: {
        type : String,
        required : true
    },

})

const Information = mongoose.model('empdata', schemaa);

module.exports = Information;