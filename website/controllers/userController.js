const User = require("../models/Users");

const userController ={

    login: (req,res)=>{
        res.render("./user/login")
    },

    register:(req,res)=>{
        res.render("./user/register")
    },
    
    processRegister:(req,res) =>{
        let newUser={
            ...req.body,
           image: req.file.filename
        }
        User.create(newUser);
        return res.redirect("/")
    }
}

module.exports=userController;