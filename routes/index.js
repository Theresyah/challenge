const express=require('express')
const router = express.Router();
const {user,items,orders}=require('../models')


router.get('/function',(req,res)=>{
   res.render('index',{title:'Express'});
})

module.exports = app