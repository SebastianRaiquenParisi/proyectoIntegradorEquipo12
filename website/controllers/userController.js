const User = require("../models/Users")
const userController ={

    login: (req,res)=>{
        res.render("./user/login")
    },

    register:(req,res)=>{
        res.render("./user/register")
    },
    
    processRegister:(req,res) =>{
        User.create(req.body);
        return res.send("ok, se guardo el usuario")
    }
}

module.exports=userController;