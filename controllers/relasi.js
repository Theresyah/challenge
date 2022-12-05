const express = require('express')
const app=express()

const indexRouter = require('./router/index');
const usersRouter = require('./router/user');
const loginRouter = require('./router/login');
const registerRouter = require('./router/register');
const itemsRouter = require('./router/items');
const ordersRouter = require('./router/orders');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);
app.use('/user', usersRouter);

// app.get('/users',(req,res)=>{
//     user.findAll()
//     .then(hasil=>{
//         res.status(200).json(hasil)
//     })
// })

// //
// app.get('/user/:id',(req,res)=>{
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


module.exports =app;