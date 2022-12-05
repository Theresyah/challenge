const{ orders }=require('../models')
orders.create({
    status: "Di proses",
    alamat: "Tangerang"
})
.then(res=>{
    console.log(res)
})