const express=require('express')
const router = express.Router
const {register,user,items,orders}=require('../models')


router.get('/register',(req,res)=>{
    console.log('Api Register')
    const result = {}
    user.findAll()
    .then(hasil=>{
        //res.status(200).json(hasil)
    result=hasil
    })
})