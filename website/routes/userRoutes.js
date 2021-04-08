const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const userFileUpload = require("../middlewares/avatarMiddleware");
const registerValidation = require("../middlewares/registerValidateMiddleware");
const loginValidation = require("../middlewares/loginValidateMiddleware");

router.get("/login", guestMiddleware ,userController.login);

router.post("/login", loginValidation, userController.processLogin);

router.get("/recovery", userController.recovery);

router.get("/register",guestMiddleware ,userController.register);

router.post("/register", userFileUpload.single("avatar"), registerValidation, userController.processRegister); 

router.get("/profile", invitedMiddleware ,userController.profile);

router.get("/logout", userController.logout);

module.exports=router;