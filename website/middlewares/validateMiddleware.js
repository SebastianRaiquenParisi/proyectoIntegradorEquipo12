const {check} = require("express-validator");
const path = require("path");

//revisar
const validation= [
    check("name").notEmpty().isLength({min:1, max: 100}).isAlpha().withMessage("Tiene que completar el nombre"),
    check("email").notEmpty().isEmail().withMessage("Tienes que escribir un email válido"), 
    check("password").notEmpty().isLength({ min: 5 }).withMessage("Tienes que escribir una contraseña con más de 5 caracteres"),

    //check("image").withMessage("La imagen debe ser .jpg o .png"),
    check("price").notEmpty().isLength({ min: 1, max: 20}).isNumeric().withMessage("Tienes que escribir una cifra válida"),
    check("category").notEmpty().withMessage("Tienes que elegir una categoría"),
    check("cantidad").notEmpty().isNumeric().isLength({min:1, max: 1000}).withMessage("Tienes que elegir una categoría"), //este nombre puede ser que haya cambiado en la DB
    check("description").isAlphanumeric().withMessage("Hay caracteres que no están disponibles en este campo"),
    check("discount").isLength({ min: 1, max: 2}).isNumeric().withMessage("El descuento no es válido"),
]



/*module.exports=[
    check("name").notEmpty().withMessage("Debes completar el nombre"),
    check("email").notEmpty().withMessage("Tienes que escribir un email válido"),
    check("image").custom((value, {req})=> {
        let file=req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file){
            throw new Error("Debes agregar una imagen"); //El formato no corresponde a una imágen válida
        } else{
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        }
        return true; 
    }) */

module.exports= validation;