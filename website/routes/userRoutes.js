const express =require ("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/userController");

//validaciones
const validateRegister = [
    body('user')
        .notEmpty().withMessage('Debes completar el campo de usuario')
        .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('email')
        .notEmpty().withMessage('Debes completar el campo de email')
        .isEmail().withMessage('Debes completar un email valido'),
    body('pwd')
        .notEmpty().withMessage('Debes completar la contraseña')
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    
];

const validateLogin = [
    body('user')
        .notEmpty().withMessage('Debes completar el campo de usuario'),
    body('pwd')
        .notEmpty().withMessage('Debes completar la contraseña')

];

router.get("/login", userController.login);
router.post("/login", validateLogin,userController.procesarLogin);
router.get("/register", userController.register);
router.post("/register",validateRegister, userController.procesarRegistro);

module.exports=router;