const express = require('express')
const app=express()
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('../router/index');
const usersRouter = require('../routes/user');
const loginRouter = require('../routes/login');
const registerRouter = require('../routes/register');
const itemsRouter = require('../routes/items');
const ordersRouter = require('../routes/orders');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);
app.use('/user', usersRouter);

// const registerRouter = require('../routes/register');
// app.post('/', Register.create);
// app.get('/', Register.findAll);
// app.put('/:id', Register.update);
// app.put('/:id', Register.update);
// app.delete('/:id', Register.delete);
// app.get('/:id', Register.findOne);

app.listen(9000,()=>{
    console.log("Server oke")
})



module.exports =app;