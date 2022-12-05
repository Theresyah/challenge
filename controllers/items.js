const{ items }=require('../models')
items.create({
    nama: "Theresyah",
    qty: 2,
    harga: 100000,
    warna: "merah"
})
.then(res=>{
    console.log(res)
})