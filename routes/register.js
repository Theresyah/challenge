const express = require('express')
const app = express.Router();
// const Validator = require("fastest-validator");
// const v = new Validator();
const {register} = require('../models')

// app.get('/register',(req,res)=>{
//     console.log('Api register')
//     let result = {}
//     register.findAll()
//     .then(hasil=>{
//         //res.status(200).json(hasil)
//     result=hasil
//     })
//     .then(()=>{
//     res.status(200).json(result)
//     })
// })

// //
// app.get('/register/:id',(req,res)=>{
//     register.findOne({
//         where:{id:req.params.id}
//     })
//     .then(register=>{
//         res.status(200).json(register)
//     })
// })


// GET
app.get("/register", async (req, res, next) => {
  const register = await register.findAll();
  return res.json({
    status: 200,
    message: "Success get all data",
    data: register,
  });
});

// GET DATA BY ID
app.get("/register/:id", async (req, res, next) => {
  const id = req.params.id;
  // check id in table register
  let register = await register.findByPk(id);
  if (!register) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  } else {
    return res.json({ status: 200, message: "Success get data", data: register });
  }
});
    
// POST
app.post("/register", async (req, res, next) => {
  // validation
  const schema = {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }
  // proses create
  const register = await register.create(req.body);
  res.json({
    status: 200,
    message: "Success create data",
    data: register,
  });
});
  

// PUT
app.put("/register/:id", async (req, res, next) => {
  const id = req.params.id;
  let register = await register.findByPk(id);
  if (!register) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  }
  // validation
  const schema = {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json(validate);
  }
  // proses update
  register = await register.update(req.body);
  res.json({
    status: 200,
    message: "Success update data",
    data: register,
  });
});

// DELETE
app.delete("/register/:id", async (req, res, next) => {
  const id = req.params.id;
  // check id in table register
  let register = await register.findByPk(id);
  if (!register) {
    return res.status(404).json({ status: 404, message: "Data not found" });
  }

  // proses delete data
  await register.destroy();
  res.json({
    status: 200,
    message: "Success delete data",
  });
});

module.exports = app