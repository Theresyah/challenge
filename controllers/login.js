const{ login }=require('../models')
login.create({
    email: "lambert@gmail.com",
    password: "Lamberth123"
})
.then(res=>{
    console.log(res)
})