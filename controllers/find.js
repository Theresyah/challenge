const{ user }=require('./models')
user.findAll()
.then(res=>{
    console.log(res)
})