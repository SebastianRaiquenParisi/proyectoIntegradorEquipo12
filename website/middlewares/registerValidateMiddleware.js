const {check} = require("express-validator");
const path = require("path");

module.exports=[
    check("first_name").notEmpty().withMessage("Tienes que completar el nombre"),
    check("first_name").isAlpha().withMessage("El nombre sólo puede contener caracteres válidos"),
    check("first_name").isLength({ min: 4, max: 30}).withMessage("El nombre debe tener entre 4 y 30 caracteres"),

    check("email").notEmpty().withMessage("Tienes que escribir un email"),
    check("email").isEmail().withMessage("Tienes que escribir un email válido"),

    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    check("password").isLength({ min: 5 }).withMessage("Tienes que escribir una contraseña con más de 5 caracteres"),
    
    check("avatar").custom((value, {req})=> {
        let file=req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file){
            throw new Error("Debes agregar una imagen");
        }/* else{
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        } */
        return true;
    }) 
]