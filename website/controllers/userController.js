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
                    delete userToLogin.password;
                    req.session.userLogged=userToLogin;
                    res.redirect("./profile");
                } 
                return res.render("./user/login", {
                    errors:{
                        password: {
                            msg: "la contraseña ingresada es incorrecta"
                        }
                    }
                })
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
    
    processRegister:(req,res) =>{ //cuando cuando un usuario se registra de manera erronea la imagen se sube igual
        
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
    },

    profile: (req,res)=>{
        res.render("./user/profile", {
            user: req.session.userLogged
        });
    }
}

module.exports=userController;