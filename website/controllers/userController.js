const {validationResult} = require('express-validator');
const userController ={

    login: (req,res)=>{
        res.render("./user/login")
    },

    register:(req,res)=>{
        res.render("./user/register")
    },
    procesarRegistro:(req,res)=>{
        let validationResults = validationResult(req);
        if(validationResults.errors.length<0){
            //crear usuario en base de datos y redirigir
        }else{
        res.render("./user/register", {errors:validationResults.errors.mapped(),
        old:req.body
        });
        }
    },
    procesarLogin:(req,res)=>{
        let validationResults = validationResult(req);
        if(validationResults.errors.length<0){
            //loguear usuario fijandose en bd y generar session
        }else{
        res.render("./user/register", {errors:validationResults.errors.mapped(),
        old:req.body
        });
        }
    }
}

module.exports=userController;