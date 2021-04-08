const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const userFileUpload = require("../middlewares/avatarMiddleware");
const userFormValidation = require("../middlewares/userFormMiddleware");

router.get("/login", guestMiddleware ,userController.login);

router.post("/login", userFormValidation, userController.processLogin);

//rutas para el recoverLogin recuperación de contraseña

router.get("/register",guestMiddleware ,userController.register);

router.post("/register", userFileUpload.single("image"), userFormValidation, userController.processRegister); 

router.get("/profile", invitedMiddleware ,userController.profile);

router.get("/logout", userController.logout);

module.exports=router;