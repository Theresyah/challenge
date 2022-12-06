const express=require('express');
const app = express.Router();
// const Validator = require('fastest-validator');
const {user}=require('../models');

app.get('/user',(req,res)=>{
    console.log('Api user')
    let result = {}
    user.findAll()
    .then(hasil=>{
        //res.status(200).json(hasil)
        
    result=hasil
    })
    .then(()=>{
    res.status(200).json(result)
    })
})

//
app.get('/user/:id',(req,res)=>{
    user.findOne({
        where:{id:req.params.id}
    })
    .then(user=>{
        res.status(200).json(user)
    })
})

module.exports = app

// app.listen(9000,()=>{
//     console.log("Server oke")
// })



//sblmnya
// router.get('/users',(req,res)=>{
//     console.log('Api user')
//     const result = {}
//     user.findAll()
//     .then(hasil=>{
//         //res.status(200).json(hasil)
//     result=hasil
//     })

//     res.status(200).json(result)
// })

// router.get('/users',(req,res)=>{
//     user.findAll()
//     .then(hasil=>{
//         res.status(200).json(hasil)
//     })
// })

// //
// app.get('/users/:id',(req,res)=>{
//     user.findOne({
//         where:{id:req.params.id}
//     })
//     .then(user=>{
//         res.status(200).json(user)
//     })
// })

// app.listen(9000,()=>{
//     console.log("Server oke")
// })