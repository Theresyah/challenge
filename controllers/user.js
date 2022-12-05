const{ user }=require('../models')
user.create({
    firstName: "Theresyah",
    lastName: "Lamberth",
    no_telp: "082346016875",
    jenis_kelamin: "Perempuan",
    alamat:"Tangerang"

})
.then(res=>{
    console.log(res)
})