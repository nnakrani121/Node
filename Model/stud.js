const mongoose = require('mongoose');

const schema = mongoose.schema({
    name:String,
    email:String
    
})
module.exports = mongoose.model("stud",schema);