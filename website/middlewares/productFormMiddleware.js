const {check} = require("express-validator");
const path = require("path");

module.exports=[

    check("image_url").custom((value, {req})=> {
        let file=req.files;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file || file==""){
            throw new Error("Debes agregar una imagen");
        }/* else{
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        } */
        return true;
    }),
    
    check("name").notEmpty().withMessage("Tienes que completar el nombre"),
    check("name").isLength({ min: 5, max: 40}).withMessage("El nombre debe contener entre 5 y 40 caracteres"),

    check("price").notEmpty().withMessage("Tienes que escribir una cifra"),
    check("price").isFloat().withMessage("Tienes que escribir una cifra numérica"),
    
    check("description").notEmpty().withMessage("Tienes que completar una descripcion breve"),
    check("description").isLength({ min: 20}).withMessage("La descripcion debe tener al menos 20 caracteres"),

    check("category_id").notEmpty().withMessage("Tiene que seleccionar una categoria"),

    check("size").notEmpty().withMessage("Tiene que seleccionar al menos un talle"),
    
    check("discount").isLength({ min: 1, max: 2}).withMessage("El descuento debe tener como máximo 2 cifras"),
    check("discount").isFloat().withMessage("El descuento debe ser una cifra numérica"),

    check("condition_id").notEmpty().withMessage("Tiene que seleccionar una condicion"),

]