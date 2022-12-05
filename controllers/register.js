const{ register }=require('../models')
register.create({
    firstName: "Theresyah",
    lastName: "Lamberth",
    email: "lambert@gmail.com",
    password: "Lamberth123"
})
.then(res=>{
    console.log(res)
})