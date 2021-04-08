const {check} = require("express-validator");
const path = require("path");

module.exports=[
    check("name").notEmpty().withMessage("Tienes que completar el nombre"),
    check("name").isAlpha().withMessage("El nombre sólo puede contener caracteres válidos"),
    check("name").isLength({ min: 4, max: 40}).withMessage("El nombre debe contener entre 4 y 40 caracteres"),

    check("price").notEmpty().withMessage("Tienes que escribir una cifra"),
    check("price").isFloat().withMessage("Tienes que escribir una cifra numérica"),
    
    check("description").notEmpty().withMessage("Tienes que completar una descripcion breve"),
    
    check("discount").isLength({ min: 1, max: 2}).withMessage("El descuento debe tener como máximo 2 cifras"),
    check("discount").isFloat().withMessage("El descuento debe ser una cifra numérica"),

    check("image_url").custom((value, {req})=> {
        let file=req.files;
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

    //ver validaciones, no siempre se ingresa cantidad
    //check("quantity").notEmpty().withMessage("Tienes que ingresar una cantidad"), //este nombre puede ser que haya cambiado en la DB
   //check("quantity").isNumeric().withMessage("Tienes que ingresar una cantidad numérica"), //este nombre puede ser que haya cambiado en la DB
]