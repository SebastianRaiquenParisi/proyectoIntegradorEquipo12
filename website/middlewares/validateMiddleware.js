const {check} = require("express-validator");
const path = require("path");

//revisar

/*const validateLogin= [
    //.isEmail()
    check("email").notEmpty().withMessage("Tienes que escribir un email válido"), 
    check("password").notEmpty().isLength({ min: 5 }).withMessage
    ("Tienes que escribir una contraseña con más de 5 caracteres"),
]

const validateRegister= [
    check("name").notEmpty().isLength({min:1, max: 100}).withMessage("Debes completar el nombre"),
    //.isEmail()
    // validar si el email está en uso
    check("email").notEmpty().withMessage("Tienes que escribir un email válido"), 
    check("password").notEmpty().isLength({ min: 5 }).withMessage
    ("Tienes que escribir una contraseña con más de 5 caracteres"),
    check("image").withMessage("La imagen debe ser .jpg o .png"),
]

const validateRecoverLogin= [
    //.isEmail()
    check("email").notEmpty().withMessage("Tienes que escribir un email válido"),
]

//exportar el módulo de validaciones
//las implementamos en la ruta que procesa el formulario por POST

//implementar validaciones para los formularios de creación y edición de productos
*/


//en funcionamiento?

module.exports=[
    check("name").notEmpty().withMessage("Debes completar el nombre"),
    check("email").notEmpty().withMessage("Tienes que escribir un email válido"),
    check("image").custom((value, {req})=> {
        let file=req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file){
            throw new Error("Debes agregar una imagen"); //El formato no corresponde a una imágen válida
        }/* else{
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        } */
        return true; //por qué retorna en true??
    }) 
]