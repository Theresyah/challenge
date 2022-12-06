const express=require('express')
const app = express.Router();
const {login}=require('../models')


app.get('/login',(req,res)=>{
    console.log('Api login')
    const result = {}
    user.findAll()
    .then(hasil=>{
        //res.status(200).json(hasil)
    result=hasil
    })

    res.status(200).json(result)
})

//
app.get('/login/:id',(req,res)=>{
    user.findOne({
        where:{id:req.params.id}
    })
    .then(user=>{
        res.status(200).json(user)
    })
})
module.exports = app