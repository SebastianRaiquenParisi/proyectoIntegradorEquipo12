const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const avatarUpload = require("../middlewares/avatarMiddleware");
const validations = require("../middlewares/validateMiddleware");

router.get("/login", guestMiddleware,  userController.login);

router.post("/login", userController.processLogin);

router.get("/register", guestMiddleware, userController.register);

router.post("/register", avatarUpload.single("avatar"), validations, userController.processRegister); 

router.get("/profile", invitedMiddleware, userController.profile);

router.get("/logout", userController.logout);

module.exports=router;