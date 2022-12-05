const{ user }=require('../models');
const query ={
    where:{id:1}
}
user.update({
    email: "theresyahm@gmail.com"
},query)
.then(()=>{
    console.log("Sukses mengupdate user")
    process.exit()
})
.catch(err=>{
    console.error("Gagal mengupdate user")
})