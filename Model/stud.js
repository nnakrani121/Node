const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true
        
    },
    address:{
        city:{
            type:String
        },
        state:{
            type:String
        }
    }
   
},{timestamps:true});


module.exports = mongoose.model("Stud",schema);