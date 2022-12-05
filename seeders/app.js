const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('req-flash');
const path = require('path');
const logger = require('morga ');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlecoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(___dirname,'public')));

app.use('/', appRouter);
app.use('/login', loginRoutes);
app.use('/register', registerRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

module.exports =app;