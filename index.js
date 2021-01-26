const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

// mongoose.connect("mongodb://localhost:27017/emp",{useNewUrlParser:true,useUnifiedTopology:true}).then(
mongoose.connect("mongodb+srv://nikhil:1234@cluster0.jk2jh.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(

    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started....");
        })
    }

);