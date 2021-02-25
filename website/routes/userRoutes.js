const express =require ("express");
const router = express.Router();
const userController = require("../controllers/userController");
const fileUpload = require("../middlewares/multerMiddleware");
const userValidation = require("../middlewares/validateMiddleware");


router.get("/login", userController.login);

router.post("/login", userController.processLogin);

router.get("/register", userController.register);

router.post("/register", fileUpload.single("image"),userValidation, userController.processRegister); 

router.get("/profile", userController.profile);


module.exports=router;