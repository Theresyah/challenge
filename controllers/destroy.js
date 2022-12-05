const {user} = require("../models");

user.destroy({
    where:{
        id:3
    }
})

user.destroy({
    where:{
        id:4
    }
})
.then(()=>console.log("sukses hapus")
)