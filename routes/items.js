const express=require('express')
const app = express.Router();
const {items}=require('../models')

app.get('/items',(req,res)=>{
    console.log('Api items')
    let result = {}
    items.findAll()
    .then(hasil=>{
        //res.status(200).json(hasil)
    result=hasil
    })
    .then(()=>{
    res.status(200).json(result)
    })
})

app.get('/items/:id',(req,res)=>{
    items.findOne({
        where:{id:req.params.id}
    })
    .then(items=>{
        res.status(200).json(items)
    })
})

module.exports = app