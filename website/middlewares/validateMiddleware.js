const {check} = require("express-validator");
const path = require("path");

module.exports=[
    check("name").notEmpty().withMessage("Debes completar el nombre"),
    check("email").notEmpty().withMessage("tienes que escribir un email valido"),
    check("image").custom((value, {req})=> {
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