const express=require('express')
const router = express.Router();
const validator = require('fastest-validator');
const v = new validator ();
const {items}=require('../models');

router.get('/items',(req,res)=>{
    console.log('Api items')
    const result = {}
    user.findAll()
    .then(hasil=>{
        //res.status(200).json(hasil)
    result=hasil
    })
})