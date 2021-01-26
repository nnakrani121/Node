const express = require('express');
const stud = require('./Model/stud');
const router = express.router();

router.get("/studs", async (req,res)=>{
    
    const stud1 = await stud.find();
    res.send(stud1);
});

module.exports = router;