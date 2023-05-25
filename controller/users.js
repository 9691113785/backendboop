const express = require('express');

const Information = require('../model/users');

const router = express.Router();


router.post('/adduser', async (req,res)=>{
const {stuname, department, salary} = req.body;

    const info = new Information({
        stuname : stuname,
        department:department,
        salary:salary
    })
    const dbresponse = await info.save();
    res.send(dbresponse);

})

router.get('/showdata', async(req,res)=>{
  
    const data = await Information.find();
    res.send(data)

})

router.post('/delete', async(req,res)=>{
    const {stuname} = req.body;
    console.log(stuname)
    const result = await Information.deleteMany({stuname:stuname});
    res.send(result)

})

router.post('/update', async(req,res)=>{
    const {stuname, department, salary} = req.body;
    console.log(stuname)
    const result = await Information.updateOne({stuname:stuname},{$set : {stuname:stuname, department:department,salary:salary}});
    res.send(result)
    
})

module.exports=router;




