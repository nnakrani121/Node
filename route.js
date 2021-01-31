const express = require('express');
const Stud = require('./Model/stud');
const router = express.Router();

router.get("/studs", async(req,res)=>{
    
    const stud1 = await Stud.find();
    res.send(stud1);
});

router.post("/studs", async(req,res)=>{

    try{
        const stud1 = new Stud({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address
    });

        await stud1.save();
        res.send(stud1);
    }catch (error) {
        res.send(error);
    }
    
});

router.patch("/studs/:id",async(req,res)=>{
    try{

        const stud1 = await Stud.findOne({_id:req.params.id});
        stud1.name = req.body.name;

        await stud1.save();
        res.send(stud1);

    }catch (error){
        res.send(error);
    }
});

router.delete("/studs/:id", async (req, res) =>{
    try {
        await Stud.deleteOne({ _id: req.params.id});
        res.status(204).send("deleted");
    } catch {
        res.status(404)
        res.send({ error: "Stud doesn't exist!" });
    }
});

module.exports = router;