const mongoose = require('mongoose');

const schema = mongoose.schema({
    name:String,
    email:String,
    address:String

})
module.exports = mongoose.model("stud",schema);