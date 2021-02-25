const User = require("../models/Users");
const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");

const userController ={

    login: (req,res)=>{
        res.render("./user/login")
    },

    processLogin:(req,res) =>{
        let userToLogin = User.findByEmail(req.body.email);
            if(userToLogin){
                let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if(passwordCheck){
                    res.send("puede entrar");
                }else{
                    res.send("contraseña incorrecta");

                }
                
            }
            return res.render("./user/login", {
                errors:{
                    email: {
                        msg: "Usuario no registrado"
                    }
                }
            })
    },

    register:(req,res)=>{
        res.render("./user/register")
    },
    
    processRegister:(req,res) =>{
        
        let errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.render("./user/register", {
                errors: errors.mapped(),
                oldData: req.body
            });
        }

        let createdUser = User.findByEmail(req.body.email);
        if(createdUser){
            return res.render("./user/register", {
                errors: {
                    email: {
                        msg:"Este email ya esta registrado"
                    }
                },
                oldData: req.body
            });
        }

        let newUser={
            ...req.body,
           image: req.file.filename,
           password: bcryptjs.hashSync(req.body.password, 10)
        }
        User.create(newUser);
        return res.redirect("/users/login")
    }
}

module.exports=userController;