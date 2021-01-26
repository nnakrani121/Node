const express = require('express');
const stud = require('./Model/stud');
const router = express.router();

router.get('/studs', async (req,res)=>{
    
    const stud = await stud.find();
    res.send(stud);
});

module.exports = router;