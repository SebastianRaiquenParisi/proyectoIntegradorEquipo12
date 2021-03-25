const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");
let db = require("../database/models")
let User=db.User;

const userController ={

    login: (req,res)=>{
        return res.render("./user/login")
    },

    //METODO QUE PROCESA EL FORMULARIO DE LOGIN
    //TERMINAR DE IMPLEMENTAR ERRORES EN EL CATCH !!-CHECKEAR-
    processLogin: async function (req,res) {

        let userToLogin = await User.findOne({  //BUSCA EN BD SI EL EMAIL ENVIADO EN EL FORMULARIO DE LOGIN EXISTE EN LA BD
            where: { 
                email: req.body.email
            }
        });
            if(userToLogin){                                                        
                let passwordCheck = bcryptjs.compareSync(req.body.password, userToLogin.password);      //CHECKEA CON EL COMPARESYNC SI LA CONTRASEÑA ES CORRECTA
                if(passwordCheck){
                    delete userToLogin.password;                        //SI ES CORRECTA SE LLAMA AL METODO DELETE PARA NO GUARDAR DATOS SENSIBLES EN SESSION
                    req.session.userLogged=userToLogin;                //SE GUARDA EN SESSION EL USUARIO LOGEADO
                    if(req.body.user_remember){                       
                        res.cookie("userEmail", req.body.email, {maxAge: (1000* 60)*2})
                    }
                   return res.redirect("./profile",);
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
        res.cookie("test", {maxAge:1000 * 30})
        return res.render("./user/register")
    },

    //METODO QUE PROCESA EL FORMULARIO DE REGISTRO DE USUARIO
    //TERMINAR DE IMPLEMENTAR ERRORES EN EL CATCH !! -CHECKEAR-
    //cuando cuando un usuario se registra de manera erronea la imagen se sube igual -CHECKEAR-
    processRegister:async function(req,res) {        
        try{
            let errors = validationResult(req);
           
           if(!errors.isEmpty()){                         //VERIFICO SI HAY ERRORES A TRAVES DEL MIDDLEWARE DE VALIDACIONES PERSISTIENDO DATOS
               return res.render("./user/register", {
                   errors: errors.mapped(),
                   oldData: req.body
               });
           }
   
           let createdUser =  await User.findOne({       //VERIFICO SI EL EMAIL A REGISTRARSE COINCIDE CON ALGUNO YA REGISTRADO EN LA BD
               where: { 
                   email: req.body.email
               }
           });
   
           if(createdUser){                             //SI EL EMAIL YA SE ENCUENTRA REGISTRADO, DEVUELVO UN ERROR Y PERSISTO LOS DATOS CON REQ.BODY
               return res.render("./user/register", {
                   errors: {
                       email: {
                           msg:"Este email ya esta registrado"
                       }
                   },
                   oldData: req.body
               });
           } 
   
           let newUser={                                                 //CREA UN  NUEVO USUARIO CON LOS DATOS RECIBIDOS DEL FORMULARIO
               ...req.body,
              avatar: req.file.filename,                                //AGREGRA LA IMAGEN CON SU RESPECTIVO NOMBRE A TRAVES DEL MIDDLEWARE DE MULTER
              password: bcryptjs.hashSync(req.body.password, 10)       //HASHEA EL PASSWORD
           }
           await User.create(newUser);                                //CREA EL NUEVO USUARIO EN LA BD
           return res.redirect("/users/login")

        }catch(error){

        }
    },

    profile: async function (req,res){
        //console.log(req.session);
        //let user = await req.session.userLogged
        return res.render("./user/profile", {
            user: req.session.userLogged            //ENVIO A LA VISTA LOS DATOS GUARDADOS EN SESSION A TRAVES DE LA VARIABLE "user"
        });
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail")
        req.session.destroy();              //DESTRUYE LOS DATOS EN SESSION
        return res.redirect("/")
    }
}

module.exports=userController;