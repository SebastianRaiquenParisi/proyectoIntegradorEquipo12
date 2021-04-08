const {check} = require("express-validator");
const path = require("path");

module.exports=[
    check("name").notEmpty().withMessage("Tienes que completar el nombre"),
    check("name").isAlpha().withMessage("El nombre sólo puede contener caracteres válidos"),
    check("name").isLength({ min: 1, max: 30}).withMessage("El nombre puede tener más de 30 caracteres"),

    check("email").notEmpty().withMessage("Tienes que escribir un email"),
    check("email").isEmail().withMessage("Tienes que escribir un email válido"),

    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    check("password").isLength({ min: 5 }).withMessage("Tienes que escribir una contraseña con más de 5 caracteres"),
    
    check("image").isEmpty().withMessage("Tienes que seleccionar una imagen de perfil")
]