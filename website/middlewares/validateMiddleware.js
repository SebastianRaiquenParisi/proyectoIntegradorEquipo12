const {check} = require("express-validator");
const path = require("path");

module.exports=[
    //cada check va por separado para que se muestra la info correcta para cada tipo de error
    check("name").notEmpty().withMessage("Tienes que completar el nombre"),
    check("name").isAlpha().withMessage("El nombre sólo puede contener caracteres válidos"),
    check("name").isLength({ min: 1, max: 100}).withMessage("El no puede tener más de 100 caracteres"),

    check("email").notEmpty().withMessage("Tienes que escribir un email"),
    check("email").isEmail().withMessage("Tienes que escribir un email válido"),

    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    check("password").isLength({ min: 5 }).withMessage("Tienes que escribir una contraseña con más de 5 caracteres"),

    check("price").notEmpty().withMessage("Tienes que escribir una cifra"),
    check("price").isFloat().withMessage("Tienes que escribir una cifra numérica"), //utilizar , o . para los decimales?

    check("category").notEmpty().withMessage("Tienes que elegir una categoría"),

    check("quantity").notEmpty().withMessage("Tienes que ingresar una cantidad"), //este nombre puede ser que haya cambiado en la DB
    check("quantity").isNumeric().withMessage("Tienes que ingresar una cantidad numérica"), //este nombre puede ser que haya cambiado en la DB
    
    check("description").isAlphanumeric().withMessage("Hay caracteres que no están disponibles en este campo"),

    check("discount").isLength({ min: 1, max: 2}).withMessage("El descuento debe tener como máximo 2 cifras"),
    check("discount").isFloat().withMessage("El descuento debe ser una cifra numérica"), //utilizar , o . para los decimales?

    check("image").custom((value, {req})=> {
        let file=req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file){
            throw new Error("Debes agregar una imagen"); //El formato no corresponde a una imágen válida
        } else{ //revisar
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        }
        return true; 
    })
]