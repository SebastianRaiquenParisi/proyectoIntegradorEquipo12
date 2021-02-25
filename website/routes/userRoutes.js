const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const invitedMiddleware = require("../middlewares/invitedMiddleware");
const fileUpload = require("../middlewares/multerMiddleware");
const userValidation = require("../middlewares/validateMiddleware");


router.get("/login", guestMiddleware ,userController.login);

router.post("/login", userController.processLogin);

router.get("/register",guestMiddleware ,userController.register);

router.post("/register", fileUpload.single("image"),userValidation, userController.processRegister); 

router.get("/profile", invitedMiddleware ,userController.profile);


module.exports=router;