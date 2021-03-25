const express =require ("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const userFileUpload = require("../middlewares/multerMiddleware");
const userValidation = require("../middlewares/validateMiddleware");

//revisar middlewares

//router.get("/login", guestMiddleware ,userController.login);
router.get("/login", userController.login);

router.post("/login", userController.processLogin);

//router.get("/register",guestMiddleware ,userController.register);
router.get("/register",userController.register);

router.post("/register", userFileUpload.single("avatar"),userValidation, userController.processRegister); 

//router.get("/profile", invitedMiddleware ,userController.profile);
router.get("/profile", userController.profile);

router.get("/logout", userController.logout);


module.exports=router;