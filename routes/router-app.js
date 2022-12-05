var express=('express');
var router=express.router();

// const router = require('express').Router();
// const homeController = require('../controller').home;
// const profileController = require('../controller').profile;
// const verifyUser = require('../configs/verify');

// router.get('/', verifyUser.isLogin, homeController.home);
// router.get('/profile', verifyUser.isLogin, profileController.profile);

router.get('/',function(req,res,next){
    res.render('index',{title:'Express'});
});
module.exports = router;