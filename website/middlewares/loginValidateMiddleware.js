const {check} = require("express-validator");
const path = require("path");

module.exports=[
    check("email").notEmpty().withMessage("Tienes que escribir un email"),
    check("email").isEmail().withMessage("Tienes que escribir un email válido"),

    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    check("password").isLength({ min: 8 }).withMessage("Tienes que escribir una contraseña con más de 8 caracteres"),
]