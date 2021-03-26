const express =require ("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const userFileUpload = require("../middlewares/multerMiddleware");
const userValidation = require("../middlewares/validateMiddleware");


router.get("/login", guestMiddleware ,userController.login);

router.post("/login", userController.processLogin);

//rutas para el recoverLogin recuperación de contraseña

router.get("/register",guestMiddleware ,userController.register);

router.post("/register", userFileUpload.single("image"),userValidation, userController.processRegister); 

router.get("/profile", invitedMiddleware ,userController.profile);

router.get("/logout", userController.logout);


module.exports=router;