const express = require('express');
const Stud = require('./Model/stud');
const router = express.Router();

router.get("/studs", async(req,res)=>{
    
    const stud1 = await Stud.find();
    res.send(stud1);
});

module.exports = router;